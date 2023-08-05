import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/cart");
});

test.describe("Cart", () => {
  test("should remove item from cart", async ({ page }) => {
    //click on trash icon
    const cartContainer = await page.getByTestId("cart-container");
    const carts = await cartContainer.getByTestId("cart").count();

    //first items
    const firstCart = await cartContainer.getByTestId("cart").nth(0);
    const firstCartText = await firstCart.textContent();

    //click remove on the first item
    await firstCart.getByTestId("remove").click();

    //first cart is not visible after remove
    expect(
      await cartContainer.getByTestId("cart").nth(0).textContent()
    ).not.toEqual(firstCartText);

    //total cart item is one less
    expect(await cartContainer.getByTestId("cart").count()).toEqual(carts - 1);
  });

  test("can increment item quantity", async ({ page }) => {
    //get cart container
    const cartContainer = await page.getByTestId("cart-container");

    //first items
    const firstCart = await cartContainer.getByTestId("cart").nth(0);

    //click plus on the first item
    await firstCart.getByTestId("plus").click();

    //after click quantity is one
    expect(await firstCart.getByTestId("quantity").textContent()).toEqual("1");

    //click minus on the first item
    await firstCart.getByTestId("minus").click();

    //after click quantity is zero
    expect(await firstCart.getByTestId("quantity").textContent()).toEqual("0");
  });

  test("quantity affects price", async ({ page }) => {
    //get cart container
    const cartContainer = await page.getByTestId("cart-container");

    //first items
    const firstCart = await cartContainer.getByTestId("cart").nth(0);

    //get the direct p tag in the first item
    await expect(await firstCart.locator("p").last()).toHaveText("$0");

    //click plus on the first item
    await firstCart.getByTestId("plus").click();

    //get the direct p tag in the first item
    await expect(await firstCart.locator("p").last()).not.toHaveText("$0");
  });
});

test.describe("Product price summary", () => {
  test("should calculate correct summary", async ({ page }) => {
    //click on trash icon
    const cartContainer = await page.getByTestId("cart-container");

    //get order total price
    const orderTotal = await page.getByTestId("order-total");

    //first items
    const firstCart = await cartContainer.getByTestId("cart").nth(0);

    //must be zero before click
    expect(await orderTotal.textContent()).toEqual("0");

    //click plus on the first item
    await firstCart.getByTestId("plus").click();

    //after click total price is not zero
    expect(await orderTotal.textContent()).not.toEqual("0");
  });

  test("should change total price", async ({ page }) => {
    //click add icon
    await page
      .locator("div")
      .filter({ hasText: /^Ray-Ban Aviator SunglassesPRICE: \$1500\$0$/ })
      .locator("svg")
      .nth(1)
      .click();

    //before shipment option
    expect(await page.getByText("$217.5").isVisible()).toBeTruthy();

    //change shipment option
    await page.getByRole("combobox").selectOption("143");

    //after shipment option
    expect(await page.getByText("$315.5").isVisible()).toBeTruthy();
  });

  test("should calculate tax", async ({ page }) => {
    //get cart container
    const cartContainer = await page.getByTestId("cart-container");

    //first items
    const firstCart = await cartContainer.getByTestId("cart").nth(0);

    //click plus on the first item
    await firstCart.getByTestId("plus").click();

    const orderTotal = Number(
      await page.getByTestId("order-total").textContent()
    );

    //tax should be 15% of order total
    await expect(await page.getByTestId("tax").textContent()).toEqual(
      "$" + orderTotal * 0.15
    );
  });
});

test.afterEach(async ({ page }) => {
  await page.close();
});

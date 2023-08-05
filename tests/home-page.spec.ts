import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/");
});

test.describe("navigation", () => {
  test("should go to shop", async ({ page }) => {
    await page.getByRole("link", { name: "laptops" }).click();

    await expect(page).toHaveURL("http://localhost:3000/shop?category=laptops");
  });

  test("should go to shop from carousel", async ({ page }) => {
    await page.getByRole("button", { name: "View move laptops" }).click();
    await expect(page).toHaveURL("http://localhost:3000/shop?category=laptops");
  });

  test("should highlight active links", async ({ page }) => {
    // Expects the link called laptops to not have a special class
    await expect(page.getByRole("link", { name: "laptops" })).not.toHaveClass(
      /font-bold/
    );

    // Click the get started link.
    await page.getByRole("link", { name: "laptops" }).click();

    // Expects the link called laptops to have a special class
    await expect(page.getByRole("link", { name: "laptops" })).toHaveClass(
      /font-bold/
    );
  });
});

test.describe("mobile version", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
  });

  test("should hide nav menus", async ({ page }) => {
    expect(await page.getByRole("link", { name: "laptops" }).count()).toEqual(
      0
    );
  });

  test("should not show view move laptops", async ({ page }) => {
    expect(
      await page.getByRole("button", { name: "View move laptops" }).count()
    ).toEqual(0);
  });
});

test.afterEach(async ({ page }) => {
  await page.close();
});

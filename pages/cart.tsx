import CartProduct from "../components/Products/MiniProduct";
import { GetStaticProps } from "next";
import { CartItem } from "../models/CartItem";
import { useState } from "react";
import CartDetail from "../components/CartDetail";
import { PRODUCT_DATA } from "../models/data/Products.Data";

interface Props {
  carts: CartItem[];
}

export default function Cart({ carts }: Props) {
  const [state, setState] = useState(carts);

  const updatePriceChange = (cartItem: CartItem) => {
    setState((prevState) => {
      return prevState.map((cart) => {
        if (cart.name == cartItem.name) {
          cart.total = cartItem.total;
        }
        return cart;
      });
    });
  };

  const handleRemove = (cartItem: CartItem) => {
    setState((prevState) => {
      return prevState.filter((it) => it.name !== cartItem.name);
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 md:gap-20">
      <div className="col-span-8 mt-3">
        <h2 className="text-2xl sm:text-4xl mt-3 mb-3 font-bold">
          Shopping cart
        </h2>
        <hr className="bg-gray-200 mt-3 mb-3 sm:mt-6 sm:mb-6" />
        <div>
          {state.map((cart) => {
            return (
              <CartProduct
                key={cart.name}
                cartItem={cart}
                callBack={(event: string, cartItem: CartItem) => {
                  event == "D"
                    ? handleRemove(cartItem)
                    : updatePriceChange(cartItem);
                }}
              />
            );
          })}
        </div>
      </div>
      <div className="col-span-4 mt-3">
        <CartDetail cartItems={state} />
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const carts = PRODUCT_DATA.filter((product) => {
    return product.category == "accessories";
  })
    .map((product) => {
      return {
        ...product,
        quantity: 0,
        total: 0,
      };
    })
    .slice(0, 4);

  console.log(carts);

  return {
    props: {
      carts: carts.length > 0 ? carts : [],
    },
  };
};

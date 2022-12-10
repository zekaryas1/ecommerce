import CartProduct from "../components/Products/MiniProduct";
import {GetStaticProps} from "next";
import {CartItem} from "../models/CartItem";
import {useState} from "react";
import CartDetail from "../components/CartDetail";

interface Props {
    carts: CartItem[],
}

export default function Cart({carts}: Props) {
    const [state, setState] = useState(carts);


    const updatePriceChange = (cartItem: CartItem) => {
        setState(prevState => {
            return prevState.map(cart => {
                if (cart.id == cartItem.id) {
                    cart.total = cartItem.total;
                }
                return cart;
            })
        })
    }

    const handleRemove = (cartItem: CartItem) => {
        setState(prevState => {
            return prevState.filter(it => it.id !== cartItem.id);
        })
    }


    return (<div className="grid gap-24 grid-cols-12">
        <div className="col-span-8">
            <h2 className="text-4xl mt-3 mb-3 font-bold">Shopping cart</h2>
            <hr className="bg-gray-200 mt-6 mb-6"/>
            <div>
                {
                    state.map(cart => {
                        return <CartProduct key={cart.id} cartItem={cart}
                                            callBack={(event: string, cartItem: CartItem) => {
                                                event == 'D' ? handleRemove(cartItem) : updatePriceChange(cartItem)
                                            }}/>
                    })
                }
            </div>

        </div>
        <div className="col-span-4">
            <CartDetail cartItems={state}/>
        </div>
    </div>)
}


export const getStaticProps: GetStaticProps = async (context) => {
    const carts = await fetch("https://dummyjson.com/carts/user/5").then(res => res.json());

    return {
        props: {
            carts: carts.carts[0].products
        }
    }
}
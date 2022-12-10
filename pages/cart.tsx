import CartProduct from "../components/Products/MiniProduct";
import {PrimaryButton} from "../components/Button";
import {GetStaticProps} from "next";
import {CartItem} from "../models/CartItem";
import {useState} from "react";

interface Props {
    carts: CartItem[],
}

export default function Cart({carts}: Props) {
    const [state, setState] = useState(carts);
    const tax = 15;
    const [shippingCost, setShippingCost] = useState(45);

    const handelPriceChange = (cartItem: CartItem) => {
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

    const getTotalPrice = (carts: CartItem[]) => {
        let total = 0;
        carts.forEach(cart => {
            total += cart.total;
        })
        return total;
    }

    const getTotalAfterTax = (carts: CartItem[], tax: number) => {
        const total = getTotalPrice(carts);
        return (tax * total) / 100;
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
                                                if (event == 'D') {
                                                    handleRemove(cartItem);
                                                } else if (event == 'P') {
                                                    handelPriceChange(cartItem)
                                                }
                                            }}/>
                    })
                }
            </div>

        </div>
        <div className="col-span-4">
            <h2 className="text-4xl mt-3 mb-5 font-bold">Order summary</h2>
            <hr className="bg-gray-200 mt-6 mb-6"/>
            <div className="flex justify-between mb-5">
                <p className="uppercase font-medium">Cost</p>
                <p className="font-bold">{getTotalPrice(state)}</p>
            </div>
            <div className="mb-5">
                <p className="uppercase font-medium">Shipping</p>
                <select className="w-full p-4 mt-3 text-gray-600" value={shippingCost} onChange={event => {
                    setShippingCost(parseInt(event.target.value));
                }
                }>
                    <option value="43">Normal $43</option>
                    <option value="143">Prime $143</option>
                    <option value="243">Pro Prime $243</option>
                </select>
            </div>
            <div className="mb-5">
                <p className="uppercase font-medium">Promo code</p>
                <input type="text" className="w-full bg-gray-200 p-4 mt-3 text-gray-600" placeholder="Enter your code"/>
            </div>
            <div className="flex justify-between mb-4">
                <p className="uppercase font-medium">Tax {tax}%</p>
                <p className="font-bold">${getTotalAfterTax(state, tax)}</p>
            </div>
            <p className="flex justify-end text-sm text-neutral-500"> { getTotalPrice(state) } + {shippingCost} +  {getTotalAfterTax(state, tax)}  </p>
            <div className="flex justify-between mb-5">
                <p className="uppercase font-medium">Total Cost</p>
                <p className="font-bold">${getTotalPrice(state) + getTotalAfterTax(state, tax) + shippingCost}</p>
            </div>
            <PrimaryButton onClick={() => {
            }} className="w-full">
                Checkout
            </PrimaryButton>
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
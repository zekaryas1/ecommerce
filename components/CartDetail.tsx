import {PrimaryButton} from "./Button";
import {useMemo, useState} from "react";
import {CartItem} from "../models/CartItem";

interface Props {
    cartItems: CartItem[]
}

function CartDetail({cartItems}: Props) {
    const tax = 15;
    const [shippingCost, setShippingCost] = useState(45);
    const getTotalPrice = (carts: CartItem[]) => {
        let total = 0;
        carts.forEach(cart => {
            total += cart.total;
        })
        return total;
    }

    const cachedGetTotalPrice = useMemo(() => getTotalPrice(cartItems), [cartItems])

    const getTotalAfterTax = (carts: CartItem[], tax: number) => {
        const total = getTotalPrice(carts);
        return (tax * total) / 100;
    }

    return <>
        <h2 className="text-2xl sm:text-4xl mt-3 mb-2 sm:mb-5 font-bold">Order summary</h2>
        <hr className="bg-gray-200 mt-3 sm:mt-6 mb-5"/>
        <div className="flex justify-between mb-5">
            <p className="uppercase font-medium">Cost</p>
            <p className="font-bold">{cachedGetTotalPrice}</p>
        </div>
        <div className="flex justify-between mb-5">
            <p className="uppercase font-medium">Tax {tax}%</p>
            <p className="font-bold">${getTotalAfterTax(cartItems, tax)}</p>
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
        <p className="flex justify-end text-sm text-neutral-500"> {cachedGetTotalPrice} + {getTotalAfterTax(cartItems, tax)} + {shippingCost}  </p>
        <div className="flex justify-between mb-5">
            <p className="uppercase font-medium">Total Cost</p>
            <p className="font-bold">${cachedGetTotalPrice + getTotalAfterTax(cartItems, tax) + shippingCost}</p>
        </div>
        <PrimaryButton onClick={() => {
        }} className="w-full">
            Checkout
        </PrimaryButton>
    </>
}

export default CartDetail;
import MiniProduct from "../components/Products/MiniProduct";
import {PrimaryButton} from "../components/Button";
import {GetStaticProps} from "next";
import {Product} from "../models/Product";

interface Props {
    products: Product[]
}

export default function Cart({products}: Props) {
    return (<div className="grid gap-24 grid-cols-12">
        <div className="col-span-8">
            <h2 className="text-4xl mt-3 mb-3 font-bold">Shopping cart</h2>
            <hr className="bg-gray-200 mt-6 mb-6"/>
            <div>
                {
                    products.map(product => {
                        return <MiniProduct key={product.id} product={product}/>
                    })
                }
            </div>

        </div>
        <div className="col-span-4">
            <h2 className="text-4xl mt-3 mb-5 font-bold">Order summary</h2>
            <hr className="bg-gray-200 mt-6 mb-6"/>
            <div className="flex justify-between mb-5">
                <p className="uppercase font-medium">Cost</p>
                <p className="font-bold">$3000</p>
            </div>
            <div className="mb-5">
                <p className="uppercase font-medium">Shipping</p>
                <select className="w-full p-4 mt-3 text-gray-600">
                    <option value="normal">Normal $43</option>
                    <option value="prime">Prime $143</option>
                    <option value="pro">Pro Prime $243</option>
                </select>
            </div>
            <div className="mb-5">
                <p className="uppercase font-medium">Promo code</p>
                <input type="text" className="w-full bg-gray-200 p-4 mt-3 text-gray-600" placeholder="Enter your code"/>
            </div>
            <div className="flex justify-between mb-5">
                <p className="uppercase font-medium">Total Cost</p>
                <p className="font-bold">$3000</p>
            </div>
            <PrimaryButton onClick={()=>{}} className="w-full">
                Checkout
            </PrimaryButton>
        </div>
    </div>)
}


export const getStaticProps: GetStaticProps = async (context) => {
    const carts = await fetch("https://dummyjson.com/carts/user/5").then(res => res.json());

    return {
        props: {
           products: carts.carts[0].products
        }
    }
}
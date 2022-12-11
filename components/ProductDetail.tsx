import Link from "next/link";
import {LightButton, PrimaryButton} from "./Button";
import {HeartIcon, ShoppingCartIcon} from "@heroicons/react/24/outline";
import React from "react";
import {Product} from "../models/Product";
// @ts-ignore
import ReactStars from "react-rating-stars-component";

interface Props {
    product: Product;
}

function ProductDetail({product}: Props) {
    return <div className="pt-4">
        <div className="flex items-center">
            <ReactStars size={24} activeColor="#1f2937" edit={false} value={product.rating} count={5}/>
            <span className="text-sm text-neutral-500 ml-2">{product.rating}</span>
        </div>
        <div className="flex items-end flex-col items-baseline">
            <h3 className="max-w-sm text-3xl font-bold uppercase">{product.title}</h3>
            <span className="text-neutral-500">
                <Link href={`/shop?category=${product.category}`} className="underline text-gray-800">
                    {product.category}
                </Link> by {product.brand}
            </span>
        </div>

        <p className="max-w-lg md:max-w-lg text-justify text-left text-small mt-4 text-neutral-500">{`${product.description} ${product.description}`}</p>
        <p className="mt-3 text-3xl font-bold">${product.price}</p>
        <div className="flex items-end space-x-3">
            <PrimaryButton className="mt-4">
                <ShoppingCartIcon className="h-5 w-4 mr-2"/>
                Add to cart
            </PrimaryButton>
            <LightButton>
                <HeartIcon className="h-5 w-5"/>
            </LightButton>
        </div>
    </div>
}

export default ProductDetail;
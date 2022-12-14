import Image from "next/image";
import {Product} from "../../models/Product";
import Link from "next/link";
import React from "react";
// @ts-ignore
import ReactStars from "react-rating-stars-component";

interface Props {
    product: Product
}

function MainProduct({product}: Props) {
    return <Link href={`/shop/${product.id}`}>
        <div className="shadow bg-neutral-200 rounded p-3 hover:bg-neutral-300 hover:cursor-pointer">
            <Image className="w-full aspect-video object-cover rounded" src={product.thumbnail} width="500" height="500"
                   alt={product.description}/>
            <div className="flex justify-between mt-2">
                <h2 className="font-bold uppercase max-w-xs truncate text-ellipsis">{product.title}</h2>
                <span className="font-bold ">${product.price}</span>
            </div>
            <ReactStars activeColor="#1f2937" edit={false} value={Math.floor(Math.random() * 5) + 1} count={5}/>
        </div>
    </Link>
}

export default MainProduct;
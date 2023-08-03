import Image from "next/image";
import { Product } from "../../models/Product";
import Link from "next/link";
import React from "react";
// @ts-ignore
import ReactStars from "react-rating-stars-component";

interface Props {
  product: Product;
}

function MainProduct({ product }: Props) {
  return (
    <Link href={`/shop/${product.name}`}>
      <div className="shadow bg-neutral-300 rounded p-3 hover:bg-neutral-200 hover:cursor-pointer">
        <Image
          placeholder="blur"
          blurDataURL="/images/noimage.jpeg"
          className="w-full aspect-video object-cover rounded hover:grayscale-0 grayscale"
          src={product.images[0]}
          width="500"
          height="500"
          alt={product.long_description}
        />
        <div className="flex justify-between mt-2">
          <h2 className="font-bold uppercase max-w-xs truncate text-ellipsis">
            {product.name}
          </h2>
          <span className="font-bold ">${product.price}</span>
        </div>
        <ReactStars
          activeColor="#1f2937"
          edit={false}
          value={Math.floor(Math.random() * 5) + 1}
          count={5}
        />
      </div>
    </Link>
  );
}

export default MainProduct;

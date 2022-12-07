import {Product} from "../../models/Product";
import {GetStaticPaths, GetStaticProps} from "next";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import ReactStars from "react-rating-stars-component";

interface Props {
    product: Product
}

export default function ShopById({product}: Props) {
    return <div className="grid grid-cols-2">
        <div className="">
            <Carousel
                showThumbs={true}
                className="h-96 mt-4"
            >
                {
                    product.images.map((image) => {
                        return <div className="h-96" key={image}>
                            <img className="object-cover rounded" src={image} alt={"image lat"}/>
                        </div>
                    })
                }
            </Carousel>
        </div>
        <div className="px-6 py-3">
            <p className="text-neutral-500">{product.brand}</p>
            <h3 className="text-3xl font-bold">{product.title}</h3>
            <div className="flex">
                <ReactStars edit={false} value={product.rating} count={5}/>
            </div>
            <p className="mt-3 text-xl font-medium">${product.price}</p>
            <p className="text-small mt-6">{product.description}</p>
        </div>
    </div>
}


//TODO: handle page not found exception
export const getStaticProps: GetStaticProps = async (context) => {
    const {params} = context;
    const product = await fetch(`https://dummyjson.com/products/${params?.id}`).then(res => res.json());
    return {
        props: {
            product: product
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const products = await fetch("https://dummyjson.com/products").then(res => res.json());

    const paths = []
    for (let i = 1; i < products.total; i++) {
        paths.push({
            params: {id: i.toString()}
        })
    }

    return {
        paths: paths,
        fallback: false, // can also be true or 'blocking'
    }
}
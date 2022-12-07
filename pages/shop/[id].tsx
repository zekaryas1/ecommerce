import {Product} from "../../models/Product";
import {GetStaticPaths, GetStaticProps} from "next";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
// @ts-ignore
import ReactStars from "react-rating-stars-component";
import {LightButton, PrimaryButton} from "../../components/Button";
import {HeartIcon, ShoppingCartIcon} from "@heroicons/react/24/outline";
import ProductList from "../../components/Products/ProductList";

interface Props {
    product: Product,
    relatedProducts: Product[]
}

export default function ShopById({product, relatedProducts}: Props) {
    //TODO: refactor the below code

    return (<>
        <div className="grid grid-cols-2">
            <div className="">
                <Carousel
                    showThumbs={true}
                    className="mt-4"
                >
                    {
                        product.images.map((image) => {
                            return <div className="relative h-96" key={image}>
                                <img className="object-top object-contain rounded" src={image} alt={"image lat"}/>
                            </div>
                        })
                    }
                </Carousel>
            </div>
            <div className="px-6 py-3">
                <div className="flex items-center">
                    <ReactStars size={24} activeColor="#1f2937" edit={false} value={product.rating} count={5}/>
                    <span className="text-sm text-neutral-500 ml-2">{product.rating}</span>
                </div>
                <div className="flex items-baseline space-x-3">
                    <h3 className="text-3xl font-bold uppercase">{product.title}</h3>
                    <span className="text-neutral-500">{product.category} by {product.brand}</span>
                </div>

                <p className="text-small mt-4 text-neutral-500">{`${product.description} ${product.description}`}</p>
                <p className="mt-3 text-3xl font-bold">${product.price}</p>
                <div className="flex items-end space-x-3">
                    <PrimaryButton onClick={() => {
                    }} className="mt-4 rounded-2xl w-1/3">
                        <ShoppingCartIcon className="h-5 w-4 mr-2"/>
                        Add to cart
                    </PrimaryButton>
                    <LightButton onClick={() => {
                    }} className="">
                        <HeartIcon className="h-5 w-5"/>
                    </LightButton>
                </div>
            </div>
        </div>
        <ProductList products={relatedProducts} tittle="Related products"
                     description="Browser products with similar relation"/>
    </>)
}


//TODO: handle page not found exception
export const getStaticProps: GetStaticProps = async (context) => {
    const {params} = context;
    const product: Product = await fetch(`https://dummyjson.com/products/${params?.id}`).then(res => res.json());
    const relatedProducts = await fetch(`https://dummyjson.com/products/category/${product.category}`).then(res => res.json());

    return {
        props: {
            product: product,
            relatedProducts: relatedProducts.products,
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const result = await fetch("https://dummyjson.com/products").then(res => res.json());

    const paths = []
    for (let i = 1; i < result.total; i++) {
        paths.push({
            params: {id: i.toString()}
        })
    }

    return {
        paths: paths,
        fallback: false, // can also be true or 'blocking'
    }
}
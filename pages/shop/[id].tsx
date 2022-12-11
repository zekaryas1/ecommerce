import {Product} from "../../models/Product";
import {GetStaticPaths, GetStaticProps} from "next";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import ProductList from "../../components/Products/ProductList";
import ProductDetail from "../../components/ProductDetail";
import Image from "next/image";

interface Props {
    product: Product,
    relatedProducts: Product[]
}

export default function ShopById({product, relatedProducts}: Props) {
    //TODO: refactor the below code

    return (<>
        <div className="relative grid grid-col-1 sm:grid-cols-2 gap-8">
            <div className="order-last md:order-first md:mt-6">
                <Carousel
                    showThumbs={false}
                >
                    {
                        product.images.map((image) => {
                            return <div className="relative h-64 lg:h-96" key={image}>
                                <Image className="object-cover rounded" fill src={image} alt={product.description}/>
                            </div>
                        })
                    }
                </Carousel>
            </div>
            <ProductDetail product={product}/>
        </div>
        <ProductList products={relatedProducts} tittle="Related products"
                     description="Browser products with similar relation"/>
    </>)
}


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

    const paths = result.products.map((product: Product) => {
        return {
            params: {id: product.id.toString()}
        }
    })

    return {
        paths: paths,
        fallback: false, // can also be true or 'blocking'
    }
}
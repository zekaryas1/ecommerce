import {Product} from "../../models/Product";
import {GetStaticPaths, GetStaticProps} from "next";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import ProductList from "../../components/Products/ProductList";
import ProductDetail from "../../components/ProductDetail";

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
                                <img className="object-top object-contain rounded" src={image} alt={product.description}/>
                            </div>
                        })
                    }
                </Carousel>
            </div>
            <div className="px-6 py-3">
                <ProductDetail product={product}/>
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
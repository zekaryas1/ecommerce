import React from "react";
import {Product} from "../models/Product";
import ProductList from "../components/Products/ProductList";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import HeroProducts from "../components/Products/HeroProducts";
import {carouselData} from "../models/CarouselData";

interface Props {
    smartphones: Product[],
    laptops: Product[],
}

export default function Home({smartphones, laptops}: Props) {

    return (
        <>
            <HeroProducts carouselData={carouselData}/>

            <ProductList products={smartphones} showViewAllButton={true} tittle="SmartPhones"
                         description="best smartphones"/>
            <ProductList products={laptops} showViewAllButton={true} tittle="Laptops"
                         description={"The best in-house laptops right from the house"}/>
        </>
    )
}


export async function getStaticProps() {
    const smartphones = await fetch("https://dummyjson.com/products/category/smartphones").then(res => res.json());
    const laptops = await fetch("https://dummyjson.com/products/category/laptops").then(res => res.json());

    return {
        props: {
            smartphones: smartphones.products,
            laptops: laptops.products,
        }, // will be passed to the page component as props
    }

}
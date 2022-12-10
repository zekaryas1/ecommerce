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
                         description="Latest smartphones with better storage and camera"
                         viewAllDestination="smartPhones"/>
            <ProductList products={laptops} showViewAllButton={true} tittle="Laptops"
                         description={"Powerful laptops made to last longer starting from 1099"}
                         viewAllDestination="laptops"/>
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
        },
    }

}
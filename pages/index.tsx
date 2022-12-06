import Header from "../components/Header";
import React from "react";
import {Product} from "../models/Product";
import ProductList from "../components/Products/ProductList";
import heroImage1 from '../public/images/hero_image_1.jpg';
import heroImage2 from '../public/images/hero_image_2.jpg';
import heroImage3 from '../public/images/hero_image_3.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import HeroProducts from "../components/Products/HeroProducts";
import {Category} from "../models/Category";

interface Props {
    smartphones: Product[],
    laptops: Product[],
    categories: string[]
}

export default function Home({smartphones, laptops, categories}: Props) {


    return (
        <>
            <Header categories={categories}/>

            <HeroProducts images={[heroImage1, heroImage2, heroImage3]}/>

            <ProductList products={smartphones} tittle="SmartPhones" description="best smartphonoes"/>
            <ProductList products={laptops} tittle="Laptops"
                         description={"The best inhouse laptops right from the house"}/>
        </>
    )
}


export async function getStaticProps() {
    const smartphones = await fetch("https://dummyjson.com/products/category/smartphones").then(res => res.json());
    const laptops = await fetch("https://dummyjson.com/products/category/laptops").then(res => res.json());
    const categories = await fetch("https://dummyjson.com/products/categories").then(res => res.json());

    return {
        props: {
            smartphones: smartphones.products,
            laptops: laptops.products,
            categories: categories,
        }, // will be passed to the page component as props
    }

}
import React from "react";
import { Product } from "../models/Product";
import ProductList from "../components/Products/ProductList";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeroProducts from "../components/Products/HeroProducts";
import { CAROUSEL_DATA } from "../models/data/Carousel.Data";
import { PRODUCT_DATA } from "../models/data/Products.Data";

interface Props {
  headphones: Product[];
  laptops: Product[];
}

export default function Home({ headphones, laptops }: Props) {
  return (
    <>
      <HeroProducts carouselData={CAROUSEL_DATA} />

      <ProductList
        products={laptops}
        showViewAllButton={true}
        tittle="Laptops"
        description={"Powerful laptops made to last longer starting from 1099"}
        viewAllDestination="laptops"
      />
      <ProductList
        products={headphones}
        showViewAllButton={true}
        tittle="Headphones"
        description="Latest headphones with better sound and noise cancelation"
        viewAllDestination="headphones"
      />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      laptops: PRODUCT_DATA.filter((product) => product.category === "laptops"),
      headphones: PRODUCT_DATA.filter(
        (product) => product.category === "headphones"
      ),
    },
  };
}

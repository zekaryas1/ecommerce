import { Product } from "../../models/Product";
import { GetStaticPaths, GetStaticProps } from "next";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import ProductList from "../../components/Products/ProductList";
import ProductDetail from "../../components/ProductDetail";
import Image from "next/image";
import { PRODUCT_DATA } from "../../models/data/Products.Data";

interface Props {
  product: Product;
  relatedProducts: Product[];
}

export default function ShopById({ product, relatedProducts }: Props) {
  return (
    <>
      <div className="relative grid grid-col-1 sm:grid-cols-2 gap-8">
        <div className="order-last md:order-first md:mt-6">
          <Carousel showThumbs={false}>
            {product.images.map((image) => {
              return (
                <div className="relative h-64 lg:h-96" key={image}>
                  <Image
                    className="object-cover rounded"
                    fill
                    src={image}
                    alt={product.long_description}
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
        <ProductDetail product={product} />
      </div>
      <ProductList
        products={relatedProducts}
        tittle="Related products"
        description="Browser products with similar relation"
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const product = PRODUCT_DATA.find((product) => {
    return product.name === params?.id;
  });
  const relatedProducts = PRODUCT_DATA.filter(
    (it) => it.category !== product?.category
  );

  return {
    props: {
      product: product,
      relatedProducts: relatedProducts,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = PRODUCT_DATA.map((product) => {
    return {
      params: { id: product.name },
    };
  });

  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  };
};

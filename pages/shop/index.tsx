import { Product } from "../../models/Product";
import ProductList from "../../components/Products/ProductList";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { PRODUCT_DATA } from "../../models/data/Products.Data";
import { CAROUSEL_DATA } from "../../models/data/Carousel.Data";

interface Props {
  products: Product[];
  category: string;
  title: string;
  subTitle: string;
}

function shop({ products, category, title, subTitle }: Props) {
  return (
    <>
      <div className="rounded mt-4 bg-gray-500 shadow-lg relative w-full h-96">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full md:w-auto p-2 text-center text-white">
          <h1 className="text-lg md:text-4xl lg:text-5xl font-bold">{title}</h1>
          <p className="text-sm md:text-2x mt-2">{subTitle}</p>
        </div>
        <Image
          className="rounded filter grayscale brightness-50 hover:object-bottom transition-all duration-500 fixed w-full h-full object-cover object-center"
          fill
          src={`https://source.unsplash.com/random/?${category}`}
          alt={`random unsplash image for ${category}`}
        />
      </div>
      <ProductList
        products={products}
        tittle={category}
        description={`Showing ${products.length} results for ${category}`}
      />
    </>
  );
}

export default shop;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { category } = query;

  if (!category) {
    return {
      notFound: true,
    };
  }

  const carousalData = CAROUSEL_DATA.find((item) => item.category === category);

  return {
    props: {
      title: carousalData?.description,
      subTitle: carousalData?.title,
      category: category,
      products: PRODUCT_DATA.filter((product) => product.category === category),
    },
  };
};

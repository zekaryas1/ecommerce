import { Product } from "../../models/Product";
import ProductList from "../../components/Products/ProductList";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { PRODUCT_DATA } from "../../models/data/Products.Data";

interface Props {
  products: Product[];
  category: string;
}

function shop({ products, category }: Props) {
  return (
    <>
      <div className="rounded mt-4 bg-gray-500 shadow-lg relative w-full h-96">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center text-white">
          <h1 className="text-6xl font-bold">
            This is a great product for you
          </h1>
          <p className="text-2x mt-2">Starting at 50.99</p>
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

  return {
    props: {
      category: category || "all",
      products: PRODUCT_DATA.filter((product) => product.category === category),
    },
  };
};

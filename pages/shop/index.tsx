import {Product} from "../../models/Product";
import ProductList from "../../components/Products/ProductList";
import {GetServerSideProps} from "next";
import Image from "next/image";

interface Props {
    products: Product[],
    category: string
}

function shop({products, category}: Props) {
    return <>
        <div className="rounded mt-4 bg-gray-500 shadow-lg relative w-full h-96">
            <Image className="rounded hover:object-bottom transition-all duration-500 fixed w-full h-full object-cover object-center" fill src={`https://source.unsplash.com/random/?${category}`} alt={`random unsplash image for ${category}`}/>
        </div>
        <ProductList products={products} tittle={category} description={`Showing ${products.length} results for ${category}`}/>
    </>
}

export default shop;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {query} = context;
    const {category} = query;

    let result = [];
    if (category) {
        result = await fetch(`https://dummyjson.com/products/category/${category}`).then(res => res.json());
    } else {
        result = await fetch(`https://dummyjson.com/products`).then(res => res.json());
    }


    return {
        props: {
            category: category || "supermarket",
            products: result.products
        }
    }
}
import {Product} from "../../models/Product";
import ProductList from "../../components/Products/ProductList";
import {GetServerSideProps} from "next";

interface Props {
    products: Product[]
}

function shop({products}: Props) {
    return <ProductList products={products}/>
}

export default shop;

//TODO: ALSO REFACTOR ALL CODE FINALLY
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
            products: result.products
        }
    }
}
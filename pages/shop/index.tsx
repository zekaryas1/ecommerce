import {Product} from "../../models/Product";
import ProductList from "../../components/Products/ProductList";

interface Props {
    products: Product[]
}

function shop({products}: Props) {
    return <ProductList products={products} />
}

export default shop;

export async function getServerSideProps(context: any) {

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
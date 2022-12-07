import Image from "next/image";
import {Product} from "../../models/Product";

interface Props {
    product: Product
}

function MainProduct({product}: Props) {
    return <div className="bg-gray-100 rounded p-3 hover:bg-gray-300 hover:cursor-pointer">
        <Image className="w-full aspect-video object-cover " src={product.thumbnail} width="400" height="400" alt="product image"/>
        <h2 className="font-bold">{ product.title }</h2>
        <h2 className="truncate text-neutral-500">{ product.description }</h2>
    </div>
}

export default MainProduct;
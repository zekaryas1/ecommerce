import Image from "next/image";
import {ArchiveBoxXMarkIcon, MinusIcon, PlusIcon} from "@heroicons/react/24/outline";
import {Product} from "../../models/Product";

interface Props{
    product: Product,
}

function MiniProduct({product}: Props) {
    return <div className="flex mb-3 shadow-md justify-between items-center p-3 rounded bg-gray-200 text-black">
        <div className="flex items-center space-x-3">
            <Image className="rounded" width={50} height={50} src={`https://i.dummyjson.com/data/products/${product.id}/thumbnail.jpg`} alt={"this is alt"}/>
            <div>
                <p className="font-bold w-44 uppercase">{product.title}</p>
                <span className="text-sm text-neutral-500">PRICE: ${product.price}</span>
            </div>
        </div>
        <div className="flex space-x-3 items-center">
            <MinusIcon className="h-5 w-5 bg-neutral-300 cursor-pointer"/>
            <span>2</span>
            <PlusIcon className="h-5 w-5 bg-neutral-300 cursor-pointer"/>
        </div>
        <p className="font-bold">$3000</p>
        <ArchiveBoxXMarkIcon className="h-5 w-5 cursor-pointer"/>
    </div>
}

export default MiniProduct;
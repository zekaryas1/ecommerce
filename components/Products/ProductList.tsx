import {Product} from "../../models/Product";
import MainProduct from "./MainProduct";
import {ArrowLeftIcon, ArrowRightIcon} from "@heroicons/react/24/outline";

interface Props {
    products: Product[],
    tittle?: String,
    description?: String,
    showViewAllButton?: boolean
}

function ProductList({products, tittle, description, showViewAllButton}: Props) {

    return <div className="mt-4">
        <div className="mb-3 flex justify-between">
            <div>
                {tittle && <h2 className="text-2xl font-bold"> {tittle} </h2>}
                {description && <p className="text-neutral-500"> {description} </p>}
            </div>
            {showViewAllButton && <div className="flex items-center">
                <button type="button"
                        className="text-gray-800 bg-gray-200 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                    View all
                    <ArrowRightIcon className="w-5"/>
                </button>
            </div>}
        </div>
        <div className="grid grid-cols-3 gap-6">

            {
                products.map((product: Product) => {
                    return <MainProduct key={product.id} product={product}/>
                })
            }
        </div>
    </div>

}

export default ProductList;
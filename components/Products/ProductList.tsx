import {Product} from "../../models/Product";
import MainProduct from "./MainProduct";
import {ArrowRightIcon} from "@heroicons/react/24/outline";
import {LightButton} from "../Button";

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
                {tittle && <h2 className="text-2xl font-bold uppercase"> {tittle} </h2>}
                {description && <p className="text-neutral-500"> {description} </p>}
            </div>
            {showViewAllButton && <div className="flex items-center">
                <LightButton onClick={() => {
                }}>
                    View all
                    <ArrowRightIcon className="w-5"/>
                </LightButton>
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
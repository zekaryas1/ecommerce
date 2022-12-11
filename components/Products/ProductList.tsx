import {Product} from "../../models/Product";
import MainProduct from "./MainProduct";
import {ArrowRightIcon} from "@heroicons/react/24/outline";
import {LightButton} from "../Button";
import {useRouter} from "next/router";

interface Props {
    products: Product[],

    viewAllDestination?: string;
    tittle?: String,
    description?: String,
    showViewAllButton?: boolean
}

function ProductList({products, viewAllDestination, tittle, description, showViewAllButton}: Props) {
    const router = useRouter();

    return <div className="mt-8">
        <div className="mb-4 flex justify-between items-end">
            <div>
                {tittle && <h2 className="text-2xl font-bold uppercase"> {tittle} </h2>}
                {description && <p className="truncate w-44 sm:w-full text-neutral-500"> {description} </p>}
            </div>
            {showViewAllButton && <LightButton onClick={() => {
                router.push(`/shop?category=${viewAllDestination}`)
            }}>
                View all
                <ArrowRightIcon className="w-5"/>
            </LightButton>}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {
                products.map((product: Product) => {
                    return <MainProduct key={product.id} product={product}/>
                })
            }
        </div>
    </div>

}

export default ProductList;
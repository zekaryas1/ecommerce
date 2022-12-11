import Image from "next/image";
import {ArchiveBoxXMarkIcon, MinusIcon, PlusIcon} from "@heroicons/react/24/outline";
import {CartItem} from "../../models/CartItem";
import {useState} from "react";

interface Props {
    cartItem: CartItem,
    callBack?: Function
}

function CartProduct({cartItem, callBack}: Props) {
    const [cartItemState, setCartItemState] = useState(cartItem);

    return <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 shadow-md space-y-5 p-3 rounded bg-neutral-200 text-black">
        <div className="flex items-start space-x-3">
            <Image className="rounded" width={50} height={50}
                   src={`https://i.dummyjson.com/data/products/${cartItemState.id}/thumbnail.jpg`} alt={`image for ${cartItem.title}`}/>
            <div>
                <p className="font-bold md:w-44 uppercase">{cartItemState.title}</p>
                <span className="text-sm text-neutral-500">PRICE: ${cartItemState.price}</span>
            </div>
        </div>
        <div className="flex space-x-3 items-center">
            <MinusIcon className="h-5 w-5 bg-neutral-300 cursor-pointer" onClick={() => {
                setCartItemState(prevState => {
                    if (prevState.quantity === 1) {
                        return prevState;
                    }
                    const newState = {
                        ...prevState,
                        quantity: prevState.quantity - 1,
                        total: (prevState.quantity - 1) * prevState.price
                    }
                    callBack && callBack('P', newState);
                    return newState;
                })
            }
            }/>
            <span>{cartItemState.quantity}</span>
            <PlusIcon className="h-5 w-5 bg-neutral-300 cursor-pointer" onClick={() => {
                setCartItemState(prevState => {
                    const newState = {
                        ...prevState,
                        quantity: prevState.quantity + 1,
                        total: (prevState.quantity + 1) * prevState.price
                    }
                    callBack && callBack('P', newState);
                    return newState;
                });
            }
            }/>
        </div>
        <p className="font-bold">${cartItemState.total}</p>
        <ArchiveBoxXMarkIcon className="h-5 w-5 cursor-pointer" onClick={() => {
            callBack && callBack('D', cartItemState);
        }}/>
    </div>
}

export default CartProduct;
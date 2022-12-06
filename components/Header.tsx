import Image from "next/image";
import Link from "next/link";
import {HeartIcon, MagnifyingGlassCircleIcon, ShoppingBagIcon} from "@heroicons/react/24/outline";
import logo from '../public/images/logo.svg';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

interface Props {
    categories: string[]
}

export default function Header({categories}: Props) {
    const mainCategories = categories.slice(0,5);
    const otherCategories = categories.slice(5, categories.length).sort((a, b) => (a>b ? 1 : 0));

    return <div className="w-full p-3 flex justify-between items-center shadow bg-gray-900 text-white rounded-2xl">
        <Image className="fill-white h-6" src={logo} width={50} height={30} alt="website logo"/>
        <ul className="flex space-x-3 items-center">
            {
                mainCategories.map((category) => {
                    return <li key={category}><Link href="#" className="uppercase">{category}</Link></li>
                })
            }
            <Dropdown arrowClassName="arrowControl" controlClassName={"control"} options={otherCategories} onChange={() => {
            }} placeholder="More categories"/>
        </ul>
        <div className="flex space-x-3">
            <MagnifyingGlassCircleIcon className="h-6 w-6"/>
            <HeartIcon className="h-6 w-6"/>
            <ShoppingBagIcon className="h-6 w-6"/>
        </div>
    </div>
}
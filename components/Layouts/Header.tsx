import Image from "next/image";
import Link from "next/link";
import {MagnifyingGlassCircleIcon, ShoppingBagIcon} from "@heroicons/react/24/outline";
import logo from '../../public/images/logo.svg';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {useRouter} from "next/router";
import {CategoryData} from "../../models/Category";

interface Props {
    categoryData: CategoryData
}

export default function Header({categoryData}: Props) {
    const router = useRouter();
    const optionalCategoryData = categoryData.others.map(value => value.name);
    const currentCategory = router.query.category;

    const goTo = (destination: string) => {
        router.push(`/shop?category=${destination}`);
    }

    return <div
        className="relative w-full p-3 flex justify-between items-center shadow bg-gray-900 text-white rounded-2xl">
        <Link href="/">
            <Image className="fill-white h-6" src={logo} width={50} height={30} alt="website logo"/>
        </Link>
        <ul className="flex space-x-3 items-center">
            <li><Link href='/shop' className={`uppercase hover:text-neutral-200 ${!currentCategory ? 'text-white font-bold' : 'text-neutral-500'} `}>Home</Link></li>
            {

                categoryData.main.map((category) => {
                    return <li key={category.name}><Link href={`/shop?category=${category.name}`}
                                                         className={`uppercase hover:text-neutral-200 ${currentCategory == category.name ? 'text-white font-bold' : 'text-neutral-500'} `}>{category.name}</Link>
                    </li>
                })
            }
            <Dropdown arrowClassName="arrowControl" controlClassName={"control"} options={optionalCategoryData}
                      onChange={option => goTo(option.value)} placeholder="More categories"/>
        </ul>
        <div className="flex space-x-3">
            <MagnifyingGlassCircleIcon className="h-6 w-6"/>
            <Link href={"/cart"}>
                <ShoppingBagIcon className="h-6 w-6"/>
            </Link>
        </div>
    </div>
}
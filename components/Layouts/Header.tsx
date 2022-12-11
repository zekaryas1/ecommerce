import Image from "next/image";
import Link from "next/link";
import logo from '../../public/images/logo.svg';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {useRouter} from "next/router";
import {CategoryData} from "../../models/Category";
import {ShoppingCartIcon} from "@heroicons/react/24/solid";

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
        className="relative w-full p-3 flex justify-between items-center shadow bg-neutral-900 text-white rounded-2xl">
        <Link href="/">
            <Image className="object-right fill-white h-6" src={logo} width={50} height={30} alt="website logo"/>
        </Link>
        <ul className="hidden md:flex space-x-3 items-center">
            <li><Link href='/shop'
                      className={`uppercase hover:text-neutral-200 ${!currentCategory ? 'text-white font-bold' : 'text-neutral-500'} `}>Home</Link>
            </li>
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
            <Link href={"/cart"}>
                <ShoppingCartIcon className="h-6 w-6 mr-2"/>
            </Link>
        </div>
    </div>
}
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo.svg";
import { useRouter } from "next/router";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

interface Props {
  categoryData: string[];
}

export default function Header({ categoryData }: Props) {
  const router = useRouter();
  const currentCategory = router.query.category;

  const goTo = (destination: string) => {
    router.push(`/shop?category=${destination}`);
  };

  return (
    <div className="relative w-full p-5 flex justify-between items-center shadow bg-neutral-900 text-white rounded-2xl">
      <Link href="/">
        <Image
          className="object-right fill-white h-6"
          src={logo}
          width={50}
          height={30}
          alt="website logo"
        />
      </Link>
      <ul className="hidden md:flex space-x-3 items-center">
        {categoryData.map((category) => {
          return (
            <li key={category}>
              <Link
                href={`/shop?category=${category}`}
                className={`uppercase hover:text-neutral-200 ${
                  currentCategory == category
                    ? "text-white font-bold"
                    : "text-neutral-500"
                } `}
              >
                {category}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="flex space-x-3">
        <Link href={"/cart"}>
          <ShoppingCartIcon className="h-6 w-6 mr-2" />
        </Link>
      </div>
    </div>
  );
}

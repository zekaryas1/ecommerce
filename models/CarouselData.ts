import {StaticImageData} from "next/image";
import fragrance1 from '../public/images/fragrance-1-removebg-preview.png';

import laptop1 from '../public/images/laptop-1-removebg-preview.png';
import skincare from '../public/images/skencare-1-removebg-preview.png';

import phone2 from '../public/images/phone-4-removebg-preview.png';

import groceries1 from '../public/images/groceries-1-removebg-preview.png';

export interface CarouselData {
    title: string;
    category: string;
    description: string;
    image: StaticImageData;
}

export const carouselData: CarouselData[] = [
    {
        title: "Samsung s22 ultra",
        description: "Galaxy S21 Ultra 5G, epic in every way. Its camera revolutionizes photography and 8K video with 108MP resolution.",
        image: phone2,
        category: "smartphones"
    },
    {
        title: "Dell xps 13",
        description: "Dell XPS Plus 13 inch laptop featuring 12th Gen Intel Core processors with a modern design.",
        image: laptop1,
        category: "laptops"
    },
    {
        title: "BLEU CHANEL",
        description: "BLEU DE CHANEL asserts an accomplished character through a timeless and unexpected scent.",
        image: fragrance1,
        category: "fragrances"
    },
    {
        title: "Packed skincare products",
        description: "Skin care is a range of practices that support skin integrity, enhance its appearance, and relieve skin conditions.",
        image: skincare,
        category: "skincare"
    },
    {
        title: "Best groceries this year",
        description: "Save money on all your pantry staples and stock up your kitchen with the healthy groceries that will help you slim down",
        image: groceries1,
        category: "groceries"
    },
]
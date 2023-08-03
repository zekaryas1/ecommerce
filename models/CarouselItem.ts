import { StaticImageData } from "next/image";

export interface CarouselItem {
    title: string;
    category: string;
    description: string;
    image: StaticImageData;
  }
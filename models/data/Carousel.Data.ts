import laptop from "../../public/images/laptop-preview.png";
import monitor from "../../public/images/monitor-preview.png";
import headphone from "../../public/images/headphone-preview.png";
import gadgets from "../../public/images/gadgets-preview.png";
import accessories from "../../public/images/drone-preview.png";

import { CarouselItem } from "../CarouselItem";

export const CAROUSEL_DATA: CarouselItem[] = [
  {
    title: "Dell xps 13",
    description:
      "Dell XPS Plus 13 inch laptop featuring 12th Gen Intel Core processors with a modern design.",
    image: laptop,
    category: "laptops",
  },
  {
    title: "SoundWave 360",
    description:
      "Experience music like never before with SoundWave 360. This innovative headband combines...",
    image: headphone,
    category: "headphones",
  },
  {
    title: "Acer Predator X27",
    description:
      "The Acer Predator X27 is a 27-inch gaming monitor with a 3840 x 2160 resolution.",
    image: monitor,
    category: "monitors",
  },
  {
    title: "Smartwatch X3",
    description:
      "The Smartwatch X3 is a feature-packed wearable device that combines style with functionality.",
    image: gadgets,
    category: "gadgets",
  },
  {
    title: "ULTRA HD DRONE",
    description:
      "The Ultra HD Drone is equipped with a 4K camera and advanced stabilization technology,",
    image: accessories,
    category: "accessories",
  },
];

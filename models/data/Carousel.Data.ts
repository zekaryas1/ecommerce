import laptop from "../../public/images/laptop-preview.png";
import monitor from "../../public/images/monitor-preview.png";
import headphone from "../../public/images/headphone-preview.png";
import gadgets from "../../public/images/gadgets-preview.png";
import accessories from "../../public/images/drone-preview.png";

import { CarouselItem } from "../CarouselItem";

export const CAROUSEL_DATA: CarouselItem[] = [
  {
    title: "Cutting-edge laptops.",
    description:
      "Experience limitless possibilities with our powerful and portable laptops.",
    image: laptop,
    category: "laptops",
  },
  {
    title: "High-fidelity headphones",
    description:
      "Escape into a world of immersive sound with our premium headphones.",
    image: headphone,
    category: "headphones",
  },
  {
    title: "Stunning monitors",
    description:
      "Immerse yourself in vivid visuals with our high-resolution monitors.",
    image: monitor,
    category: "monitors",
  },
  {
    title: "Trendsetting gadgets.",
    description:
      "Discover the latest must-have gadgets that redefine innovation.",
    image: gadgets,
    category: "gadgets",
  },
  {
    title: "Essential accessories",
    description:
      "Elevate your style and functionality with our premium accessories.",
    image: accessories,
    category: "accessories",
  },
];

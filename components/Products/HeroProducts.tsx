import { Carousel } from "react-responsive-carousel";
import React from "react";
import Image from "next/image";
import { LightButton } from "../Button";
import { useRouter } from "next/router";
import { CarouselItem } from "../../models/CarouselItem";

interface Props {
  carouselData: CarouselItem[];
}

function HeroProducts({ carouselData }: Props) {
  const router = useRouter();
  return (
    <Carousel showThumbs={false} className="relative h-96 mt-4 rounded-3xl">
      {carouselData.map((carousel: CarouselItem) => {
        return (
          <div
            className="group relative h-96 bg-gradient-to-r from-black via-neutral-900 to-neutral-700  rounded-3xl"
            key={carousel.title}
          >
            <Image
              className="group-hover:scale-110 md:group-hover:-translate-x-14 transition-all duration-500 object-contain object-right rounded-3xl"
              src={carousel.image}
              fill
              alt={carousel.description || "hero image"}
            />
            <div
              className="legend md:hidden !bg-gray-700"
              onClick={() => {
                router.push(`/shop?category=${carousel.category}`);
              }}
            >
              View more {carousel.category}
            </div>
            <div className="absolute text-white top-1/3 left-24 hidden md:flex flex-col space-y-3 lg:block">
              <h2 className="text-start text-4xl lg:text-5xl font-bold">
                {carousel.title}
              </h2>
              <p className="max-w-md text-gray-400 text-start">
                {carousel.description}
              </p>
              <LightButton
                onClick={() => {
                  router.push(`/shop?category=${carousel.category}`);
                }}
              >
                View move {carousel.category}
              </LightButton>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}

export default HeroProducts;

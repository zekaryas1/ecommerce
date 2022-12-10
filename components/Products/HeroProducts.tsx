import {Carousel} from "react-responsive-carousel";
import React from "react";
import Image from "next/image";
import {LightButton} from "../Button";
import {CarouselData} from "../../models/CarouselData";

interface Props {
    carouselData: CarouselData[]
}

function HeroProducts({carouselData}: Props) {
    return <Carousel
        showThumbs={false}
        className="relative h-96 mt-4 rounded-3xl"
    >
        {

            carouselData.map((carousel: CarouselData) => {
                return <div
                    className="group relative h-96 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-300  rounded-3xl"
                    key={carousel.title}>
                    <Image className="group-hover:scale-110 group-hover:-translate-x-14 transition-all duration-500 object-contain object-right rounded-3xl" src={carousel.image} fill
                           alt={carousel.description || 'hero image'}/>
                    <div className="absolute text-white top-1/3 left-24 flex flex-col space-y-3 items-start">
                        <h2 className="text-5xl font-bold">{carousel.title}</h2>
                        <p className="max-w-md text-gray-400 text-start">{carousel.description}</p>
                        <LightButton>
                            View move
                        </LightButton>
                    </div>
                </div>
            })
        }
    </Carousel>
}

export default HeroProducts;
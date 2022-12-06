import {Carousel} from "react-responsive-carousel";
import React from "react";
import {Image as MyImage} from "../../models/Image";
import Image from "next/image";

interface Props {
    images: MyImage[]
}

function HeroProducts({images}: Props) {
    return <Carousel
        showThumbs={false}
        className="relative h-96 mt-4"
    >
        {
            images.map((image: MyImage) => {
                return <div className="relative h-96" key={image.src}>
                    <Image className="object-cover rounded" src={image.src} fill alt={image.alt || 'hero image'}/>
                </div>
            })
        }
    </Carousel>
}

export default HeroProducts;
"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";
import { heroImages } from "@/constants/constants";
import Image from "next/image";

const HeroCarousel = () => {
  return (
    <div className=" hero-carousel ">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows={false}
        showStatus={false}
      >
        {heroImages.map((image) => (
          <Image
            alt={image.alt}
            src={image.imgUrl}
            width={484}
            height={484}
            className=" object-contain"
            key={image.alt}
          />
        ))}
      </Carousel>

      <Image
        src="/assets/icons/hand-drawn-arrow.svg"
        alt="arrow"
        width={175}
        height={175}
        className=" absolute max-xl:hidden bottom-0 z-0 -left-20"
      />
    </div>
  );
};

export default HeroCarousel;

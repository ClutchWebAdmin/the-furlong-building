"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "next/image";

export default function Carousel({ photos }) {
  return (
    <Splide
      options={{
        type: "slide",
        perPage: 1,
        pagination: true,
        arrows: true,
      }}
      className="rounded-3xl overflow-hidden"
    >
      {photos.map((photo, index) => (
        <SplideSlide key={index} className="overflow-hidden">
          <div className="flex w-auto h-auto rounded-3xl overflow-hidden">
            <Image
              src={photo}
              alt={`Photo ${index + 1}`}
              className="w-full h-auto object-cover rounded-3xl aspect-square"
              placeholder="blur"
            />
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}

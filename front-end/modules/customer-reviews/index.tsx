"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
import ItemReview from "./item-review";
import Image from "next/image";
import CarouselButton from "./carousel-button";

const CustomerReviews = () => {
  return (
    <Carousel>
      <div className="relative py-20 md:my-20 my-12 lg:my-32">
        <Image
          src="https://ainext-react.vercel.app/assets/user-1-BIaKi0h4.jpg"
          alt="user"
          width={80}
          height={80}
          className="rounded-full transform scale-90 md:scale-100 object-cover absolute top-0 left-0 animate-bounce-infinite"
        />
        <Image
          src="https://ainext-react.vercel.app/assets/user-3-CD2J5vph.jpg"
          alt="user"
          width={80}
          height={80}
          className="rounded-full transform scale-90 md:scale-100 object-cover absolute top-0 right-0 animate-bounce-infinite"
        />
        <CarouselContent>
          <CarouselItem>
            <ItemReview />
          </CarouselItem>
          <CarouselItem>
            <ItemReview />
          </CarouselItem>
          <CarouselItem>
            <ItemReview />
          </CarouselItem>
          <CarouselItem>
            <ItemReview />
          </CarouselItem>
        </CarouselContent>
        <CarouselButton />
        <Image
          src="https://ainext-react.vercel.app/assets/user-1-BIaKi0h4.jpg"
          alt="user"
          width={80}
          height={80}
          className="rounded-full transform scale-90 md:scale-100 object-cover absolute bottom-0 left-20 animate-bounce-infinite"
        />
        <Image
          src="https://ainext-react.vercel.app/assets/user-3-CD2J5vph.jpg"
          alt="user"
          width={80}
          height={80}
          className="rounded-full transform scale-90 md:scale-100 object-cover absolute bottom-0 right-20 animate-bounce-infinite"
        />
      </div>
    </Carousel>
  );
};

export default CustomerReviews;

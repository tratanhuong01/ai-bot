"use client";

import { Button } from "@/components/ui/button";
import { PenIcon } from "lucide-react";
import React from "react";
import ItemBlog from "../item-blog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CarouselButton from "./carousel-button";

const LatestBlog = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 pt-8">
      <div className="lg:w-1/3">
        <span className="bg-[#290481] py-1 px-4 rounded-sm max-w-min whitespace-nowrap">
          Our Latest News
        </span>
        <p className="text-4xl md:text-5xl font-bold py-4">
          Latest News & Articles
        </p>
        <Button className="w-32 md:w-40 h-10 md:h-12">
          <PenIcon />
          <span>See more</span>
        </Button>
      </div>
      <div className="lg:w-2/3 w-full">
        <Carousel>
          <div className="w-full">
            <CarouselContent>
              <CarouselItem className="md:basis-1/2">
                <ItemBlog />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2">
                <ItemBlog />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2">
                <ItemBlog />
              </CarouselItem>
            </CarouselContent>
            <CarouselButton />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default LatestBlog;

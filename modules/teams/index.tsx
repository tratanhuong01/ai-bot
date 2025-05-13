"use client";

import React from "react";
import ItemTeam from "./item-team";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CarouselButton from "./carousel-button";

const Teams = () => {
  return (
    <div id="teams" className="pt-12">
      <Carousel>
        <div className="relative">
          <CarouselContent>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <CarouselItem key={item} className="md:basis-1/2 lg:basis-1/3">
                <ItemTeam />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselButton />
        </div>
      </Carousel>
    </div>
  );
};

export default Teams;

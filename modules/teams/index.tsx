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
            <CarouselItem className="basis-1/3">
              <ItemTeam />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <ItemTeam />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <ItemTeam />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <ItemTeam />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <ItemTeam />
            </CarouselItem>
          </CarouselContent>
          <CarouselButton />
        </div>
      </Carousel>
    </div>
  );
};

export default Teams;

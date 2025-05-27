"use client";

import React from "react";
import ItemTeam from "./item-team";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CarouselButton from "./carousel-button";
import { useQuery } from "@tanstack/react-query";
import { userService } from "@/services/user.service";

const Teams = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["teams"],
    queryFn: async () => {
      return await userService.search({
        pagable: {
          limit: 100,
          offset: 0,
        },
      });
    },
    refetchOnWindowFocus: false,
  });

  return (
    <div id="teams" className="pt-12">
      <Carousel>
        <div className="relative">
          <CarouselContent>
            {isLoading
              ? [1, 2, 3, 4].map((item) => (
                  <CarouselItem
                    key={item}
                    className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                  >
                    <ItemTeam isLoading />
                  </CarouselItem>
                ))
              : data?.data?.map((item: any) => (
                  <CarouselItem
                    key={item.id}
                    className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                  >
                    <ItemTeam member={item} />
                  </CarouselItem>
                ))}
          </CarouselContent>
          {!isLoading && <CarouselButton />}
        </div>
      </Carousel>
    </div>
  );
};

export default Teams;

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
import { useQuery } from "@tanstack/react-query";
import { blogService } from "@/services/blog.service";
import { Blog } from "@/interfaces/blog.interface";

const LatestBlog = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["latest-blog"],
    queryFn: async () => {
      return await blogService.search({
        pagable: {
          offset: 0,
          limit: 5,
        },
        sort: {
          field: "created_at",
          isASC: false,
        },
      });
    },
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
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
              {isLoading
                ? [1, 2].map((item) => (
                    <CarouselItem key={item} className="md:basis-1/2">
                      <ItemBlog isLoading />
                    </CarouselItem>
                  ))
                : data?.data?.map((blog: Blog) => (
                    <CarouselItem key={blog.id} className="md:basis-1/2">
                      <ItemBlog blog={blog} />
                    </CarouselItem>
                  ))}
            </CarouselContent>
            {!isLoading && <CarouselButton />}
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default LatestBlog;

import { Button } from "@/components/ui/button";
import { useCarousel } from "@/components/ui/carousel";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";

const CarouselNext = () => {
  const { scrollNext, canScrollNext } = useCarousel();
  return (
    <Button
      onClick={scrollNext}
      disabled={!canScrollNext}
      variant="ghost"
      className="hover:bg-transparent hover:text-gray-400"
    >
      <ChevronRightIcon size={52} />
    </Button>
  );
};

const CarouselPrevious = () => {
  const { scrollPrev, canScrollPrev } = useCarousel();
  return (
    <Button
      onClick={scrollPrev}
      disabled={!canScrollPrev}
      variant="ghost"
      className="hover:bg-transparent hover:text-gray-400"
    >
      <ChevronLeftIcon size={52} />
    </Button>
  );
};

const CarouselButton = () => {
  return (
    <div className="my-8 lg:my-4 flex justify-center mx-auto lg:mt-0 gap-4">
      <CarouselPrevious />
      <CarouselNext />
    </div>
  );
};

export default CarouselButton;

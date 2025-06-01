import React from "react";
import Header from "./header";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { HeaderModeType } from "@/types/common";
import Breadcrumbs from "@/components/shared/breadcrumbs";
import useComingSoon from "@/hooks/use-coming-soon";

const Banner = ({ headerMode = "banner", title }: HeaderModeType) => {
  const { handleComingSoon, comingSoonContent } = useComingSoon(true);
  return (
    <div
      className={`bg-cover bg-center ${
        headerMode === "banner"
          ? "banner-background md:h-[800px]"
          : "banner-breadcrumbs h-[400px]"
      } relative`}
    >
      {headerMode !== "banner" && (
        <Breadcrumbs title={headerMode === "none" ? "404 Not Found" : title} />
      )}
      {headerMode !== "banner" && (
        <div
          className="absolute top-0 left-0 right-0 bottom-0"
          style={{ background: "#000000c4" }}
        />
      )}
      {headerMode !== "none" && (
        <div className="container relative z-10">
          <Header />
        </div>
      )}
      {headerMode === "banner" && (
        <div className="py-16 md:py-0 md:h-[708px] container flex-row gap-3 grid">
          <div className="flex flex-col justify-center h-full lg:w-7/12">
            <span className="bg-[#290481] py-1 px-4 rounded-sm max-w-min whitespace-nowrap">
              Fully Dynamic
            </span>
            <div className="mt-8">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                <span className="text-gradient">AiNext</span> Image Creating
                Solutions.
              </h1>
            </div>
            <p className="text-base md:text-lg text-gray-300 mb-6">
              Create production-quality visual assets for your projects with
              unprecedented quality, speed, and style-consistency..
            </p>
            <div className="flex flex-row gap-3 items-center bg-white rounded-md p-1 md:p-2">
              <Input
                className="flex-1 border-none shadow-none focus-visible:ring-0 text-black"
                placeholder="Enter keywords, phrases, or images"
              />
              <span className="text-gray-700">|</span>
              <span className="text-gray-700 px-4 cursor-pointer">deep ai</span>
              <Button onClick={handleComingSoon} className="h-12 w-32">
                Generate
              </Button>
            </div>
            <div className="flex flex-row gap-3 mt-4 flex-wrap text-sm md:text-base items-center">
              <span>Popular tag:</span>
              <span className="bg-[#4B3A5E] py-1 px-4 rounded-sm max-w-min whitespace-nowrap">
                Fully Dynamic
              </span>
              <span className="bg-[#4B3A5E] py-1 px-4 rounded-sm max-w-min whitespace-nowrap">
                Fully Dynamic
              </span>
              <span className="bg-[#4B3A5E] py-1 px-4 rounded-sm max-w-min whitespace-nowrap">
                Fully Dynamic
              </span>
              <span className="bg-[#4B3A5E] py-1 px-4 rounded-sm max-w-min whitespace-nowrap">
                Fully Dynamic
              </span>
            </div>
          </div>
          <div />
        </div>
      )}
      {headerMode === "banner" && (
        <Image
          src="/images/banner-user.png"
          alt="Banner Image"
          width={578}
          height={708}
          className="lg:block hidden absolute right-0 bottom-0"
        />
      )}
      {comingSoonContent}
    </div>
  );
};

export default Banner;

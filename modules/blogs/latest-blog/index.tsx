import { Button } from "@/components/ui/button";
import { PenIcon } from "lucide-react";
import React from "react";
import ItemBlog from "../item-blog";

const LatestBlog = () => {
  return (
    <div className="flex flex-row gap-8 py-8">
      <div className="w-1/3">
        <span className="bg-[#290481] py-1 px-4 rounded-sm max-w-min whitespace-nowrap">
          Our Latest News
        </span>
        <p className="text-5xl font-bold py-4">Latest News & Articles</p>
        <Button className="w-40 h-12">
          <PenIcon />
          <span>See more</span>
        </Button>
      </div>
      <div className="w-2/3 grid grid-cols-2 gap-8">
        <ItemBlog />
        <ItemBlog />
      </div>
    </div>
  );
};

export default LatestBlog;

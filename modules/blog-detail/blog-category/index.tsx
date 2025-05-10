import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DotIcon, SearchIcon } from "lucide-react";
import React from "react";

const BlogCategory = () => {
  return (
    <div className="bg-[#111618] p-5 w-1/3 flex flex-col gap-4">
      <p className="text-xl font-bold">Search</p>
      <div className="flex flex-row">
        <Input
          className="flex-1 border-gray-700 h-12"
          placeholder="Search here"
        />
        <Button className="h-12 -ml-1 rounded-tl-none rounded-bl-none rounded-tr-sm rounded-br-sm">
          <SearchIcon />
        </Button>
      </div>
      <p className="text-xl font-bold">Recent Posts</p>
      <div>
        {[1, 2, 3].map((item) => (
          <div key={item} className="py-4 border-b border-gray-700">
            <div className="text-gray-400 flex flex-row gap">
              <DotIcon />
              <span>Trends</span>
              <DotIcon />
              <span>November 6, 2023</span>
            </div>
            <p className="text-2xl font-semibold hover:underline">
              AI Awakenings A Journey into the Future
            </p>
          </div>
        ))}
      </div>
      <p className="text-xl font-bold mt-4">Tags</p>
      <div className="flex flex-wrap gap-4">
        {["AI", "Technology", "Innovation", "Future", "Trends"].map((tag) => (
          <span
            key={tag}
            className="px-2 py-2 rounded-sm border border-gray-700 hover:bg-[#7f00ff] cursor-pointer"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BlogCategory;

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Blog } from "@/interfaces/blog.interface";
import { DotIcon } from "lucide-react";
import moment from "moment";
import React from "react";

type ItemRecentBlogProps = {
  blog?: Blog;
  isLoading?: boolean;
};

const ItemRecentBlog = ({ blog, isLoading }: ItemRecentBlogProps) => {
  if (isLoading) {
    return (
      <div className="py-4 border-b border-gray-700 flex flex-col gap-2">
        <div className="w-1/2 h-4 rounded-sm bg-slate-700 animate-pulse" />
        <div className="w-full h-6 rounded-sm bg-slate-700 animate-pulse" />
      </div>
    );
  }
  return (
    <div className="py-4 border-b border-gray-700">
      <div className="text-gray-400 flex flex-row gap">
        <span>{moment(blog?.created_at).format("MMMM D, YYYY")}</span>
        <DotIcon />
      </div>
      <Tooltip>
        <TooltipTrigger>
          <p className="text-xl md:text-2xl font-semibold hover:underline line-clamp-1 text-left">
            {blog?.title ?? "AI Awakenings A Journey into the Future"}
          </p>
        </TooltipTrigger>
        <TooltipContent>
          {blog?.title ?? "AI Awakenings A Journey into the Future"}
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default ItemRecentBlog;

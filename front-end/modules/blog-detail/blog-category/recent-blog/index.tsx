"use client";

import { useQuery } from "@tanstack/react-query";
import ItemRecentBlog from "./item-recent-blog";
import { Blog } from "@/interfaces/blog.interface";
import { blogService } from "@/services/blog.service";

type RecentBlogProps = {
  blog?: Blog;
};

const RecentBlog = ({ blog }: RecentBlogProps) => {
  const { data, isLoading } = useQuery({
    queryKey: ["recent-blogs", blog],
    queryFn: () =>
      blog
        ? blogService.search({
            pagable: {
              offset: 0,
              limit: 3,
            },
            sort: { field: "created_at", isASC: false },
            exclude: [blog.id],
          })
        : [],
    refetchOnWindowFocus: false,
  });
  return (
    <>
      <p className="text-xl font-bold">Recent blogs</p>
      <div>
        {isLoading
          ? [1, 2, 3].map((item) => <ItemRecentBlog key={item} isLoading />)
          : data?.data?.map((item: Blog) => (
              <ItemRecentBlog blog={item} key={item.id} />
            ))}
      </div>
    </>
  );
};

export default RecentBlog;

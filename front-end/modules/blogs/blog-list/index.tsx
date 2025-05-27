"use client";

import React, { useEffect, useRef, useState } from "react";
import ItemBlog from "../item-blog";
import { useQuery } from "@tanstack/react-query";
import { blogService } from "@/services/blog.service";
import { Blog } from "@/interfaces/blog.interface";
import TablePagination from "@/components/shared/pagination";
import { useSearchParams } from "next/navigation";

const BlogList = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const params = useSearchParams();
  const search = params.get("search") ?? "";
  const [pagination, setPagination] = useState<{
    pageIndex: number;
    pageSize: number;
  }>({
    pageIndex: 0,
    pageSize: 6,
  });
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["blogs", pagination, search],
    queryFn: () =>
      blogService.search({
        pagable: {
          limit: pagination.pageSize,
          offset: pagination.pageIndex * pagination.pageSize,
        },
        search,
        sort: { field: "created_at", isASC: false },
      }),
    refetchOnWindowFocus: false,
  });
  useEffect(() => {
    if (!containerRef.current) return;
    if (isSuccess && pagination.pageIndex > 0) {
      window.scrollTo(
        0,
        window.scrollY + containerRef.current.getBoundingClientRect().y
      );
    }
  }, [isSuccess, containerRef, pagination]);
  return (
    <div ref={containerRef} className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-6">
        {isLoading
          ? [1, 2, 3, 4, 5, 6].map((item) => <ItemBlog key={item} isLoading />)
          : data?.data?.map((blog: Blog) => (
              <ItemBlog key={blog.id} blog={blog} />
            ))}
      </div>
      {data?.total > 0 && (
        <TablePagination
          pagination={pagination}
          canPreviousPage={pagination.pageIndex > 0}
          totalPages={
            data?.total ? Math.ceil(data?.total / pagination.pageSize) : 0
          }
          canNextPage={
            pagination.pageIndex <
            Math.ceil(data?.total / pagination.pageSize) - 1
          }
          onPageChange={(item) => {
            setPagination({ ...pagination, pageIndex: item });
          }}
          isDark
        />
      )}
      {data?.total === 0 && (
        <div className="text-center text-gray-500 py-20">
          No blogs found for your search.
        </div>
      )}
    </div>
  );
};

export default BlogList;

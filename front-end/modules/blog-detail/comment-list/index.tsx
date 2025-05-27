"use client";

import TablePagination from "@/components/shared/pagination";
import { Blog } from "@/interfaces/blog.interface";
import { commentService } from "@/services/comment.service";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import FormComment from "../form-comment";
import ItemComment from "../item-comment";
import { Comment, CommentCreatePayload } from "@/interfaces/comment.interface";
type CommentListProps = {
  blog?: Blog;
};

const CommentList = ({ blog }: CommentListProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pagination, setPagination] = useState<{
    pageIndex: number;
    pageSize: number;
  }>({
    pageIndex: 0,
    pageSize: 6,
  });
  const [loadingComment, setLoadingComment] = useState(false);
  const { data, isLoading, isSuccess, refetch } = useQuery({
    queryKey: ["comments", pagination, blog],
    queryFn: () =>
      blog
        ? commentService.search({
            pagable: {
              limit: pagination.pageSize,
              offset: pagination.pageIndex * pagination.pageSize,
            },
            sort: { field: "created_at", isASC: false },
            filters: {
              id_blog: {
                operator: "=",
                value: blog?.id,
              },
            },
          })
        : {
            data: [],
            total: 0,
          },
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
  const handleComment = (data: CommentCreatePayload) => {
    if (!blog || localStorage.getItem("commented")) return;
    setLoadingComment(true);
    commentService
      .create({
        ...data,
        id_blog: blog.id,
      })
      .then(() => {
        refetch();
        localStorage.setItem("commented", "true");
        setLoadingComment(false);
      })
      .catch((error) => {
        console.error("Failed to post comment:", error);
      });
  };
  return (
    <div ref={containerRef}>
      {data?.total > 0 && (
        <p className="text-xl font-bold text-white mt-8">
          {data?.total} Comments:
        </p>
      )}
      <div className="flex flex-col gap-8 mt-4 relative mb-8">
        {(isLoading || loadingComment) && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <p className="text-gray-400">Loading comments...</p>
          </div>
        )}
        {data?.data.map((comment: Comment) => (
          <ItemComment key={comment.id} comment={comment} />
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
      <FormComment onSubmit={handleComment} loading={loadingComment} />
    </div>
  );
};

export default CommentList;

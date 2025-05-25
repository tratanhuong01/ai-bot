"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

type PaginationProps = {
  pagination: {
    pageIndex: number;
    pageSize: number;
  };
  totalPages: number;
  onPageChange: (page: number) => void;
  canPreviousPage: boolean;
  canNextPage: boolean;
};

const TablePagination = ({
  pagination,
  totalPages = 0,
  onPageChange,
  canPreviousPage,
  canNextPage,
}: PaginationProps) => {
  const hideLeftEllipsis = pagination.pageIndex < 4 || totalPages <= 5;
  const hideRightEllipsis =
    pagination.pageIndex > totalPages - 4 || totalPages <= 5;

  const lengthRenderItems = !hideLeftEllipsis && !hideRightEllipsis ? 3 : 4;

  const startIndex = () => {
    if (totalPages <= 5) {
      return 1;
    }
    if (hideLeftEllipsis) {
      return 2;
    }
    if (hideRightEllipsis) {
      return totalPages - 4;
    }
    return pagination.pageIndex;
  };

  const renderItems = Array(totalPages > 5 ? lengthRenderItems : totalPages)
    .fill(startIndex())
    .map((item, index) => item + index);
  return (
    <Pagination>
      <PaginationContent>
        {totalPages > 0 && (
          <PaginationItem>
            <PaginationPrevious
              onClick={() =>
                canPreviousPage && onPageChange(pagination.pageIndex - 1)
              }
              className={cn(
                canPreviousPage
                  ? "cursor-pointer"
                  : "opacity-50 cursor-not-allowed"
              )}
            />
          </PaginationItem>
        )}
        {totalPages > 5 && (
          <PaginationItem>
            <PaginationLink
              className="cursor-pointer"
              onClick={() => onPageChange(0)}
              isActive={pagination.pageIndex + 1 === 1}
            >
              1
            </PaginationLink>
          </PaginationItem>
        )}
        {!hideLeftEllipsis && totalPages > 5 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {renderItems.map((item) => (
          <PaginationItem key={item}>
            {
              <PaginationLink
                className="cursor-pointer"
                isActive={pagination.pageIndex + 1 === item}
                onClick={() => onPageChange(item - 1)}
              >
                {item}
              </PaginationLink>
            }
          </PaginationItem>
        ))}
        {!hideRightEllipsis && totalPages > 5 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {totalPages > 5 && (
          <PaginationItem>
            <PaginationLink
              className="cursor-pointer"
              onClick={() => onPageChange(totalPages - 1)}
              isActive={pagination.pageIndex === totalPages - 1}
            >
              {totalPages}
            </PaginationLink>
          </PaginationItem>
        )}
        {totalPages > 0 && (
          <PaginationItem>
            <PaginationNext
              onClick={() =>
                canNextPage && onPageChange(pagination.pageIndex + 1)
              }
              className={cn(
                canNextPage ? "cursor-pointer" : "opacity-50 cursor-not-allowed"
              )}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default TablePagination;

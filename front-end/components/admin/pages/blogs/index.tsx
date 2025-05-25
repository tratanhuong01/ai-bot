"use client";

import { ColumnsProps } from "@/components/shared/table/type";
import DataTableContainer from "@/components/shared/table";
import moment from "moment";
import { Blog } from "@/interfaces/blog.interface";
import { blogService } from "@/services/blog.service";
import ImageContainer from "@/components/shared/image";
import Link from "next/link";

export const BLOG_TABLE_LIST = "BLOG_TABLE_LIST";

const customColumn = ({ row }: any) => {
  return (
    <div className="">
      <ImageContainer
        src={`${process.env.NEXT_PUBLIC_SERVER_URL}/${row?.thumbnail}`}
        className="w-40 h-32 py-2 object-cover"
        alt=""
      />
    </div>
  );
};

const Blogs = () => {
  const columns: ColumnsProps<Blog>[] = [
    {
      headerName: "Thumbnail",
      field: "thumbnail",
      customColumn,
    },
    {
      headerName: "Title",
      field: "title",
      customColumn({ row }) {
        return (
          <Link
            href={`/admin/blogs/edit?id=${row.id}`}
            className="text-primary underline"
          >
            {row.title}
          </Link>
        );
      },
    },
    {
      headerName: "Created at",
      field: "created_at",
      customColumn({ row }) {
        return moment(row.created_at).fromNow();
      },
    },
    {
      headerName: "Updated at",
      field: "updated_at",
      customColumn({ row }) {
        return moment(row.updated_at).fromNow();
      },
    },
  ];

  return (
    <DataTableContainer<Blog>
      columns={columns}
      limit={5}
      enableAction
      onCreate={{
        link: `/admin/blogs/create`,
      }}
      onEdit={{
        link: `/admin/blogs/edit`,
      }}
      onDelete={{
        execute: blogService.delete,
      }}
      getItems={async ({ filters, offset = 0, limit = 10 }) => {
        const result = await blogService.search({
          search: filters?.search as string,
          pagable: {
            offset,
            limit,
          },
          sort: { field: "updated_at", isASC: false },
          filters: {},
        });
        return result;
      }}
      event_key={BLOG_TABLE_LIST}
      filters={[]}
    />
  );
};

export default Blogs;

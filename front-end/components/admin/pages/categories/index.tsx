"use client";

import DataTableContainer from "@/components/shared/table";
import { ColumnsProps } from "@/components/shared/table/type";
import { Category } from "@/interfaces/category.interface";
import { categoryService } from "@/services/category.service";
import moment from "moment";
import React from "react";
import FormCategory from "./form-category";

export const CATEGORY_LIST_DATA = "CATEGORY_LIST_DATA";

const Categories = () => {
  const columns: ColumnsProps<Category>[] = [
    {
      headerName: "Name",
      field: "name",
    },
    {
      headerName: "Slug",
      field: "slug",
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
    <DataTableContainer<Category>
      columns={columns}
      limit={5}
      enableAction
      onCreate={{
        modal: FormCategory,
      }}
      onEdit={{
        modal: FormCategory,
      }}
      onDelete={{
        execute: categoryService.delete,
      }}
      getItems={({ filters, offset = 0, limit = 10 }) => {
        return categoryService.search({
          search: filters?.search as string,
          pagable: {
            offset,
            limit,
          },
          sort: { field: "updated_at", isASC: false },
          filters: {},
        });
      }}
      event_key={CATEGORY_LIST_DATA}
      filters={[]}
    />
  );
};

export default Categories;

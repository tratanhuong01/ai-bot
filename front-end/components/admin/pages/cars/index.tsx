"use client";

import { ColumnsProps } from "@/components/shared/table/type";
import DataTableContainer from "@/components/shared/table";
import moment from "moment";
import { Car } from "@/interfaces/car.interface";
import { carService } from "@/services/car.service";
import ImageContainer from "@/components/shared/image";
import Link from "next/link";

export const CAR_TABLE_LIST = "CAR_TABLE_LIST";

const customColumn = ({ row }: any) => {
  return (
    <div className="">
      <ImageContainer
        src={`${process.env.NEXT_PUBLIC_SERVER_URL}/${row?.thumbnail}`}
        className="w-40 h-32 py-2 object-cover rounded-sm"
        alt=""
      />
    </div>
  );
};

const Cars = () => {
  const columns: ColumnsProps<Car>[] = [
    {
      headerName: "Thumbnail",
      field: "thumbnail",
      customColumn,
    },
    {
      headerName: "Name",
      field: "name",
      customColumn({ row }) {
        return (
          <Link
            href={`/admin/cars/edit?id=${row.id}`}
            className="text-primary underline"
          >
            {row.name}
          </Link>
        );
      },
    },
    {
      headerName: "Price",
      field: "price",
      customColumn({ row }) {
        return row.price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        });
      },
    },
    {
      headerName: "Owner",
      field: "user",
      customColumn({ row }) {
        return row?.user?.fullname;
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
    <DataTableContainer<Car>
      columns={columns}
      limit={5}
      enableAction
      onCreate={{
        link: `/admin/cars/create`,
      }}
      onEdit={{
        link: `/admin/cars/edit`,
      }}
      onDelete={{
        execute: carService.delete,
      }}
      getItems={({ filters, offset = 0, limit = 10 }) => {
        return carService.search({
          search: filters?.search as string,
          pagable: {
            offset,
            limit,
          },
          sort: { field: "updated_at", isASC: false },
          filters: {},
        });
      }}
      event_key={CAR_TABLE_LIST}
      filters={[]}
    />
  );
};

export default Cars;

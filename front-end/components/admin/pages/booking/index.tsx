"use client";

import ImageContainer from "@/components/shared/image";
import DataTableContainer from "@/components/shared/table";
import { ColumnsProps } from "@/components/shared/table/type";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { useEventEmitter } from "@/hooks/use-event-emitter";
import { BookingCar } from "@/interfaces/booking.interface";
import { bookingService } from "@/services/booking.service";
import { calculateDiscountedPrice, formatPrice } from "@/utils";
import moment from "moment";
import React from "react";

export const BOOKING_LIST_DATA = "BOOKING_LIST_DATA";

const StatusColum = ({ row }: any) => {
  const eventEmitter = useEventEmitter(BOOKING_LIST_DATA);
  const handleUpdateStatus = async (status: number) => {
    await bookingService.update(row.id, status);
    eventEmitter.emit("refetch");
  };
  if (row.status === 1) {
    return (
      <span
        className={`text-xs font-bold px-2 cursor-pointer py-1 rounded-sm bg-green-500 text-white`}
      >
        Confirmed
      </span>
    );
  }
  if (row.status === 2) {
    return (
      <span
        className={`text-xs font-bold px-2 cursor-pointer py-1 rounded-sm bg-gray-500 text-white`}
      >
        Closed
      </span>
    );
  }
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <span
          className={`text-xs font-bold px-2 cursor-pointer py-1 rounded-sm bg-orange-500 text-white`}
        >
          Pending
        </span>
      </ContextMenuTrigger>
      <ContextMenuContent className="p-0">
        <div className="text-sm">
          <button
            onClick={() => handleUpdateStatus(2)}
            className="px-4 py-2 text-left w-full hover:text-primary"
          >
            Closed
          </button>
          <button
            onClick={() => handleUpdateStatus(1)}
            className="px-4 py-2 text-left w-full hover:text-primary"
          >
            Confirmed
          </button>
        </div>
      </ContextMenuContent>
    </ContextMenu>
  );
};

const CarBooking = () => {
  const columns: ColumnsProps<BookingCar>[] = [
    {
      headerName: "Image",
      field: "car",
      customColumn({ row }) {
        return (
          <div className="">
            <ImageContainer
              src={`${process.env.NEXT_PUBLIC_SERVER_URL}/${row?.car.thumbnail}`}
              className="w-40 h-32 py-2 object-cover rounded-sm"
              alt=""
            />
          </div>
        );
      },
    },
    {
      headerName: "Informations",
      field: "id",
      customColumn({ row }) {
        const fromDate = moment(row.pick_up_date.split("T")[0], "YYYY-MM-DD");
        const toDate = moment(row.drop_off_date.split("T")[0], "YYYY-MM-DD");

        return (
          <div>
            <p>
              <span className="bx bx-car"></span>: {row.car?.name}
            </p>
            <p>
              <span className="bx bx-user"></span>: {row.fullname}
            </p>
            <p>
              <span className="bx bx-phone"></span>: {row.phone}
            </p>
            <p>
              <span className="bx bxs-location-plus"></span>: {row.location}
            </p>
            <p>
              <span className="bx bx-calendar-check"></span>:
              {`${row.pick_up_date.split("T")[0]} - ${
                row.drop_off_date.split("T")[0]
              }`}
            </p>
            <p>
              <span className="bx bx-calendar-check"></span>:
              {` ` + toDate.diff(fromDate, "days") + ` day(s)`}
            </p>
            <p>
              <span className="bx bx-dollar-circle"></span>:{" "}
              {formatPrice(calculateDiscountedPrice(row.total, 0))}
            </p>
          </div>
        );
      },
    },
    {
      headerName: "Type booking",
      field: "mode",
    },
    {
      headerName: "Status",
      field: "status",
      customColumn: (props) => <StatusColum {...props} />,
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
    <DataTableContainer<BookingCar>
      columns={columns}
      limit={5}
      getItems={({ filters, offset = 0, limit = 10 }) => {
        return bookingService.search({
          search: filters?.search as string,
          pagable: {
            offset,
            limit,
          },
          sort: { field: "updated_at", isASC: false },
          filters: {},
        });
      }}
      event_key={BOOKING_LIST_DATA}
      filters={[]}
      hideCheckbox
    />
  );
};

export default CarBooking;

"use client";

import DataTableContainer from "@/components/shared/table";
import { ColumnsProps } from "@/components/shared/table/type";
import { User } from "@/interfaces/user.interface";
import { userService } from "@/services/user.service";
import moment from "moment";
import React from "react";
import FormUser from "../users/form-user";
import ImageContainer from "@/components/shared/image";
import { useEventEmitter } from "@/hooks/use-event-emitter";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export const USER_LIST_DATA = "USER_LIST_DATA";

const avatarColumn = ({ row }: any) => {
  return (
    <div className="py-4">
      <ImageContainer
        src={
          row?.avatar
            ? `${process.env.NEXT_PUBLIC_SERVER_URL}/${row?.avatar}`
            : "/default-avatar.jpg"
        }
        className="w-24 h-24 rounded-full object-cover"
        alt=""
      />
    </div>
  );
};

const StatusColum = ({ row }: any) => {
  const eventEmitter = useEventEmitter(USER_LIST_DATA);
  const handleUpdateStatus = async (status: boolean) => {
    const formData = new FormData();
    formData.append("user", JSON.stringify({ id: row.id, is_active: status }));
    await userService.update(formData);
    eventEmitter.emit("refetch");
  };
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <span
          className={`text-xs font-bold px-2 py-1 rounded-sm ${
            row.is_active ? "bg-green-500" : "bg-red-500"
          } text-white`}
        >
          {row.is_active ? "Active" : "Inactive"}
        </span>
      </ContextMenuTrigger>
      <ContextMenuContent className="p-0">
        <div className="text-sm">
          {row.is_active ? (
            <button
              onClick={() => handleUpdateStatus(false)}
              className="px-4 py-2 text-left w-full hover:text-primary"
            >
              Inactive
            </button>
          ) : (
            <button
              onClick={() => handleUpdateStatus(true)}
              className="px-4 py-2 text-left w-full hover:text-primary"
            >
              Active
            </button>
          )}
        </div>
      </ContextMenuContent>
    </ContextMenu>
  );
};

const Users = () => {
  const columns: ColumnsProps<User>[] = [
    {
      headerName: "Avatar",
      field: "avatar",
      customColumn: avatarColumn,
    },
    {
      headerName: "Fullname",
      field: "fullname",
    },
    {
      headerName: "Email",
      field: "email",
    },
    {
      headerName: "Status",
      field: "is_active",
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
    <DataTableContainer<User>
      columns={columns}
      limit={5}
      onCreate={{
        modal: FormUser,
        name: "Add new user",
      }}
      onEdit={{
        modal: FormUser,
      }}
      getItems={async ({ filters, offset = 0, limit = 10 }) => {
        const result = await userService.search({
          search: filters?.search as string,
          pagable: {
            offset,
            limit,
          },
          sort: { field: "updated_at", isASC: false },
          filters: {
            is_admin: {
              operator: "=",
              value: false,
            },
          },
        });
        return result;
      }}
      event_key={USER_LIST_DATA}
      filters={[]}
      hideCheckbox
      enableAction
    />
  );
};

export default Users;

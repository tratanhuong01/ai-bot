import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import ItemOwner from "./item-owner";
import TablePagination from "@/components/shared/pagination";
import { useQuery } from "@tanstack/react-query";
import { userService } from "@/services/user.service";
import { User } from "@/interfaces/user.interface";
import { debounce } from "lodash";
import { useFormContext } from "react-hook-form";

const OwnerCar = () => {
  const { setValue, watch } = useFormContext();
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 4,
  });
  const [search, setSearch] = useState("");
  const { data: users } = useQuery<{ data: User[]; total: number }>({
    queryKey: ["fetch-owner-car", pagination, search],
    queryFn: async () => {
      const result = await userService.search({
        filters: {
          is_admin: {
            operator: "=",
            value: false,
          },
        },
        search,
        pagable: {
          offset: pagination.pageIndex * pagination.pageSize,
          limit: pagination.pageSize,
        },
      });
      return result;
    },
  });
  const handleChange = debounce((value: string) => {
    setSearch(value);
  }, 300);
  const owner = watch("owner");
  return (
    <div className="pb-10 pt-5">
      <div className="flex items-center gap-5">
        <Input
          type="text"
          className="w-80 bg-white"
          placeholder="Search owner"
          onChange={(event) => handleChange(event.target.value)}
        />
        {owner && (
          <div className="w-fit relative px-2 py-1 rounded-full bg-primary text-sm text-white flex flex-row gap-2 items-center">
            <span className="font-semibold">{owner.fullname}</span>
            <span
              className="cursor-pointer"
              aria-hidden
              onClick={() => setValue("owner", null)}
            >
              &times;
            </span>
          </div>
        )}
      </div>
      <div className="grid grid-cols-4 gap-8 pt-5 pb-5">
        {users?.data?.map((user) => (
          <ItemOwner key={user.id} user={user} />
        ))}
      </div>
      <TablePagination
        canNextPage={
          pagination.pageIndex <
          Math.ceil((users?.total ?? 0) / pagination.pageSize) - 1
        }
        canPreviousPage={pagination.pageIndex > 0}
        onPageChange={(value) => {
          setPagination({
            ...pagination,
            pageIndex: value,
          });
        }}
        pagination={pagination}
        totalPages={Math.ceil((users?.total ?? 0) / pagination.pageSize)}
      />
    </div>
  );
};

export default OwnerCar;

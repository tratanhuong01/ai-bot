import { ChangeEvent, useContext, useEffect, useState } from "react";
import { FilterItemProps, OptionFilerProps, ObjectCustom } from "./type";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import { TableContext } from "../table-context";
import { DataTableProps } from "..";
import { useQuery } from "@tanstack/react-query";

type ItemFilterProps<T> = {
  item: FilterItemProps<T>;
  setFilterValue: any;
  filterValue: ObjectCustom;
};

const ItemFilter = <T,>({
  item,
  filterValue,
  setFilterValue,
}: ItemFilterProps<T>) => {
  //
  const [show, setShow] = useState(true);
  const attr = item.field as string;
  const [checked, setChecked] = useState<OptionFilerProps[]>(
    filterValue[attr] || []
  );
  useEffect(() => {
    const temp = { ...filterValue };
    if (checked.length === 0) {
      delete temp[item.field as string];
      setFilterValue(temp);
    } else {
      setFilterValue({
        ...temp,
        [item.field]: checked,
      });
    }

  }, [checked]);
  //
  return (
    <div>
      <div
        aria-hidden
        onClick={() => setShow(!show)}
        className="flex items-center gap-3 cursor-pointer"
      >
        <i className={`bx bx-chevron-${show ? "down" : "up"} text-2xl`}></i>
        <span className="font-semibold">{item.name}</span>
        {checked.length !== 0 && (
          <div className="flex items-center gap-3">
            <div className="px-2 py-1 relative bg-primary text-white text-sm rounded-sm">
              <span>{checked.length}</span>
              <span> selected</span>
            </div>
          </div>
        )}
      </div>
      {show && (
        <div className="flex flex-col gap-2 mt-2 pl-3">
          {item.options.map((item: any) => {
            const index = checked.findIndex((chx) => chx.key === item.key);
            return (
              <label
                htmlFor={`checkbox_${item.value
                  .toLowerCase()
                  .replace(" ", "_")}`}
                className="flex items-center gap-3"
                key={item.value}
              >
                <input
                  checked={index !== -1}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    e.target.checked
                      ? setChecked([...checked, item])
                      : setChecked(
                          [...checked].filter((chx) => chx.key !== item.key)
                        )
                  }
                  id={`checkbox_${item.value.toLowerCase().replace(" ", "_")}`}
                  type="checkbox"
                  className="accent-primary"
                />
                <span className="text-gray-700">{item.value}</span>
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
};

export type ModalFiltersProps<T> = {
  filters?: FilterItemProps<T>[];
} & DataTableProps<T>;

const ModalFilters = <T,>({ filters, onLoadFilter }: ModalFiltersProps<T>) => {
  //
  const [open, setOpen] = useState(false);
  const [filterValue, setFilterValue] = useState<ObjectCustom>({});
  const {
    dispatch,
    actions: { updateData },
    custom: { queries },
  } = useContext(TableContext);
  const { filters: filterContext } = queries;
  const { data: filterAll } = useQuery({
    queryKey: ["fetch-filter"],
    queryFn: async () => {
      if (!onLoadFilter) return [];
      return await onLoadFilter();
    },
  });
  //
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="font-bold text-gray-700"
          ping={Object.keys(filterContext).length > 0}
        >
          Filters
        </Button>
      </DialogTrigger>
      <DialogContent isPanel>
        <DialogTitle className="font-bold">Filters</DialogTitle>
        <div className="flex flex-1 flex-col gap-3">
          {(filterAll?.length ? filterAll : filters)?.map((item) => (
            <ItemFilter
              key={item.field.toString()}
              item={item}
              filterValue={filterValue}
              setFilterValue={setFilterValue}
            />
          ))}
          {queries.filters.search && (
            <div className="flex items-center gap-2 relative">
              <span className="font-semibold">Search:</span>
              <span className="bg-gray-200 p-1">{queries.filters.search}</span>
              <span
                aria-hidden
                onClick={() =>
                  dispatch(
                    updateData("queries", {
                      ...queries,
                      filters: { ...queries.filters, search: "" },
                    })
                  )
                }
                className="bx bx-x cursor-pointer"
              ></span>
            </div>
          )}
        </div>
        <div className="flex justify-end items-center gap-2 border-t-2 border-solid border-gray-100 pt-4">
          <Button onClick={() => setOpen(false)} variant="destructive">
            Cancel
          </Button>
          <Button
            type="button"
            onClick={() => {
              const temp: any = { ...filterValue };
              for (const item of Object.keys(temp)) {
                if (temp[item]?.length === 0) {
                  delete temp[item];
                } else {
                  temp[item] = temp[item].map((item: any) => item.key);
                }
              }
              dispatch(updateData("queries", { ...queries, filters: temp }));
              setOpen(false);
            }}
          >
            Confirm
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalFilters;

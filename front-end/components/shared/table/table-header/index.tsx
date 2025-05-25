"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { DataTableProps } from "..";
import {
  TableHeader as Header,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import { useContext } from "react";
import { TableContext } from "../table-context";
const TableHeader = <T,>({
  columns,
  enableAction,
  hideCheckbox,
}: DataTableProps<T> & { hideCheckbox: boolean }) => {
  const {
    custom: { queries, selected },
    actions,
    dispatch,
  } = useContext(TableContext);
  const { data } = queries;
  return (
    <Header>
      <TableRow className="h-10">
        {!hideCheckbox && (
          <TableHead className="w-8">
            <Checkbox
              className="transform scale-[0.85]"
              onCheckedChange={(checked) =>
                dispatch(actions.updateData("selected", checked ? data : []))
              }
              checked={data.length === selected.length && data.length > 0}
              disabled={data.length === 0}
            />
          </TableHead>
        )}
        {columns.map((item) => (
          <TableHead key={item.field as string}>{item.headerName}</TableHead>
        ))}
        {enableAction && <TableHead>Action</TableHead>}
      </TableRow>
    </Header>
  );
};

export default TableHeader;

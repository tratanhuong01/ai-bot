"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { TableRow as Row, TableCell } from "@/components/ui/table";
import { DataTableProps, Temp } from "..";
import { PenBoxIcon, TrashIcon } from "lucide-react";
import ModalWarningDelete from "../modal-warning-delete";
import { useContext, useState } from "react";
import { TableContext } from "../table-context";
import { useRouter } from "next/navigation";
import { useEventEmitter } from "@/hooks/use-event-emitter";

const TableRow = <T,>({
  enableAction,
  columns,
  row,
  onDelete,
  onEdit,
  event_key,
  index,
  total,
  hideCheckbox,
}: DataTableProps<T> & { row: T & { id: string } } & {
  index?: number;
  total?: number;
  hideCheckbox: boolean;
}) => {
  const {
    custom: { selected, queries },
    dispatch,
    actions,
  } = useContext(TableContext);
  const [open, setOpen] = useState(false);
  const Comp = onEdit?.modal || Temp;
  const enable = selected.find((item: any) => item["id"] === row["id"]);
  const router = useRouter();
  const eventEmitter = useEventEmitter(event_key ?? "");
  return (
    <Row className="h-14">
      {!hideCheckbox && (
        <TableCell className="w-8">
          <Checkbox
            className="transform scale-[0.85]"
            onCheckedChange={(checked) => {
              dispatch(
                actions.updateData(
                  "selected",
                  checked
                    ? [...selected, row]
                    : selected.filter((item: any) => item["id"] !== row["id"])
                )
              );
            }}
            checked={!!enable}
          />
        </TableCell>
      )}
      {columns.map((column) => (
        <TableCell key={column.field as string} className="font-medium">
          {column.customColumn
            ? column.customColumn({ row, index, total })
            : (row[column.field] as string)}
        </TableCell>
      ))}
      {enableAction && (
        <TableCell>
          <div className="flex items-start gap-4">
            {onEdit?.link ? (
              <PenBoxIcon
                onClick={() => router.push(`${onEdit.link}?id=${row.id}`)}
                size={16}
                color="orange"
                className="cursor-pointer"
              />
            ) : (
              <PenBoxIcon
                onClick={() => setOpen(true)}
                size={16}
                color="orange"
                className="cursor-pointer"
              />
            )}
            {open && (
              <Comp
                id={row.id}
                open={open}
                setOpen={setOpen}
                callback={() => {
                  if (queries.offset > 0) {
                    dispatch(
                      actions.updateData("queries", {
                        ...queries,
                        offset: 0,
                      })
                    );
                  } else {
                    eventEmitter.emit("refetch");
                  }
                }}
              />
            )}
            {!!onDelete?.execute && (
              <ModalWarningDelete
                handleDelete={async () => {
                  onDelete?.before?.();
                  await onDelete?.execute([row.id]);
                  dispatch(
                    actions.updateData(
                      "selected",
                      [...selected].filter((item) => !selected.includes(item))
                    )
                  );
                  if (selected.length === queries.data.length) {
                    dispatch(
                      actions.updateData("queries", {
                        ...queries,
                        offset: 0,
                      })
                    );
                  } else {
                    eventEmitter.emit("refetch");
                  }
                  onDelete?.after?.();
                }}
                event_key={event_key}
              >
                <TrashIcon size={16} color="red" className="cursor-pointer" />
              </ModalWarningDelete>
            )}
          </div>
        </TableCell>
      )}
    </Row>
  );
};

export default TableRow;

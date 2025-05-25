"use client";

import React, {
  Fragment,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Table, TableBody, TableCaption } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import ModalFilters from "./modal-filter";
import { ColumnsProps, Page, QueryProps } from "./type";
import { Button } from "@/components/ui/button";
import { PlusIcon, TrashIcon } from "lucide-react";
import TableRow from "./table-row";
import TableHeader from "./table-header";
import { TableContext, TableProvider } from "./table-context";
import Pagination from "@/components/shared/pagination";
import { useQuery } from "@tanstack/react-query";
import ModalWarningDelete from "./modal-warning-delete";
import { useEventEmitter } from "@/hooks/use-event-emitter";
import { FilterItemProps } from "./modal-filter/type";
import { debounce } from "lodash";
import { useRouter } from "next/navigation";

export type DataTableProps<T> = {
  columns: ColumnsProps<T>[];
  enableAction?: boolean;
  caption?: string;
  limit?: number;
  getItems: (props: QueryProps) => Promise<Page<T>>;
  onDelete?: {
    execute: (ids: string[]) => Promise<void>;
    before?: () => void;
    after?: () => void;
    name?: string;
    Icon?: any;
    disabled?: boolean;
  };
  onEdit?: {
    before?: () => void;
    after?: () => void;
    link?: string;
    modal?: any;
    name?: string;
    Icon?: any;
    disabled?: boolean;
  };
  onCreate?: {
    before?: () => void;
    after?: () => void;
    link?: string;
    modal?: any;
    name?: string;
    Icon?: any;
    disabled?: boolean;
  };
  event_key?: string;
  filters?: FilterItemProps<T>[];
  onLoadFilter?: () => Promise<FilterItemProps<T>[]>;
  search_key?: string[];
  loadFilter?: boolean;
  buttons?: {
    name: string;
    Icon: any;
    disabled?: boolean;
    onClick: () => void;
    className?: string;
    customDisabled?: ({ selected }: any) => boolean;
    customVisible?: ({ selected }: any) => boolean;
  }[];
  hideCheckbox?: boolean;
};

export const Temp = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

const DataTable = <T,>(props: DataTableProps<T>) => {
  const {
    custom: { queries, selected, loading },
    actions,
    dispatch,
  } = useContext(TableContext);
  const { data, total, offset, limit, filters } = queries;
  const filterData = useMemo(() => ({ ...props.filters }), [props.filters]);
  const router = useRouter();
  const queryKey = useMemo(
    () => [limit, total, offset, filterData],
    [limit, total, offset, filters]
  );
  const getItems = async () => {
    if (limit < 0) return null;
    dispatch(actions.updateData("selected", []));
    await new Promise((resolve) => setTimeout(resolve, 200));
    dispatch(actions.updateData("loading", true));
    const data = await props.getItems({
      limit,
      offset: offset * limit,
      filters,
    });
    dispatch(
      actions.updateData("queries", {
        ...queries,
        data: data.data ?? [],
        total: data.total,
      })
    );
    dispatch(actions.updateData("loading", false));
    return data;
  };
  const { refetch } = useQuery({
    queryKey: queryKey,
    queryFn: getItems,
    enabled: false,
  });
  useEffect(() => {
    if (!props.loadFilter) refetch();
  }, [offset, limit, filters, props.loadFilter]);
  const Comp = props.onCreate?.modal ?? Temp;
  const eventEmitter = useEventEmitter(props.event_key ?? "");

  const handleChange = useCallback(
    debounce((inputValue: string) => {
      dispatch(
        actions.updateData("queries", {
          ...queries,
          offset: 0,
          filters: {
            ...filters,
            search: inputValue,
          },
        })
      );
    }, 500),
    [queries]
  );
  const [open, setOpen] = useState(false);
  useEffect(() => {
    eventEmitter.subscribe("refetch", refetch);
    dispatch(
      actions.updateData("queries", { ...queries, limit: props.limit ?? 10 })
    );
    // Cleanup
    return () => {
      eventEmitter.unsubscribe("refetch", refetch);
    };
  }, []);
  return (
    <div className="bg-white px-4">
      <div className="flex justify-between items-center py-4">
        <Input
          placeholder="Search"
          type="search"
          className="w-80"
          onChange={(event) => handleChange(event.target.value)}
        />
        {!!props.filters?.length && (
          <ModalFilters filters={props.filters} {...props} />
        )}
      </div>
      {(props.onCreate || !props.onDelete) && (
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            {props.onCreate &&
              (props.onCreate.link ? (
                <Button
                  type="button"
                  onClick={() => router.push(props.onCreate?.link ?? "")}
                  className="flex items-center gap-2"
                  disabled={props.onCreate?.disabled}
                >
                  {props.onCreate.Icon ?? <PlusIcon />}
                  <span>{props.onCreate.name ?? "Create"}</span>
                </Button>
              ) : (
                <Button
                  onClick={() => setOpen(true)}
                  type="button"
                  className="flex items-center gap-2"
                >
                  {props.onCreate.Icon ?? <PlusIcon />}
                  <span>{props.onCreate.name ?? "Create"}</span>
                </Button>
              ))}
            {open && (
              <Comp
                id=""
                open={open}
                setOpen={setOpen}
                callback={() => {
                  if (offset > 0) {
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
            {!!props.onDelete && (
              <ModalWarningDelete
                event_key={props.event_key}
                handleDelete={async () => {
                  props.onDelete?.before?.();
                  await props.onDelete?.execute(
                    selected.map((item: any) => item.id)
                  );
                  dispatch(
                    actions.updateData(
                      "selected",
                      [...selected].filter((item) => !selected.includes(item))
                    )
                  );
                  props.onDelete?.after?.();
                  if (selected.length === data.length && offset > 0) {
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
                multiple={selected.length > 1}
              >
                <Button
                  variant="destructive"
                  className="flex items-center gap-2"
                  disabled={selected.length === 0}
                >
                  {props.onDelete.Icon ?? <TrashIcon />}
                  <span>{props?.onDelete?.name ?? "Delete"}</span>
                </Button>
              </ModalWarningDelete>
            )}
            {props?.buttons?.map((item) =>
              item.customVisible && !item.customVisible({ selected }) ? (
                <Fragment key={item.name + item.className} />
              ) : (
                <Button
                  key={item.name + item.className}
                  onClick={() => item.onClick?.()}
                  className={item.className ?? ""}
                  disabled={
                    item.disabled ??
                    item.customDisabled?.({ selected }) ??
                    selected.length === 0
                  }
                >
                  {item.Icon ?? ""}
                  {item.name}
                </Button>
              )
            )}
          </div>

          {!props.hideCheckbox && (
            <span className="text-gray-500 font-400 italic">
              {selected.length} of {props.limit ?? 10} selected
            </span>
          )}
        </div>
      )}
      <Table>
        {props.caption && <TableCaption>{props.caption}</TableCaption>}
        <TableHeader {...props} hideCheckbox={props.hideCheckbox ?? false} />
        <TableBody>
          {!loading &&
            data.map((item: any, index: number) => (
              <TableRow
                key={item.id}
                {...props}
                row={item}
                index={index}
                total={data.length}
                hideCheckbox={props.hideCheckbox ?? false}
              />
            ))}
        </TableBody>
      </Table>
      {loading && (
        <div className="py-20 flex justify-center">
          <i className="bx bx-loader text-5xl text-gray-500 animate-spin"></i>
        </div>
      )}
      {!loading && data.length === 0 && (
        <div className="flex items-center justify-center py-12 text-gray-500 italic">
          No result.
        </div>
      )}
      {!loading && total > 0 && limit > 0 && (
        <div className="w-full flex justify-center py-3 border-t border-solid border-gray-100">
          <Pagination
            canPreviousPage={offset > 0}
            pagination={{
              pageSize: limit,
              pageIndex: offset,
            }}
            totalPages={Math.ceil(total / limit)}
            canNextPage={offset < Math.ceil(total / limit) - 1}
            onPageChange={(item) => {
              dispatch(
                actions.updateData("queries", {
                  ...queries,
                  offset: item,
                })
              );
            }}
          />
        </div>
      )}
    </div>
  );
};

const DataTableContainer = <T,>(props: DataTableProps<T>) => {
  return (
    <TableProvider>
      <DataTable {...props} />
    </TableProvider>
  );
};

export default DataTableContainer;

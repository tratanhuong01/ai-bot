export type ColumnsProps<T> = {
  field: keyof T;
  headerName: string;
  customColumn?: ({
    row,
    index,
    total,
  }: {
    row: T;
    index?: number;
    total?: number;
  }) => any;
  align?: "left" | "center" | "right";
  hidden?: boolean;
  handle?: ({ row }: { row: T }) => void;
};

export type Page<T> = {
  data: T[];
  total: number;
};

export type QueryProps = {
  limit?: number;
  offset?: number;
  filters?: {
    [key: string]: string | string[] | { [key: string]: string }[];
  };
};

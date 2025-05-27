export type FilterCommon = {
  search?: string;
  fields?: string[];
  pagable?: {
    offset: number;
    limit: number;
  };
  filters?: {
    [key: string]: {
      operator: string;
      value: any;
      whereRaw?: boolean;
    };
  };
  sort?: {
    field: string;
    isASC: boolean;
  };
  exclude?: string[];
};

export type ResponseEntity<T> = {
  total: number;
  data: T[];
};

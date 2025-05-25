import {
  ContextType,
  initialState,
  useCustomContext,
} from "@/hooks/use-custom-context";
import { ReactNode, createContext } from "react";

type TableState<T> = {
  selected: T[];
  loading: boolean;

  queries: {
    filters: {
      [key: string]: string;
    };
    offset: number;
    limit: number;
    data: T[];
    total: number;
    search: string;
  };
};

const init: TableState<any> = {
  selected: [],
  loading: false,
  queries: {
    offset: 0,
    limit: -1,
    total: 0,
    filters: {},
    data: [],
    search: "",
  },
};

const initContext: ContextType<TableState<any>> =
  initialState<TableState<any>>(init);

const TableContext = createContext<ContextType<TableState<any>>>(initContext);

const TableProvider = ({ children }: { children: ReactNode }) => {
  const CustomProvider = useCustomContext(init, TableContext);
  return <CustomProvider>{children}</CustomProvider>;
};

export { TableContext, TableProvider };

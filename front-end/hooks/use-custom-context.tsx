"use client";

import { Context, Dispatch, ReactNode, useMemo, useReducer } from "react";

type ActionType<T> = {
  type: Constant;
  key?: keyof T;
  value: any;
};

type ContextType<T> = {
  custom: T;
  actions: {
    updateData: (key: StateKey<T>, value: any) => ActionType<T>;
    resetData: () => void;
  };
  dispatch: Dispatch<ActionType<T>>;
};

type StateKey<T> = keyof T;

type Constant = "UPDATE_DATA" | "UPDATE_DATA_MULTI" | "RESET_DATA";

const updateData = <T,>(key: StateKey<T>, value: any): ActionType<T> => {
  return {
    type: "UPDATE_DATA",
    key,
    value,
  };
};

const resetData = <T,>(value: T): ActionType<T> => {
  return {
    type: "RESET_DATA",
    value,
  };
};

const CustomReducer = <T,>(state: T, action: ActionType<T>) => {
  switch (action.type) {
    case "UPDATE_DATA":
      if (!action.key) return { ...state };
      return { ...state, [action.key]: action.value };
    case "RESET_DATA":
      return { ...action.value };
    default:
      return { ...state };
  }
};

const initialState = <T,>(init: T): ContextType<T> => {
  return {
    custom: init,
    actions: {
      updateData,
      resetData: () => {},
    },
    dispatch: () => {},
  };
};

const useCustomContext = <T,>(
  initialState: T,
  CustomContext: Context<ContextType<T>>
) => {
  const CustomProvider = ({ children }: { children: ReactNode }) => {
    const [custom, dispatch] = useReducer(CustomReducer<T>, initialState);
    const contextValue = useMemo(
      () => ({
        custom,
        actions: {
          updateData,
          resetData: () => dispatch(resetData(initialState)),
        },
        dispatch,
      }),
      [custom, dispatch]
    );

    return (
      <CustomContext.Provider value={contextValue}>
        {children}
      </CustomContext.Provider>
    );
  };

  return CustomProvider;
};

export { useCustomContext, initialState };

export type { ContextType };

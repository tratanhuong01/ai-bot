export type Page<T, M = Record<string, number>> = {
  data: T[];
  page?: number;
  metadata?: M;
};

export type OnChangeEvent<T = string> = {
  target: { name?: string; value: T };
};

export type Nullable<T> = T | null;

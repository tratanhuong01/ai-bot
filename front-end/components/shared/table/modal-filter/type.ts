export type FilterItemProps<T> = {
  options: OptionFilerProps[];
  defaultValue: string;
  name: string;
  field: keyof T;
  type: "checkbox";
};

export type OptionFilerProps = { key: string | number; value: string };

export type ObjectCustom = {
  [key: string]: OptionFilerProps[];
};

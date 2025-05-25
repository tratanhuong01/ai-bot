import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { OnChangeEvent } from "@/shared/models";

export type SelectFieldOption<T = string> = {
  label: string;
  value: T;
  description?: string;
};

export type SelectFieldGroupOption<T = string> = {
  label: string;
  options: SelectFieldOption<T>[];
};

export type SelectFieldProps<T = string> = {
  name?: string;
  defaultValue?: T;
  placeholder?: string;
  disabled?: boolean;
  options: SelectFieldOption<T>[] | SelectFieldGroupOption<T>[];
  className?: string;
  value?: T;
  onChange?: (event: OnChangeEvent<T>) => void;
};

export function SelectField<T = string>(props: SelectFieldProps<T>) {
  const {
    name,
    placeholder,
    className,
    onChange,
    options = [],
    defaultValue,
    disabled,
    value,
  } = props;

  const handleOnChange = (value: string) => {
    onChange?.({
      target: {
        name,
        value: value as T,
      },
    });
  };

  return (
    <Select
      key={defaultValue as string}
      onValueChange={handleOnChange}
      defaultValue={defaultValue as string}
      value={value as string}
      disabled={disabled}
    >
      <SelectTrigger className={cn("w-full bg-white", className)}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => {
          if ("options" in option) {
            return (
              <SelectGroup key={option.label as string}>
                <SelectLabel>{option.label}</SelectLabel>
                {option.options.map((subOption) => (
                  <SelectItem
                    key={subOption.value as string}
                    value={subOption.value as string}
                  >
                    <span>{subOption.label}</span>
                    {subOption.description && (
                      <span className="text-xs text-muted-foreground ml-2">
                        ({subOption.description})
                      </span>
                    )}
                  </SelectItem>
                ))}
              </SelectGroup>
            );
          }

          return (
            <SelectItem
              key={option.value as string}
              value={option.value as string}
            >
              <span>{option.label}</span>
              {option.description && (
                <span className="text-xs text-muted-foreground ml-2">
                  ({option.description})
                </span>
              )}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}

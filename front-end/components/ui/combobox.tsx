"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  // CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { debounce } from "lodash";
import { useQuery } from "@tanstack/react-query";
import { Input } from "./input";

type ComboboxProps<T> = {
  onLoadOptions: (
    search: string
  ) => Promise<{ label: string; value: string; item?: T }[]>;
  placeholder?: string;
  onValueChange: (data: T) => void;
  newValue?: string;
};

export function Combobox<T>({
  onLoadOptions,
  placeholder = "Select option...",
  onValueChange,
}: ComboboxProps<T>) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [search, setSearch] = React.useState("");
  const handleValueChange = debounce((searchValue: string) => {
    setSearch(searchValue);
  }, 300);
  const { data: searchOptions, isLoading } = useQuery<
    { label: string; value: string; item?: T; id?: string }[]
  >({
    queryKey: ["fetch-combobox", search],
    queryFn: async () => {
      if (!search) return [];
      const result = await onLoadOptions(search);

      setOpen(true);
      return result;
    },
    enabled: !!search,
  });
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          <span className="line-clamp-1 flex-1 block text-left w-full overflow-hidden">
            {value
              ? searchOptions?.find((option) => option.value === value)?.label
              : placeholder}
          </span>
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
        <Command>
          <Input
            className="focus-visible:ring-0"
            placeholder={placeholder}
            onChange={(event) => handleValueChange(event.target.value)}
          />
          {/* <CommandInput
            placeholder="Search option..."
            onValueChange={handleValueChange}
          /> */}
          <CommandList>
            {!isLoading && !searchOptions?.length && (
              <CommandEmpty>No option found.</CommandEmpty>
            )}
            {isLoading && (
              <div className="p-10 flex justify-center items-center">
                <span className="bx bx-loader animate-spin text-gray-500"></span>
              </div>
            )}
            <CommandGroup>
              {searchOptions?.map((option) => (
                <CommandItem
                  key={option.id ?? option.label}
                  value={option.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                    const current = searchOptions.find(
                      (item) => item.value === currentValue
                    );
                    if (!current?.item) return;
                    onValueChange(current.item);
                  }}
                >
                  {option.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

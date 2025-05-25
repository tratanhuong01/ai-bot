"use client";

import { cn } from "@/lib/utils";
import { ReactElement } from "react";
import { Children, createElement } from "react";
import { useFormContext } from "react-hook-form";

export type FormFieldProps = {
  name?: string;
  className?: string;
  children: ReactElement;
  disableRef?: boolean;
  transform?: (value: any) => any;
  onChange?: (value: any) => void;
};

export function FormField({
  children,
  name,
  className,
  transform,
  disableRef = false,
  onChange: _onChange,
}: FormFieldProps) {
  const methods = useFormContext();

  if (!name) {
    throw new Error("name is required");
  }

  const registered = methods.register(name);
  const defaultValue = methods.getValues(name);

  return (
    <div className={cn("w-full", className)}>
      {Children.map(children, (child) => {
        const { ref, ...restOfRegistered } = registered;
        const registeredProps: any = {
          ...restOfRegistered,
          defaultValue,
          onChange: (event: any) => {
            _onChange?.(event);
            return transform
              ? registered.onChange({
                  target: { name, value: transform(event) },
                })
              : registered.onChange(event);
          },
          onBlur: (event: any) =>
            transform
              ? registered.onBlur({
                  target: { name, value: transform(event) },
                })
              : registered.onBlur(event),
        };

        if (!disableRef) {
          registeredProps.ref = ref;
        }

        return createElement(child.type, {
          ...(child.props as any),
          ...registeredProps,
        });
      })}
    </div>
  );
}

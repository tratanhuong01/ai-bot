import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Children, createElement, ReactElement, useId } from "react";
import { useFormContext } from "react-hook-form";

export type FormGroupProps = {
  id?: string;
  label: string;
  children: ReactElement;
  name: string;
  hint?: ReactElement | string;
  className?: string;
  standard?: boolean;
};

export function FormGroup({
  id,
  label,
  children,
  name,
  hint,
  className,
  standard,
}: FormGroupProps) {
  const methods = useFormContext();
  const generatedId = useId();
  const _id = id ?? generatedId;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {!!label && (
        <Label
          className={`font-bold ${standard ? "" : "text-lg"}`.trim()}
          htmlFor={_id}
        >
          {label}
        </Label>
      )}
      {hint && (
        <p className="text-xs text-gray-500 whitespace-pre-wrap">{hint}</p>
      )}
      {Children.map(children, (child) =>
        createElement(child.type, {
          ...(child.props as any),
          name,
          id: _id,
        })
      )}
      {methods.formState.errors?.[name]?.message && (
        <p className="text-red-500 text-sm pt-1">
          {methods.formState.errors?.[name]?.message?.toString()}
        </p>
      )}
    </div>
  );
}

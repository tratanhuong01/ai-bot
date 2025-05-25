"use client";

import { ReactNode, useEffect } from "react";
import { FormProvider, useForm, UseFormProps } from "react-hook-form";

export type FormProps = {
  defaultValues?: UseFormProps["defaultValues"];
  children: ReactNode;
  onSubmit: (values: any) => void;
  zodResolver?: any;
  className?: string;
  overflowHidden?: boolean;
};

export const Form = ({
  defaultValues,
  children,
  onSubmit,
  zodResolver,
  className = "w-full",
  overflowHidden = false,
}: FormProps) => {
  const methods = useForm({
    defaultValues,
    ...(zodResolver ? { resolver: zodResolver } : {}),
  });
  const { handleSubmit, reset } = methods;

  useEffect(() => {
    reset(defaultValues);
  }, [JSON.stringify(defaultValues)]);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`${className} ${
          overflowHidden ? "overflow-hidden px-2" : ""
        }`}
      >
        {children}
      </form>
    </FormProvider>
  );
};

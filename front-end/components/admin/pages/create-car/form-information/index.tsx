import React from "react";
import specifications from "@/static/specifications.json";
import { Button } from "@/components/ui/button";
import { useFormContext } from "react-hook-form";

const FormInformation = () => {
  const {
    formState: { errors },
    watch,
    setValue,
    clearErrors,
  } = useFormContext();
  const error = errors?.["informations"] as any;
  const informations = watch("informations");
  return (
    <div className="mt-3">
      <div className="bg-white p-3 shadow-lg rounded-lg border border-solid border-gray-50 pb-6">
        <p className="font-bold mb-6 text-xl pb-2 border-b-2 border-solid border-gray-500 w-fit">
          Vehicle options
        </p>
        {specifications.vehicle_options.map((item) => (
          <div key={item.name} className="flex gap-4 mb-4">
            <div className="font-semibold pt-1.5 text-gray-500 w-32 p-2">
              {item.name}
            </div>
            <div className="flex flex-wrap gap-4">
              {item.data.map((child: any) => (
                <Button
                  onClick={() => {
                    if (item.field) {
                      setValue(
                        `informations.vehicle_options.${item.field}.value`,
                        child.toString()
                      );
                      clearErrors(
                        `informations.vehicle_options.${item.field}.value`
                      );
                    }
                  }}
                  className={`${
                    error?.["vehicle_options"]?.[item.field]?.["value"]?.message
                      ? "border-red-500 text-red-500 hover:text-red-500"
                      : ""
                  }`}
                  type="button"
                  {...(informations?.vehicle_options?.[
                    item.field as any
                  ]?.value.toString() === child.toString()
                    ? {}
                    : {
                        variant: "outline",
                      })}
                  key={child}
                >
                  {child}
                </Button>
              ))}
            </div>
          </div>
        ))}
        <p className="font-bold mt-6 mb-6 text-xl pb-2 border-b-2 border-solid border-gray-500 w-fit">
          Vehicle features
        </p>
        <div className="flex flex-wrap gap-4">
          {specifications.features.map((item) => (
            <Button
              key={item}
              onClick={() => {
                const exist = informations?.features.includes(item);
                if (exist) {
                  setValue(
                    "informations.features",
                    informations?.features?.filter(
                      (child: any) => child !== item
                    )
                  );
                } else {
                  setValue("informations.features", [
                    ...informations?.features,
                    item,
                  ]);
                }
                clearErrors("informations.features");
              }}
              className={`${
                error?.["features"]?.message
                  ? "border-red-500 text-red-500 hover:text-red-500"
                  : ""
              }`}
              type="button"
              {...(informations?.features?.includes(item)
                ? {}
                : { variant: "outline" })}
            >
              {item}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormInformation;

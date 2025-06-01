import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { v4 } from "uuid";

const ModalTags = () => {
  const { control, register } = useFormContext();
  const [open, setOpen] = useState(false);
  const {
    trigger,
    formState: { errors },
    getValues,
  } = useFormContext();
  const tags_temp = useFieldArray({
    control,
    name: "tags_temp",
  });
  const tags = useFieldArray({
    control,
    name: "tags",
  });
  const swap = (key: "tags" | "tags_temp", newValue: any) => {
    newValue.remove([...Array(newValue.fields.length).keys()]);
    const values = getValues(key) as any[];
    values.forEach((item) => {
      newValue.append({
        id: item.id,
        value: item.value,
      });
    });
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button type="button" className="bg-primary">
          Add tag
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle className="font-bold text-xl -mt-2 mb-2">Tags</DialogTitle>

        <div className="flex gap-4 items-center flex-wrap">
          {tags_temp.fields.map((item, index) => (
            <div className="relative" key={item.id}>
              <Input
                id={item.id}
                className={`inline-block min-w-24 px-3 py-2 text-sm rounded-sm border border-solid ${
                  (errors as any)?.tags_temp?.[index]?.value?.message
                    ? "border-red-500 focus-within:ring-0 focus-visible:ring-0 focus-within:border-red-500 focus-visible:border-red-500"
                    : "border-gray-300"
                }
                text-gray-600 cursor-pointer relative`}
                {...register(`tags_temp.${index}.value`)}
              />
              <span
                aria-hidden
                onClick={() => tags_temp.remove(index)}
                className="absolute -top-2 bg-white -right-3 w-5 h-5 rounded-full flex items-center justify-center 
                  cursor-pointer text-red-500 text-lg bx bx-x"
              />
            </div>
          ))}

          <span
            aria-hidden
            onClick={() => {
              tags_temp.append({
                id: v4(),
                value: "",
              });
            }}
            className="inline-block px-3 py-2 text-xl cursor-pointer bx bx-plus"
          />
        </div>
        <div className="flex justify-end items-center gap-2 mt-3">
          <Button
            type="button"
            onClick={() => {
              swap("tags", tags_temp);
              setOpen(false);
            }}
            variant="destructive"
          >
            Cancel
          </Button>
          <Button
            className="bg-primary"
            onClick={async () => {
              const promises = tags_temp.fields.map((_, index) => {
                return trigger(`tags_temp.${index}.value`);
              });
              const results = await Promise.all(promises);

              if (results.every((item) => item === true)) {
                swap("tags_temp", tags);
                setOpen(false);
              }
            }}
            type="button"
          >
            Confirm
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalTags;

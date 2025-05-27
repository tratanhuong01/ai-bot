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
  } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name: "tags" });
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button type="button">Add tag</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle className="font-bold text-xl -mt-2 mb-2">Tags</DialogTitle>

        <div className="flex gap-4 items-center flex-wrap">
          {fields.map((item, index) => (
            <div className="relative" key={item.id}>
              <Input
                id={item.id}
                className={`inline-block min-w-24 px-3 py-2 text-sm rounded-sm border border-solid ${
                  errors[`tags.${index}.name`]?.message
                    ? "border-red-500"
                    : "border-gray-300 "
                }
                text-gray-600 cursor-pointer relative`}
                {...register(`tags.${index}.name`)}
              />
              <span
                aria-hidden
                onClick={() => remove(index)}
                className="absolute -top-2 bg-white -right-3 w-5 h-5 rounded-full flex items-center justify-center 
                  cursor-pointer text-red-500 text-lg bx bx-x"
              />
            </div>
          ))}

          <span
            aria-hidden
            onClick={() => {
              append({
                id: v4(),
                name: "",
              });
            }}
            className="inline-block px-3 py-2 text-xl cursor-pointer bx bx-plus"
          />
        </div>
        <div className="flex justify-end items-center gap-2 mt-3">
          <Button
            type="button"
            onClick={() => setOpen(false)}
            variant="destructive"
          >
            Cancel
          </Button>
          <Button
            onClick={async () => {
              const promises = fields.map((item, index) => {
                return trigger(`tags.${index}.name`);
              });
              const results = await Promise.all(promises);
              if (results.every((item) => item === true)) {
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

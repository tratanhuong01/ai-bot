import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ReactNode, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";

type ModalWarningDeleteProps = {
  handleDelete?: () => Promise<void>;
  messages?: { success?: string; fail?: string };
  children?: ReactNode;
  multiple?: boolean;
  event_key?: string;
};

const ModalWarningDelete = ({
  handleDelete = async () => {},
  messages,
  children,
  multiple,
}: ModalWarningDeleteProps) => {
  const mutation = useMutation({
    mutationKey: ["DELETE_ITEM"],
    mutationFn: handleDelete,
    onSuccess: () => {
      toast({
        title: `Delete rows was successful!`,
        description: `The rows has been removed successfully.`,
      });
      setOpen(false);
    },
    onError: () => {
      toast({
        title: "Delete rows failed!",
        description:
          "An error occurred while attempting to delete the rows. Please try again.",
      });
    },
  });
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle className="font-bold text-lg -mt-2">
          Confirm delete
        </DialogTitle>
        <p>
          {messages?.success ??
            messages?.fail ??
            `Do you want delete ${multiple ? "all selected" : "this row"}.`}
        </p>
        <div className="flex justify-end items-center gap-2">
          <Button variant="destructive" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            type="button"
            onClick={() => !mutation.isPending && mutation.mutate()}
            disabled={mutation.isPending}
          >
            Confirm
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalWarningDelete;

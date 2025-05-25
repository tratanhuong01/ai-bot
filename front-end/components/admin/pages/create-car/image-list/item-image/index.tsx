import ImageContainer from "@/components/shared/image";
import { Input } from "@/components/ui/input";
import { CreateCarContext } from "@/contexts/CreateCarContext";
import { PlusIcon, XIcon } from "lucide-react";
import React, { ChangeEvent, useContext } from "react";

type ItemImageProps = {
  isPlus?: boolean;
  src?: string;
  item: File | string;
};

const ItemImage = ({ isPlus, src, item }: ItemImageProps) => {
  const {
    dispatch,
    custom: { imagesNew, imagesOld, imagesDelete },
    actions: { updateData },
  } = useContext(CreateCarContext);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) return;
    dispatch(
      updateData("imagesNew", [
        ...imagesNew,
        ...[...event.target.files].map((file) => file),
      ])
    );
  };
  const handleRemove = () => {
    if (typeof item === "string") {
      dispatch(updateData("imagesDelete", [...imagesDelete, item]));
      dispatch(
        updateData(
          "imagesOld",
          [...imagesOld].filter((child) => child !== item)
        )
      );
    } else {
      dispatch(
        updateData(
          "imagesNew",
          imagesNew.filter((file) => file.name !== item.name)
        )
      );
    }
  };
  return (
    <div className="relative rounded-lg" style={{ paddingTop: "100%" }}>
      <Input
        type="file"
        className="hidden"
        id="images"
        onChange={handleChange}
        accept="image"
        size={10 * 1024}
        multiple
      />
      {isPlus ? (
        <label
          htmlFor="images"
          className="flex justify-center items-center absolute top-0 left-0 bottom-0 right-0 bg-white shadow-lg rounded-lg"
        >
          <PlusIcon />
        </label>
      ) : (
        <>
          <ImageContainer
            src={src}
            className="absolute top-0 left-0 bottom-0 right-0 w-full h-full object-cover rounded-lg"
            fill
          />
          <XIcon
            onClick={handleRemove}
            className="text-white w-8 h-8 flex items-center justify-center absolute top-2 right-2 z-10 bg-primary 
            rounded-full cursor-pointer"
          />
        </>
      )}
    </div>
  );
};

export default ItemImage;

import React, { memo, useContext, useMemo } from "react";
import ItemImage from "./item-image";
import { CreateCarContext } from "@/contexts/CreateCarContext";

const ImageList = () => {
  const {
    custom: { imagesNew, imagesOld },
  } = useContext(CreateCarContext);
  const imagesList = useMemo(
    () => [...imagesOld, ...imagesNew],
    [imagesNew, imagesOld]
  );
  return (
    <div className="grid grid-cols-4 gap-4">
      {imagesList.map((item) => (
        <ItemImage
          item={item}
          key={typeof item === "string" ? item : item.name}
          src={
            typeof item === "string"
              ? `${process.env.NEXT_PUBLIC_SERVER_URL}/${item}`
              : URL.createObjectURL(item)
          }
        />
      ))}
      <ItemImage isPlus item="" />
    </div>
  );
};

export default memo(ImageList);

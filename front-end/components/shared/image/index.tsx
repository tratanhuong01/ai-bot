import Image from "next/image";
import React from "react";

type ImageProps = {
  src?: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
  fill?: boolean;
};

const ImageContainer = ({
  src = "",
  alt = "",
  className = "",
  style = {},
  fill,
}: ImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={`${className}`.trim()}
      style={style}
      priority
      fill={fill}
      {...(fill ? {} : { width: 0, height: 0, sizes: "100vw" })}
    />
  );
};

export default ImageContainer;

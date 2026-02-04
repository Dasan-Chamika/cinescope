"use client";

import Image from "next/image";
import { useState } from "react";

type MovieThumbnailProps = {
  poster: string;
  title: string;
};

export function MovieThumbnail({ poster, title }: MovieThumbnailProps) {
  const [imgSrc, setImgSrc] = useState(poster ?? "/placeholder.svg");

  const handleError = () => {
    setImgSrc("/placeholder.svg");
  };

  return (
    <Image
      src={imgSrc}
      alt={title}
      width={28}
      height={40}
      className="h-10 rounded object-cover"
      onError={handleError}
    />
  );
}

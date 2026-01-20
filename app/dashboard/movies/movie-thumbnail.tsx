"use client";
import { useState } from "react";
import Image from "next/image";

type MovieThumbnailsProps = {
  poster?: string;
  title: string;
};

export function MovieThumbnails({ poster, title }: MovieThumbnailsProps) {
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
      className=" rounded object-cover h-10"
      onError={handleError}
    />
  );
}

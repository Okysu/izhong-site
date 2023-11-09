"use client";

import { title } from "@/components/primitives";

import MasonryLayout from "../masonry";
import ImagePreview from "@/components/preview";
import { Pagination } from "@nextui-org/pagination";
import { getImagesList, cutImagesPage } from "./images";
import { useEffect, useState } from "react";

interface Image {
  src: string;
  hash: string;
}

interface ImageGalleryProps {
  images: Image[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <MasonryLayout>
      {images.map((image) => (
        <ImagePreview key={image.hash} src={image.src} />
      ))}
    </MasonryLayout>
  );
};

export default function ImagesPage() {
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const pageSize = 50;

  useEffect(() => {
    getImagesList().then((images) => {
      setTotal(images.length);
      setImages(cutImagesPage(images, page, pageSize));
    });
  }, [page]);

  const handleChange = (page: number) => {
    setPage(page);
  };

  return (
    <>
      <div>
        <h2 className={title({ size: "sm" })}>瀑布流</h2>
      </div>
      <div className="mt-2">
        <ImageGallery images={images} />
      </div>
      {/* 水平居中固定底部 */}
      <div className="mt-4 flex justify-center">
        <Pagination
          showControls
          total={Math.ceil(total / pageSize)}
          initialPage={1}
          page={1}
          onChange={handleChange}
        />
      </div>
    </>
  );
}

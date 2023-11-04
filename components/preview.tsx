"use client";

import React, { useState } from "react";
import styles from "@/styles/image-preview.module.css";
import { Image } from "@nextui-org/image";

interface ImagePreviewProps {
  src: string;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ src }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPreview = () => {
    setIsOpen(true);
  };

  const closePreview = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Image src={src} onClick={openPreview} loading="lazy" isZoomed />
      {isOpen && (
        <div className={styles.previewWrapper} onClick={closePreview}>
          <img className={styles.previewImage} src={src} alt="" />
          <button className={styles.closeButton} onClick={closePreview}>
            &times;
          </button>
        </div>
      )}
    </>
  );
};

export default ImagePreview;

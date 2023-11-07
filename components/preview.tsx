"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/image-preview.module.css";
import { Image } from "@nextui-org/image";

interface ImagePreviewProps {
  src: string;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ src }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [imgSrc, setSetSrc] = useState("");

  const img = useRef<HTMLImageElement>(null);

  function isInViewport(element: HTMLImageElement) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // lazy load
  useEffect(() => {
    const handleScroll = () => {
      if (img.current) {
        if (isInViewport(img.current) && imgSrc === "") {
          setSetSrc(src);
          img.current.style.height = "auto";
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [img]);

  const openPreview = () => {
    setIsOpen(true);
  };

  const closePreview = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Image
        ref={img}
        src={imgSrc}
        onClick={openPreview}
        isZoomed
        loading="lazy"
        style={{ width: "100%", height: "120px" }}
      />
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

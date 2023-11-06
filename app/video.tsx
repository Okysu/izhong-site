"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/styles/home-video.module.css";
import { debounce } from "./utils/function";

interface BackgroundVideoProps {
  src: string;
  mobile: string;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ src, mobile }) => {
  const [video, setVideo] = useState(src);
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleResize = (first: boolean = false) => {
      if (window.innerWidth < 768) {
        setVideo(mobile);
      } else {
        setVideo(src);
      }

      if (first && window.innerWidth > 768) {
        return;
      }

      setTimeout(() => {
        if (ref.current) {
          ref.current.load();
        }
      }, 0);
    };

    handleResize(true);
    window.addEventListener("resize", () => {
      debounce(handleResize, 200)();
    });
  }, []);

  return (
    <video ref={ref} className={styles.video} autoPlay muted loop>
      <source src={video} type="video/webm" />
    </video>
  );
};

export default BackgroundVideo;

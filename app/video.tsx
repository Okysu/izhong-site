"use client"

import { useEffect, useRef, useState } from "react";
import styles from "@/styles/home-video.module.css";
import { debounce } from "./utils/function";

interface BackgroundVideoProps {
  src: string;
  mobile: string;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ src, mobile }) => {
  const [video, setVideo] = useState(src);
  const [muted, setMuted] = useState(true); 
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

    return () => {
      window.removeEventListener("resize", () => {
        debounce(handleResize, 200)();
      });
    };
  }, []);

  const toggleMute = () => {
    setMuted(!muted);
  };

  return (
    <>
      <video ref={ref} className={styles.video} autoPlay muted={muted} loop>
        <source src={video} type="video/mp4" />
      </video>
      <button className={styles.muteButton} onClick={toggleMute}>
        {muted ? "取消静音" : "使用静音"}
      </button>
    </>
  );
};

export default BackgroundVideo;

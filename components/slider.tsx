import React, { useState, useEffect, useRef } from "react";
import styles from "@/styles/slider.module.css";

interface SliderProps {
  max: number;
  min: number;
  value: number;
  onChange: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ max, min, value, onChange }) => {
  const [sliderValue, setSliderValue] = useState(value);
  const slider = useRef<HTMLInputElement>(null);

  const setProgress = (value: number) => {
    const progress = ((value - min) / (max - min)) * 100;
    return `linear-gradient(to right, #f06292 ${progress}%, #e0e0e0 0)`;
  };

  useEffect(() => {
    setSliderValue(value);
    if (slider.current) {
      slider.current.style.background = setProgress(value);
    }
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(event.target.value));
    event.target.style.background = setProgress(Number(event.target.value));
    onChange(Number(event.target.value));
  };

  return (
    <input
      type="range"
      ref={slider}
      min={min}
      max={max}
      value={sliderValue}
      onChange={handleChange}
      className={styles.slider}
    />
  );
};

export default Slider;

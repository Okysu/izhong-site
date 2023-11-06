import React, { useState, useEffect } from 'react';
import styles from '@/styles/slider.module.css';

interface SliderProps {
  max: number;
  min: number;
  value: number;
  onChange: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ max, min, value, onChange }) => {
  const [sliderValue, setSliderValue] = useState(value);

  useEffect(() => {
    setSliderValue(value);
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(event.target.value));
    onChange(Number(event.target.value));
  };

  return (
    <input
      type="range"
      min={min}
      max={max}
      value={sliderValue}
      onChange={handleChange}
      className={styles.slider}
    />
  );
};

export default Slider;

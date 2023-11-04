"use client";

import React, { useState, useEffect } from "react";
import styles from "@/styles/masonry.module.css";

interface MasonryLayoutProps {
  children: React.ReactNode;
}

const MasonryLayout: React.FC<MasonryLayoutProps> = ({ children }) => {
  const [columns, setColumns] = useState(5);

  const calculateColumns = () => {
    const width = window.innerWidth;
    if (width < 600) {
      setColumns(2);
    } else if (width < 900) {
      setColumns(3);
    } else if (width < 1200) {
      setColumns(4);
    } else {
      setColumns(5);
    }
  };

  useEffect(() => {
    calculateColumns();
    window.addEventListener("resize", calculateColumns);
    return () => window.removeEventListener("resize", calculateColumns);
  }, []);

  return (
    <div className={styles.masonry} style={{ columnCount: columns }}>
      {React.Children.map(children, (child) => (
        <div className={styles.item}>{child}</div>
      ))}
    </div>
  );
};

export default MasonryLayout;

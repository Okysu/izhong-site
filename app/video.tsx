"use client";

import { useEffect, useState } from "react";

interface HideOnSmallScreenProps {
  children: React.ReactNode;
  small: boolean;
}

const HideOnScreen: React.FC<HideOnSmallScreenProps> = ({
  children,
  small,
}) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (small) {
    if (isSmallScreen) {
      return null;
    } else {
      return <>{children}</>;
    }
  } else {
    if (isSmallScreen) {
      return <>{children}</>;
    } else {
      return null;
    }
  }
};

export default HideOnScreen;

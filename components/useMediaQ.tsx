import { useEffect, useState } from "react";

export const useMediaQ = (
  minMax: "min" | "max",
  MinMaxWidth: number
): boolean => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWidth]);

  if (minMax === "min") return width >= MinMaxWidth;
  return width <= MinMaxWidth;
};

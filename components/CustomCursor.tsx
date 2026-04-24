"use client";

import { useEffect, useState } from "react";

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isHovering, setIsHovering] = useState<boolean>(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) =>
      setMousePosition({ x: e.clientX, y: e.clientY });

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        ["A", "BUTTON", "INPUT"].includes(target.tagName) ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-9999 mix-blend-exclusion hidden md:block"
        style={{
          transform: `translate(${mousePosition.x - 3}px, ${
            mousePosition.y - 3
          }px)`,
        }}
      />
      <div
        className={`fixed top-0 left-0 border border-white rounded-full pointer-events-none z-9999 mix-blend-exclusion transition-all duration-200 ease-out hidden md:block ${
          isHovering ? "w-16 h-16 bg-white/10 border-transparent" : "w-8 h-8"
        }`}
        style={{
          transform: `translate(${
            mousePosition.x - (isHovering ? 32 : 16)
          }px, ${mousePosition.y - (isHovering ? 32 : 16)}px)`,
        }}
      />
    </>
  );
};

export default CustomCursor;

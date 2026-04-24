"use client";
import React, { useRef } from "react";

import { motion, useSpring, useMotionValue } from "framer-motion";

const MagneticButton = ({
  children,
  className,
  onClick,
  href,
  target,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
}) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    // @ts-expect-error - ref is not null
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.2);
    y.set(middleY * 0.2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const springConfig = {
    type: "spring",
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const Component = href ? "a" : "button";
  const props = href
    ? { href, target, rel: "noopener noreferrer" }
    : { onClick };

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onMouseMove={(e: unknown) => handleMouseMove(e as MouseEvent)}
      onMouseLeave={reset}
      className="inline-block"
    >
      <Component ref={ref} className={className} {...props}>
        {children}
      </Component>
    </motion.div>
  );
};

export default MagneticButton;

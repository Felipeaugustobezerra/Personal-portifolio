"use client";

import { useEffect, useState } from "react";

export function CursorGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener(
      "mousemove",
      handleMove
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMove
      );
    };
  }, []);

  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        z-0
      "
    >
      <div
        className="
          absolute
          h-[300px]
          w-[300px]
          rounded-full
          bg-red-500/10
          blur-[120px]
        "
        style={{
          left: position.x - 150,
          top: position.y - 150,
        }}
      />
    </div>
  );
}
// components/Logo.js
"use client";
import React, { useState, useEffect } from "react";

const Logo = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleClick = (e: { clientX: number; clientY: number }) => {
      const x = e.clientX - 50; // Adjusting for logo center
      const y = e.clientY - 50; // Adjusting for logo center
      const deltaX = x - position.x;
      const deltaY = y - position.y;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      setPosition({ x, y });
      setRotation(angle);
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [position]);

  return (
    <div
      className="logo"
      style={{
        transform: `translate(${position.x}px, ${position.y}px) rotate(${rotation}deg)`,
      }}
    >
      <img src="wizaart-img.56787174.gif" alt="Logo" className="image" />
    </div>
  );
};

export default Logo;

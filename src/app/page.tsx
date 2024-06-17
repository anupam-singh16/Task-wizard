// components/Logo.js
"use client";

import { useState, useEffect } from "react";

const Logo = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [angle, setAngle] = useState(0);
  const [flip, setFlip] = useState(false);
  console.log(flip, "flip");

  const handleClick = (e: { clientX: number; clientY: number }) => {
    const newX = e.clientX - 25;
    const newY = e.clientY - 25;

   
    const dx = newX - position.x;
    const dy = newY - position.y;
    const newAngle = Math.atan2(dy, dx) * (10 / Math.PI); 

    setAngle(newAngle);
    setPosition({ x: newX, y: newY });

    const isLeftSide = e.clientX < position.x;
    setFlip(isLeftSide);
  
  };

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [position]);

  return (
    <div
      className="logo"
      style={{
        transform: `translate(${position.x}px, ${position.y}px) rotate(${angle}deg)`,
      }}
    >
      <img
        style={{ transform: !flip ? "scaleX(-1)" : "scaleX(1)" }}
        width={90}
        src="wizaart-img.56787174.gif"
        alt="Logo"
      />
      
    </div>
  );
};

export default Logo;

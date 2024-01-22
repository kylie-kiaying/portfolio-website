"use client"; 

import React, { useEffect, useState } from 'react';

const CursorLightEffect: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 0, 0.2)',
        boxShadow: '0 0 10px 10px rgba(255, 255, 0, 0.2)',
      }}
    />
  );
};

export default CursorLightEffect;

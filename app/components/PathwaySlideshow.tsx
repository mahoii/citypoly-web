"use client";

import { useState, useEffect } from 'react';

export default function PathwaySlideshow({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll timer (swaps every 4 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="absolute inset-0 w-full h-full">
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt="Pathway highlight"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex 
              ? "opacity-100 z-10" 
              : "opacity-0 z-0"
          }`}
        />
      ))}
      
      {/* Modern Navigation Lines at the bottom of the image */}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-1 transition-all duration-500 shadow-sm ${
              index === currentIndex ? "w-6 bg-brand-primary" : "w-2 bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
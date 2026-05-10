"use client";

import { useEffect, useState } from "react";

export default function PathwaySlideshow({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setShouldReduceMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (shouldReduceMotion || images.length <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length, shouldReduceMotion]);

  return (
    <div className="absolute inset-0 w-full h-full" aria-hidden="true">
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex 
              ? "opacity-100 z-10" 
              : "opacity-0 z-0"
          }`}
        />
      ))}
      
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

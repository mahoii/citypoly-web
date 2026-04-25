"use client";

import { useState, useEffect } from 'react';

const images = [
  "citypolyschool.jpg", // Architecture
  "citypolyschool2.jpg", // Lab/Robotics
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200", // Engineering Blueprints
];

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // This sets up the auto-scrolling timer (changes every 4 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    
    // Cleanup the timer if the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden border border-brand-dark/10 bg-brand-dark shadow-2xl">
      
      {/* The Images */}
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* A subtle dark overlay so the images look sleek and professional */}
          <div className="absolute inset-0 bg-brand-dark/20 z-10" />
          <img
            src={src}
            alt="City Poly Campus"
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      {/* The Navigation Lines (Modern alternative to dots) */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-3">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 transition-all duration-500 ${
              index === currentIndex ? "w-10 bg-brand-primary" : "w-3 bg-white/50"
            }`}
          />
        ))}
      </div>
      
    </div>
  );
}
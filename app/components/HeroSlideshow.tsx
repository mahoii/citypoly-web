"use client";

import { useEffect, useState } from "react";

const images = [
  {
    src: "/citypolyschool.jpg",
    alt: "City Poly students working in a classroom studio",
  },
  {
    src: "/citypolyschool2.jpg",
    alt: "City Poly students collaborating on technical coursework",
  },
  {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200",
    alt: "Architectural drawings and design tools on a work table",
  },
];

export default function HeroSlideshow() {
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
    if (shouldReduceMotion) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [shouldReduceMotion]);

  return (
    <div
      className="relative w-full h-[400px] md:h-[500px] overflow-hidden border border-brand-dark/10 bg-brand-dark shadow-2xl"
      aria-label="City Poly school highlights"
    >
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="absolute inset-0 bg-brand-dark/20 z-10" aria-hidden="true" />
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-3" aria-hidden="true">
        {images.map((image, index) => (
          <div
            key={image.src}
            className={`h-1.5 transition-all duration-500 ${
              index === currentIndex ? "w-10 bg-brand-primary" : "w-3 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

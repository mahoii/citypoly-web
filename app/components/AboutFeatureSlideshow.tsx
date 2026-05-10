"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type FeatureSlide = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

export default function AboutFeatureSlideshow({
  slides,
  label,
}: {
  slides: FeatureSlide[];
  label: string;
}) {
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
    if (shouldReduceMotion || slides.length <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length, shouldReduceMotion]);

  const goToPrevious = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  return (
    <div
      className="relative h-[420px] w-full overflow-hidden border border-brand-dark/10 bg-brand-dark shadow-2xl md:h-[500px]"
      aria-label={label}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "z-10 opacity-100" : "z-0 opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" aria-hidden="true" />
        </div>
      ))}

      <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-8">
        <div className="mb-5 flex gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              aria-label={`Show ${slide.title}`}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 transition-all duration-500 ${
                index === currentIndex ? "w-12 bg-brand-primary" : "w-4 bg-white/60"
              }`}
            />
          ))}
        </div>

        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="mb-3 block font-mono text-xs font-bold uppercase tracking-widest text-brand-primary">
              Slide {String(currentIndex + 1).padStart(2, "0")}
            </span>
            <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl">
              {slides[currentIndex].title}
            </h3>
            <p className="text-sm leading-relaxed text-white/85 md:text-base">
              {slides[currentIndex].description}
            </p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              aria-label={`Previous ${label} slide`}
              onClick={goToPrevious}
              className="h-11 w-11 border border-white/40 bg-white/10 font-mono text-lg font-bold text-white transition-colors hover:bg-brand-primary hover:text-brand-dark"
            >
              &lt;
            </button>
            <button
              type="button"
              aria-label={`Next ${label} slide`}
              onClick={goToNext}
              className="h-11 w-11 border border-white/40 bg-white/10 font-mono text-lg font-bold text-white transition-colors hover:bg-brand-primary hover:text-brand-dark"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

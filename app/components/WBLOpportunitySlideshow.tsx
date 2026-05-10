"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Opportunity = {
  title: string;
  description: string;
  image: string;
};

export default function WBLOpportunitySlideshow({
  opportunities,
}: {
  opportunities: Opportunity[];
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
    if (shouldReduceMotion || opportunities.length <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % opportunities.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [opportunities.length, shouldReduceMotion]);

  const goToPrevious = () => {
    setCurrentIndex((currentIndex - 1 + opportunities.length) % opportunities.length);
  };

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % opportunities.length);
  };

  return (
    <div className="relative h-[520px] w-full overflow-hidden border border-brand-dark/10 bg-brand-dark shadow-2xl">
      {opportunities.map((opportunity, index) => (
        <div
          key={opportunity.title}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={opportunity.image}
            alt=""
            aria-hidden="true"
            fill
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" aria-hidden="true" />
        </div>
      ))}

      <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-10">
        <div className="mb-5 flex gap-2">
          {opportunities.map((opportunity, index) => (
            <button
              key={opportunity.title}
              type="button"
              aria-label={`Show ${opportunity.title}`}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 transition-all duration-500 ${
                index === currentIndex ? "w-12 bg-brand-primary" : "w-4 bg-white/60"
              }`}
            />
          ))}
        </div>

        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="mb-3 block font-mono text-xs font-bold uppercase tracking-widest text-brand-primary">
              Opportunity {String(currentIndex + 1).padStart(2, "0")}
            </span>
            <h3 className="mb-3 text-3xl font-bold text-white md:text-4xl">
              {opportunities[currentIndex].title}
            </h3>
            <p className="text-base leading-relaxed text-white/85 md:text-lg">
              {opportunities[currentIndex].description}
            </p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Previous work-based learning opportunity"
              onClick={goToPrevious}
              className="h-12 w-12 border border-white/40 bg-white/10 font-mono text-lg font-bold text-white transition-colors hover:bg-brand-primary hover:text-brand-dark"
            >
              &lt;
            </button>
            <button
              type="button"
              aria-label="Next work-based learning opportunity"
              onClick={goToNext}
              className="h-12 w-12 border border-white/40 bg-white/10 font-mono text-lg font-bold text-white transition-colors hover:bg-brand-primary hover:text-brand-dark"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

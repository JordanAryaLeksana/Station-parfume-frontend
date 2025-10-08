"use client";
import { useEffect } from "react";
import type { EmblaCarouselType } from "embla-carousel";

export function useHorizontalScroll(emblaRef: React.MutableRefObject<EmblaCarouselType | null>, speedFactor = 1.5) {
  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("horizontal-section");
      if (!section || !emblaRef.current) return;

      const rect = section.getBoundingClientRect();

      if (rect.top <= 0 && rect.bottom > window.innerHeight) {
        const scrollProgress = Math.min(
          Math.max(((window.scrollY - section.offsetTop) / section.offsetHeight) * speedFactor, 0),
          1
        );

        const totalSlides = emblaRef.current.scrollSnapList().length;
        const targetIndex = Math.floor(scrollProgress * (totalSlides - 1));
        emblaRef.current.scrollTo(targetIndex);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [emblaRef]);
}
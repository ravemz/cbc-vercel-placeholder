"use client";

import React, { useState, useEffect, useCallback } from "react";
import TestimonialCard from "./testimonial-card";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: string;
  companyLogo: { src: string; alt: string; width?: number; sizes?: string; srcSet?: string };
  testimonialText: string;
  attribution: string;
  attributionTitle?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  pauseOnHover?: boolean;
  showDots?: boolean;
  showArrows?: boolean;
  showCounter?: boolean;
  slidesToShow?: number;
  transitionDuration?: number;
  className?: string;
}

export default function TestimonialCarousel({
  testimonials,
  autoPlay = true,
  autoPlayInterval = 4000,
  pauseOnHover = true,
  showDots = true,
  showArrows = true,
  showCounter = false,
  slidesToShow = 1,
  transitionDuration = 500,
  className = "",
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState(0);
  const [showMobileArrows, setShowMobileArrows] = useState(true);

  useEffect(() => {
    if (!autoPlay || isHovered || isDragging || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      goToNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, autoPlayInterval, isHovered, isDragging, currentIndex, testimonials.length]);

  useEffect(() => {
    const timer = setTimeout(() => setShowMobileArrows(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const showMobileArrowsTemporarily = useCallback(() => {
    setShowMobileArrows(true);
    setTimeout(() => setShowMobileArrows(false), 2000);
  }, []);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), transitionDuration);
  }, [isTransitioning, testimonials.length, transitionDuration]);

  const goToPrevious = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), transitionDuration);
  }, [isTransitioning, testimonials.length, transitionDuration]);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentIndex) return;
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), transitionDuration);
    },
    [isTransitioning, currentIndex, transitionDuration]
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") goToPrevious();
      else if (event.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrevious]);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (isTransitioning) return;
      setIsDragging(true);
      setDragStart({ x: e.clientX, y: e.clientY });
      setDragOffset(0);
    },
    [isTransitioning]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      setDragOffset(e.clientX - dragStart.x);
    },
    [isDragging, dragStart.x]
  );

  const handleMouseUp = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 50;
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) goToPrevious();
      else goToNext();
    }
    setDragOffset(0);
  }, [isDragging, dragOffset, goToNext, goToPrevious]);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (isTransitioning) return;
      setIsDragging(true);
      const touch = e.touches[0];
      setDragStart({ x: touch.clientX, y: touch.clientY });
      setDragOffset(0);
      showMobileArrowsTemporarily();
    },
    [isTransitioning, showMobileArrowsTemporarily]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return;
      const touch = e.touches[0];
      setDragOffset(touch.clientX - dragStart.x);
    },
    [isDragging, dragStart.x]
  );

  const handleTouchEnd = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 50;
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) goToPrevious();
      else goToNext();
    }
    setDragOffset(0);
  }, [isDragging, dragOffset, goToNext, goToPrevious]);

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        setDragOffset(0);
      }
    };

    document.addEventListener("mouseup", handleGlobalMouseUp);
    return () => document.removeEventListener("mouseup", handleGlobalMouseUp);
  }, [isDragging]);

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <div
      className={`relative w-full ${className}`}
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
    >
      <div
        className="relative overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={`flex ${isDragging ? "transition-none" : "transition-transform duration-500 ease-in-out"}`}
          style={{ transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="w-full flex-shrink-0"
              style={{ minWidth: `${100 / slidesToShow}%` }}
            >
              <TestimonialCard
                companyLogo={testimonial.companyLogo}
                testimonialText={testimonial.testimonialText}
                attribution={testimonial.attribution}
                attributionTitle={testimonial.attributionTitle}
                className={`transition-opacity duration-300 ${
                  index === currentIndex ? "opacity-100" : "opacity-90"
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {showArrows && testimonials.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            disabled={isTransitioning}
            className="absolute -left-16 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed z-10 hidden lg:flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={goToNext}
            disabled={isTransitioning}
            className="absolute -right-16 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed z-10 hidden lg:flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          <button
            onClick={() => {
              goToPrevious();
              showMobileArrowsTemporarily();
            }}
            disabled={isTransitioning}
            className={`absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border border-gray-200 rounded-full p-2 shadow-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10 lg:hidden items-center justify-center ${
              showMobileArrows ? "flex opacity-100" : "flex opacity-0 pointer-events-none"
            }`}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          <button
            onClick={() => {
              goToNext();
              showMobileArrowsTemporarily();
            }}
            disabled={isTransitioning}
            className={`absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border border-gray-200 rounded-full p-2 shadow-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10 lg:hidden items-center justify-center ${
              showMobileArrows ? "flex opacity-100" : "flex opacity-0 pointer-events-none"
            }`}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        </>
      )}

      {(showDots || showCounter) && testimonials.length > 1 && (
        <div className="flex items-center justify-center mt-8 space-x-4">
          {showCounter && (
            <div className="text-sm text-gray-500 font-medium">
              {currentIndex + 1} of {testimonials.length}
            </div>
          )}

          {showDots && (
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  disabled={isTransitioning}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex ? "bg-cb-orange scale-110" : "bg-gray-300 hover:bg-gray-400"
                  } disabled:cursor-not-allowed`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export type { Testimonial };

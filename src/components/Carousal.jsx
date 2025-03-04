'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useFetchDescCarousal, useFetchMobCarousal } from '@/lib/data';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const { data: desktopSlides, isLoading, error } = useFetchDescCarousal();
  const { data: mobileSlides, isLoading: isLoading0, error: error0 } = useFetchMobCarousal();

  const slides = isMobile ? mobileSlides : desktopSlides;

  // Handle window resize to detect mobile/desktop
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (isAnimating || !slides?.length) return;

    const interval = setInterval(() => {
      handleNext();
    }, 7000);

    return () => clearInterval(interval);
  }, [currentSlide, isAnimating, slides]);

  // Handle next slide
  const handleNext = useCallback(() => {
    if (isAnimating || !slides?.length) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 500); // Match transition duration
  }, [isAnimating, slides]);

  // Handle previous slide
  const handlePrev = useCallback(() => {
    if (isAnimating || !slides?.length) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 500); // Match transition duration
  }, [isAnimating, slides]);

  // Handle dot click
  const handleDotClick = useCallback(
    (index) => {
      if (isAnimating || index === currentSlide || !slides?.length) return;
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 500); // Match transition duration
    },
    [isAnimating, currentSlide, slides]
  );

  if (isLoading || isLoading0) {
    return (
      <div
        className="bg-gray-300 rounded-lg w-full animate-pulse mb-3"
        style={{ height: '600px' }}
      ></div>
    );
  }
  
  if (error || error0) return <div>Error loading carousel data.</div>;

  return (
    <div className="relative w-full md:h-[450px] lg:h-[250px] xl:h-[450px] h-[200px] overflow-hidden bg-gray-100">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides?.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-full transition-all duration-500 ease-in-out transform
              ${index === currentSlide ? 'opacity-100 translate-x-0' : 
                index < currentSlide ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full'}`}
            aria-hidden={index !== currentSlide}
          >
            {/* Image */}
            <div className="relative w-full h-full lazy-loading">
              <img
                src={slide.image}
                alt={slide.title || 'Carousel Slide'}
                className="object-cover w-full h-full"
                loading="lazy" // Improve performance
              />
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center transform transition-all duration-700">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl text-center max-w-2xl mx-auto transform transition-all duration-700">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons - Only visible on Desktop */}
      {!isMobile && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-200"
            aria-label="Previous slide"
            disabled={isAnimating}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-200"
            aria-label="Next slide"
            disabled={isAnimating}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </>
      )}

      {/* Dots Indicator - Only visible on Desktop */}
      {!isMobile && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides?.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 
                ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'}`}
              aria-label={`Go to slide ${index + 1}`}
              disabled={isAnimating}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroCarousel;

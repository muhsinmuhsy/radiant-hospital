'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useFetchDescCarousal, useFetchMobCarousal } from '@/lib/data';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const { data, isLoading, error} = useFetchDescCarousal();

  const { data: data0, isLoading: isLoading0, error: error0} = useFetchMobCarousal();

  // ENT Hospital specific slides

  // const Slides = [  
  //   { id: 1, image: "/carousal1.png" },
  //   { id: 2, image: "/carousal2.png" },
  //   { id: 3, image: "/carousal3.png" },
  // ];

  const DesktopSlides = data;
  
  const MobileSlides = data0;

  const [isMobile, setIsMobile] = useState(false);
  const slides = isMobile ? MobileSlides : DesktopSlides;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    // Set initial state
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        handleNext();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides?.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleDotClick = (index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="relative w-full h-[550px] overflow-hidden bg-gray-100">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides?.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-full transition-all duration-500 ease-in-out transform
              ${index === currentSlide ? 'opacity-100 translate-x-0' : 
                index < currentSlide ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full'}`}
          >
            {/* Image */}
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="object-cover w-full h-full"
              />
              {/* Overlay with medical-themed color */}
              <div className={`absolute inset-0 ${slide.overlayColor}`} />
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

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-200"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides?.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 
              ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
'use client';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MainContent, ServiceBtn } from './ServiceSection';
import Link from 'next/link';
import { useFetchConsultants, useFetchHomeConsultantHeader } from '@/lib/data';
import DoctorProfilePopup from './DoctorPopup';

// Simple animation styles
const animationStyles = `
  /* Simple slide animation */
  .carousel-container {
    position: relative;
    overflow: hidden;
  }
  
  .carousel-slide {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    transition: transform 0.6s ease;
  }
  
  @media (min-width: 768px) {
    .carousel-slide {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (min-width: 1024px) {
    .carousel-slide {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  .doctor-card {
    opacity: 0;
    transform: translateY(10px);
    animation: fadeIn 0.5s forwards;
  }
  
  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Custom mobile styles */
  @media (max-width: 377px) {
    .custom-main-content h1 {
      font-size: 3rem !important;
      
    }
    
    /* Fix for doctor image container on small screens */
    .doctor-image-container {
      width: 85% !important;
    }
    
    .doctor-image {
      height: 250px !important;
      max-width: 100% !important;
      width: 100% !important;
    }
  }
`;

const DoctorsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isPaused, setIsPaused] = useState(true); // Start paused until scrolled into view
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);
  const observerRef = useRef(null);

  const { consultant, isLoading, error } = useFetchConsultants();
  const { consultantHeader, isLoading: isLoading0, error: error0 } = useFetchHomeConsultantHeader();

  const Data = consultant || [];
  const cardsPerView = isMobile ? 1 : isTablet ? 2 : 3;
  
  // Calculate total slides needed
  const totalSlides = Data.length ? Math.ceil(Data.length / cardsPerView) : 1;

  // Handle next slide transition
  const handleNext = useCallback(() => {
    if (isAnimating || totalSlides <= 1) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1 >= totalSlides ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 600); // Match transition duration
  }, [isAnimating, totalSlides]);

  // Handle previous slide transition
  const handlePrev = useCallback(() => {
    if (isAnimating || totalSlides <= 1) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 600); // Match transition duration
  }, [isAnimating, totalSlides]);

  // Handle manual pause during user interaction
  const handleManualPause = useCallback((pause) => {
    setIsPaused(pause);
  }, []);

  // Auto-play functionality - now works for all screen sizes
  const play = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    
    // Only start autoplay if the section is visible and not manually paused
    if (isVisible && !isPaused && Data.length > 0 && totalSlides > 1) {
      autoPlayRef.current = setInterval(() => {
        handleNext();
      }, 7000);
    }
  }, [isPaused, isVisible, Data.length, totalSlides, handleNext]);

  // Set up Intersection Observer to detect when carousel is in viewport
  useEffect(() => {
    if (!sectionRef.current) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        // Update visibility state when intersection changes
        setIsVisible(entry.isIntersecting);
        
        // When it comes into view, unpause if it was paused due to visibility
        if (entry.isIntersecting) {
          setIsPaused(false);
        } else {
          // Pause when out of view
          setIsPaused(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.25 // Trigger when 25% of the component is visible
      }
    );

    observerRef.current.observe(sectionRef.current);
    
    return () => {
      if (observerRef.current && sectionRef.current) {
        observerRef.current.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Handle autoplay based on visibility and pause state
  useEffect(() => {
    play();
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [play]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Make sure we don't exceed the maximum number of slides
  // Fix: Add proper dependency array with consistent size
  useEffect(() => {
    if (activeIndex >= totalSlides) {
      setActiveIndex(0);
    }
  }, [activeIndex, totalSlides]);

  const minSwipeDistance = 50;

  const handleTouchStart = (e) => {
    handleManualPause(true);
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleManualPause(false);
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) handleNext();
    if (distance < -minSwipeDistance) handlePrev();

    setTouchStart(null);
    setTouchEnd(null);
  };

  if (error) console.log(`Error loading data: ${error.message}`);
  if (error0) console.log(`Error loading data: ${error0.message}`);

  // Calculate the current slice of data to display
  const currentDoctors = Data.length > 0 
    ? Data.slice(
        activeIndex * cardsPerView, 
        Math.min((activeIndex + 1) * cardsPerView, Data.length)
      )
    : [];

  return (
    <section ref={sectionRef} className="mt-8 mb-8 mx-auto max-w-[1536px] py-8 md:px-8">
      <style>{animationStyles}</style>
      
      <ServiceBtn>
        <div className="left text-black">Our Consultants</div>
        <div className="right">
          <button>
            <Link href={'/pages/consultants'} className="text-[#795F9F]">
              Explore More
            </Link>
          </button>
          <img src="/right-icon-new.svg" alt="icon" />
        </div>
      </ServiceBtn>

      <MainContent className="mb-10 custom-main-content">
        <h1 className="text-black">{consultantHeader?.title || ''}</h1>
        <p className="text-black">
          {consultantHeader?.description || ''}
        </p>
      </MainContent>

      <div className="relative max-w-7xl mx-auto">
        {totalSlides > 1 && !isMobile && (
          <button
            onClick={() => {
              handleManualPause(true);
              handlePrev();
              setTimeout(() => handleManualPause(false), 5000);
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-[#795F9F] rounded-full hover:bg-[#D4BEDE] transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
        )}

        <div
          className="carousel-container mx-0 md:mx-12"
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => handleManualPause(true)}
          onMouseLeave={() => isVisible && handleManualPause(false)}
        >
          <div className="carousel-slide">
            {Data.length > 0 ? (
              // Using the pre-calculated array to avoid calculations during render
              currentDoctors.map((doctor, index) => (
                <div 
                  key={index} 
                  className="px-2 md:px-4"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="doctor-card bg-[#f7e8fe] border border-[#f0d0ff] rounded-[25px] h-[440px] overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="doctor-image-container bg-[#795F9F] w-[70%] mx-auto rounded-b-[15px] flex justify-center items-center">
                      <img 
                        src={doctor?.image} 
                        alt={doctor?.name || `Doctor ${index + 1}`} 
                        className="doctor-image w-full h-[250px] object-cover object-center rounded-b-[15px]" 
                      />
                    </div>
                    <div className="text-center mt-3">
                      <h1 className="text-[1.5rem] mb-0 text-black">{doctor?.name || `Doctor ${index + 1}`}</h1>
                      <p className="text-[0.9rem] text-[#555] leading-[1.5] mb-[10px] px-5">
                        {doctor?.specialty || 'Specialist'}
                      </p>
                      <DoctorProfilePopup selectedDoctor={doctor} />  
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center col-span-3 text-gray-500">No consultants available</p>
            )}
          </div>
        </div>

        {totalSlides > 1 && !isMobile && (
          <button
            onClick={() => {
              handleManualPause(true);
              handleNext();
              setTimeout(() => handleManualPause(false), 5000);
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-[#795F9F] rounded-full hover:bg-[#D4BEDE] transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        )}
        
        {/* Navigation dots - show for all screen sizes when multiple slides exist */}
        {totalSlides > 1 && (
          <div className="flex justify-center mt-6 gap-2">
            {[...Array(totalSlides)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveIndex(idx);
                  handleManualPause(true);
                  setTimeout(() => handleManualPause(false), 3000);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? 'bg-[#795F9F] w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default DoctorsCarousel;
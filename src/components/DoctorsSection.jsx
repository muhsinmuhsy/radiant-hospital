'use client';
import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MainContent, ServiceBtn } from './ServiceSection';
import Link from 'next/link';
import { useFetchConsultants, useFetchHomeConsultantHeader } from '@/lib/data';
import DoctorProfilePopup from './DoctorPopup';

// Retained original animation styles
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
      height: 280px !important;
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
  
  // Performance optimization: Combine mobile and tablet states
  const [screenInfo, setScreenInfo] = useState({
    isMobile: false,
    isTablet: false
  });
  
  const [isPaused, setIsPaused] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);
  const observerRef = useRef(null);

  const { consultant, isLoading, error } = useFetchConsultants();
  const { consultantHeader, isLoading: isLoading0, error: error0 } = useFetchHomeConsultantHeader();

  // Memoize data processing to reduce unnecessary calculations
  const memoizedData = useMemo(() => {
    const Data = consultant || [];
    const cardsPerView = screenInfo.isMobile ? 1 : screenInfo.isTablet ? 2 : 3;
    const totalSlides = Data.length ? Math.ceil(Data.length / cardsPerView) : 1;
    
    return {
      Data,
      cardsPerView,
      totalSlides
    };
  }, [consultant, screenInfo]);

  // Optimized slide transition handlers
  const handleNext = useCallback(() => {
    const { totalSlides } = memoizedData;
    if (isAnimating || totalSlides <= 1) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1 >= totalSlides ? 0 : prev + 1));
    
    const timer = setTimeout(() => setIsAnimating(false), 600);
    return () => clearTimeout(timer);
  }, [isAnimating, memoizedData]);

  const handlePrev = useCallback(() => {
    const { totalSlides } = memoizedData;
    if (isAnimating || totalSlides <= 1) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    
    const timer = setTimeout(() => setIsAnimating(false), 600);
    return () => clearTimeout(timer);
  }, [isAnimating, memoizedData]);

  // Retain original manual pause functionality
  const handleManualPause = useCallback((pause) => {
    setIsPaused(pause);
  }, []);

  // Optimized autoplay with memoization
  const play = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    
    const { Data, totalSlides } = memoizedData;
    if (isVisible && !isPaused && Data.length > 0 && totalSlides > 1) {
      autoPlayRef.current = setInterval(handleNext, 7000);
    }
  }, [isPaused, isVisible, memoizedData, handleNext]);

  // Retain original Intersection Observer logic
  useEffect(() => {
    if (!sectionRef.current) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        
        if (entry.isIntersecting) {
          setIsPaused(false);
        } else {
          setIsPaused(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.25
      }
    );

    observerRef.current.observe(sectionRef.current);
    
    return () => {
      if (observerRef.current && sectionRef.current) {
        observerRef.current.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Autoplay effect with dependency on play callback
  useEffect(() => {
    play();
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [play]);

  // Performance-optimized resize handling
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenInfo({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024
      });
    };

    // Initial call
    handleResize();
    
    // Add event listener with debounce
    const debouncedResize = () => {
      clearTimeout(window.resizeTimer);
      window.resizeTimer = setTimeout(handleResize, 100);
    };

    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(window.resizeTimer);
    };
  }, []);

  // Ensure active index doesn't exceed total slides
  useEffect(() => {
    const { totalSlides } = memoizedData;
    if (activeIndex >= totalSlides) {
      setActiveIndex(0);
    }
  }, [activeIndex, memoizedData]);

  // Touch handling methods
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

  // Error logging
  if (error) console.log(`Error loading data: ${error.message}`);
  if (error0) console.log(`Error loading data: ${error0.message}`);

  // Memoized current doctors calculation
  const currentDoctors = useMemo(() => {
    const { Data, cardsPerView } = memoizedData;
    return Data.length > 0 
      ? Data.slice(
          activeIndex * cardsPerView, 
          Math.min((activeIndex + 1) * cardsPerView, Data.length)
        )
      : [];
  }, [activeIndex, memoizedData]);

  return (
    <section ref={sectionRef} className="mt-8 mb-8 mx-auto max-w-[1536px] py-8 md:px-8">
      <style>{animationStyles}</style>
      
      <ServiceBtn>
        <div className="left text-black">Our Consultants</div>
        <div className="right">
          <button>
            <Link href={'/consultants'} className="text-[#795F9F]">
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
        {memoizedData.totalSlides > 1 && !screenInfo.isMobile && (
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
            {currentDoctors.length > 0 ? (
              currentDoctors.map((doctor, index) => (
                <div 
                  key={doctor.id || index} 
                  className="px-2 md:px-4"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="doctor-card bg-[#f7e8fe] border border-[#f0d0ff] rounded-[25px] md:h-[440px] h-[460px] overflow-hidden transition-transform duration-300 hover:scale-105">
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

        {memoizedData.totalSlides > 1 && !screenInfo.isMobile && (
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
        
        {memoizedData.totalSlides > 1 && (
          <div className="flex justify-center mt-6 gap-2">
            {[...Array(memoizedData.totalSlides)].map((_, idx) => (
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
'use client';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MainContent, ServiceBtn } from './ServiceSection';
import Link from 'next/link';
import { useFetchConsultants, useFetchHomeConsultantHeader } from '@/lib/data';
import DoctorProfilePopup from './DoctorPopup';

const DoctorsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);

  const { consultant, isLoading, error } = useFetchConsultants();
  const { consultantHeader, isLoading: isLoading0, error: error0 } = useFetchHomeConsultantHeader();

  const Data = consultant || []; // Ensure Data is always an array
  const cardsPerView = isMobile ? 1 : isTablet ? 2 : 3;
  const totalSlides = Data.length ? Math.ceil(Data.length / cardsPerView) : 1;

  const play = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      if (!isPaused && Data.length > 0) {
        handleNext();
      }
    }, 10000);
  }, [isPaused, Data.length]);

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

  const minSwipeDistance = 50;

  const handleTouchStart = (e) => {
    setIsPaused(true);
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) handleNext();
    if (distance < -minSwipeDistance) handlePrev();

    setTouchStart(null);
    setTouchEnd(null);
  };

  const handlePrev = () => {
    if (isAnimating || Data.length === 0) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating || Data.length === 0) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1 >= totalSlides ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const translateValue = -(activeIndex * (100 / cardsPerView));

  if (error) console.log(`Error loading data: ${error.message}`);
  if (error0) console.log(`Error loading data: ${error0.message}`);

  return (
    <section className="mt-8 mb-8 mx-auto max-w-[1536px] py-8 md:px-8">
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

      <MainContent className="mb-10">
        <h1 className="text-black">{consultantHeader?.title || 'We Provide'}</h1>
        <p className="text-black">
          {consultantHeader?.specialty || 'Through our 25+ specialities, we provide in-depth expertise in the spectrum of advanced medical and surgical interventions. Our specialities are integrated to provide a seamless experience.'}
        </p>
      </MainContent>

      <div className="relative max-w-7xl mx-auto">
        {!isMobile && (
          <button
            onClick={() => {
              setIsPaused(true);
              handlePrev();
              setTimeout(() => setIsPaused(false), 5000);
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-[#795F9F] rounded-full hover:bg-[#D4BEDE] transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
        )}

        <div
          className="overflow-hidden mx-0 md:mx-12"
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${translateValue}%)` }}
          >
            {Data.length > 0 ? (
              Data.map((doctor, index) => (
                <div key={index} className="flex-shrink-0 px-2 md:px-4" style={{ width: `${100 / cardsPerView}%` }}>
                  <div className="bg-[#f7e8fe] border border-[#f0d0ff] rounded-[25px] h-[430px]  overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="bg-[#795F9F] w-[70%] mx-auto rounded-b-[15px]">
                      <img src={doctor?.image} alt={doctor?.name} className="w-full max-w-[250px] h-[250px] object-cover rounded-b-[15px]" />
                    </div>
                    <div className="text-center mt-3">
                      <h1 className="text-[1.5rem] mb-0 text-black">{doctor?.name}</h1>
                      <p className="text-[0.9rem] text-[#555] leading-[1.5] mb-[10px] px-5">{doctor?.specialty}</p>
                      <DoctorProfilePopup selectedDoctor={doctor} />  
                    </div>
                    
                  </div>
                 
                </div>
              ))
            ) : (
              <p className="text-center w-full text-gray-500">No consultants available</p>
            )}
          </div>
        </div>

        {!isMobile && (
          <button
            onClick={() => {
              setIsPaused(true);
              handleNext();
              setTimeout(() => setIsPaused(false), 5000);
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-[#795F9F] rounded-full hover:bg-[#D4BEDE] transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        )}
      </div>
    </section>
  );
};

export default DoctorsCarousel;

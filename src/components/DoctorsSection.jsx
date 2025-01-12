'use client';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MainContent, ServiceBtn } from './ServiceSection';
import Link from 'next/link';
import { useFetchConsultants, useFetchHomeConsultantHeader } from '@/lib/data';

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

  const DataSub = [
    {
      image: '/doc-2.png',
      name: 'Dr. Priyadarshan M.S',
      specialty: 'ENT Surgeon, Head and Neck Ultrasonography Professional Voice care',
    },
    {
      image: '/doc-1.svg',
      name: 'Dr. Faslim M.S',
      specialty: 'ENT Surgeon, Head and Neck Ultrasonography Professional Voice care',
    },
    {
      image: '/doc-3.png',
      name: 'Dr. Priyadarshan',
      specialty: 'ENT Surgeon, Head and Neck Ultrasonography Professional Voice care',
    },
    // Add more items if needed
  ];

  const Data = consultant || DataSub;

  

  const play = useCallback(() => {
    autoPlayRef.current = setInterval(() => {
      if (!isPaused) {
        handleNext();
      }
    }, 3000);
  }, [isPaused]);

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
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setActiveIndex((prev) =>
      prev === 0 ? Math.max(0, Data.length - cardsPerView) : prev - cardsPerView
    );

    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setActiveIndex((prev) =>
      prev + cardsPerView >= Data.length ? 0 : prev + cardsPerView
    );

    setTimeout(() => setIsAnimating(false), 500);
  };

  const cardsPerView = isMobile ? 1 : isTablet ? 2 : 3;
  const translateValue = -(activeIndex * (100 / cardsPerView));

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <div className="w-10 m-10 h-10 border-4 border-t-4 border-gray-300 rounded-full animate-spin" style={{ borderTopColor: '#21ccd2' }}></div>

      </div>
    );
  }
  if (error) {
    console.log(`Error loading data: ${error.message}`);
  }

  if (isLoading0) {
    return (
      <div className="flex justify-center items-center">
        <div className="w-10 m-10 h-10 border-4 border-t-4 border-gray-300 rounded-full animate-spin" style={{ borderTopColor: '#21ccd2' }}></div>

      </div>
    );
  }
  if (error0) {
    console.log(`Error loading data: ${error0.message}`);
  }

  return (
    <section className="mt-8 mb-8 mx-auto max-w-[1536px] py-8 px-4 md:px-8">
      <ServiceBtn>
        <div className="left text-black">Our Consultants</div>
        <div className="right">
          <button>
            <Link href={'/pages/consultants'} className="text-[#008488]">
              Explore More
            </Link>
          </button>
          <img src="/button-right-arrow-blue.svg" alt="icon" />
        </div>
      </ServiceBtn>

      <MainContent>
        {/* <h1 className="text-black">We Provide</h1>
        <p className="text-black">
          Through our 25+ specialities, we provide in-depth expertise in the spectrum of advanced medical and surgical interventions. Our specialities are integrated to provide a seamless experience.
        </p> */}

      <h1 className="text-black">{consultantHeader?.title || "We Provide"}</h1>
      <p className="text-black">
        {consultantHeader?.specialty || "Through our 25+ specialities, we provide in-depth expertise in the spectrum of advanced medical and surgical interventions. Our specialities are integrated to provide a seamless experience."}
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
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-[#11b3b8] rounded-full hover:bg-[#008488] transition-colors"
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
            style={{
              transform: `translateX(${translateValue}%)`,
            }}
          >
            {Data.map((doctor, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-2 md:px-4"
                style={{ width: `${100 / cardsPerView}%` }}
              >
                <div className="bg-[#B3FAFF29] border border-[#B3E4FF82] rounded-[25px] h-[390px] overflow-hidden transition-transform duration-300 hover:scale-105">
                  <div className="bg-[#11b3b8] w-[70%] mx-auto rounded-b-[15px]">
                    <img
                      src={doctor?.image}
                      alt={doctor?.name}
                      className="w-full max-w-[250px] h-[250px] object-cover rounded-b-[15px]"
                    />
                  </div>
                  <div className="text-center mt-3">
                    <h1 className="text-[1.5rem] mb-0 text-black">{doctor?.name}</h1>
                    <p className="text-[0.9rem] text-[#555] leading-[1.5] mb-[10px]">
                      {doctor?.specialty}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {!isMobile && (
          <button
            onClick={() => {
              setIsPaused(true);
              handleNext();
              setTimeout(() => setIsPaused(false), 5000);
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-[#11b3b8] rounded-full hover:bg-[#008488] transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        )}

        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: Math.ceil(Data.length / cardsPerView) }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsPaused(true);
                if (!isAnimating) {
                  setIsAnimating(true);
                  setActiveIndex(index * cardsPerView);
                  setTimeout(() => setIsAnimating(false), 500);
                }
                setTimeout(() => setIsPaused(false), 5000);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index * cardsPerView ? 'bg-[#11b3b8] w-6' : 'bg-[#11b3b8]/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsCarousel;

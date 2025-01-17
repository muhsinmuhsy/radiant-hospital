import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useFetchServices } from '@/lib/data';

const ServiceCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);

  const { service, isLoading, error } = useFetchServices();

  const DataSub = [
    {
      icon: '/hearing-aid.svg',
      title: 'Hearing Aid',
      description:
        'There are no hearing aids that are only for children, but there are hearing aids with features that suit children especially well.',
    },
    {
      icon: '/vertigo.svg',
      title: 'Vertigo Clinic',
      description:
        'There are no hearing aids that are only for children, but there are hearing aids with features that suit children especially well.',
    },
    {
      icon: '/endoscopy.svg',
      title: 'Endoscopic & Skull Base Surgery',
      description:
        'ENT surgery has expanded its vistas more than any other surgical specialty in the world. An excellent example is endoscopic surgery.',
    },
    {
      icon: '/hearing-aid.svg',
      title: 'Vertigo Clinic',
      description:
        'There are no hearing aids that are only for children, but there are hearing aids with features that suit children especially well.',
    },
    {
      icon: '/vertigo.svg',
      title: 'Vertigo Clinic',
      description:
        'There are no hearing aids that are only for children, but there are hearing aids with features that suit children especially well.',
    },
    {
      icon: '/vertigo.svg',
      title: 'Vertigo Clinic',
      description:
        'There are no hearing aids that are only for children, but there are hearing aids with features that suit children especially well.',
    },
  ];

  const Data = service || DataSub;
  

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

  const cardsPerView = isMobile ? 1 : isTablet ? 2 : 3; // Adjust for tablet view
  const translateValue = -(activeIndex * (100 / cardsPerView));

  
  if (error) {
    console.log(`Error loading data: ${error.message}`);
  }

  return (
    <section className="relative px-4 py-8 md:px-8">
      <div className="max-w-7xl mx-auto relative">
        {!isMobile && (
          <button
            onClick={() => {
              setIsPaused(true);
              handlePrev();
              setTimeout(() => setIsPaused(false), 5000);
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
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
            {Data.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-2 md:px-4"
                style={{ width: `${100 / cardsPerView}%` }}
              >
                <div className="bg-white/20 border-2 border-white/50 rounded-[40px] h-[300px] p-4 text-center">
                  <div className="heading flex flex-col items-center mb-4">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-[60px] h-[60px] mb-4"
                    />
                    <h1 className="text-xl md:text-2xl text-white">{item.title}</h1>
                  </div>
                  <div className="text">
                    <p className="text-sm md:text-base text-white mb-6">{item.description}</p>
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
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
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
                activeIndex === index * cardsPerView ? 'bg-white w-6' : 'bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCarousel;

'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const testimonials = [
  {
    name: "David Miller",
    treatment: "Sinus Surgery",
    content: "Dr. Smith's expertise in treating my chronic sinusitis was exceptional. After years of struggling with breathing problems, I can finally breathe normally again.",
    rating: 5,
    date: "March 2024"
  },
  {
    name: "Sarah Chen",
    treatment: "Tonsillectomy",
    content: "The entire staff was incredibly supportive throughout my recovery. The post-operative care instructions were clear, and the follow-up was thorough.",
    rating: 5,
    date: "February 2024"
  },
  {
    name: "James Wilson",
    treatment: "Hearing Aid Fitting",
    content: "The audiologists here are amazing. They took the time to find the perfect hearing solution for my lifestyle. I can now enjoy conversations with my grandchildren.",
    rating: 5,
    date: "January 2024"
  }
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrent((current + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [current, isPlaying]);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    if (Math.abs(distance) >= minSwipeDistance) {
      if (distance > 0) {
        next();
      } else {
        prev();
      }
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div 
      className="w-full max-w-5xl mx-auto p-2 sm:p-4 md:p-6"
      
    >
      <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-[#ffffff] shadow-xl">
        <div className="absolute top-0 left-0 w-full h-2" style={{ background: '#11B3B8' }}></div>
        <div className="absolute top-2 left-0 w-full h-1" style={{ background: '#22CCD2' }}></div>

        <div className="p-4 sm:p-6 md:p-8">
          <div className="flex items-center justify-between mb-4 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold" style={{ color: '#1F2F61' }}>Patient Stories</h2>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1.5 sm:p-2 rounded-full hover:opacity-80"
              style={{ background: '#E6FEFF' }}
            >
              {isPlaying ? (
                <Pause className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: '#11B3B8' }} />
              ) : (
                <Play className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: '#11B3B8' }} />
              )}
            </button>
          </div>

          <div 
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="transition-transform duration-700 ease-in-out flex"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="w-full flex-shrink-0 px-2 sm:px-4"
                >
                  <div className="p-4 sm:p-6 rounded-lg sm:rounded-xl relative" 
                       style={{ background: 'rgba(17, 179, 184, 0.1)' }}>
                    <div className="absolute -bottom-0 -right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center"
                         style={{ background: '#11B3B8' }}>
                      <span className="text-white text-xl sm:text-2xl font-bold">+</span>
                    </div>
                    
                    <blockquote className="text-base sm:text-lg mb-4 sm:mb-6 italic" style={{ color: '#1F2F61' }}>
                      "{testimonial.content}"
                    </blockquote>
                    <div className="mt-3 sm:mt-4">
                      <div className="flex items-center gap-1 sm:gap-2 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" style={{ color: '#22CCD2' }} viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                          </svg>
                        ))}
                      </div>
                      <div className="space-y-0.5 sm:space-y-1">
                        <p className="font-semibold text-sm sm:text-base" style={{ color: '#1F2F61' }}>{testimonial.name}</p>
                        <p className="font-medium text-sm sm:text-base" style={{ color: '#11B3B8' }}>Treatment: {testimonial.treatment}</p>
                        <p className="text-xs sm:text-sm" style={{ color: '#1F2F61', opacity: 0.7 }}>{testimonial.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-4 sm:mt-6 gap-2 sm:gap-3">
            <button
              onClick={prev}
              className="p-1.5 sm:p-2 rounded-full transition-opacity hover:opacity-80"
              style={{ background: '#11B3B8' }}
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </button>
            <div className="flex items-center gap-1.5 sm:gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full transition-colors`}
                  style={{ 
                    background: idx === current ? '#11B3B8' : '#22CCD2',
                    opacity: idx === current ? 1 : 0.5
                  }}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-1.5 sm:p-2 rounded-full transition-opacity hover:opacity-80"
              style={{ background: '#11B3B8' }}
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
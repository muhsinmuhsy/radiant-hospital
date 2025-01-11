'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const OurEquipment = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const equipment = [
    {
      name: "Laminar Airflow Operation Theater",
      shortDesc: "Sterile environment for advanced surgical procedures",
      description: "The Laminar Airflow Operation Theater provides a sterile and controlled environment by utilizing unidirectional airflow to minimize contamination risk. It is designed to meet stringent surgical requirements for high-risk operations.",
      specs: {
        airflowType: "Unidirectional (Laminar)",
        filtrationEfficiency: "HEPA Filters (99.99% at 0.3 microns)",
        noiseLevel: "Below 60 dB",
        compliance: "ISO 14644-1 Class 5 (USA)"
      },
      image: "/air-flow.webp",
      color: "bg-emerald-500"
    },
    {
      name: "Carl Zeiss S5 Operating Microscope",
      shortDesc: "Precision surgical microscope for enhanced visualization",
      description: "The Carl Zeiss S5 is a state-of-the-art surgical microscope designed for intricate procedures, providing exceptional depth, clarity, and magnification. Engineered in Germany, it offers unmatched optical performance for delicate surgeries.",
      specs: {
        magnificationRange: "0.4x to 25x",
        lighting: "Xenon Illumination (300W)",
        opticalSystem: "Apochromatic Lenses",
        origin: "Germany"
      },
      image: "/carl-s5.webp",
      color: "bg-indigo-500"
    },
    {
      name: "Carl Zeiss PICO Operating Microscope",
      shortDesc: "Compact yet powerful surgical visualization tool",
      description: "The Carl Zeiss PICO is a compact surgical microscope designed for ENT and microsurgical applications. It combines precision optics with ergonomic design, offering surgeons unparalleled control and visibility.",
      specs: {
        magnification: "5x to 20x",
        illumination: "LED Light Source",
        design: "Compact and Mobile",
        origin: "Germany"
      },
      image: "/carl-pico.webp",
        color: "bg-gray-500"
    },
    {
      name: "ArthroCare Coblator 2",
      shortDesc: "Advanced tissue ablation and coagulation device",
      description: "The ArthroCare Coblator 2 is a cutting-edge surgical device that uses plasma technology for precise tissue removal and coagulation, minimizing damage to surrounding tissues. It is highly effective for ENT and orthopedic procedures.",
      specs: {
        technology: "Plasma-based Ablation",
        temperature: "40–70°C (Controlled)",
        applications: "ENT, Orthopedic, and Spine Surgery",
        origin: "USA"
      },
      image: "/arthrocare-2.webp",
      color: "bg-purple-500"
    },
    {
      name: "Medtronic Microdebriders",
      shortDesc: "High-performance tissue shaver for ENT surgeries",
      description: "Medtronic Microdebriders are versatile tools used for removing tissue in ENT procedures. Designed with precision and speed, these devices improve surgical outcomes by offering unparalleled control.",
      specs: {
        speed: "Up to 30,000 RPM",
        compatibility: "Multiple Blade Sizes",
        features: "Suction Integrated with Blade",
        origin: "USA"
      },
      image: "/medtronic.webp",
      color: "bg-teal-500"
    },
    {
      name: "Karl Storz Video Endoscopy",
      shortDesc: "High-definition endoscopy system for surgical precision",
      description: "The Karl Storz Video Endoscopy system delivers crystal-clear imaging for endoscopic surgeries. Manufactured in Germany, it supports various medical specialties with unmatched video quality and durability.",
      specs: {
        resolution: "Full HD (1080p)",
        imaging: "CMOS Sensor Technology",
        lighting: "Integrated LED Light Source",
        origin: "Germany"
      },
      image: "/karl-storz.webp",
      color: "bg-blue-500"
    },
    {
      name: "Stryker 4K Camera and Endoscopy System",
      shortDesc: "Advanced 4K imaging for minimally invasive surgeries",
      description: "The Stryker 4K system offers ultra-high-definition imaging for endoscopic procedures. With its advanced optics and ergonomic design, it enhances surgical precision and visualization.",
      specs: {
        resolution: "4K Ultra HD",
        connectivity: "HDMI Output",
        applications: "Laparoscopy, Arthroscopy",
        origin: "USA"
      },
      image: "/stryker-4k.webp",
      color: "bg-red-500"
    },
    {
      name: "Karl Storz Endocarynger Surgery System",
      shortDesc: "Comprehensive surgical tool for ENT procedures",
      description: "The Karl Storz Endocarynger Surgery System is engineered for precision in endoscopic ENT surgeries. Its robust design and high-quality optics ensure optimal outcomes for complex cases.",
      specs: {
        resolution: "HD Video",
        control: "Ergonomic Handle Design",
        accessories: "Multiple Endoscope Compatibility",
        origin: "Germany"
      },
      image: "/karl-storz.webp",
      color: "bg-orange-500"
    }
    
  ];

  const totalSlides = Math.ceil(equipment.length / 4);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Animated Header */}
        <div className="relative mb-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white/10 uppercase">Equipment</h1>
          <h2 className="absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl md:text-3xl font-light">Our Advanced</span>
            <span className="text-3xl md:text-4xl font-bold mt-2 ">Medical Technology</span>
          </h2>
        </div>

        {/* Equipment Carousel */}
        <div className="relative mb-8">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {equipment.slice(slideIndex * 4, (slideIndex + 1) * 4).map((item, index) => (
                      <button
                        key={index}
                        className={`w-full text-left p-4 rounded-lg transition-all duration-300 
                          ${activeIndex === slideIndex * 4 + index 
                            ? `${item.color} shadow-lg shadow-${item.color}/50` 
                            : 'bg-white/5 hover:bg-white/10'}`}
                        onClick={() => setActiveIndex(slideIndex * 4 + index)}
                      >
                        <span className={`text-sm ${activeIndex === slideIndex * 4 + index ? 'text-white' : 'text-white/60'}`}>
                          {String(slideIndex * 4 + index + 1).padStart(2, '0')}
                        </span>
                        <h3 className={`text-lg font-bold mt-2 ${activeIndex === slideIndex * 4 + index ? 'text-white' : 'text-white/80'}`}>
                          {item.name}
                        </h3>
                        <p className={`text-sm mt-1 ${activeIndex === slideIndex * 4 + index ? 'text-white/90' : 'text-white/60'}`}>
                          {item.shortDesc}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-between mt-6">
            <div className="flex items-center gap-4">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                disabled={currentSlide === 0}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                disabled={currentSlide === totalSlides - 1}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-white' : 'bg-white/20'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Equipment Display */}
        <div className="mt-8">
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden">
            <img
              src={equipment[activeIndex].image}
              alt={equipment[activeIndex].name}
              className="w-full h-full object-cover"
            />
            
            {/* Overlay Content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex flex-col items-start">
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">{equipment[activeIndex].name}</h2>
                  <p className="text-base md:text-lg text-white/80 max-w-2xl mb-4">
                    {equipment[activeIndex].description}
                  </p>
                  {isMobile && (
                    <button
                      onClick={() => setShowDetails(!showDetails)}
                      className={`px-6 py-2 rounded-full transition-all duration-300 
                        ${equipment[activeIndex].color} hover:opacity-90`}
                    >
                      {showDetails ? 'Hide Specs' : 'View Specs'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div
            className={`mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-500 ${
              isMobile && !showDetails ? 'hidden' : 'block'
            }`}
          >
            {Object.entries(equipment[activeIndex].specs).map(([key, value], index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                <div className="text-white/60 text-sm mb-1 capitalize">{key}</div>
                <div className="text-white text-base font-medium">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurEquipment;
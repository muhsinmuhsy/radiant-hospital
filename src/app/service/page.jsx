'use client';

import Footer from '@/components/Footer';

import Navbar from '@/components/Navbar';

import React from 'react';
import { useFetchServices, useFetchServiceHero } from '@/lib/data';

const ServicesPage = () => {
 
  const { service: services, isLoading, error } = useFetchServices();
  const { data } = useFetchServiceHero();

  return (
    <>
      <Navbar />
      <div className="relative">
        {/* Hero Section with Background */}
        <div 
          className="relative py-24 px-4 md:px-8"
          style={{
            background: 'linear-gradient(132.55deg, #feffff 26.07%, #ffffff 95.26%)'
          }}
        >
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">{data?.title}</h1>
              <p className="text-xl text-black/90 max-w-3xl mx-auto leading-relaxed">
              {data?.description}
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-white/10 blur-xl"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-white/10 blur-xl"></div>
        </div>
        
        {/* Services Section */}
        {/* Services Section */}
<div className="py-16 px-4 md:px-8" style={{
  background: '#795F9F'
}}>
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Specialized Services</h2>
      <p className="text-lg text-white/90 max-w-2xl mx-auto">
        Cutting-edge treatments delivered by experienced specialists for optimal results
      </p>
    </div>

    {/* Services Grid - Keeping the card design as requested */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services?.map((service, index) => (
        <div
          key={index}
          className="group hover:-translate-y-2 transition-all duration-300"
        >
          <div className="bg-white/20 border-2 border-white/50 rounded-[40px] h-[300px] p-6 text-center backdrop-blur-sm hover:bg-white/30 transition-colors">
            <div className="heading flex flex-col items-center mb-4">
              <div className="w-[60px] h-[60px] mb-4 group-hover:scale-110 transition-transform">
                <img
                  src={service?.icon}
                  alt={service?.title}
                  className="w-full h-full"
                />
              </div>
              <h2 className="text-xl md:text-2xl text-white font-semibold">
                {service?.title}
              </h2>
            </div>
            <div className="text">
              <p className="text-sm md:text-base text-white/90">
                {service?.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
</div>
        
        

        
    
    

      <Footer />
    </>
  );
};

export default ServicesPage;
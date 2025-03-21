'use client';
import React, { useState } from 'react';
import { Users, Award, Calendar, Building2, Star, Phone, Clock, MapPin, ChevronRight, Heart } from 'lucide-react';


import {
  useFetchContactHero,
  useFetchQuickInfo,
} from '@/lib/data';


const AboutusComponent = () => {


  const { data: contactHero, isLoading: isContactHeroLoading, error: contactHeroError } = useFetchContactHero();
  const { data: quickInfo, isLoading: isQuickInfoLoading, error: quickInfoError } = useFetchQuickInfo();
 

  return (
    <div className="">
   
      
      {/* Hero Section */}
      <div className="relative h-[40vh] xs:h-[45vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img 
          src="/radiant/18.jpg" 
          alt="Hospital" 
          className="absolute w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
              {contactHero?.title_one || "Welcome to"}<br />
              <span className="block mt-2" style={{ color: '#D4BEDE' }}>{contactHero?.title_two || "Radiant Hospital"}</span>
            </h1>
            <p className="text-base xs:text-lg sm:text-xl text-gray-200 max-w-2xl mb-16 sm:mb-20">
            {contactHero?.description || 'Pioneering ENT care in Kannur with advanced technology and compassionate healing for over two decades.'}
            </p>
          </div>
        </div>
      </div>

      {/* Quick Info */}
      <div className="bg-white shadow-lg relative -mt-16 sm:-mt-20 z-30 mx-3 xs:mx-4 sm:mx-8 lg:mx-auto max-w-6xl rounded-xl">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 md:p-8">
          {[
            { icon: <Phone />, title: "Contact", info: quickInfo?.contact},
            { icon: <Clock />, title: "Hours", info: quickInfo?.hours},
            { icon: <MapPin />, title: "Location", info: quickInfo?.location},
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#f4eff7] flex items-center justify-center shrink-0" style={{ color: '#795F9F' }}>
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base">{item.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{item.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default AboutusComponent;
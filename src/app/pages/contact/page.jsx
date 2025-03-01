'use client';
import React, { useState } from 'react';
import { Users, Award, Calendar, Building2, Star, Phone, Clock, MapPin, ChevronRight, Heart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
// import ConsultantsSection from '@/components/ConsultantsSection';
// import BlogSectionDisplay from '@/components/BlogDisplay';
import {
  useFetchContactHero,
  useFetchQuickInfo,
  useFetchMission,
  useFetchVision,
  useFetchOurValues,
  useFetchCTASection,
} from '@/lib/data';
import GetinTouch from '@/components/GetinTouch';
import WhyChooseUs from '@/components/WhyChoseUs';

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const [hoveredValue, setHoveredValue] = useState(null);


  const { data: contactHero, isLoading: isContactHeroLoading, error: contactHeroError } = useFetchContactHero();
  const { data: quickInfo, isLoading: isQuickInfoLoading, error: quickInfoError } = useFetchQuickInfo();
  const { data: mission, isLoading: isMissionLoading, error: missionError } = useFetchMission();
  const { data: vision, isLoading: isVisionLoading, error: visionError } = useFetchVision();
  const { data: ourValues, isLoading: isOurValuesLoading, error: ourValuesError } = useFetchOurValues();
  const { data: ctaSection, isLoading: isCTASectionLoading, error: ctaSectionError } = useFetchCTASection();

  // const valuesData = [
  //   { id: 1, icon: <Star size={24} />, title: 'Medical Excellence', 
  //     description: 'Committed to providing the highest standard of ENT care' },
  //   { id: 2, icon: <Award size={24} />, title: 'Innovation', 
  //     description: 'Using cutting-edge technology and latest medical advances' },
  //   { id: 3, icon: <Heart size={24} />, title: 'Patient-First Care', 
  //     description: 'Treating every patient with empathy and personalized attention' }
  // ];
  
  // Defining iconMap at the top so it is available in the map function
  const iconMap = [<Star size={24} />, <Award size={24} />, <Heart size={24} />];
  
  // Ensure ourValues is an array before mapping and fallback to valuesData if it's not
  const values = (Array.isArray(ourValues) && ourValues.length > 0 ? ourValues : ourValues)?.map((value, index) => ({
    ...value,
    icon: iconMap[index % iconMap.length], // Assign icon based on index
  }));

 

  return (
    <div className="min-h-screen">
      <Navbar />
      
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
              <span className="block mt-2" style={{ color: '#66e9ee' }}>{contactHero?.title_two || "Radiant Hospital"}</span>
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
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-teal-50 flex items-center justify-center shrink-0" style={{ color: '#11B3B8' }}>
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

      {/* Main Content */}
      <WhyChooseUs/>
        <GetinTouch/>
        {/* Mission & Vision */}
        
      <Footer />
    </div>
  );
};

export default AboutUs;
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

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const [hoveredValue, setHoveredValue] = useState(null);


  const { data: contactHero, isLoading: isContactHeroLoading, error: contactHeroError } = useFetchContactHero();
  const { data: quickInfo, isLoading: isQuickInfoLoading, error: quickInfoError } = useFetchQuickInfo();
  const { data: mission, isLoading: isMissionLoading, error: missionError } = useFetchMission();
  const { data: vision, isLoading: isVisionLoading, error: visionError } = useFetchVision();
  const { data: ourValues, isLoading: isOurValuesLoading, error: ourValuesError } = useFetchOurValues();
  const { data: ctaSection, isLoading: isCTASectionLoading, error: ctaSectionError } = useFetchCTASection();

  const valuesData = [
    { id: 1, icon: <Star size={24} />, title: 'Medical Excellence', 
      description: 'Committed to providing the highest standard of ENT care' },
    { id: 2, icon: <Award size={24} />, title: 'Innovation', 
      description: 'Using cutting-edge technology and latest medical advances' },
    { id: 3, icon: <Heart size={24} />, title: 'Patient-First Care', 
      description: 'Treating every patient with empathy and personalized attention' }
  ];
  
  // Defining iconMap at the top so it is available in the map function
  const iconMap = [<Star size={24} />, <Award size={24} />, <Heart size={24} />];
  
  // Ensure ourValues is an array before mapping and fallback to valuesData if it's not
  const values = (Array.isArray(ourValues) && ourValues.length > 0 ? ourValues : valuesData)?.map((value, index) => ({
    ...value,
    icon: iconMap[index % iconMap.length], // Assign icon based on index
  }));
  
  console.log(values);

 

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[40vh] xs:h-[45vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img 
          src="/spec-1.svg" 
          alt="Hospital" 
          className="absolute w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
              {contactHero?.title_one || "Welcome to"}<br />
              <span className="block mt-2" style={{ color: '#76f7fb' }}>{contactHero?.title_two || "Radiant Hospital"}</span>
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
            { icon: <Phone />, title: "Contact", info: quickInfo?.contact || "+91 123 456 7890" },
            { icon: <Clock />, title: "Hours", info: quickInfo?.hours || "24/7 Emergency Care" },
            { icon: <MapPin />, title: "Location", info: quickInfo?.location || "Kannur, Kerala" },
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
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 md:mb-20">
          <div>
            <div className="flex gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8 overflow-x-auto pb-2">
              {['mission', 'vision'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 sm:px-6 py-2 rounded-full whitespace-nowrap text-sm sm:text-base ${
                    activeTab === tab 
                      ? 'bg-teal-950 text-white' 
                      : 'bg-slate-400 text-white hover:bg-teal-300'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg">
              {activeTab === 'mission' ? (
                <>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">{mission?.title || "Our Mission"}</h2>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {mission?.description || 'To provide world-class ENT care through innovative treatments, expert specialists, and compassionate service. We strive to improve the quality of life for our patients using the latest medical advancements and personalized care approaches.'}
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">{vision?.title || "Our Vision"}</h2>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {/* To be the leading ENT healthcare provider in Kerala, recognized 
                    for excellence in patient care, medical innovation, and community 
                    service. We aim to set new standards in ENT healthcare through 
                    continuous advancement and patient-centered approaches. */}
                    {vision?.description || 'N/A'}
                  </p>
                </>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="aspect-square rounded-xl overflow-hidden">
              <img 
                src="/spec-2.svg" 
                alt="Hospital facility" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden mt-0 sm:mt-8">
              <img 
                src="/spec-3.svg" 
                alt="Medical staff" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-black">Our Values</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {values?.map((value) => (
              <div
                key={value.id}
                className="group bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onMouseEnter={() => setHoveredValue(value.id)}
                onMouseLeave={() => setHoveredValue(null)}
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 transition-colors duration-300 ${
                  hoveredValue === value.id ? 'bg-teal-500 text-white' : 'bg-teal-50 text-teal-600'
                }`}>
                  {value.icon}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">{value?.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{value?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-cyan-50 to-sky-200 rounded-xl p-6 sm:p-8 md:p-12 text-black">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
            {[
              { icon: <Users size={28} />, value: "20+", label: "Specialists" },
              { icon: <Building2 size={28} />, value: "25", label: "Years of Service" },
              { icon: <Calendar size={28} />, value: "10k+", label: "Surgeries" },
              { icon: <Star size={28} />, value: "98%", label: "Patient Satisfaction" }
            ].map((stat, i) => (
              <div key={i} className='mb-10'>
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-2 sm:mb-3 md:mb-4 flex items-center justify-center">
                  {stat.icon}
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 md:mb-2">{stat.value}</div>
                <div className="text-xs sm:text-sm md:text-base text-black">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-8 sm:py-12 md:py-16 px-4" style={{ background: 'linear-gradient(132.55deg, #74faff 15.07%, #304278 95.26%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
             {ctaSection?.title || "Ready to Experience Expert ENT Care?"}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-4 sm:mb-6 md:mb-8">
            {ctaSection?.description || 'Schedule a consultation with our specialists today'}
            
          </p>
          <button className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-white rounded-full font-semibold hover:bg-blue-50 transition-colors text-sm sm:text-base" style={{color:'#11B3B8'}}>
            Book an Appointment
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
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
import ContactComponent from '@/components/ContactComponent';

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
   <>
      <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      

      {/* Main Content */}
      <ContactComponent/>
    
        <GetinTouch/>
        {/* Mission & Vision */}
        
     
    </div>
     <Footer />
   </>
  );
};

export default AboutUs;
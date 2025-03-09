'use client';
import AboutStatus from '@/components/AboutStatus'
import AboutusComponent from '@/components/AboutusComponent'
import BlogSectionDisplay from '@/components/BlogDisplay'
import CTAButton from '@/components/CTAButton'
import DoctorCard from '@/components/DoctorCard'

import Footer from '@/components/Footer'
import MissionVision from '@/components/MissionVision'

import Navbar from '@/components/Navbar'

import WhyChooseUs from '@/components/WhyChoseUs'
import React from 'react'

import { useFetchAboutHero } from '@/lib/data'

function AboutusPage() {

  const { data, error, isLoading } = useFetchAboutHero();
  return (
    <>
     <Navbar/>
     <AboutusComponent/>
     <div className="bg-white text-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-[#795F9F] sm:text-4xl">{data?.title}</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
        {data?.description}
        </p>
        
      </div>
    </div>
     <AboutStatus/>
     <MissionVision/>
     <DoctorCard/>
     <WhyChooseUs/>
     <CTAButton/>
     <BlogSectionDisplay/>
     
     <Footer/>
    </>
  )
}

export default AboutusPage
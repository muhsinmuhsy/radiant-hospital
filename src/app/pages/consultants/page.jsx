'use client';
import BlogSectionDisplay from '@/components/BlogDisplay';
import DoctorList from '@/components/DoctorList';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import TestimonialCarousel from '@/components/Testimonial';
import WhyChooseUs from '@/components/WhyChoseUs';
import React from 'react'



const ConsultantsPage = () => {


  return (
    <>
       <Navbar/>
       <DoctorList/>
       <WhyChooseUs/>
       <BlogSectionDisplay/>
       <TestimonialCarousel/>
       <Footer/>
    </>
  );
};

export default ConsultantsPage;
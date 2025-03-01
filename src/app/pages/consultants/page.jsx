'use client';
import DoctorList from '@/components/DoctorList';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import WhyChooseUs from '@/components/WhyChoseUs';
import React from 'react'



const ConsultantsPage = () => {


  return (
    <>
       <Navbar/>
       <DoctorList/>
       <WhyChooseUs/>
    
       <Footer/>
    </>
  );
};

export default ConsultantsPage;
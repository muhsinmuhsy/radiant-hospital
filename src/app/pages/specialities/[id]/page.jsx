'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { CheckCircle, Calendar, ArrowRight, Award, Phone } from 'lucide-react';
import { useFetchSpecialities } from '@/lib/data';
import AppointmentBooking from '@/components/AppointmentBooking';

const SpecialtyDetails = () => {
  const { id } = useParams(); 

  const [specialty, setSpecialty] = useState(null);
  const { specialities, isLoading, error } = useFetchSpecialities();

  useEffect(() => {
    if (id) {

     
      const specialties = specialities;

      const matchedSpecialty = specialties.find((item) => item.id === Number(id));
      setSpecialty(matchedSpecialty);
    }
  }, [id, specialities]);



  
  if (error) {
    console.log(`Error loading data: ${error.message}`);
  }

  if (!specialty) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        {id ? <p>Specialty not found.</p> : <div className="animate-pulse">Loading...</div>}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className=" text-white"style={{ background: 'linear-gradient(132.55deg, #22CCD2 15.07%, #1F2F61 95.26%)' }}>
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">{specialty?.title}</h1>
              <p className="text-xl opacity-90">{specialty?.description}</p>
              <div className="flex items-center gap-2 bg-white/20 w-fit px-4 py-2 rounded-full">
                <Award className="w-5 h-5" />
                <span>{specialty?.stat}</span>
              </div>
            </div>
            <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              {specialty?.src ? (
                <Image
                  src={specialty?.src}
                  alt={specialty?.title}
                  fill
                  className="object-contain"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-600">Image not available</p>
                </div>
              )}
            </div>
          </div>

          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Detailed Description */}
          <div className="md:col-span-2 bg-white rounded-lg shadow-lg">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">About the Treatment</h2>
              <p className="text-gray-600 leading-relaxed">{specialty?.about}</p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Key benefits</h3>
                <div className="space-y-3">
                  {specialty?.benefits?.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 " style={{color:'#11B3B8'}} />
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Consultation Card */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-lg h-fit">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Schedule a Consultation</h2>
              <p className="text-gray-600 mb-6">
                Learn more about how this treatment can help you. Our specialists are ready to answer your questions.
              </p>

              <div
                
                className="w-full  text-white  rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 group" style={{backgroundColor:'#11B3B8'}}
              >
                 <AppointmentBooking/>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
              <button
                onClick={() => alert('Schedule Consultation')}
                className="w-full  text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 group mt-5" style={{backgroundColor:'#11B3B8'}}
              >
                
                <Phone className="w-5 h-5 " />
                Connect with us 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
      

      <Footer />
    </div>
  );
};

export default SpecialtyDetails;

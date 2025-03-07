'use client';

import React, { useState } from 'react';
import { useFetchConsultants } from '@/lib/data';
import AppointmentBookingDirectly from '@/components/AppointmentBookingDirectly';
import DoctorProfilePopup from './DoctorPopup';

const DoctorCard = () => {
  const { consultant, isLoading, error } = useFetchConsultants();
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  const doctors = consultant;
  
  // Get unique specialties for filter
  const specialties = doctors ? ['All', ...new Set(doctors.map(doc => doc.specialty))] : ['All'];
  
  // Filter doctors based on specialty
  const filteredDoctors = doctors?.filter(doctor => {
    return selectedSpecialty === 'All' || doctor.specialty === selectedSpecialty;
  });
  
  if (error) {
    console.log(`Error loading data: ${error.message}`);
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-[#f9f6ff] to-[#ffffff29] py-16">
      <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#795F9F] mb-4">Meet Our Doctors</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our exceptional team of healthcare professionals combines expertise with compassion. 
              Each specialist is committed to providing personalized care and innovative solutions 
              for your health needs. Learn more about our doctors below and find the right specialist for you.
            </p>
          </div>

      {/* Doctors Grid */}
      <div className="max-w-[1536px] mx-auto px-4">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#795F9F]"></div>
          </div>
        ) : filteredDoctors?.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">No doctors match your search criteria.</p>
            <button 
              className="mt-4 px-6 py-2 bg-[#795F9F] text-white rounded-full hover:bg-[#795F9F] transition-colors"
              onClick={() => setSelectedSpecialty('All')}
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
            {filteredDoctors?.map((doctor, index) => (
              <div key={index} className="group relative">
                <div className="bg-[#f5efff] border border-[##D4BEDE] rounded-[25px] h-[440px] w-[300px] mx-auto overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-[##D4BEDE]/20 hover:-translate-y-1">
                  <div className="bg-[#795F9F] w-[70%] mx-auto rounded-b-[15px] group-hover:bg-[#795F9F] transition-colors duration-300">
                    <img
                      src={doctor?.image}
                      alt={doctor?.name}
                      className="w-full max-w-[210px] h-[200px] object-cover rounded-b-[15px] mx-auto transition-transform duration-500"
                    />
                  </div>
                  <div className="text-center mt-3 px-4">
                    <h2 className="text-[1.25rem] mb-1 text-black font-semibold group-hover:text-[#795F9F] transition-colors duration-300">
                      {doctor?.name}
                    </h2>
                    <p className="text-[0.85rem] text-[#555] leading-[1.4] mb-3">
                      {doctor?.specialty}
                    </p>
                    <div className="text-white px-6 py-2 rounded-full transform transition-all duration-300 hover:scale-105">
                      <AppointmentBookingDirectly selectedDoctor={doctor} />
                      <div className='mt-2'>
                        <DoctorProfilePopup doctor={doctor} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -z-10 top-10 left-0 w-20 h-20 bg-[#795F9F]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -z-10 bottom-10 right-0 w-32 h-32 bg-[#795F9F]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default DoctorCard;

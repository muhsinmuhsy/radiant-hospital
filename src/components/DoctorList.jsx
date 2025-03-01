'use client';

import React from 'react'

import { useFetchConsultants, useFetchConsultantsMainHeader } from '@/lib/data';
import AppointmentBooking from '@/components/AppointmentBooking';

const DoctorList = () => {

  const { consultant, isLoading, error } = useFetchConsultants();
  const { data: ConsultantsMainHeaderData, isLoading: isLoading0, error: error0 } = useFetchConsultantsMainHeader();

  

  const doctors = consultant;
  
  
  if (error) {
    console.log(`Error loading data: ${error.message}`);
  }

  return (
    <>

       
    <section className="min-h-screen bg-gradient-to-b from-white to-[#B3FAFF29] py-16">
      {/* Header Section */}
      <div className="text-center mb-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-[#11b3b8] mb-4">
          {ConsultantsMainHeaderData?.title}
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
        {ConsultantsMainHeaderData?.description}
        </p>
      </div>

      {/* Doctors Grid */}
      <div className="max-w-[1536px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {doctors?.map((doctor, index) => (
            <div 
              key={index}
              className="group relative"
            >
              <div className="bg-[#B3FAFF29] border border-[#B3E4FF82] rounded-[25px] h-[360px] w-[300px] mx-auto overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-[#11b3b8]/20 hover:-translate-y-1">
                <div className="bg-[#11b3b8] w-[70%] mx-auto rounded-b-[15px] group-hover:bg-[#008488] transition-colors duration-300">
                  <img
                    src={doctor?.image}
                    alt={doctor?.name}
                    className="w-full max-w-[200px] h-[200px] object-cover rounded-b-[15px] mx-auto transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="text-center mt-3 px-4">
                  <h2 className="text-[1.25rem] mb-1 text-black font-semibold group-hover:text-[#11b3b8] transition-colors duration-300">
                    {doctor?.name}
                  </h2>
                  <p className="text-[0.85rem] text-[#555] leading-[1.4] mb-3">
                    {doctor?.specialty}
                  </p>
                  <div className=" text-white px-6 py-2 rounded-full transform transition-all duration-300  hover:scale-105 ">
                  <AppointmentBooking/>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -z-10 top-10 left-0 w-20 h-20 bg-[#11b3b8]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -z-10 bottom-10 right-0 w-32 h-32 bg-[#11b3b8]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      {/* <div className="text-center mt-16">
        <div className="inline-block bg-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
          <p className="text-[#11b3b8] font-medium">
            Need help finding the right doctor? Call us at{' '}
            <span className="font-bold">+91 123 456 7890</span>
          </p>
        </div>
      </div> */}
    </section>

    </>
  );
};

export default DoctorList;
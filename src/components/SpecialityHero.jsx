import React from 'react';
import { useFetchSpecialitiesHero } from '@/lib/data';
import AppointmentBooking from './AppointmentBooking';

const SpecialityHero = () => {

  const { data, isLoading, error } = useFetchSpecialitiesHero();

  
  if (error) {
    console.log(`Error loading data: ${error.message}`);
  }

  return (
     <div className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-blue-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-48 md:w-96 h-48 md:h-96 bg-blue-400 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-blue-300 rounded-full filter blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[400px] md:min-h-[500px] lg:min-h-[600px] py-12 lg:py-16">
          {/* Left Column - Text Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div>
              <span className="inline-block px-4 py-2 rounded-full    text-sm mb-4" style={{backgroundColor:'#11B3B8', color:'white'}}>
                {data?.simple_title}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                {/* Expert ENT Care with Advanced Surgical Solutions */}
                {data?.title}
              </h1>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {/* Discover our comprehensive range of specialized ENT procedures, combining cutting-edge technology with decades of surgical expertise for optimal patient care. */}
                {data?.description }
              </p>
            </div>

            {/* Key Statistics */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-2xl mx-auto lg:mx-0">
              <div className="text-center p-3 md:p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl md:text-3xl font-bold " style={{color:'#11B3B8'}}>{data?.Specialties_count }</div>
                <div className="text-xs md:text-sm text-gray-600">Specialties</div>
              </div>
              <div className="text-center p-3 md:p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl md:text-3xl font-bold " style={{color:'#11B3B8'}}>{data?.surgeries_count}</div>
                <div className="text-xs md:text-sm text-gray-600">Surgeries</div>
              </div>
              <div className="text-center p-3 md:p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl md:text-3xl font-bold " style={{color:'#11B3B8'}}>{data?.years_exp_count}</div>
                <div className="text-xs md:text-sm text-gray-600">Years Exp.</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {/* <button className="w-full sm:w-auto px-6 md:px-8 py-3  text-white  rounded-lg hover:bg-blue-700 transition-colors" style={{backgroundColor:'#11B3B8'}}>
                Book Consultation
              </button> */}
              <AppointmentBooking/>
              <button className="  px-10 md:px-8 py-3  rounded-lg hover:bg-blue-50 transition-colors" style={{border:'2px solid #11B3B8'}}>
                View Procedures
              </button>
            </div>
          </div>

          {/* Right Column - Medical Illustration */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-full  lg:mb-0">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96">
              <div className="absolute inset-0 bg-blue-100 rounded-full opacity-20"></div>
              <div className="relative w-full h-full">
                <img 
                  src={data?.image || '/spec-1.svg'}
                  alt="ENT Medical Illustration"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                />
                {/* Floating Badges */}
                <div className="absolute -top-4 -right-4 bg-white p-2 md:p-3 rounded-lg shadow-lg hidden sm:block">
                  <div className=" font-semibold text-sm md:text-base" style={{color:'#11B3B8'}}>{data?.image_badge_one}</div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white p-2 md:p-3 rounded-lg shadow-lg hidden sm:block">
                  <div className=" font-semibold text-sm md:text-base" style={{color:'#11B3B8'}}>{data?.image_badge_two}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialityHero;
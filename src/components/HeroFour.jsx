'use client';
import React, { useState } from 'react';
import { Calendar, Phone, MapPin, Clock, Shield, Stethoscope, Users, Menu, X } from 'lucide-react';

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <div className="" />

      <main className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 space-y-6 sm:space-y-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 rounded-full">
                <Shield className="w-4 h-4 " style={{color:'#11B3B8'}} />
                <span className="text-sm font-medium " style={{color:'#11B3B8'}}>Trusted Healthcare Partner</span>
              </div>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Exceptional
                <span className="relative">
                  <span className="absolute -bottom-2 left-0 w-full h-3 bg-blue-100/50 -skew-x-6" />
                  <span className="relative"> ENT Care</span>
                </span>
                <span className="block mt-2" style={{ color: '#1fa0a4' }}>in Kannur</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Expert medical care for ear, nose, and throat conditions with state-of-the-art facilities and compassionate specialists.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <button
                  className="w-full sm:w-auto text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl hover:bg-blue-700 transition shadow-lg"
                  style={{ backgroundColor: '#11B3B8' }}
                >
                  Schedule Visit
                </button>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-50 flex items-center justify-center">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 " style={{ color: '#11B3B8' }} />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">Emergency</p>
                    <p className="font-bold text-gray-900 text-sm sm:text-base">+91 999 888 7654</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 lg:pl-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  { icon: Stethoscope, title: "Expert Diagnosis", desc: "Comprehensive ENT evaluation" },
                  { icon: Users, title: "Family Care", desc: "All age groups welcome" },
                  { icon: Clock, title: "Timely Care", desc: "Minimal waiting time" },
                  { icon: MapPin, title: "Prime Location", desc: "Easy accessibility" }
                ].map((card, index) => (
                  <div
                    key={index}
                    style={{
                      background: 'linear-gradient(132.55deg, #22CCD2 26.07%, #1F2F61 95.26%)'
                    }}
                    className="p-6 sm:p-8 rounded-2xl text-white transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <card.icon className="w-6 h-6 sm:w-8 sm:h-8 mb-4" />
                    <h3 className="text-base sm:text-lg font-semibold mb-2">{card.title}</h3>
                    <p className="text-xs sm:text-sm opacity-90">{card.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 sm:mt-6 grid grid-cols-3 gap-3 sm:gap-6">
                {[
                  { label: "Patient Satisfaction", value: "98%" },
                  { label: "Years Experience", value: "15+" },
                  { label: "Successful Procedures", value: "10K+" }
                ].map((stat, index) => (
                  <div key={index} className="bg-gray-50 p-3 sm:p-4 rounded-xl text-center">
                    <p className="text-xl sm:text-2xl font-bold " style={{color:'#11B3B8'}}>{stat.value}</p>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;

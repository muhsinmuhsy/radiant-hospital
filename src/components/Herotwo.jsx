'use client';
import React from 'react';
import { Calendar, Phone, MapPin, Clock } from 'lucide-react';

const HeroTwo = () => {
  return (
    <div className="relative w-full bg-gradient-to-br from-blue-50 to-white min-h-screen">
      {/* Background Design Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-200 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-teal-200 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        {/* Navigation Bar */}
        

        {/* Hero Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Expert ENT Care in <span className="text-blue-800">Kannur</span>
            </h1>
            <p className="text-lg text-gray-600">
              Advanced diagnostics and treatment for ear, nose, and throat conditions with compassionate care and cutting-edge technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-800 text-white px-8 py-3 rounded-full hover:bg-blue-700 transform hover:-translate-y-1 transition duration-200">
                Schedule Visit
              </button>
              <button className="border-2 border-blue-800 text-blue-800 px-8 py-3 rounded-full hover:bg-blue-50 transform hover:-translate-y-1 transition duration-200">
                Virtual Tour
              </button>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <Clock className="w-8 h-8 text-blue-800 mb-3" />
              <h3 className="font-semibold mb-2">Working Hours</h3>
              <p className="text-sm text-gray-600">Mon - Sat: 9AM - 7PM</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <Phone className="w-8 h-8 text-blue-800 mb-3" />
              <h3 className="font-semibold mb-2">Emergency</h3>
              <p className="text-sm text-gray-600">+91 XXX XXX XXXX</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <Calendar className="w-8 h-8 text-blue-800 mb-3" />
              <h3 className="font-semibold mb-2">Appointments</h3>
              <p className="text-sm text-gray-600">Book Online 24/7</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <MapPin className="w-8 h-8 text-blue-800 mb-3" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-sm text-gray-600">Kannur, Kerala</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {['Advanced Technology', 'Expert Specialists', 'Patient-Centric Care'].map((feature, index) => (
            <div key={index} className="bg-white/50 backdrop-blur-sm p-4 rounded-lg text-center">
              <span className="font-semibold text-blue-800">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroTwo;
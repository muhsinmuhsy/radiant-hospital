'use client';
import React from 'react';
import { Calendar, Phone, MapPin, Clock, Shield, Heart, Star } from 'lucide-react';

const HeroThree = () => {
  return (
    <div className="relative w-full bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Professional Navigation */}
     

      {/* Main Hero Content */}
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-10">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
                <Star className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-sm text-blue-600 font-medium">Leading ENT Care in Kerala</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Advanced ENT Care
                <span className="block mt-2 text-blue-600">in Kannur</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">
                Experience world-class ear, nose, and throat care with state-of-the-art technology and compassionate expertise.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg">
                  Schedule Consultation
                </button>
                <button className="px-8 py-4 rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors">
                  View Services
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6">
                {[
                  { number: "98%", label: "Patient Satisfaction" },
                  { number: "15+", label: "Years Experience" },
                  { number: "24/7", label: "Emergency Care" }
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                    <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Creative Card Layout */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Shield, title: "Advanced Treatment", desc: "State-of-the-art procedures", color: "bg-gradient-to-br from-blue-500 to-blue-600" },
                  { icon: Heart, title: "Patient Care", desc: "Personalized attention", color: "bg-gradient-to-br from-purple-500 to-blue-500" },
                  { icon: Clock, title: "Quick Access", desc: "Minimal wait times", color: "bg-gradient-to-br from-blue-600 to-purple-500" },
                  { icon: Calendar, title: "Easy Booking", desc: "Online scheduling", color: "bg-gradient-to-br from-purple-600 to-blue-600" }
                ].map((card, index) => (
                  <div key={index} className="group relative">
                    <div className={`${card.color} p-6 rounded-xl text-white transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl`}>
                      <card.icon className="w-8 h-8 mb-4" />
                      <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                      <p className="text-sm opacity-90">{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="mt-6 bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <Phone className="w-5 h-5 text-blue-600 mb-2" />
                    <p className="text-gray-800 font-medium">Emergency Contact</p>
                    <p className="text-blue-600 font-bold">+91 XXX XXX XXXX</p>
                  </div>
                  <div>
                    <MapPin className="w-5 h-5 text-blue-600 mb-2" />
                    <p className="text-gray-800 font-medium">Location</p>
                    <p className="text-blue-600 font-bold">Kannur, Kerala</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroThree;
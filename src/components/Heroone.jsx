import React from 'react';
import { Phone, Clock, MapPin, Stethoscope, Ear, MessageCircle } from 'lucide-react';

const HeroOne = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-blue-200 blur-3xl"></div>
        <div className="absolute top-40 right-40 w-48 h-48 rounded-full bg-teal-200 blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 relative">
        

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-blue-900 leading-tight">
              Expert ENT Care for Your
              <span className="block text-blue-600">Complete Well-being</span>
            </h1>
            <p className="text-gray-600 text-lg">
              At Radiant ENT Hospital Kannur, we combine advanced medical expertise with 
              compassionate care to provide comprehensive treatment for all ear, nose, 
              and throat conditions.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Consult Now
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                View Services
              </button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Stethoscope className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Expert Doctors</h3>
              <p className="text-gray-600 text-sm">Specialized care from experienced ENT surgeons</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Ear className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Advanced Care</h3>
              <p className="text-gray-600 text-sm">State-of-the-art diagnostic and treatment facilities</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Clock className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Round-the-clock emergency medical services</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <MapPin className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Location</h3>
              <p className="text-gray-600 text-sm">Conveniently located in Kannur city center</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOne;
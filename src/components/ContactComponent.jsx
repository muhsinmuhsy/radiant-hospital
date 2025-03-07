'use client'
import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Stethoscope, 
  Microscope,
  ArrowRight
} from 'lucide-react';

export default function ContactComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
    alert('Your inquiry has been received. Our medical team will contact you shortly.');
  };

  return (
    <div className="min-h-screen bg-purple-50">
      {/* Professional Layout */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 bg-white shadow-2xl rounded-2xl overflow-hidden">
          {/* Left Side: Contact Information */}
          <div className="bg-gradient-to-br from-[#795F9F] to-[#8B489A] text-white p-12 lg:p-16 flex flex-col justify-between relative">
            <div>
              <div className="flex items-center mb-8">
                <ShieldCheck className="w-12 h-12 mr-4 text-white/80" />
                <h2 className="text-3xl font-bold tracking-tight">
                  Radiant ENT Hospital
                </h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-white/10 p-5 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <Stethoscope className="w-8 h-8 mt-1 text-white/80" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Advanced Diagnostics</h3>
                    <p className="text-white/70 text-sm">
                      Cutting-edge medical technology for precise diagnosis
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white/10 p-5 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <Microscope className="w-8 h-8 mt-1 text-white/80" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Specialized Care</h3>
                    <p className="text-white/70 text-sm">
                      Expert physicians with years of specialized experience
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-white/80" />
                <span className="text-white/80">
                  Caltax Juction , Near Gandhi Circle , Kannur 
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-white/80" />
                <span className="text-white/80">
                  +91 80899 88502 - For Enquiry
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-white/80" />
                <span className="text-white/80">
                  info@radiantenthospital.com
                </span>
              </div>
            </div>

            {/* Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#795F9F]/50 to-[#8B489A]/50 opacity-50 -z-10"></div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="p-12 lg:p-16 flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
                Contact Our Specialists
              </h2>
              <p className="text-gray-600 mb-8">
                Have a medical concern or need professional advice? 
                Our expert team is ready to assist you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#795F9F] focus:border-[#795F9F] transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#795F9F] focus:border-[#795F9F] transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#795F9F] focus:border-[#795F9F] transition-all duration-300"
                    placeholder="enter your phone number "
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Medical Inquiry
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#795F9F] focus:border-[#795F9F] transition-all duration-300"
                    placeholder="Describe your medical concern or question..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center bg-[#795F9F] text-white py-3 rounded-lg hover:bg-[#795F9F] focus:outline-none focus:ring-2 focus:ring-[#795F9F] focus:ring-offset-2 transition-colors duration-300 group"
                >
                  Submit Inquiry
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
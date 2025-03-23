'use client';

import React, { useState } from 'react';
import { useFetchConsultants, useFetchConsultantsMainHeader } from '@/lib/data';
import AppointmentBookingDirectly from '@/components/AppointmentBookingDirectly';
import DoctorProfilePopup from './DoctorPopup';
import { Search, Filter, Phone } from 'lucide-react';

const DoctorList = () => {
  const { consultant, isLoading, error } = useFetchConsultants();
  const { data: ConsultantsMainHeaderData, isLoading: isLoading0, error: error0 } = useFetchConsultantsMainHeader();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  const doctors = consultant;
  
  // Get unique specialties for filter
  const specialties = doctors ? ['All', ...new Set(doctors.map(doc => doc.specialty))] : ['All'];
  
  // Filter doctors based on search and specialty
  const filteredDoctors = doctors?.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'All' || doctor.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });
  
  if (error) {
    console.log(`Error loading data: ${error.message}`);
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-[#f9f6ff] to-[#ffffff29] py-16">
      {/* Hero Banner */}
      <div className="relative mb-16">
        <div className="absolute inset-0 bg-[#795F9F]/10 rounded-3xl mx-4 md:mx-8 lg:mx-16 -z-10"></div>
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between">
          <div className="text-left md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-[#795F9F] mb-4 leading-tight">
              {ConsultantsMainHeaderData?.title || "Our Expert Consultants"}
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-xl leading-relaxed">
              {ConsultantsMainHeaderData?.description || "Find the perfect specialist for your healthcare needs from our team of experienced professionals."}
            </p>
            <div className="mt-8 inline-flex items-center px-4 py-2 bg-white border border-[#D4BEDE]/30 rounded-full shadow-md">
              <Phone size={18} className="text-[#795F9F] mr-2" />
              <p className="text-[#795F9F] font-medium">
                Need help? <span className="font-bold"> 0497 2768768</span>
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/radiant/18.jpg" 
              alt="Medical Team" 
              className="w-full max-w-md"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by name..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#795F9F] focus:outline-none focus:ring-2 focus:ring-[#795F9F]/20"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative min-w-[200px]">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <select
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 appearance-none focus:border-[#795F9F] focus:outline-none focus:ring-2 focus:ring-[#795F9F]/20"
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
            >
              {specialties.map(specialty => (
                <option key={specialty} value={specialty}>{specialty}</option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <p className="text-gray-600">
          Showing <span className="font-medium text-[#795F9F]">{filteredDoctors?.length || 0}</span> consultants
          {selectedSpecialty !== 'All' && <span> in <span className="font-medium text-[#795F9F]">{selectedSpecialty}</span></span>}
        </p>
      </div>

      {/* Doctors Grid - KEEPING CARD DESIGN THE SAME */}
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
              onClick={() => {
                setSearchTerm('');
                setSelectedSpecialty('All');
              }}
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
            {filteredDoctors?.map((doctor, index) => (
              <div 
                key={index}
                className="group relative"
              >
                <div className="bg-[#f5efff] border border-[##D4BEDE] rounded-[25px] lg:h-[440px] md:h-[450px] h-[460px] w-[300px] mx-auto overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-[##D4BEDE]/20 hover:-translate-y-1">
                  <div className="bg-[#795F9F] w-[70%] mx-auto rounded-b-[15px] group-hover:bg-[#795F9F] transition-colors duration-300">
                    <img
                      src={doctor?.image}
                      alt={doctor?.name}
                      className="w-full max-w-[210px] h-[200px] object-cover rounded-b-[15px] mx-auto transition-transform duration-500 "
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
                      <div className='mt-2' style={{marginRight:'5px'}}>
                        <DoctorProfilePopup selectedDoctor={doctor} />  
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

      {/* Bottom CTA */}
      
    </section>
  );
};

export default DoctorList;


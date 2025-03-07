import React from 'react'
import AppointmentBooking from './AppointmentBooking'

function CTAButton() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className="bg-white rounded-2xl shadow-xl border border-[#D4BEDE] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <div className="inline-block px-4 py-1 rounded-full bg-[#D4BEDE]/30 text-[#8B489A] font-medium text-sm mb-6">
                Experience the Difference
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#8B489A] mb-4">
                Ready to Breathe, Hear, and Live Better?
              </h3>
              <p className="text-gray-700 mb-8">
                Take the first step toward improved ENT health. Our patient-centered approach ensures you receive the right diagnosis and treatment plan for your unique situation.
              </p>
              <AppointmentBooking/>
            </div>
            <div className="relative">
              <div className="h-full">
                <img 
                  src="/tech.webp" 
                  alt="Patient Consultation" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#8B489A]/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CTAButton
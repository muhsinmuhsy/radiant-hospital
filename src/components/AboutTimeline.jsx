import { ChevronRight } from 'lucide-react'
import React from 'react'

function AboutTimeline() {
  return (
    <>
      {/* Timeline Section - Responsive */}
      <div className="container mx-auto px-4 pb-16 sm:pb-32">
        <h2 className="text-3xl sm:text-5xl font-bold text-white text-center mb-8 sm:mb-16">
          Our Journey
        </h2>
        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-white/20 
                         transform sm:-translate-x-1/2" />
          {[1998, 2005, 2012, 2020, 2023].map((year, index) => (
            <div key={index} 
                 className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 mb-8 sm:mb-12
                            ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
              <div className="ml-12 sm:ml-0 sm:w-1/2">
                <div className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6
                                transform transition-all duration-300 hover:scale-105
                                ${index % 2 === 0 ? 'sm:hover:translate-x-2' : 'sm:hover:-translate-x-2'}`}>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{year}</h3>
                  <p className="text-white/80 text-sm sm:text-base">Major milestone description goes here</p>
                </div>
              </div>
              <div className="absolute left-4 sm:left-1/2 w-4 h-4 bg-white rounded-full 
                             transform -translate-y-1/2 sm:-translate-x-1/2" />
              <div className="hidden sm:block sm:w-1/2" />
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section - Responsive */}
      <div className="container mx-auto px-4 pb-16 sm:pb-32">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl 
                       p-6 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Transform Your Care?
          </h2>
          <p className="text-base sm:text-xl text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Experience the future of ENT care with our team of experts and cutting-edge technology.
          </p>
          <button className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-white text-[#1F2F61] 
                           rounded-full font-bold hover:bg-white/90 transition-all duration-300 
                           flex items-center justify-center gap-2 mx-auto">
            Schedule Your Visit
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
      
    
    </>
  )
}

export default AboutTimeline


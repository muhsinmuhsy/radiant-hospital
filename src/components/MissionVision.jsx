'use client'
import React from 'react'
import { useState } from 'react'
import {useFetchMission, useFetchVision } from '@/lib/data';

function MissionVision() {
      const [activeTab, setActiveTab] = useState('mission');
      const [hoveredValue, setHoveredValue] = useState(null);

      const {data:missionData } = useFetchMission();
      const {data:visionData } = useFetchVision();
  return (
 <>
   {/* Mission & Vision */}
   <div className='max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16'>
   <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 mt-16 sm:mb-16 md:mb-20">
          <div>
            <div className="flex gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8 overflow-x-auto pb-2">
              {['mission', 'vision'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 sm:px-6 py-2 rounded-full whitespace-nowrap text-sm sm:text-base ${
                    activeTab === tab 
                      ? 'bg-[#795F9F] text-white' 
                      : 'bg-[#95879c] text-white '
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg">
              {activeTab === 'mission' ? (
                <>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">{missionData?.title || "Our Mission"}</h2>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {missionData?.description}
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">{visionData?.title || "Our Vision"}</h2>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {visionData?.description}
                  </p>
                </>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="aspect-square rounded-xl overflow-hidden">
              <img 
                src="/spec-2.svg" 
                alt="Hospital facility" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden mt-0 sm:mt-8">
              <img 
                src="/spec-3.svg" 
                alt="Medical staff" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
   </div>
 </>
  )
}

export default MissionVision
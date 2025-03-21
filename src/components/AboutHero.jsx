'use client';
import React from 'react'
import Image from 'next/image';
import { useFetchHomeAboutHero } from '@/lib/data';
import { HeartPulse, ShieldCheck } from 'lucide-react';

function AboutHero() {
  const { aboutHero, isLoading, error } = useFetchHomeAboutHero();
  
  if (error) {
    console.log(`Error loading data: ${error.message}`);
  }
  
  return (
    <div className="relative py-16 xl:px-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Changed from md:grid-cols-2 to use a custom breakpoint for 769px */}
        <div className="grid grid-cols-1 min-[769px]:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-6">
            <div 
              className="inline-block px-4 py-2 rounded-full text-sm font-medium"
              style={{ 
                background: 'linear-gradient(90deg, #8c7497 0%, #7a5ea5 100%)',
                color: 'white'
              }}
            >
              {aboutHero?.title || ""}
            </div>
            
            <h2 
              className="text-2xl lg:text-4xl md:text-3xl font-bold leading-tight"
              style={{ color: '#795F9F' }}
            >
              {aboutHero?.description || ""}
            </h2>
            
            <p className="text-xl text-gray-600">
              {aboutHero?.mini_text || ""}
            </p>
            
            {/* Feature Highlights */}
            <div className="mt-8 space-y-4">
              {[
                { 
                  "icon": <ShieldCheck className="w-6 h-6" style={{ color: '#8B489A' }} />, 
                  "text": aboutHero?.feature_one_name || "",
                  "description": aboutHero?.feature_one_description || ""
                },
                { 
                  "icon": <HeartPulse className="w-6 h-6" style={{ color: '#795F9F' }} />, 
                  "text": aboutHero?.feature_two_name || "",
                  "description": aboutHero?.feature_two_description || "" // Fixed bug: was feature_two_name
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 hover:shadow-lg"
                  style={{ 
                    backgroundColor: index % 2 === 0 ? '#D4BEDE20' : '#795F9F10' 
                  }}
                >
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg" style={{ color: '#795F9F' }}>{item.text}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image Section */}
          <div className="relative group">
            <div 
              className="absolute -inset-4 rounded-2xl opacity-30 blur-xl"
            ></div>
            
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/radiant/building.png"
                alt="Healthcare Professionals"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay Badge */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHero
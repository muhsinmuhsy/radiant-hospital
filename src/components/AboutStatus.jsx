import { Calendar, HeartPulse, UserPlus, Users } from 'lucide-react';
import React from 'react'

function AboutStatus() {
    const stats = [
        { id: 1, value: "15+", label: "Years of Excellence", icon: Calendar },
        { id: 2, value: "10,000+", label: "Patients Served", icon: Users },
        { id: 3, value: "12", label: "Specialized Physicians", icon: UserPlus },
        { id: 4, value: "99%", label: "Patient Satisfaction", icon: HeartPulse },
      ];

  return (
    <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={stat.id} 
                  className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#795F9F]/10 text-[#795F9F] mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#8B489A] mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
  )
}

export default AboutStatus
import React, { useState } from 'react';
import { Users, Calendar, Star, Clock, Award, BookOpen, Video, Phone } from 'lucide-react';

const ConsultantsSection = () => {
  const [hoveredId, setHoveredId] = useState(null);
  
  const doctors = [
    {
      id: 1,
      image: '/doc-2.png',
      name: 'Dr. Priyadarshan M.S',
      description: 'ENT Surgeon, Head and Neck Ultrasonography Professional Voice care',
      specialties: ['ENT Surgery', 'Ultrasonography', 'Voice Care'],
      achievements: ['Best ENT Surgeon 2023', '1000+ Successful Surgeries'],
      availability: 'Mon, Wed, Fri',
      experience: '15+ Years',
      languages: ['English', 'Malayalam', 'Hindi'],
      education: 'MBBS, MS - ENT'
    },
    {
      id: 2,
      image: '/doc-1.svg',
      name: 'Dr. Faslim M.S',
      description: 'ENT Surgeon, Head and Neck Ultrasonography Professional Voice care',
      specialties: ['ENT Surgery', 'Head & Neck', 'Voice Care'],
      achievements: ['Research Excellence Award', '800+ Procedures'],
      availability: 'Tue, Thu, Sat',
      experience: '12+ Years',
      languages: ['English', 'Malayalam', 'Arabic'],
      education: 'MBBS, MS - ENT, DNB'
    },
    {
      id: 3,
      image: '/doc-3.png',
      name: 'Dr. Priyadarshan',
      description: 'ENT Surgeon, Head and Neck Ultrasonography Professional Voice care',
      specialties: ['ENT Surgery', 'Ultrasonography', 'Clinical Care'],
      achievements: ['Patient Choice Award 2023', '500+ Procedures'],
      availability: 'Mon, Tue, Thu',
      experience: '10+ Years',
      languages: ['English', 'Malayalam', 'Tamil'],
      education: 'MBBS, MS - ENT'
    },
    {
        id: 4,
        image: '/doc-1.svg',
        name: 'Dr. Faslim M.S',
        description: 'ENT Surgeon, Head and Neck Ultrasonography Professional Voice care',
        specialties: ['ENT Surgery', 'Head & Neck', 'Voice Care'],
        achievements: ['Research Excellence Award', '800+ Procedures'],
        availability: 'Tue, Thu, Sat',
        experience: '12+ Years',
        languages: ['English', 'Malayalam', 'Arabic'],
        education: 'MBBS, MS - ENT, DNB'
      },
      {
        id: 5,
        image: '/doc-2.png',
        name: 'Dr. Priyadarshan M.S',
        description: 'ENT Surgeon, Head and Neck Ultrasonography Professional Voice care',
        specialties: ['ENT Surgery', 'Ultrasonography', 'Voice Care'],
        achievements: ['Best ENT Surgeon 2023', '1000+ Successful Surgeries'],
        availability: 'Mon, Wed, Fri',
        experience: '15+ Years',
        languages: ['English', 'Malayalam', 'Hindi'],
        education: 'MBBS, MS - ENT'
      },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Users className="text-[#11b3b8] w-8 h-8" />
            <h2 className="text-4xl font-bold" style={{ color: '#11b3b8' }}>
              Our Expert Team
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Meet our distinguished ENT specialists who combine years of expertise with 
            cutting-edge medical knowledge to provide exceptional care.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(doctor.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="bg-[#B3FAFF29] border border-[#B3E4FF82] rounded-[25px] h-[480px] w-[300px] mx-auto overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-[#11b3b8]/20 hover:-translate-y-1">
                {/* Image Container */}
                <div className="bg-[#11b3b8] w-[70%] mx-auto rounded-b-[15px] group-hover:bg-[#008488] transition-colors duration-300">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full max-w-[200px] h-[200px] object-cover rounded-b-[15px] mx-auto transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="text-center mt-3 px-4">
                  <h2 className="text-[1.25rem] mb-1 text-black font-semibold group-hover:text-[#11b3b8] transition-colors duration-300">
                    {doctor.name}
                  </h2>
                  <div className="flex items-center justify-center gap-1 mb-2 text-[#11b3b8]">
                    <BookOpen size={14} />
                    <span className="text-sm">{doctor.education}</span>
                  </div>
                  
                  {/* Specialties Pills */}
                  <div className="flex flex-wrap justify-center gap-1 mb-3">
                    {doctor.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-[0.7rem] rounded-full bg-teal-50 text-teal-600"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  {/* Info Grid */}
                  <div className="grid grid-cols-2 gap-2 mb-3 text-[0.8rem] text-gray-600">
                    <div className="flex items-center gap-1 justify-center">
                      <Calendar size={12} />
                      <span>{doctor.experience}</span>
                    </div>
                    <div className="flex items-center gap-1 justify-center">
                      <Clock size={12} />
                      <span>{doctor.availability}</span>
                    </div>
                  </div>

                  {/* Achievement */}
                  <div className="mb-3">
                    <div className="flex items-center justify-center gap-1 text-[0.8rem] text-[#11b3b8]">
                      <Award size={12} />
                      <span>{doctor.achievements[0]}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-center gap-2">
                    <button className="bg-[#11b3b8] text-white px-4 py-2 rounded-full transform transition-all duration-300 hover:bg-[#008488] hover:scale-105 hover:shadow-lg flex items-center gap-1">
                      <Calendar size={14} />
                      Book Visit
                    </button>
                    <button className="bg-teal-50 text-[#11b3b8] px-4 py-2 rounded-full transform transition-all duration-300 hover:bg-teal-100 hover:scale-105 hover:shadow-lg flex items-center gap-1">
                      <Video size={14} />
                      Consult
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -z-10 top-10 left-0 w-20 h-20 bg-[#11b3b8]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -z-10 bottom-10 right-0 w-32 h-32 bg-[#11b3b8]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        
      </div>
    </div>
  );
};

export default ConsultantsSection;
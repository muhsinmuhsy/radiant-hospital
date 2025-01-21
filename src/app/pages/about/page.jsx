'use client';

import Navbar from '@/components/Navbar';
import { Heart, Stethoscope, Microscope, Phone, Mail, MapPin, Clock, Award, Target, Star, Shield, BookOpen, Users } from 'lucide-react';
import { 
  useFetchAboutHero,
  useFetchAboutStats,
  useFetchAboutCoreValues,
  useFetchAboutFeatures,
  useFetchAboutAchievements,
  useFetchAboutContactDetails,
  useFetchConsultants,
  useFetchMission,
  useFetchVision,
} from '@/lib/data';


const AboutUsPage = () => {

  const { data: aboutHero, isLoading: heroLoading, error: heroError } = useFetchAboutHero();
  const { data: aboutStats, isLoading: statsLoading, error: statsError } = useFetchAboutStats();
  const { data: aboutCoreValues, isLoading: valuesLoading, error: valuesError } = useFetchAboutCoreValues();
  const { data: aboutFeatures, isLoading: featuresLoading, error: featuresError } = useFetchAboutFeatures();
  const { data: aboutAchievements, isLoading: achievementsLoading, error: achievementsError } = useFetchAboutAchievements();
  const { data: aboutContactDetails, isLoading: contactLoading, error: contactError } = useFetchAboutContactDetails();
  const { data: mission, isLoading: isMissionLoading, error: missionError } = useFetchMission();
  const { data: vision, isLoading: isVisionLoading, error: visionError } = useFetchVision();
  const { consultant, isLoading, error } = useFetchConsultants();

  const statsData = [
    { number: "25+", label: "Years of Excellence" },
    { number: "50k+", label: "Patients Treated" },
    { number: "15", label: "Specialist Doctors" },
    { number: "98%", label: "Patient Satisfaction" }
  ];

  const stats = aboutStats || statsData;


  const featuresData = [
    {
      icon: <Stethoscope size={40} className="text-[#11B3B8]" />,
      title: "Expert Care",
      description: "Our board-certified specialists bring decades of combined experience in treating complex ENT conditions."
    },
    {
      icon: <Microscope size={40} className="text-[#11B3B8]" />,
      title: "Advanced Technology",
      description: "State-of-the-art diagnostic and treatment equipment for precise and effective care."
    },
    {
      icon: <Heart size={40} className="text-[#11B3B8]" />,
      title: "Personalized Treatment",
      description: "Tailored treatment plans that address your unique needs and ensure optimal outcomes."
    }
  ];

  const iconMapFeatures = [<Stethoscope size={40} className="text-[#11B3B8]" />, <Microscope size={40} className="text-[#11B3B8]" />,  <Heart size={40} className="text-[#11B3B8]" />];
  
  const features = (Array.isArray(aboutFeatures) && aboutFeatures.length > 0 ? aboutFeatures : featuresData)?.map((value, index) => ({
    ...value,
    icon: iconMapFeatures[index % iconMapFeatures.length], // Assign icon based on index
  }));


  const achievementsData = [
    {
      icon: <Award size={32} />,
      title: "Accredited Excellence",
      description: "Joint Commission International (JCI) accredited facility"
    },
    {
      icon: <Star size={32} />,
      title: "Research Leadership",
      description: "Pioneer in advanced ENT surgical techniques"
    },
    {
      icon: <Shield size={32} />,
      title: "Safety First",
      description: "Zero-infection rating in surgical procedures"
    }
  ];

  const iconMapAchievements = [<Award size={32} />, <Star size={32} />, <Shield size={32} />];


  const achievements = (Array.isArray(aboutAchievements) && aboutAchievements.length > 0 ? aboutAchievements : achievementsData)?.map((value, index) => ({
    ...value,
    icon: iconMapAchievements[index % iconMapAchievements.length], // Assign icon based on index
  }));


  // const values = [
  //   "Patient-Centered Care",
  //   "Innovation & Excellence",
  //   "Compassion & Empathy",
  //   "Continuous Learning",
  //   "Integrity & Ethics"
  // ];

  const values = aboutCoreValues || []


  const teamData = [
    {
      name: "Dr. Sarah Johnson",
      role: "Head of ENT Department",
      image: "/api/placeholder/150/150",
      specialization: "Pediatric ENT Surgery"
    },
    {
      name: "Dr. Michael Chen",
      role: "Senior ENT Surgeon",
      image: "/api/placeholder/150/150",
      specialization: "Rhinoplasty & Sinus Surgery"
    },
    {
      name: "Dr. Emily Martinez",
      role: "Pediatric ENT Specialist",
      image: "/api/placeholder/150/150",
      specialization: "Pediatric Airway Management"
    }
  ];

  const team = consultant || teamData

  return (
    <>
      <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-[#22CCD2] to-[#1F2F61]">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-16 relative">
        <div className="lg:flex lg:items-center lg:gap-12">
          <div className="lg:w-1/2 text-white mb-20 lg:mb-0">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {aboutHero?.title || "Excellence in ENT Care"}
            </h1>
            <p className="text-xl leading-relaxed mb-8">
              {aboutHero?.description || "Leading the way in comprehensive ear, nose, and throat treatments with cutting-edge technology and compassionate care."}
            </p>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300 shadow-xl">
                <div className="text-4xl font-bold text-[#11B3B8]">{stat?.number}</div>
                <div className="mt-2 text-gray-800 font-medium">{stat?.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl p-8 shadow-xl transform hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#11B3B8]/10 rounded-bl-full" />
            <Target className="text-[#11B3B8] mb-6" size={40} />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{mission?.title || "Our Mision"}</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {mission?.description || "To provide world-class ENT care through innovative treatments, compassionate service, and a patient-first approach that enhances the quality of life for every individual we serve."}
            </p>
            {/* <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-[#11B3B8] rounded-full mr-3" />
                Excellence in patient care
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-[#11B3B8] rounded-full mr-3" />
                Advanced medical solutions
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-[#11B3B8] rounded-full mr-3" />
                Community health leadership
              </li>
            </ul> */}
          </div>

          <div className="bg-white rounded-xl p-8 shadow-xl transform hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#11B3B8]/10 rounded-bl-full" />
            <BookOpen className="text-[#11B3B8] mb-6" size={40} />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{vision?.title || "Our Vision"}</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {vision?.description || "To be the leading ENT care provider, recognized globally for excellence in patient care, medical innovation, and outstanding clinical outcomes, while fostering a healing environment that benefits patients and healthcare providers alike."}
            </p>
            {/* <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-[#11B3B8] rounded-full mr-3" />
                Global healthcare leadership
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-[#11B3B8] rounded-full mr-3" />
                Innovative treatment methods
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-[#11B3B8] rounded-full mr-3" />
                Continuous improvement
              </li>
            </ul> */}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Our Core Values</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {values.map((value, index) => (
            <div key={index} className="bg-white/90 backdrop-blur rounded-xl p-6 text-center shadow-xl">
              <div className="text-[#11B3B8] font-medium">{value?.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 transform hover:-translate-y-2 transition-transform duration-300 shadow-xl">
              <div className="mb-6 inline-block bg-[#11B3B8]/10 p-4 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Our Achievements</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white rounded-xl p-8 text-center shadow-xl">
              <div className="inline-block p-4 rounded-full bg-[#11B3B8]/10 mb-4">
                <div className="text-[#11B3B8]">{achievement.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{achievement.title}</h3>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      {/* <div className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Our Expert Team</h2>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-xl">
              <div className="h-64 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-8 -mt-20 relative">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-white overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 text-center mb-2">{member.name}</h3>
                <p className="text-[#11B3B8] text-center font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-center text-sm">{member.specialization}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Contact Section */}
      <div className="container mx-auto px-4 pb-24">
        <div className="bg-white rounded-xl p-8 lg:p-12 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Get in Touch</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Phone size={24} className="mx-auto mb-4 text-[#11B3B8]" />
              <p className="text-gray-800">{aboutContactDetails?.phone ||"(555) 123-4567"}</p>
            </div>
            <div className="text-center">
              <Mail size={24} className="mx-auto mb-4 text-[#11B3B8]" />
              <p className="text-gray-800">{aboutContactDetails?.mail || "info@entexcellence.com"}</p>
            </div>
            <div className="text-center">
              <MapPin size={24} className="mx-auto mb-4 text-[#11B3B8]" />
              <p className="text-gray-800">{aboutContactDetails?.location || "123 Medical Center Drive City, State 12345"}</p>
            </div>
            <div className="text-center">
              <Clock size={24} className="mx-auto mb-4 text-[#11B3B8]" />
              <p className="text-gray-800">{aboutContactDetails?.time || "Mon-Fri: 8am - 6pm Sat: 9am - 2pm"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutUsPage;
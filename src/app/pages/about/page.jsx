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
import MainAboutPage from '@/components/MainAboutPage';
import Footer from '@/components/Footer';



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


  

  return (
    <>
      <Navbar/>
    

      


<MainAboutPage/>


      {/* Contact Section */}
      <div className="container mx-auto px-4 pb-24 mt-20">
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


    <Footer/>

   
    </>
  );
};

export default AboutUsPage;
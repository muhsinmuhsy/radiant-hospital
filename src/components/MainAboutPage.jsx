import React, { useState } from 'react';
import { 
  Stethoscope, 
  Building2, 
  Clock, 
  CheckCircle2, 
  Phone,
  MapPin,
  Users,
  Award
} from 'lucide-react';
import DoctorList from './DoctorList';
import AppointmentBooking from './AppointmentBooking';
import WhyChooseUs from './WhyChoseUs';
import MissionVision from './MissionVision';

const MainAboutPage = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    "Comprehensive ENT consultations",
    "Hearing and balance treatments",
    "Sinus and allergy care",
    "Voice and speech therapy",
    "Pediatric ENT care",
    "Advanced surgical procedures"
  ];

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: "10,000+",
      label: "Patients Treated"
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      value: "15+",
      label: "Specialists"
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "25+",
      label: "Years Experience"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Welcome to{" "}
              <span className="block mt-2" style={{color:'#11B3B8'}}>Radiant ENT Hospital</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kannur's trusted destination for advanced ear, nose, and throat care, 
              dedicated to providing compassionate, high-quality medical services.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-teal-50 rounded-xl p-8 text-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className=" flex justify-center mb-4" style={{color:'#11B3B8'}}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-full mx-auto ">
        <div className="bg-white rounded-2xl  overflow-hidden">
          <div className="p-8 lg:p-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-lg text-gray-600">
                At Radiant ENT Hospital, we understand that ENT issues can impact your daily life, 
                from hearing difficulties to breathing problems and voice disorders. That's why our 
                team of experienced specialists, state-of-the-art technology, and personalized 
                treatment plans ensure that every patient receives the best possible care.
              </p>
            </div>

            {/* Services Grid */}
            <div className="mb-28">
              <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`
                      p-6 rounded-xl transition-all duration-300
                      ${activeService === index 
                        ? 'bg-teal-600 text-white' 
                        : 'bg-teal-50 text-gray-800 hover:bg-blue-100'}
                    `}
                    onMouseEnter={() => setActiveService(index)}
                    onMouseLeave={() => setActiveService(null)}
                  >
                    <div className="flex items-center space-x-4">
                      <CheckCircle2 
                        className={`w-6 h-6 ${activeService === index ? 'text-white' : 'text-teal-600'}`} 
                      />
                      <p className="text-lg">{service}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>


     <div className='p-2 lg:p-12'>
     <MissionVision/>
            <WhyChooseUs/>
            <DoctorList/>

            {/* Location & Contact */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20 ">
              <div className="bg-teal-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6">Visit Us</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-teal-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-gray-600">Caltax jn,Kannur</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-teal-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Working Hours</p>
                      <p className="text-gray-600">
                        Monday - Saturday: 9:00 AM - 8:00 PM<br />
                        Sunday: Emergency Services Only
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r  text-white rounded-xl p-8"style={{backgroundColor:"#11B3B8"}}>
                <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Get in Touch</p>
                      <p>Phone: +91 XXX XXX XXXX</p>
                      <p>Email: info@radiantent.com</p>
                    </div>
                  </div>
                  <button className="w-full bg-white text-teal-600 py-3 px-6 rounded-lg  hover:bg-blue-50 transition-colors">
                 Connect with Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
     </div>
      </div>
    
  );
};

export default MainAboutPage;
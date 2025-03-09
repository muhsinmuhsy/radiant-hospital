import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { 
  X, UserCircle, Phone, Mail, Award, MapPin, 
  Calendar, Clock, Stethoscope 
} from 'lucide-react';


// ENT Doctor data
// const doctorData = {
//   "id": 2,
//   "image": "http://127.0.0.1:8000/media/consultants/DSC_0137_copy-removebg-preview.png",
//   "name": "Dr. Priyadarshan M.S",
//   "specialty": "Chief ENT Surgeon & Managing Director.Head of Ear Surgery and Endoscopic Sinus Surgery",
//   "qualification": "MD, FACS (Fellow of the American College of Surgeons)",
//   "experience": "12 years",
//   "contact": "+91 1234-5678",
//   "email": "sarah.thompson@enthospital.com",
//   "location": "Advanced ENT Care Center, Otolaryngology Department",
//   "description": "Dr. Sarah Thompson is a board-certified otolaryngologist specializing in advanced ear, nose, and throat treatments. She has extensive experience in surgical and medical management of complex ENT conditions, including sinus disorders, hearing loss, and head and neck surgeries.",
//   "specialized_departments": [
//       "Pediatric ENT",
//       "Sinus Surgery",
//       "Hearing Restoration",
//       "Voice and Swallowing Disorders",
//       "Allergy Treatment"
//   ],
//   "available_days": [
//       {
//           "day": "Monday",
//           "timeSlots": [
//               {
//                   "time": "9:00 AM - 12:00 PM",
//                   "type": "Consultation"
//               },
//               {
//                   "time": "2:00 PM - 5:00 PM",
//                   "type": "Surgical Procedures"
//               }
//           ]
//       },
//       {
//           "day": "Wednesday",
//           "timeSlots": [
//               {
//                   "time": "10:00 AM - 1:00 PM",
//                   "type": "Hearing Tests"
//               },
//               {
//                   "time": "4:00 PM - 7:00 PM",
//                   "type": "Evening Consultation"
//               }
//           ]
//       },
//       {
//           "day": "Friday",
//           "timeSlots": [
//               {
//                   "time": "8:00 AM - 11:00 AM",
//                   "type": "Sinus Evaluation"
//               },
//               {
//                   "time": "3:00 PM - 6:00 PM",
//                   "type": "Allergy Consultation"
//               }
//           ]
//       }
//   ],
//   "created_at": "2025-01-26T07:06:17.712318Z",
//   "updated_at": "2025-03-09T06:21:41.922668Z"
// };

const DoctorProfilePopup = ({ selectedDoctor }) => {

  const [isOpen, setIsOpen] = useState(false);

  const doctorData = selectedDoctor;


  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* View Profile Button */}
      <button 
        onClick={openPopup} 
        className="bg-[#735EA9] text-white px-16 py-2 rounded-lg hover:bg-[#8B489A] transition-colors"
      >
        View Profile
      </button>

      {/* Popup Overlay */}
      {isOpen && (
        ReactDOM.createPortal(
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-[1000] flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
          onClick={closePopup}
        >
          {/* Popup Content */}
          <div 
            className="bg-white rounded-xl shadow-2xl w-full max-w-5xl mx-2 sm:mx-4 md:mx-6 lg:mx-8 max-h-[90vh] overflow-y-auto relative z-[1001]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={closePopup} 
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 z-10"
            >
              <X size={24} />
            </button>

            {/* Doctor Profile Content */}
            <div className="p-4 sm:p-6 overflow-y-auto">
              {/* Doctor Header */}
              <div className="flex flex-col items-center mb-6">
                <img 
                  src={doctorData?.image} 
                  alt={doctorData?.name} 
                  className="w-32 h-32 rounded-full object-cover border-4 border-[#735EA9] mb-4"
                />
                <h2 className="text-2xl font-bold text-gray-800">{doctorData?.name}</h2>
                <p className="text-[#735EA9] font-semibold">{doctorData?.specialty}</p>
              </div>

              {/* Profile Content Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                  {/* Basic Information */}
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                    <div className="flex items-center space-x-3 mb-2">
                      <Award className="text-[#735EA9]" size={20} />
                      <span className="text-gray-700 font-semibold text-sm sm:text-base">
                        Qualification: {doctorData?.qualification}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 mb-2">
                      <UserCircle className="text-[#735EA9]" size={20} />
                      <span className="text-gray-700 text-sm sm:text-base">
                        Experience: {doctorData?.experience}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 mb-2">
                      <Phone className="text-[#735EA9]" size={20} />
                      <span className="text-gray-700 text-sm sm:text-base">
                        Contact: {doctorData?.contact}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 mb-2">
                      <Mail className="text-[#735EA9]" size={20} />
                      <span className="text-gray-700 text-sm sm:text-base">
                        Email: {doctorData?.email}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="text-[#735EA9]" size={20} />
                      <span className="text-gray-700 text-sm sm:text-base">
                        Location: {doctorData?.location}
                      </span>
                    </div>
                  </div>

                  {/* Profile Description */}
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <Stethoscope className="text-[#735EA9]" size={20} />
                      <h3 className="text-lg font-semibold text-gray-800">Profile Overview</h3>
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base">{doctorData?.description}</p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  {/* Specialized Departments */}
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <Stethoscope className="text-[#735EA9]" size={20} />
                      <h3 className="text-lg font-semibold text-gray-800">Specialized Areas</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {doctorData?.specialized_departments.map((dept, index) => (
                        <span 
                          key={index} 
                          className="bg-[#f2ddf6] text-[#634e98] px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                        >
                          {dept}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Available Schedule */}
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <Calendar className="text-[#735EA9]" size={20} />
                      <h3 className="text-lg font-semibold text-gray-800">Available Schedule</h3>
                    </div>
                    <div className="space-y-3">
                      {doctorData?.available_days.map((daySchedule, index) => (
                        <div key={index} className="bg-gray-50 p-2 sm:p-3 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-gray-700 text-sm sm:text-base">{daySchedule.day}</span>
                            <Clock className="text-gray-500" size={16} />
                          </div>
                          <div className="space-y-1">
                            {daySchedule.timeSlots.map((slot, slotIndex) => (
                              <div 
                                key={slotIndex} 
                                className="flex justify-between text-xs sm:text-sm text-gray-600"
                              >
                                <span>{slot.time}</span>
                                <span className="text-[#805dd9]">{slot.type}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>,
         document.body
      ))}
    </div>
  );
};

export default DoctorProfilePopup;

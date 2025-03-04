
'use client'
import { FaEarListen, FaLungs, FaThLarge, FaMicroscope, FaHeartbeat, FaRegMoon, FaEye, FaDiagnoses } from "react-icons/fa";

const specialties = {
  surgeries: [
    
    { name: "Functional Endoscopic Sinus Surgery", icon: <FaMicroscope/>, description: "Minimally invasive sinus surgeries for better nasal function." },
    { name: "Voice Restoration Surgeries", icon: <FaLungs/>, description: "Procedures to restore voice and treat vocal cord conditions." },
    { name: "Endoscopic CSF Repair", icon: <FaThLarge/>, description: "Surgical repairs for cerebrospinal fluid leaks using endoscopy." },
    { name: "Thyroid Surgeries", icon: <FaHeartbeat/>, description: "Expert thyroid gland surgeries for various disorders." },
    { name: "Surgeries for Snoring", icon: <FaRegMoon/>, description: "Sleep disorder surgeries, including UPPP for snoring treatment." },
  ],
  endoscopy: [
    { name: "Otoscopy", icon: <FaEye />, description: "Diagnostic ear examination to detect infections and hearing issues." },
    { name: "Diagnostic Nasal Endoscopy", icon: <FaDiagnoses/>, description: "Endoscopic nasal examination to diagnose sinus conditions." },
    { name: "Video Laryngoscopy", icon: <FaMicroscope/>, description: "Advanced laryngeal examination using high-resolution video." },
    { name: "Stroboscopy", icon: <FaLungs />, description: "Detailed vocal cord analysis for voice disorders." },
    { name: "Flexible Nasopharyngoscopy", icon: <FaMicroscope/>, description: "Flexible scope examination of nasal and throat passages." },
    { name: "Sleep Study & Sleep Endoscopy", icon: <FaRegMoon/>, description: "Specialized study to evaluate sleep apnea and snoring issues." },
  ],
};

const SpecialtyListAll = () => {
  return (
    <section className="py-12 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Specialties</h2>

        {/* Surgeries Section */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Surgeries</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.surgeries.map((surgery, index) => (
              <div 
                key={index} 
                className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex items-center gap-4"
              >
                <div className="text-4xl text-blue-500">{surgery.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{surgery.name}</h4>
                  <p className="text-gray-600 text-sm">{surgery.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Endoscopy Section */}
        <div>
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Endoscopy Procedures</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.endoscopy.map((procedure, index) => (
              <div 
                key={index} 
                className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex items-center gap-4"
              >
                <div className="text-4xl text-green-500">{procedure.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{procedure.name}</h4>
                  <p className="text-gray-600 text-sm">{procedure.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SpecialtyListAll;

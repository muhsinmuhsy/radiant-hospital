import { FaHeartbeat, FaEye } from "react-icons/fa";
import { LuEar } from "react-icons/lu";

const MissionVision = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Our Mission & Vision</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Mission Card */}
        <div 
          className="bg-white p-6 md:p-10 shadow-lg rounded-2xl flex flex-col items-center text-center hover:shadow-xl transition-transform transform hover:scale-105 duration-300"
        >
          <FaHeartbeat className="text-5xl text-red-500 mb-4" />
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission</h3>
          <p className="text-gray-600">
            To provide compassionate, high-quality ENT care through innovative treatments and cutting-edge technology, ensuring the well-being of our patients.
          </p>
        </div>
        
        {/* Vision Card */}
        <div 
          className="bg-white p-6 md:p-10 shadow-lg rounded-2xl flex flex-col items-center text-center hover:shadow-xl transition-transform transform hover:scale-105 duration-300"
        >
          <LuEar  className="text-5xl text-teal-500 mb-4" />
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Our Vision</h3>
          <p className="text-gray-600">
            To be a globally recognized leader in ENT healthcare, pioneering medical advancements and delivering exceptional patient experiences with excellence and integrity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
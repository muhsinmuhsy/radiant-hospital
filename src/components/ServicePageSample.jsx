// pages/services.js
'use client';
import { useState } from 'react';
import Head from 'next/head';

// Services data
const servicesData = {
  surgeries: [
    {
      id: 1,
      name: "Tonsillectomy",
      description: "Surgical removal of the tonsils to treat recurring infections or obstructive sleep apnea.",
      imageUrl: "/spec-2.svg",
      duration: "1-2 hours",
      recovery: "2 weeks"
    },
    {
      id: 2,
      name: "Adenoidectomy",
      description: "Removal of adenoid tissue to improve breathing and reduce recurrent infections.",
      imageUrl: "/spec-1.svg",
      duration: "30-60 minutes",
      recovery: "1-2 weeks"
    },
    {
      id: 3,
      name: "Septoplasty",
      description: "Straightening of the nasal septum to improve airflow and breathing difficulties.",
      imageUrl: "/api/placeholder/600/400",
      duration: "1-1.5 hours",
      recovery: "3-4 weeks"
    },
    {
      id: 4,
      name: "Rhinoplasty",
      description: "Reshaping of the nose to improve both function and appearance.",
      imageUrl: "/api/placeholder/600/400",
      duration: "2-3 hours",
      recovery: "2-3 weeks"
    },
    {
      id: 5,
      name: "Myringotomy & Tube Placement",
      description: "Placement of ear tubes to treat recurring ear infections and fluid buildup.",
      imageUrl: "/api/placeholder/600/400",
      duration: "15-20 minutes",
      recovery: "1-2 days"
    },
    {
      id: 6,
      name: "Thyroidectomy",
      description: "Removal of part or all of the thyroid gland to treat various thyroid conditions.",
      imageUrl: "/api/placeholder/600/400",
      duration: "2-3 hours",
      recovery: "1-2 weeks"
    }
  ],
  endoscopies: [
    {
      id: 1,
      name: "Laryngoscopy",
      description: "Examination of the voice box (larynx) using an endoscope to diagnose voice problems.",
      imageUrl: "/api/placeholder/600/400",
      duration: "15-30 minutes",
      preparation: "Fasting may be required"
    },
    {
      id: 2,
      name: "Nasal Endoscopy",
      description: "Examination of the nasal and sinus passages using a thin, flexible endoscope.",
      imageUrl: "/api/placeholder/600/400",
      duration: "10-15 minutes",
      preparation: "No special preparation needed"
    },
    {
      id: 3,
      name: "Esophagoscopy",
      description: "Examination of the esophagus to diagnose swallowing difficulties and other issues.",
      imageUrl: "/api/placeholder/600/400",
      duration: "20-30 minutes",
      preparation: "Fasting for 6-8 hours"
    },
    {
      id: 4,
      name: "Bronchoscopy",
      description: "Examination of the airways and lungs using a bronchoscope for diagnosis and treatment.",
      imageUrl: "/api/placeholder/600/400",
      duration: "30-60 minutes",
      preparation: "Fasting for 6-8 hours"
    }
  ],
  otherServices: [
    {
      id: 1,
      name: "Hearing Tests",
      description: "Comprehensive audiological evaluations to assess hearing function and diagnose hearing loss.",
      imageUrl: "/api/placeholder/600/400"
    },
    {
      id: 2,
      name: "Balance Testing",
      description: "Specialized tests to evaluate vestibular function and diagnose balance disorders.",
      imageUrl: "/api/placeholder/600/400"
    },
    {
      id: 3,
      name: "Sleep Studies",
      description: "Overnight evaluations to diagnose sleep apnea and other sleep-related breathing disorders.",
      imageUrl: "/api/placeholder/600/400"
    },
    {
      id: 4,
      name: "Allergy Testing",
      description: "Skin and blood tests to identify allergens causing symptoms like nasal congestion and sinusitis.",
      imageUrl: "/api/placeholder/600/400"
    }
  ]
};

export default function ServicesPageSample() {
  const [activeTab, setActiveTab] = useState('surgeries');
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Our Services | ENT Specialists Hospital</title>
        <meta name="description" content="Comprehensive ENT services including surgeries and endoscopies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-indigo-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-800 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Our Specialized ENT Services
            </h1>
            <p className="mt-6 text-xl max-w-3xl mx-auto">
              Providing comprehensive ear, nose, and throat care with advanced surgical procedures and diagnostics.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white rounded-t-3xl"></div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px space-x-8">
            <button
              onClick={() => setActiveTab('surgeries')}
              className={`${
                activeTab === 'surgeries'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg`}
            >
              Surgical Procedures
            </button>
            <button
              onClick={() => setActiveTab('endoscopies')}
              className={`${
                activeTab === 'endoscopies'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg`}
            >
              Endoscopic Procedures
            </button>
            <button
              onClick={() => setActiveTab('otherServices')}
              className={`${
                activeTab === 'otherServices'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg`}
            >
              Other Services
            </button>
          </nav>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData[activeTab].map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 hover:shadow-xl cursor-pointer"
              onClick={() => handleServiceClick(service)}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.imageUrl}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-indigo-800">{service.name}</h3>
                <p className="mt-2 text-gray-600 line-clamp-3">{service.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    Learn More
                  </span>
                  {service.duration && (
                    <span className="text-sm text-gray-500">Duration: {service.duration}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={closeModal}></div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3 className="text-2xl leading-6 font-bold text-indigo-900" id="modal-title">
                      {selectedService.name}
                    </h3>
                    <div className="mt-6 flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/2">
                        <img src={selectedService.imageUrl} alt={selectedService.name} className="rounded-lg w-full h-64 object-cover" />
                      </div>
                      <div className="md:w-1/2">
                        <h4 className="text-lg font-medium text-gray-900">Description</h4>
                        <p className="mt-2 text-gray-600">{selectedService.description}</p>
                        
                        {selectedService.duration && (
                          <div className="mt-4">
                            <h4 className="text-lg font-medium text-gray-900">Procedure Details</h4>
                            <p className="mt-1 text-gray-600"><span className="font-medium">Duration:</span> {selectedService.duration}</p>
                            {selectedService.recovery && <p className="text-gray-600"><span className="font-medium">Recovery Time:</span> {selectedService.recovery}</p>}
                            {selectedService.preparation && <p className="text-gray-600"><span className="font-medium">Preparation:</span> {selectedService.preparation}</p>}
                          </div>
                        )}
                        
                        <div className="mt-6">
                          <h4 className="text-lg font-medium text-gray-900">Who Needs This Procedure?</h4>
                          <p className="mt-1 text-gray-600">
                            Patients experiencing symptoms related to {selectedService.name.toLowerCase()} may benefit from this procedure. 
                            Our specialists will conduct a thorough evaluation to determine if this is the right treatment option for you.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Schedule Consultation
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <div className="bg-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Why Choose Our ENT Hospital</h2>
            <p className="mt-4 text-indigo-200 max-w-2xl mx-auto">
              We provide exceptional care with cutting-edge technology and experienced specialists
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-white">5000+</p>
              <p className="mt-2 text-indigo-200">Surgeries Performed</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">98%</p>
              <p className="mt-2 text-indigo-200">Patient Satisfaction</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">24/7</p>
              <p className="mt-2 text-indigo-200">Emergency Care</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">15+</p>
              <p className="mt-2 text-indigo-200">Specialist Doctors</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our ENT procedures and services
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900">What should I expect during my first visit?</h3>
              <p className="mt-2 text-gray-600">
                Your initial consultation will include a comprehensive medical history review, physical examination of your ear, nose, and throat, and possibly diagnostic tests. Our specialists will discuss your symptoms and create a personalized treatment plan.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900">How long is the recovery period after ENT surgery?</h3>
              <p className="mt-2 text-gray-600">
                Recovery time varies depending on the procedure. Minor surgeries like ear tube placement may require only 1-2 days, while more complex procedures like thyroidectomy might need 1-2 weeks. We provide detailed post-operative care instructions for each patient.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900">Are ENT procedures covered by insurance?</h3>
              <p className="mt-2 text-gray-600">
                Most medically necessary ENT procedures are covered by insurance plans. Our administrative team can help verify your coverage and discuss any potential out-of-pocket expenses before scheduling your procedure.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900">How do I prepare for an endoscopy?</h3>
              <p className="mt-2 text-gray-600">
                Preparation varies by procedure. Some endoscopies require fasting for 6-8 hours before, while others need minimal preparation. Our team will provide specific instructions based on your scheduled procedure.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Ready to Schedule Your Consultation?</h2>
          <p className="mt-4 text-xl max-w-2xl mx-auto">
            Our team of ENT specialists is ready to provide you with expert care
          </p>
          <div className="mt-8 flex justify-center">
            <button className="bg-white text-indigo-700 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition">
              Book an Appointment
            </button>
            <button className="ml-4 bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-indigo-700 transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ENT Specialists Hospital</h3>
              <p className="text-gray-400">
                Providing comprehensive ear, nose, and throat care with cutting-edge technology and experienced specialists.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Doctors</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Patient Resources</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <address className="text-gray-400 not-italic">
                <p>123 Medical Center Drive</p>
                <p>Suite 456</p>
                <p>New York, NY 10001</p>
                <p className="mt-2">Phone: (555) 123-4567</p>
                <p>Email: info@enthospital.com</p>
              </address>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">© 2025 ENT Specialists Hospital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
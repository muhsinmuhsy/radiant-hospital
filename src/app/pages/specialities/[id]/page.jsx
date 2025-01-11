'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { CheckCircle, Calendar, ArrowRight, Award, Phone } from 'lucide-react';

const SpecialtyDetails = () => {
  const { id } = useParams(); // Use useParams instead of useRouter

  const [specialty, setSpecialty] = useState(null);

  useEffect(() => {
    if (id) {
        const specialties = [
            {
                id: '1',
                title: 'Micro Ear Surgeries',
                description: 'Advanced surgical procedures for ear conditions with precision and care.',
                image: '/spec-1.svg',
                detailedDescription: 'Micro Ear Surgeries involve advanced techniques to address ear conditions such as chronic infections, tumors, and hearing impairments. These minimally invasive procedures ensure precision and faster recovery.',
                stat: '95% Success Rate',
                benefits: [
                  'Minimally invasive techniques',
                  'High success rates',
                  'Improved hearing outcomes',
                  'Reduced recovery time',
                ],
              },
              {
                id: '2',
                title: 'Endoscopic Ear Surgery',
                description: 'Minimally invasive techniques for treating ear disorders.',
                image: '/spec-2.svg',
                detailedDescription: 'Endoscopic Ear Surgery provides a minimally invasive approach to treating ear disorders such as perforations, infections, and hearing loss. It ensures reduced trauma and quicker recovery.',
                stat: '90% Success Rate',
                benefits: [
                  'Minimized trauma to surrounding tissues',
                  'Enhanced visualization of the ear structures',
                  'Quicker recovery times',
                ],
              },
              {
                id: '3',
                title: 'Endoscopic SIWOS Surgeries',
                description: 'Specialized procedures for addressing nasal and sinus conditions.',
                image: '/speciality/siwos.webp',
                detailedDescription: 'Endoscopic SIWOS Surgeries focus on addressing nasal and sinus obstructions using state-of-the-art technology. These procedures enhance breathing and alleviate chronic sinus issues.',
                stat: '92% Success Rate',
                benefits: [
                  'Non-invasive techniques',
                  'Enhanced breathing',
                  'Relief from chronic sinus problems',
                ],
              },
              {
                id: '4',
                title: 'Coblation Adenotonsillectomy',
                description: 'Safe and effective removal of adenoids and tonsils using coblation technology.',
                image: '/speciality/coblation.webp',
                detailedDescription: 'Coblation Adenotonsillectomy utilizes advanced coblation technology for the precise removal of adenoids and tonsils. This technique minimizes bleeding and ensures a faster recovery.',
                stat: '98% Success Rate',
                benefits: [
                  'Minimal post-operative pain',
                  'Reduced bleeding',
                  'Quick recovery time',
                ],
              },
              {
                id: '5',
                title: 'Surgeries for Snoring',
                description: 'Comprehensive surgical solutions for snoring and sleep apnea.',
                image: '/images/snoring.jpg',
                detailedDescription: 'Surgeries for Snoring address the root causes of sleep apnea and snoring. These procedures ensure better sleep quality and overall health improvements.',
                stat: '85% Success Rate',
                benefits: [
                  'Improved sleep quality',
                  'Reduced health risks associated with sleep apnea',
                  'Enhanced quality of life',
                ],
              },
              {
                id: '6',
                title: 'Endolaryngeal Surgeries',
                description: 'Precise surgeries for vocal cord and laryngeal conditions.',
                image: '/images/endolaryngeal.jpg',
                detailedDescription: 'Endolaryngeal Surgeries focus on treating vocal cord and laryngeal conditions. These precise procedures improve voice quality and resolve laryngeal issues.',
                stat: '88% Success Rate',
                benefits: [
                  'Improved voice quality',
                  'Restoration of vocal function',
                  'Minimally invasive techniques',
                ],
              },
              {
                id: '7',
                title: 'Voice Restoration Surgeries',
                description: 'Advanced procedures to restore and improve vocal function.',
                image: '/images/voice-restoration.jpg',
                detailedDescription: 'Voice Restoration Surgeries aim to improve or restore vocal abilities for individuals with voice impairments caused by trauma or medical conditions.',
                stat: '89% Success Rate',
                benefits: [
                  'Enhanced vocal clarity',
                  'Restoration of lost vocal abilities',
                  'Minimized downtime',
                ],
              },
              {
                id: '8',
                title: 'Skull Base Surgeries',
                description: 'Specialized treatments for skull base tumors and disorders.',
                image: '/images/skull-base.jpg',
                detailedDescription: 'Skull Base Surgeries address complex conditions affecting the base of the skull, including tumors and abnormalities, using cutting-edge techniques.',
                stat: '87% Success Rate',
                benefits: [
                  'Effective treatment of complex conditions',
                  'Precision and safety',
                  'Improved patient outcomes',
                ],
              },
              {
                id: '9',
                title: 'Neck Surgeries',
                description: 'Expert care for thyroid, parathyroid, and other neck conditions.',
                image: '/images/neck.jpg',
                detailedDescription: 'Neck Surgeries encompass procedures targeting the thyroid, parathyroid, and other neck conditions, ensuring safe and effective treatments.',
                stat: '90% Success Rate',
                benefits: [
                  'Targeted treatment of neck conditions',
                  'Minimized scarring',
                  'Comprehensive post-operative care',
                ],
              },
              {
                id: '10',
                title: 'Endoscopy',
                description: 'Diagnostic and therapeutic endoscopic procedures for ENT conditions.',
                image: '/images/endoscopy.jpg',
                detailedDescription: 'Endoscopy provides a minimally invasive approach to diagnosing and treating ENT conditions, ensuring precision and faster recovery.',
                stat: '95% Success Rate',
                benefits: [
                  'Minimally invasive',
                  'Accurate diagnostics',
                  'Quick recovery',
                ],
              },
              {
                id: '11',
                title: 'Sleep Study and Sleep Endoscopy',
                description: 'Comprehensive analysis and treatment of sleep disorders.',
                image: '/images/sleep-study.jpg',
                detailedDescription: 'Sleep Study and Sleep Endoscopy evaluate and address sleep disorders, offering tailored treatment plans for better sleep health.',
                stat: '90% Success Rate',
                benefits: [
                  'Accurate diagnosis of sleep disorders',
                  'Tailored treatment plans',
                  'Improved sleep quality',
                ],
              },
              {
                id: '12',
                title: 'Otoneurology',
                description: 'Specialized care for balance disorders and related conditions.',
                image: '/images/otoneurology.jpg',
                detailedDescription: 'Otoneurology addresses balance disorders and related conditions, ensuring improved mobility and quality of life.',
                stat: '93% Success Rate',
                benefits: [
                  'Improved balance and mobility',
                  'Specialized treatment plans',
                  'Enhanced quality of life',
                ],
              },
              {
                id: '13',
                title: 'Pediatric Oto Rhino Caryngology',
                description: 'Dedicated ENT care for children with advanced techniques.',
                image: '/images/pediatric-ent.jpg',
                detailedDescription: 'Pediatric Oto Rhino Caryngology focuses on providing advanced ENT care for children, ensuring safe and effective treatments for various conditions.',
                stat: '96% Success Rate',
                benefits: [
                  'Child-friendly procedures',
                  'Expert pediatric care',
                  'Safe and effective treatments',
                ],
              },
          ];

      const matchedSpecialty = specialties.find((item) => item.id === id);
      setSpecialty(matchedSpecialty);
    }
  }, [id]);

  if (!specialty) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        {id ? <p>Specialty not found.</p> : <div className="animate-pulse">Loading...</div>}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className=" text-white"style={{ background: 'linear-gradient(132.55deg, #22CCD2 15.07%, #1F2F61 95.26%)' }}>
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">{specialty.title}</h1>
              <p className="text-xl opacity-90">{specialty.description}</p>
              <div className="flex items-center gap-2 bg-white/20 w-fit px-4 py-2 rounded-full">
                <Award className="w-5 h-5" />
                <span>{specialty.stat}</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-96 md:h-96">
                <Image
                  src={specialty.image}
                  alt={specialty.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Detailed Description */}
          <div className="md:col-span-2 bg-white rounded-lg shadow-lg">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">About the Treatment</h2>
              <p className="text-gray-600 leading-relaxed">{specialty.detailedDescription}</p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Key Benefits</h3>
                <div className="space-y-3">
                  {specialty.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 " style={{color:'#11B3B8'}} />
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Consultation Card */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-lg h-fit">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Schedule a Consultation</h2>
              <p className="text-gray-600 mb-6">
                Learn more about how this treatment can help you. Our specialists are ready to answer your questions.
              </p>

              <button
                onClick={() => alert('Schedule Consultation')}
                className="w-full  text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 group" style={{backgroundColor:'#11B3B8'}}
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => alert('Schedule Consultation')}
                className="w-full  text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 group mt-5" style={{backgroundColor:'#11B3B8'}}
              >
                
                <Phone className="w-5 h-5 " />
                Connect with us 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SpecialtyDetails;

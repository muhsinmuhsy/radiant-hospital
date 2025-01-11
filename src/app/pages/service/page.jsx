import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const ServicesPage = () => {
  const services = [
    {
      icon: '/hearing-aid.svg',
      title: 'Hearing Aid',
      description:
        'There are no hearing aids that are only for children, but there are hearing aids with features that suit children especially well.',
    },
    {
      icon: '/vertigo.svg',
      title: 'Vertigo Clinic',
      description:
        'There are no hearing aids that are only for children, but there are hearing aids with features that suit children especially well.',
    },
    {
      icon: '/endoscopy.svg',
      title: 'Endoscopic & Skull Base Surgery',
      description:
        'ENT surgery has expanded its vistas more than any other surgical specialty in the world. An excellent example is endoscopic surgery.',
    },
    {
      icon: '/hearing-aid.svg',
      title: 'Vertigo Clinic',
      description:
        'There are no hearing aids that are only for children, but there are hearing aids with features that suit children especially well.',
    },
    {
      icon: '/vertigo.svg',
      title: 'Vertigo Clinic',
      description:
        'There are no hearing aids that are only for children, but there are hearing aids with features that suit children especially well.',
    },
    {
      icon: '/vertigo.svg',
      title: 'Vertigo Clinic',
      description:
        'There are no hearing aids that are only for children, but there are hearing aids with features that suit children especially well.',
    },
    {
      icon: '/endoscopy.svg',
      title: 'Endoscopic & Skull Base Surgery',
      description:
        'ENT surgery has expanded its vistas more than any other surgical specialty in the world. An excellent example is endoscopic surgery.',
    },
  ];

  return (
    <>
    <Navbar/>
       <div 
      className="min-h-screen py-16 px-4 md:px-8"
      style={{
        background: 'linear-gradient(132.55deg, #22CCD2 26.07%, #1F2F61 95.26%)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Comprehensive ENT care with cutting-edge treatments and personalized attention
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="bg-white/20 border-2 border-white/50 rounded-[40px] h-[300px] p-6 text-center backdrop-blur-sm hover:bg-white/30 transition-colors">
                <div className="heading flex flex-col items-center mb-4">
                  <div className="w-[60px] h-[60px] mb-4 group-hover:scale-110 transition-transform">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-full h-full"
                    />
                  </div>
                  <h2 className="text-xl md:text-2xl text-white font-semibold">
                    {service.title}
                  </h2>
                </div>
                <div className="text">
                  <p className="text-sm md:text-base text-white/90">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
      
    </div>
    {/* CTA Section */}
    <div className="bg-teal-400 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience Expert ENT Care?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule a consultation with our specialists today
            </p>
            <button className="px-8 py-4 bg-white text-teal-700 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              Book an Appointment
            </button>
          </div>
        </div>
    <Footer/>
    </>
  );
};

export default ServicesPage;
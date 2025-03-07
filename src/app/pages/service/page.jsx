import BlogSectionDisplay from '@/components/BlogDisplay';
import Footer from '@/components/Footer';
import GetinTouch from '@/components/GetinTouch';
import Navbar from '@/components/Navbar';
import TestimonialCarousel from '@/components/Testimonial';
import React from 'react';

const ServicesPage = () => {
  const services = [
    {
      icon: '/hearing-aid.svg',
      title: 'Hearing Aid',
      description:
        'We offer advanced hearing aid solutions tailored to your specific needs, improving your quality of life through better hearing.',
    },
    {
      icon: '/vertigo.svg',
      title: 'Vertigo Clinic',
      description:
        'Our specialized vertigo clinic provides comprehensive diagnosis and treatment for balance disorders and dizziness symptoms.',
    },
    {
      icon: '/endoscopy.svg',
      title: 'Endoscopic & Skull Base Surgery',
      description:
        'ENT surgery has expanded its vistas more than any other surgical specialty in the world. An excellent example is endoscopic surgery.',
    },
    {
      icon: '/icons/icon.png',
      title: 'Cochlear Implant Services',
      description:
        'Our cochlear implant services provide life-changing solutions for those with severe to profound hearing loss.',
    },
    {
      icon: '/icons/hearing.png',
      title: 'Tinnitus Management',
      description:
        'We offer effective tinnitus management strategies to help reduce the impact of ringing or buzzing sounds in your ears.',
    },
    {
      icon: '/icons/pediatrics.png',
      title: 'Pediatric ENT Care',
      description:
        'Specialized ENT care for children, addressing common issues like ear infections, tonsillitis, and hearing concerns with gentle expertise.',
    },
    
  ];

  return (
    <>
      <Navbar />
      <div className="relative">
        {/* Hero Section with Background */}
        <div 
          className="relative py-24 px-4 md:px-8"
          style={{
            background: 'linear-gradient(132.55deg, #feffff 26.07%, #ffffff 95.26%)'
          }}
        >
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">Comprehensive ENT Services</h1>
              <p className="text-xl text-black/90 max-w-3xl mx-auto leading-relaxed">
                Advanced care for all your ear, nose, and throat needs with personalized treatment plans
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-white/10 blur-xl"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-white/10 blur-xl"></div>
        </div>
        
        {/* Services Section */}
        {/* Services Section */}
<div className="py-16 px-4 md:px-8" style={{
  background: 'linear-gradient(135deg, #D4BEDE 0%, #795F9F 50%, #8B489A 100%)'
}}>
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Specialized Services</h2>
      <p className="text-lg text-white/90 max-w-2xl mx-auto">
        Cutting-edge treatments delivered by experienced specialists for optimal results
      </p>
    </div>

    {/* Services Grid - Keeping the card design as requested */}
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
</div>
        
        

        
    
    
      <BlogSectionDisplay/>
      <GetinTouch/>
      <TestimonialCarousel/>
      <Footer />
    </>
  );
};

export default ServicesPage;
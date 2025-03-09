'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
// import ConsultantsSection from '@/components/ConsultantsSection';
// import BlogSectionDisplay from '@/components/BlogDisplay';
import {
  useFetchOurValues,
} from '@/lib/data';
import GetinTouch from '@/components/GetinTouch';
import ContactComponent from '@/components/ContactComponent';

const AboutUs = () => {
  const { data: ourValues, isLoading: isOurValuesLoading, error: ourValuesError } = useFetchOurValues();
 

  return (
   <>
      <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      

      {/* Main Content */}
      <ContactComponent/>
    
        <GetinTouch/>
        {/* Mission & Vision */}
        
     
    </div>
     <Footer />
   </>
  );
};

export default AboutUs;
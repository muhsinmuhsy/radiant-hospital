
import AboutHero from "@/components/AboutHero";
import HeroText from "@/components/AHeroText";
import BlogSectionDisplay from "@/components/BlogDisplay";
import Carousal from "@/components/Carousal";
import DoctorsSection from "@/components/DoctorsSection";
import Footer from "@/components/Footer";
import HeroFour from "@/components/HeroFour";
import HeroThree from "@/components/HeroThree";
import HeroTwo from "@/components/Herotwo";
import Navbar from "@/components/Navbar";
import OurEquipment from "@/components/OutEquip";
import ServiceSection from "@/components/ServiceSection";
import OurSpecialities from "@/components/Specialities";
import TestimonialCarousel from "@/components/Testimonial";

export default function MainHome() {
 

  return (
  <>
    <Carousal/>
    {/* <HeroText/> */}
    {/* <HeroTwo/> */}
    {/* <HeroThree/> */}
    {/* <HeroFour/>  */}
    <AboutHero/>
    <ServiceSection/>
    <DoctorsSection/>
    <OurSpecialities/>
    <OurEquipment/>
    <BlogSectionDisplay/>
    <TestimonialCarousel/>
    <Footer/>
    
    
   
  </>
  );
}

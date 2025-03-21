'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Icons Components
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
  </svg>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
  </svg>
);

// Social Icons
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#19051d] text-white py-12 px-8 w-full">
      <div className="max-w-6xl mx-auto flex flex-col gap-8 md:flex-row md:justify-between">
        <div className="flex-1 max-w-[280px]">
          <Image 
            src="/radiant/radiant-logo-hr-white.svg" 
            alt="ENT Hospital Logo" 
            width={200} 
            height={50} 
          />
          <p className="mt-4 text-sm leading-6">
            Advanced ENT care with a personalized approach. 
            Supporting better hearing, breathing, and living for over 25 years.
          </p>
          <div className="mt-4">
            <p className="my-2 flex items-center text-sm">
              <span className="mr-2"><PhoneIcon /></span> +91 85477 69268, 0497 2768768
            </p>
            <p className="my-2 flex items-center text-sm">
              <span className="mr-2"><EmailIcon /></span> info@radiantenthospital.com
            </p>
            <p className="my-2 flex items-center text-sm">
              <span className="mr-2"><LocationIcon /></span> Opp. KSRTC Bus stand, National Highway, Kannur-1
            </p>
          </div>
        </div>
        
        <div className="flex flex-col gap-8 md:flex-row md:flex-2 md:justify-around ">
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold mb-2 text-white">Our Specialities</h3>
            <div className="text-sm hover:underline transition-colors duration-200">
              <Link href="/pages/specialities/7" className="text-white hover:text-white">Thyroid Surgeries</Link>
            </div>
            <div className="text-sm hover:underline transition-colors duration-200">
              <Link href="/pages/specialities/4" className="text-white hover:text-white">Voice Restoration surgeries</Link>
            </div>
            <div className="text-sm hover:underline transition-colors duration-200">
              <Link href="/pages/specialities/8" className="text-white hover:text-white">Coblation Adeno-Tonsillectomy</Link>
            </div>
            <div className="text-sm hover:underline transition-colors duration-200">
              <Link href="/pages/specialities/11" className="text-white hover:text-white">Surgeries for Snoring</Link>
            </div>
            <div className="text-sm hover:underline transition-colors duration-200">
              <Link href="/pages/specialities/3" className="text-white hover:text-white">Functional Endoscopic Sinus surgeries</Link>
            </div>
          </div>
          
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold mb-2 text-white">Our Services</h3>
            <div className="text-sm hover:underline transition-colors duration-200">
              <Link href="/pages/service" className="text-white hover:text-white">Head and Neck Surgery</Link>
            </div>
            <div className="text-sm hover:underline transition-colors duration-200">
              <Link href="/pages/service" className="text-white hover:text-white">Micro Ear Surgeries</Link>
            </div>
            <div className="text-sm hover:underline transition-colors duration-200">
              <Link href="/pages/service" className="text-white hover:text-white">Headache Clinic</Link>
            </div>
            <div className="text-sm hover:underline transition-colors duration-200">
              <Link href="/pages/service" className="text-white hover:text-white">Allergy Treatment</Link>
            </div>
            <div className="text-sm hover:underline transition-colors duration-200">
              <Link href="/pages/service" className="text-white hover:text-white">Pediatric ENT</Link>
            </div>
            <div className="text-sm hover:underline transition-colors duration-200">
              <Link href="/pages/service" className="text-white hover:text-white">Oral and Maxillofacial Surgeries</Link>
            </div>
            <div className="text-sm hover:underline transition-colors duration-200">
              <Link href="/pages/service" className="text-white hover:text-white">Cochlear Implants</Link>
            </div>
            <div className="text-sm hover:underline transition-colors duration-200">
              <Link href="/pages/service" className="text-white hover:text-white">Hearing Aid</Link>
            </div>
            <div className="text-sm hover:underline transition-colors duration-200">
              <Link href="/faq" className="text-white hover:text-white">FAQs</Link>
            </div>
          </div>
          
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold mb-2 text-white">About</h3>
            <div className="text-sm hover:underline transition-colors duration-200">
              <Link href="/about/team" className="text-white hover:text-white">Our Doctors</Link>
            </div>
            <div className="text-sm hover:underline transition-colors duration-200">
              <Link href="/about/facility" className="text-white hover:text-white">Our Facility</Link>
            </div>
            <div className="text-sm hover:underline transition-colors duration-200">
              <Link href="/careers" className="text-white hover:text-white">Careers</Link>
            </div>
            <div className="text-sm hover:underline transition-colors duration-200">
              <Link href="/blog" className="text-white hover:text-white">Blog</Link>
            </div>
            <div className="text-sm hover:underline transition-colors duration-200">
              <Link href="/contact" className="text-white hover:text-white">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-white border-opacity-20 flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <p className="text-sm text-white">
          © {currentYear} ENT Specialty Hospital. All Rights Reserved.
        </p>
        
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white text-lg hover:opacity-80 transition-opacity duration-200">
            <FacebookIcon />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-white text-lg hover:opacity-80 transition-opacity duration-200">
            <TwitterIcon />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white text-lg hover:opacity-80 transition-opacity duration-200">
            <InstagramIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
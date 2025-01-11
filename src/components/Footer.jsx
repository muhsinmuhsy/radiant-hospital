import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">About Us</h3>
            <p>
              Welcome to our ENT hospital, where we specialize in ear, nose, and throat care. 
              Our team is dedicated to providing exceptional services to help you feel your best.
            </p>
          </div>

          {/* Quick Links */}
          <div>
  <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
  <ul className="space-y-2">
    <li>
      <a href="/services" className="hover:text-blue-400 text-white">Services</a>
    </li>
    <li>
      <a href="/appointments" className="hover:text-blue-400 text-white">Book an Appointment</a>
    </li>
    <li>
      <a href="/doctors" className="hover:text-blue-400 text-white">Our Doctors</a>
    </li>
    <li>
      <a href="/contact" className="hover:text-blue-400 text-white">Contact Us</a>
    </li>
  </ul>
</div>

          

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <p>
              Address : 123 Health Street, Wellness City, WC 45678
            </p>
            <p>
              Email : <a href=" mailto:info@enthospital.com" className="text-white">info@enthospital.com</a>
            </p>
            <p>
              Phone : <a href=" tel:+1234567890" className="text-white">+1 234 567 890</a>
            </p>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center md:flex md:justify-between">
          <div className="mb-4 md:mb-0">
            <p>© {new Date().getFullYear()} ENT Hospital. All Rights Reserved.</p>
          </div>
          <div className="flex justify-center space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"  className=" text-white">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className=" text-white">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className=" text-white">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className=" text-white">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

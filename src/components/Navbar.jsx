'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';
import AppointmentBooking from './AppointmentBooking';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState('');
  const [activeSubDropdown, setActiveSubDropdown] = useState('');

  const services = {
    Surgery: [
      'MICRO EAR SURGERIES',
      'ENDOSCOPIC EAR SURGERY',
      'ENDOSCOPIC SIWOS SURGERIES',
      'ENDOLARYNGEAC SURGERIES',
      'VOICE RESTORATION SURGERIES',
      'SKULL BASE SURGERIES',
      'NECK SURGERIES',
    ],
    Endoscopy: [
      'OTOSCOPY',
      'DIAGNOSTIC NASAC ENDOSCOPY',
      'VIDEO LARYNGOSCOPY',
      'STROBOSCOPY',
      'FLEXIBLE NASOPHARYNGOSCOPY',
      'SLEEP STUDY AND SLEEP ENDOSCOPY',
    ],
  };

  const toggleDropdown = (category) => {
    setActiveDropdown(activeDropdown === category ? '' : category);
  };

  const toggleSubDropdown = (subCategory) => {
    setActiveSubDropdown(activeSubDropdown === subCategory ? '' : subCategory);
  };

  return (
    <nav className="bg-white shadow-md w-full sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 relative">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src="/logo.png" alt="Logo" width={120} height={48} className="object-contain" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/pages/specialities">Specialities</Link>
            {/* Services Dropdown - Desktop */}
            <div className="relative group">
              <Link href="/pages/service" className="nav-link flex items-center">
                Services
                <ChevronDown className="ml-1 w-4 h-4" />
              </Link>
              <div className="hidden group-hover:block absolute top-full left-0 w-[600px] bg-white shadow-xl rounded-b-lg">
                <div className="grid grid-cols-2 p-6 gap-6">
                  {Object.entries(services).map(([category, items]) => (
                    <div key={category} className="space-y-2">
                      <h3 className="font-semibold text-teal-700">{category}</h3>
                      <ul className="space-y-1">
                        {items.map((item) => (
                          <li key={item}>
                            <Link
                              href={`/pages/services/${item.toLowerCase().replace(/\s+/g, '-')}`}
                              className="block text-sm text-gray-600 hover:text-teal-600 py-1"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/pages/consultants">Consultants</Link>
            <Link href="/pages/contact" className="nav-link">Contact</Link>
            <Link href="/pages/about" className="nav-link">About Us</Link>
            <Link href="/pages/blog" className="nav-link">Blog</Link>
          </div>

          {/* Book Appointment Button - Desktop */}
          <div className="hidden lg:block">
            <AppointmentBooking />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-4 py-2 space-y-4 bg-white border-t">
            <Link href="/" className="block text-lg text-gray-700 hover:text-teal-600">
              Home
            </Link>
            <Link href="/pages/specialities" className="block text-lg text-gray-700 hover:text-teal-600">
              Specialities
            </Link>

            {/* Services Dropdown - Mobile */}
            <div>
              <Link href="/pages/service" className="flex items-center justify-between w-full text-lg text-gray-700 hover:text-teal-600">
                <span>Services</span>
                <ChevronDown className="w-4 h-4 transform transition-transform" />
              </Link>
              <div className="mt-2 space-y-2 pl-4">
                {Object.entries(services).map(([category, items]) => (
                  <div key={category}>
                    <button
                      onClick={() => toggleSubDropdown(category)}
                      className="flex items-center justify-between w-full text-gray-700 hover:text-teal-600"
                    >
                      <span>{category}</span>
                      <ChevronDown
                        className={`w-4 h-4 transform transition-transform ${activeSubDropdown === category ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <div className={`${activeSubDropdown === category ? 'block' : 'hidden'} mt-1 pl-4 space-y-1`}>
                      {items.map((item) => (
                        <Link
                          key={item}
                          href={`/pages/services/${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block text-sm text-gray-600 hover:text-teal-600"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link href="/pages/consultants" className="block text-lg text-gray-700 hover:text-teal-600">
              Consultants
            </Link>
            <Link href="/pages/contact" className="block text-lg text-gray-700 hover:text-teal-600">
              Contact
            </Link>
            <Link href="/pages/about" className="block text-lg text-gray-700 hover:text-teal-600">
              About Us
            </Link>
            <Link href="/pages/blog" className="block text-lg text-gray-700 hover:text-teal-600">
              Blog
            </Link>

            {/* Book Appointment Button - Mobile */}
            <div className="pt-4">
              <button className="w-full bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';
import AppointmentBooking from './AppointmentBooking';
import { useFetchSpecialities } from '@/lib/data';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubDropdown, setActiveSubDropdown] = useState('');

  const { specialities: specialitiesData, isLoading, error } = useFetchSpecialities();

  // Ensure specialitiesData is an array, default to empty array if null/undefined
  const filteredSpecialities = {
    Surgery: (specialitiesData || []).filter(spec => spec.category === "Surgical Procedures"),
    Endoscopy: (specialitiesData || []).filter(spec => spec.category === "Endoscopic Surgery"),
  };

  const toggleSubDropdown = (subCategory) => {
    setActiveSubDropdown(activeSubDropdown === subCategory ? '' : subCategory);
  };

  return (
    <nav className="bg-white shadow-md w-full sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto">
        {/* Desktop Navbar */}
        <div className="flex items-center justify-between px-4 py-4 relative">
          {/* Logo as a Link */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/radiant/logo-hr.png" alt="Logo" width={150} height={48} className="object-contain" />
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="nav-link">Home</Link>
            <div className="relative group">
              <Link href="/pages/specialities" className="nav-link flex items-center">
                Specialities
                <ChevronDown className="ml-1 w-4 h-4" />
              </Link>
              {/* Dropdown for Specialities */}
              <div className="hidden group-hover:block absolute top-full left-0 w-[600px] bg-white shadow-xl rounded-b-lg">
                <div className="grid grid-cols-2 p-6 gap-6">
                  {Object.entries(filteredSpecialities).map(([category, items]) => (
                    <div key={category} className="space-y-2">
                      <h3 className="font-semibold text-[#795F9F]">{category}</h3>
                      <ul className="space-y-1">
                        {items.map((item) => (
                          <li key={item.id}>
                            <Link
                              href={`/pages/specialities/${item.id}`}
                              className="block text-sm text-gray-600 hover:text-[#795F9F] py-1"
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/pages/service">Services</Link>
            <Link href="/pages/consultants">Consultants</Link>
            <Link href="/pages/contact" className="nav-link">Contact</Link>
            <Link href="/pages/about" className="nav-link">About Us</Link>
            <Link href="/pages/blog" className="nav-link">Blog</Link>
          </div>

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

        {/* Mobile Menu */}
        <div className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-4 py-2 space-y-4 bg-white border-t">
            <Link href="/" className="block text-lg text-gray-700 hover:text-[#795F9F]">Home</Link>

            <div>
              <Link href="/pages/specialities" className="flex items-center justify-between w-full text-lg text-gray-700 hover:text-[#795F9F]">
                <span>Specialities</span>
                <ChevronDown className="w-4 h-4 transform transition-transform" />
              </Link>
              <div className="mt-2 space-y-2 pl-4">
                {Object.entries(filteredSpecialities).map(([category, items]) => (
                  <div key={category}>
                    <button
                      onClick={() => toggleSubDropdown(category)}
                      className="flex items-center justify-between w-full text-gray-700 hover:text-[#795F9F]"
                    >
                      <span>{category}</span>
                      <ChevronDown className={`w-4 h-4 transform transition-transform ${activeSubDropdown === category ? 'rotate-180' : ''}`} />
                    </button>
                    {/* Sub-menu for each category */}
                    <div className={`${activeSubDropdown === category ? 'block' : 'hidden'} mt-1 pl-4 space-y-1`}>
                      {items.map((item) => (
                        <Link
                          key={item.id}
                          href={`/pages/specialities/${item.id}`}
                          className="block text-sm text-gray-600 hover:text-[#795F9F]"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link href="/pages/service" className="block text-lg text-gray-700 hover:text-[#795F9F]">Services</Link>
            <Link href="/pages/consultants" className="block text-lg text-gray-700 hover:text-[#795F9F]">Consultants</Link>
            <Link href="/pages/contact" className="block text-lg text-gray-700 hover:text-[#795F9F]">Contact</Link>
            <Link href="/pages/about" className="block text-lg text-gray-700 hover:text-[#795F9F]">About Us</Link>
            <Link href="/pages/blog" className="block text-lg text-gray-700 hover:text-[#795F9F]">Blog</Link>

            {/* Appointment Booking for Mobile */}
            <div className="pt-4">
              <AppointmentBooking />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
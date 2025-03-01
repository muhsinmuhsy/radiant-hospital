import React from 'react'
import { 
   
    MapPin,
    Phone,
    Mail,
    Clock,
   
    ChevronRight,
   
  } from 'lucide-react';
import AppointmentBooking from './AppointmentBooking';
function GetinTouch() {
  return (
    <>
      {/* Contact Section with Hover Effects */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Get in Touch
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: "Location",
                    content: "Civil Station Road, Kannur, Kerala - 670002"
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    content: "+91 497 2700 XXX"
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: "info@radiantent.com"
                  },
                  {
                    icon: Clock,
                    title: "Working Hours",
                    content: "Monday - Saturday: 9:00 AM - 8:00 PM\nSunday: Emergency Services Only"
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white hover:shadow-md transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-teal-100 group-hover:bg-teal-600 transition-colors">
                      <item.icon className="w-6 h-6 text-teal-600 group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4  rounded-xl opacity-20 group-hover:opacity-30 blur transition-all" />
              <div className="relative bg-white p-8 rounded-xl shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Ready to Visit Us?</h3>
                <p className="text-gray-600 mb-8">
                  Schedule your consultation with our expert ENT specialists. We're here to provide the care you deserve.
                </p>
                <div className="w-full bg-gradient-to-r  text-white  rounded-xl font-medium  transition-all transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center group" style={{backgroundColor:"#11B3B8"}}>
                 <AppointmentBooking/>
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className=" mt-5 w-full bg-gradient-to-r  text-white py-3 rounded-xl font-medium  transition-all transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center group" style={{backgroundColor:"#11B3B8"}}>
                    Connect With Us
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
          
  )
}

export default GetinTouch
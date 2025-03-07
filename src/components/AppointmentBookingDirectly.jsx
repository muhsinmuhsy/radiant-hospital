import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Calendar } from "lucide-react";
import { BASE_URL } from '@/lib/data';
import Swal from 'sweetalert2'

// Fetch API function
async function createAppointment(data) {
  const response = await fetch(`${BASE_URL}/appointment-create/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create appointment");
  }

  return response.json();
}

const AppointmentBookingDirectly = ({ selectedDoctor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);


  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    age: "",
    address: "",
    doctors: selectedDoctor?.id || "",
    preferred_date: "",
    preferred_time: "",
  });

  useEffect(() => {
    if (selectedDoctor) {
      setFormData((prev) => ({ ...prev, doctors: selectedDoctor.id }));
    }
  }, [selectedDoctor]);

  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "02:00 PM", "02:30 PM",
    "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createAppointment(formData);
      // window.alert("Appointment created successfully!");
      Swal.fire({
        title: "Appointment Confirmed!",
        text: "Your appointment has been successfully booked. Our team will contact you shortly with further details.",
        icon: "success",
        confirmButtonText: "OK",
        draggable: true
      });
      
      setIsOpen(false)
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        age: "",
        address: "",
        doctors: "",
        preferred_date: "",
        preferred_time: "",
      });
    } catch (error) {
      window.alert("Error: " + error.message);
    }

    setLoading(false);
  };

  return (
    <div>
      <button 
        className="flex items-center gap-2 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
        style={{ backgroundColor: "#795F9F" }}
        onClick={() => setIsOpen(true)}
      >
        <Calendar className="h-4 w-4" />
        Book Appointment
      </button>

      {isOpen &&
        createPortal(
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Book Your Appointment</h2>
                <button 
                  onClick={() => setIsOpen(false)}
                  aria-label="Close"
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                      placeholder="enter your full name"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="enter your email address"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="phone number "
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Age *
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="select your age"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                  <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="enter your address"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Doctor *</label>
                    <input
                      name="doctors"
                      type="text"
                      value={selectedDoctor?.name}
                      readOnly
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                    >
                      
                    </input>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date *</label>
                    <input
                      type="date"
                      name="preferred_date"
                      value={formData.preferred_date}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time *</label>
                    <select
                      name="preferred_time"
                      value={formData.preferred_time}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <button type="submit" className="bg-[#795F9F] text-white px-6 py-3 rounded-lg ">
                    {loading ? "Booking..." : "Book Appointment"}
                  </button>
                </div>
              </form>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default AppointmentBookingDirectly;
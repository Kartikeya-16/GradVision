'use client'

import React, { useState } from "react";
import Image from "next/image";
import { FaAngleDoubleRight, FaUser, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  city: string;
  course: string;
  queries: string;
}

const GetInTouch = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phoneNumber: "",
    city: "",
    course: "mba",
    queries: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://crm-server.collegesolution.in/api/leads/create-web", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Response:", result);
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          course: "mba",
          city: "",
          queries: "",
        });
        alert("Form submitted successfully!");
      } else {
        console.error("Error submitting form:", response.statusText);
        alert("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form. Please try again later.");
    }
  };

  return (
    <SectionContainer bgColor="white">
      <div className="relative">
        {/* Background decorative elements */}
        <div className="absolute -top-10 right-0 w-72 h-72 bg-blue-50 rounded-full opacity-70 blur-3xl -z-10"></div>
        <div className="absolute -bottom-10 left-0 w-80 h-80 bg-orange-50 rounded-full opacity-70 blur-3xl -z-10"></div>
        
        <SectionHeading 
          title="Get in Touch With Us" 
          subtitle="Have questions about our programs or admission process? We're here to help you every step of the way."
          center
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl blur-sm -z-10"></div>
            <Image 
              src="/homepage/getintouch.png" 
              alt="Students discussing MBA opportunities" 
              width={500} 
              height={300} 
              className="rounded-xl shadow-lg max-w-full"
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain"
              }}
            />
          </div>
          
          <div className="mt-12 space-y-5 w-full max-w-md">
            <div className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
              <div className="bg-[#0A4DA2]/10 text-[#0A4DA2] rounded-full p-3 flex-shrink-0">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="font-medium text-[#0A4DA2]">Call Us</p>
                <p className="text-slate-600">+91 1234567890</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
              <div className="bg-[#0A4DA2]/10 text-[#0A4DA2] rounded-full p-3 flex-shrink-0">
                <FaEnvelope />
              </div>
              <div>
                <p className="font-medium text-[#0A4DA2]">Email Us</p>
                <p className="text-slate-600">info@gradvision.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="flex items-center justify-center w-full"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8 border border-slate-100">
            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              <div className="relative">
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name*"
                  className="w-full pl-4 pr-10 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A4DA2] focus:border-transparent transition-all duration-300"
                />
                <FaUser className="absolute right-3 top-3.5 text-slate-400" aria-hidden="true" />
              </div>

              <div className="relative">
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Id*"
                  className="w-full pl-4 pr-10 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A4DA2] focus:border-transparent transition-all duration-300"
                />
                <FaEnvelope className="absolute right-3 top-3.5 text-slate-400" aria-hidden="true" />
              </div>

              <div className="relative">
                <label htmlFor="phoneNumber" className="sr-only">Mobile Number</label>
                <input
                  id="phoneNumber"
                  type="tel"
                  required
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Mobile*"
                  className="w-full pl-4 pr-10 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A4DA2] focus:border-transparent transition-all duration-300"
                />
                <FaPhoneAlt className="absolute right-3 top-3.5 text-slate-400" aria-hidden="true" />
              </div>

              <div className="relative">
                <label htmlFor="city" className="sr-only">Location</label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Location"
                  className="w-full pl-4 pr-10 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A4DA2] focus:border-transparent transition-all duration-300"
                />
                <FaMapMarkerAlt className="absolute right-3 top-3.5 text-slate-400" aria-hidden="true" />
              </div>

              <div className="relative">
                <label htmlFor="course" className="sr-only">Course</label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full pl-4 pr-10 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A4DA2] focus:border-transparent transition-all duration-300 appearance-none"
                >
                  <option value="mba">MBA</option>
                  <option value="pgdm">PGDM</option>
                </select>
                <FaAngleDoubleRight className="absolute right-3 top-3.5 text-slate-400" aria-hidden="true" />
              </div>

              <div className="relative">
                <label htmlFor="queries" className="sr-only">Query</label>
                <textarea
                  id="queries"
                  name="queries"
                  value={formData.queries}
                  onChange={handleChange}
                  placeholder="Do you have any query?"
                  className="w-full pl-4 pr-10 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A4DA2] focus:border-transparent transition-all duration-300 resize-none"
                  rows={3}
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full text-white font-medium py-3.5 rounded-lg transition duration-300 bg-gradient-to-r from-[#0A4DA2] to-[#1268D3] hover:from-[#1268D3] hover:to-[#0A4DA2] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 shadow-md"
              >
                Submit Your Inquiry
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default GetInTouch;


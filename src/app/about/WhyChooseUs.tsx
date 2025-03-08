"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const WhyChooseUs = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 0.03, 0.26, 1.0] }
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto relative">
        {/* Decorative elements */}
        <div className="absolute -top-20 right-0 w-64 h-64 bg-blue-50 rounded-full opacity-60 blur-3xl -z-10"></div>
        <div className="absolute -bottom-20 left-0 w-72 h-72 bg-orange-50 rounded-full opacity-60 blur-3xl -z-10"></div>
        
        <motion.h1 
          className='text-[#0A4DA2] text-center text-[36px] font-bold mb-4'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Why Choose Us
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <p className="text-[16px] text-gray-700 text-center font-medium leading-relaxed">
            Founded in 2024, our institution has reached key milestones, gaining recognition as an AICTE-approved and AACSB-accredited leader in education. We focus on providing quality education, aligning with industry demands, and fostering leadership development.
          </p>
        </motion.div>
        
        <motion.div 
          className='space-y-8'
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className='flex flex-col md:flex-row gap-6 bg-white p-6 rounded-xl shadow-sm'>
            <div className='flex-shrink-0 flex items-start justify-center'>
              <div className='p-4 bg-[#0A4DA2]/10 rounded-2xl'>
                <Image src="/img/aboutus/WhyChooseUs/eva_people-outline.png" width={50} height={50} alt="Faculty icon" className='w-12 h-12' />
              </div>
            </div>
            <div className='text flex flex-col'>
              <h3 className='font-bold text-[22px] text-[#0A4DA2] mb-2'>FACULTY</h3>
              <p className='font-normal text-gray-700 leading-relaxed'>
                Our consultants are well-experienced with years of track record to their credit in the admissions process of MBA applicants. Our staff comprises alumni of some of the premier global and Indian B-schools who are well-versed in the admission process. They will help you get candid, opinionated insight into what it takes to make your application stand out.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className='flex flex-col md:flex-row gap-6 bg-white p-6 rounded-xl shadow-sm'>
            <div className='flex-shrink-0 flex items-start justify-center'>
              <div className='p-4 bg-[#0A4DA2]/10 rounded-2xl'>
                <Image src="/img/aboutus/WhyChooseUs/mdi_college-outline.png" width={50} height={50} alt="Curriculum icon" className='w-12 h-12' />
              </div>
            </div>
            <div className='text flex flex-col'>
              <h3 className='font-bold text-[22px] text-[#0A4DA2] mb-2'>CURRICULUM</h3>
              <p className='font-normal text-gray-700 leading-relaxed'>
                We follow a rigorous, time-tested methodology to ensure that every step boosts your chance of entry. While we establish a coherent strategy that is tailor-made to your profile, with certain specifications required by the program being adhered to ensure you stick to our goals. This will include personalized services and modules that allow you to get deeper insights into the B-school landscape.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className='flex flex-col md:flex-row gap-6 bg-white p-6 rounded-xl shadow-sm'>
            <div className='flex-shrink-0 flex items-start justify-center'>
              <div className='p-4 bg-[#0A4DA2]/10 rounded-2xl'>
                <Image src="/img/aboutus/WhyChooseUs/mdi_college-outline.png" width={50} height={50} alt="Placement icon" className='w-12 h-12' />
              </div>
            </div>
            <div className='text flex flex-col'>
              <h3 className='font-bold text-[22px] text-[#0A4DA2] mb-2'>PLACEMENT EXPOSURE</h3>
              <p className='font-normal text-gray-700 leading-relaxed'>
                Not only do we assist you with the application, but we also provide exposure to the different industries, trends, and placement opportunities at top business schools. Our network with corporate professionals allows you to gain insight into what placement offers are available after you secure admission into your desired B-school.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className='flex flex-col md:flex-row gap-6 bg-white p-6 rounded-xl shadow-sm'>
            <div className='flex-shrink-0 flex items-start justify-center'>
              <div className='p-4 bg-[#0A4DA2]/10 rounded-2xl'>
                <Image src="/img/aboutus/WhyChooseUs/ri_school-line.png" width={50} height={50} alt="Infrastructure icon" className='w-12 h-12' />
              </div>
            </div>
            <div className='text flex flex-col'>
              <h3 className='font-bold text-[22px] text-[#0A4DA2] mb-2'>INFRASTRUCTURE & FACILITIES</h3>
              <p className='font-normal text-gray-700 leading-relaxed'>
                Our consulting services will have a bold infrastructure. You will have various online resources that will include video consultations, workshops, and seminars. Those are directed toward your knowledge, skill, and constant awareness of the trends in admissions. Our solution leads you toward a comprehensive view of the entire journey from beginning to conclusion.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

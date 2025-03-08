"use client"
import { useState } from 'react';
import { FaRegCheckCircle } from "react-icons/fa";
import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionContainer from '@/components/ui/SectionContainer';
import SectionHeading from '@/components/ui/SectionHeading';

type Program = 'MBA' | 'PGDM';

const programDetails: Record<Program, string[]> = {
  MBA: ['Marketing', 'Finance', 'HR', 'Operations', 'Materials and Plants', 'Equipment and Machinery'],
  PGDM: ['Business Analytics', 'International Business', 'Entrepreneurship', 'Supply Chain Management', 'Digital Marketing', 'Information Technology']
};

export default function ProgramsOffered() {
  const [activeProgram, setActiveProgram] = useState<Program>('MBA');

  return (
    <SectionContainer bgColor="white" withPattern>
      <SectionHeading 
        title="Programs We Consult For" 
        subtitle="We provide expert guidance for applications to a wide range of MBA and PGDM programs. Our consultants specialize in helping you get into these competitive programs."
        center
      />

      <div className="flex flex-col lg:flex-row justify-between items-start max-w-6xl mx-auto gap-10 lg:gap-16">
        <motion.div 
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex gap-4 mb-8 sm:mb-10">
            {(['MBA', 'PGDM'] as const).map((program) => (
              <motion.button
                key={program}
                onClick={() => setActiveProgram(program)}
                className={`text-sm sm:text-lg font-medium px-6 sm:px-10 py-2.5 sm:py-3.5 rounded-md transition-all duration-300 ${
                  activeProgram === program
                    ? 'bg-gradient-to-r from-[#07336B] to-[#011838] text-white shadow-lg'
                    : 'border-2 border-[#07336B] text-[#07336B] hover:bg-[#07336B]/5'
                }`}
                aria-pressed={activeProgram === program}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {program}
              </motion.button>
            ))}
          </div>

          <motion.div
            key={activeProgram}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-[#07336B] mb-5 sm:mb-6 tracking-tight">
              {activeProgram} Application Consulting
            </h3>
            <div className="text-base sm:text-lg text-gray-600 leading-relaxed space-y-4 mb-8">
              <p>
                Our <span className="text-[#07336B] font-medium">{activeProgram}</span> application consulting services help you navigate the complex admissions process for top business schools. We provide personalized guidance on crafting compelling applications that highlight your unique strengths and achievements.
              </p>
              <p>
                We have extensive experience helping applicants gain admission to programs with various specializations, ensuring your application stands out in a competitive pool of candidates.
              </p>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block shadow-md"
            >
              <Link 
                href={`/programs/${activeProgram.toLowerCase()}`} 
                className="inline-flex items-center bg-gradient-to-r from-[#FF7B30] to-[#FF5B15] text-white text-base sm:text-lg font-medium px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:from-[#FF5B15] hover:to-[#FF7B30] transition-all duration-300"
              >
                Get Consulting for {activeProgram}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M14 5l7 7-7 7M5 12h16" 
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="w-full lg:w-2/5 bg-gradient-to-br from-[#07336B] to-[#011838] text-white p-8 rounded-2xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.25)] mt-8 lg:mt-0 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#FF7B30]/10 rounded-full -ml-12 -mb-12"></div>
          
          <h3 className="text-xl sm:text-2xl font-bold mb-8 relative">{activeProgram} Specializations We Support</h3>
          
          <motion.ul 
            className="space-y-1 relative"
            key={activeProgram}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {programDetails[activeProgram].map((specialization, index) => (
              <motion.li 
                key={index} 
                className="flex items-center border-b border-white/20 last:border-b-0 py-3.5 text-base sm:text-lg"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <span className="text-[#FF7B30] mr-3">
                  <FaRegCheckCircle className="text-xl" aria-hidden="true" />
                </span>
                <span className="text-white/90">{specialization}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </SectionContainer>
  );
}


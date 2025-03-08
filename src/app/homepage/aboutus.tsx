"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FloatingCard from '@/components/ui/FloatingCard';
import SectionContainer from '@/components/ui/SectionContainer';
import SectionHeading from '@/components/ui/SectionHeading';

export default function AboutUs() {
  return (
    <SectionContainer bgColor="gray">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-16">
        <motion.div 
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative w-full h-64 sm:h-80 lg:h-[400px] rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#011838]/50 to-transparent z-10 mix-blend-multiply"></div>
            <Image
              src="/homepage/laptopimage.png"
              alt="Laptop displaying a video call with MBA consultants"
              fill
              style={{ objectFit: 'cover' }}
              priority
              className="filter saturate-[1.15] hover:scale-105 transition-transform duration-700"
            />
            
            {/* Overlay gradient for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#011838]/30 to-transparent z-20"></div>
            
            {/* Text overlay */}
            <div className="absolute bottom-6 left-6 right-6 z-30">
              <h3 className="text-white font-bold text-2xl mb-2 drop-shadow-md">Expert Guidance</h3>
              <p className="text-white/90 text-sm max-w-md drop-shadow-md">Our seasoned consultants have helped students secure admissions at top business schools worldwide.</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="w-full lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <SectionHeading 
            title="About Us" 
            subtitle="We are dedicated to guiding aspiring business leaders on their journey to academic and professional excellence."
          />
          
          <div className="space-y-5 text-sm sm:text-base text-gray-700 leading-relaxed mb-10">
            <FloatingCard delay={0.3} className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#FF7B30]">
              <h4 className="font-semibold text-[#07336B] mb-2 text-lg">Your Journey to Success</h4>
              <p className="text-gray-600">
                Earning your Master's in Business Administration is a crucial step towards achieving your long-term career goals. However, navigating the complexities of the MBA admissions process can be challenging.
              </p>
            </FloatingCard>
            
            <FloatingCard delay={0.5} className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#07336B]">
              <h4 className="font-semibold text-[#07336B] mb-2 text-lg">Our Personalized Approach</h4>
              <p className="text-gray-600">
                At GradVision, we specialize in guiding aspiring MBA candidates through every step of the application process. Our team of experienced consultants provides personalized strategies to help you stand out in a competitive applicant pool.
              </p>
            </FloatingCard>
            
            <FloatingCard delay={0.7} className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#FF7B30]">
              <h4 className="font-semibold text-[#07336B] mb-2 text-lg">Maximizing Your Potential</h4>
              <p className="text-gray-600">
                From selecting the right programs to crafting compelling essays and preparing for interviews, we're here to maximize your chances of admission to top MBA programs worldwide.
              </p>
            </FloatingCard>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.9 }}
            whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block shadow-md"
          >
            <Link 
              href="/about" 
              className="inline-flex items-center bg-gradient-to-r from-[#FF7B30] to-[#FF5B15] text-white px-8 py-3.5 rounded-full hover:from-[#FF5B15] hover:to-[#FF7B30] transition-all duration-300 font-medium text-base"
            >
              Learn More About Us
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
      </div>
    </SectionContainer>
  );
}


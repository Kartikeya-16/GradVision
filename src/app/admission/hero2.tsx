"use client";

import { motion } from "framer-motion";

export default function ScholarshipSection() {
  return (
    <section className="relative min-h-[400px] bg-gradient-to-b from-[#011838] to-[#07336B] overflow-hidden flex flex-col items-center text-center sm:text-left sm:items-start">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-400/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#FF7B30]/10 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      />
      
      <div className="container relative z-10 mx-auto px-4 py-16 md:py-20">
        <div className="max-w-xl">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            APPLY FOR SCHOLARSHIPS & FINANCE AID
          </motion.h2>
          
          <motion.p 
            className="text-blue-100 mb-8 text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            We offer merit-based scholarships, need-based aid, and special scholarships for women and reserved categories.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:justify-start w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <motion.button 
              className="bg-gradient-to-r from-[#FF7B30] to-[#FF5B15] text-white font-medium px-6 sm:px-8 py-3 rounded-full transition-all duration-300 shadow-lg w-full sm:w-auto"
              whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              APPLY NOW
            </motion.button>
            
            <motion.button 
              className="bg-white/20 backdrop-blur-sm text-white font-medium px-6 sm:px-8 py-3 rounded-full transition-all duration-300 border border-white/30 hover:bg-white/30 w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              DOWNLOAD BROCHURE
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        className="absolute top-0 right-0 sm:right-[72px] w-full sm:w-[33%] h-[250px] sm:h-full bg-cover bg-center hidden sm:block"
        style={{
          backgroundImage: `url('/admission/hero2.png')`,
          backgroundPosition: "center right",
        }}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Left gradient overlay */}
        <div
          className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#011838] to-transparent"
          aria-hidden="true"
        ></div>
        {/* Right gradient overlay */}
        <div
          className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#011838] to-transparent"
          aria-hidden="true"
        ></div>
      </motion.div>
    </section>
  );
}
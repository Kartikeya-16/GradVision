"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Banner() {
  return (
    <motion.div 
      className="bg-gradient-to-r from-[#FF7B30] to-[#FF5B15] text-white text-sm sm:text-base shadow-md sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      role="banner"
    >
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center py-2.5 px-4 sm:px-6">
        <div className="mb-2 sm:mb-0 text-center sm:text-left flex items-center">
          <span className="bg-white/20 text-white p-1 rounded-full mr-2.5 h-6 w-6 flex items-center justify-center text-xs font-bold">
            📣
          </span>
          <p className="text-sm font-medium">
            Deferred from your top school?{' '}
            <span className="opacity-90">Craft a compelling deferral letter to improve your chances.</span>
          </p>
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="shrink-0"
        >
          <Link
            href="/deferral-letter-guide"
            className="bg-white/20 backdrop-blur-sm text-white py-1.5 px-5 rounded-full hover:bg-white/30 transition-all duration-300 text-sm font-medium flex items-center whitespace-nowrap"
          >
            Learn More
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}


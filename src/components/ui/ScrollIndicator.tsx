"use client";

import { motion } from "framer-motion";
import React from "react";

export default function ScrollIndicator() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.2, duration: 0.5 }}
      whileHover={{ y: -3 }}
    >
      <motion.p 
        className="text-white/60 mb-3 font-light tracking-widest uppercase text-[10px] select-none"
        animate={{ y: [0, 5, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        Scroll down
      </motion.p>
      <motion.div
        className="h-9 flex flex-col items-center justify-center"
      >
        <motion.div 
          className="w-5 h-9 border border-white/30 rounded-full flex flex-col items-center pt-2"
          whileHover={{ borderColor: "rgba(255, 123, 48, 0.5)" }}
        >
          <motion.div
            className="w-1.5 h-1.5 bg-[#FF7B30] rounded-full"
            animate={{ 
              y: [0, 12, 0],
              backgroundColor: ["#FF7B30", "#ffffff", "#FF7B30"] 
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </motion.div>
        
        {/* Animated arrow */}
        <motion.div
          className="mt-2"
          animate={{ 
            y: [0, 5, 0],
            opacity: [0.5, 1, 0.5] 
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            delay: 0.5
          }}
        >
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7 7L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  );
} 
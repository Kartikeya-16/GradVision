"use client";

import Image from 'next/image'
import { motion } from 'framer-motion'

const hero = () => {
  return (
    <div className="relative bg-cover h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with zoom effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        <Image 
          src="/img/aboutus/image 2.png" 
          alt="About Us" 
          layout="fill" 
          objectFit="cover" 
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A4DA2]/50 to-[#1268D3]/50"></div>
      </motion.div>
      
      {/* Animated text */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.h1 
            className="text-[45px] md:text-[55px] font-[700] text-white drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)] leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 0.5,
              ease: [0.22, 0.03, 0.26, 1.0]
            }}
          >
            Empowering Future Leaders <br className="hidden md:block" />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-200"
            >
              through Excellence in Education.
            </motion.span>
          </motion.h1>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute bottom-10 left-10 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
      
      <motion.div 
        className="absolute top-20 right-20 w-12 h-12 rounded-full bg-[#FF7B30]/20 backdrop-blur-sm"
        animate={{ 
          y: [0, 15, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          repeatType: "loop",
          delay: 0.5,
        }}
      />
    </div>
  )
}

export default hero

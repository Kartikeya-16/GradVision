"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ScrollIndicator from '@/components/ui/ScrollIndicator';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#011838] to-[#07336B] relative overflow-hidden min-h-[90vh] flex items-center" aria-labelledby="hero-heading">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/homepage/grid-pattern.png')] bg-repeat opacity-5"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className={cn(
              "absolute w-2 h-2 rounded-full",
              i % 2 === 0 ? "bg-[#FF7B30]/30" : "bg-white/20"
            )}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 30 + 10, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      {/* Decorative shapes */}
      <div className="absolute inset-0" aria-hidden="true">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image 
            src="/homepage/ld.png" 
            alt="Decorative background shape"
            className="absolute bottom-[-450px] md:bottom-[-650px] left-[-50px] sm:left-[-100px] md:left-[-150px] lg:left-0 w-[400px] sm:w-[500px] lg:w-[600px] opacity-15"
            width={600}
            height={632}
            priority
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image 
            src="/homepage/rd.png" 
            alt="Decorative background shape"
            className="absolute top-0 right-[-50px] sm:right-[-100px] md:right-[-150px] lg:right-0 w-[400px] sm:w-[500px] lg:w-[600px] opacity-15"
            width={600}
            height={600}
            priority
          />
        </motion.div>
      </div>

      {/* Abstract light effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[15%] w-[300px] h-[300px] rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] rounded-full bg-orange-500/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-16 sm:py-8 relative z-10">
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-10 lg:ml-[91px] sm:ml-0">
            <motion.div 
              className="inline-block px-5 py-2 bg-white/10 backdrop-blur-md rounded-full shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-[#FF7B30] font-semibold text-l flex items-center">
                <span className="w-2 h-2 bg-[#FF7B30] rounded-full mr-3 animate-pulse"></span>
                MBA & PGDM admissions consulting
              </p>
            </motion.div>

            <motion.h1 
              id="hero-heading" 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <span className="block">Shaping Global</span>
              <span className="bg-gradient-to-r from-[#FF7B30] to-[#FFCC80] text-transparent bg-clip-text">Leaders of Tomorrow</span>
            </motion.h1>

            <motion.p 
              className="text-lg sm:text-xl text-blue-100 max-w-xl font-light leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Craft competitive MBA and PGDM applications for top schools. Our expert guidance sets you on the path to success.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-5 pt-2"
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)" }}
                whileTap={{ scale: 0.95 }}
                className="shadow-lg"
              >
                <Link href="/next-step" className="inline-block px-8 py-4 bg-gradient-to-r from-[#FF7B30] to-[#FF5B15] hover:from-[#FF5B15] hover:to-[#FF7B30] transition-all duration-300 rounded-full text-white font-medium text-base">
                  Ready for the Next Step?
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/programs" className="inline-block px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white/80 transition-all duration-300 rounded-full text-white font-medium text-base">
                  Explore Programs
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <div className="hidden lg:block relative">
            <motion.div 
              className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] top-[-28px] left-[-50px] lg:left-[85px] rounded-full"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              {/* Outer glow */}
              <div className="absolute inset-[-20px] rounded-full bg-gradient-to-r from-blue-500/20 to-[#FF7B30]/20 blur-xl"></div>
              
              {/* Gradient border */}
              <div className="absolute inset-[-3px] rounded-full p-[3px] bg-gradient-to-tr from-[#FF7B30] via-white/40 to-[#FF7B30] opacity-80 shadow-2xl">
                <div className="absolute inset-0 rounded-full bg-[#07336B]"></div>
              </div>
              
              <div className="absolute inset-0 overflow-hidden rounded-full shadow-2xl">
                <Image
                  src="/homepage/ci.png"
                  alt="Business professionals collaborating"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                  style={{ objectFit: 'cover' }}
                  className="hover:scale-110 transition-all duration-700"
                />
                
                {/* Add a subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#07336B]/0 via-[#07336B]/0 to-[#07336B]/40"></div>
              </div>
              
              {/* Decorative circles */}
              <motion.div 
                className="absolute top-[-10%] right-[0%] w-10 h-10 rounded-full bg-[#FF7B30]/20 backdrop-blur-md"
                animate={{
                  y: [0, 10, 0],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
              
              <motion.div 
                className="absolute bottom-[5%] left-[10%] w-6 h-6 rounded-full bg-blue-500/20 backdrop-blur-md"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 0.5,
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
      
      <ScrollIndicator />
      
      {/* Decorative wave shape at the bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto text-gray-50">
          <path fill="currentColor" fillOpacity="1" d="M0,32L48,48C96,64,192,96,288,96C384,96,480,64,576,48C672,32,768,32,864,48C960,64,1056,96,1152,96C1248,96,1344,64,1392,48L1440,32L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

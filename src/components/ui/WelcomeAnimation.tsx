"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
// import Image from "next/image";

interface WelcomeAnimationProps {
  duration?: number;
}

export default function WelcomeAnimation({ duration = 2.5 }: WelcomeAnimationProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, duration * 1000);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#011838] to-[#07336B]"
        >
          {/* Abstract shapes in background */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              transition={{ duration: 1 }}
              className="absolute top-0 left-0 w-full h-full"
            >
              <div className="absolute top-[10%] left-[15%] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-blue-400 to-blue-600 blur-3xl opacity-20"></div>
              <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-orange-400 to-orange-600 blur-3xl opacity-20"></div>
              <div className="absolute top-[40%] right-[30%] w-[200px] h-[200px] rounded-full bg-gradient-to-br from-blue-300 to-purple-500 blur-3xl opacity-20"></div>
            </motion.div>
          </div>

          {/* Grid pattern overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 bg-[url('/homepage/grid-pattern.png')] bg-repeat opacity-10"
          ></motion.div>

          <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="mb-8 relative w-24 h-24 md:w-28 md:h-28"
            >
              <div className="w-full h-full bg-gradient-to-br from-[#FF7B30] to-[#FF5B15] rounded-full shadow-[0_0_30px_rgba(255,123,48,0.3)] flex items-center justify-center">
                <span className="text-white text-2xl md:text-3xl font-bold">GV</span>
              </div>
              
              {/* Animated ring around logo */}
              <motion.div 
                className="absolute inset-[-5px] rounded-full border-2 border-white/20"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              ></motion.div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-blue-100">
                Welcome to GradVision
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-blue-100 max-w-lg font-light"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Elevating Your Academic Future
            </motion.p>
            
            <motion.div
              className="mt-12"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <motion.div 
                className="flex space-x-3"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.7, 1, 0.7] 
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <div className="w-2 h-2 bg-[#FF7B30] rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-[#FF7B30] rounded-full"></div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 
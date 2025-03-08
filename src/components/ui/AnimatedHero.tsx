"use client";

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface AnimatedHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  overlayColor?: string;
  align?: 'left' | 'center' | 'right';
  height?: 'small' | 'medium' | 'large';
  children?: ReactNode;
  className?: string;
}

export default function AnimatedHero({
  title,
  subtitle,
  backgroundImage = '/homepage/hero-background.jpg',
  overlayColor = 'from-[#0A4DA2]/80 to-[#1268D3]/80',
  align = 'center',
  height = 'medium',
  children,
  className,
}: AnimatedHeroProps) {
  // Define height classes
  const heightClasses = {
    small: 'min-h-[30vh]',
    medium: 'min-h-[50vh]',
    large: 'min-h-[70vh]',
  };

  // Define alignment classes
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <section
      className={cn(
        'relative flex flex-col justify-center overflow-hidden',
        heightClasses[height],
        alignClasses[align],
        className
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          priority
          quality={90}
          style={{ objectFit: 'cover' }}
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${overlayColor}`}></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 py-12 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className={cn(
            'max-w-3xl',
            align === 'center' && 'mx-auto',
            align === 'right' && 'ml-auto'
          )}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl tracking-tight"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mb-8 text-lg md:text-xl text-white/90"
            >
              {subtitle}
            </motion.p>
          )}

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Decorative wave shape at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto text-gray-50">
          <path fill="currentColor" fillOpacity="1" d="M0,32L48,48C96,64,192,96,288,96C384,96,480,64,576,48C672,32,768,32,864,48C960,64,1056,96,1152,96C1248,96,1344,64,1392,48L1440,32L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
} 
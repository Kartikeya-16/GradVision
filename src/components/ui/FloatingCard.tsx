"use client";

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FloatingCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  hoverEffect?: boolean;
  withShadow?: boolean;
}

export default function FloatingCard({ 
  children, 
  delay = 0, 
  className = "",
  hoverEffect = true,
  withShadow = true,
}: FloatingCardProps) {
  return (
    <motion.div
      className={cn(
        className,
        withShadow && "shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)]"
      )}
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.1, 0.5, 0.6, 1],
      }}
      whileHover={hoverEffect ? { 
        y: -5,
        boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.15)",
        transition: { duration: 0.2 }
      } : undefined}
    >
      {children}
    </motion.div>
  );
} 
"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  animation?: "fadeIn" | "fadeInUp" | "fadeInRight" | "fadeInLeft" | "scale" | "rotate";
  className?: string;
  once?: boolean;
  margin?: string;
}

const animations: Record<string, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  },
  fadeInRight: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 }
  },
  rotate: {
    hidden: { opacity: 0, rotate: -3, y: 60 },
    visible: { opacity: 1, rotate: 0, y: 0 }
  }
};

export default function AnimatedSection({ 
  children, 
  delay = 0, 
  duration = 0.5, 
  animation = "fadeInUp",
  className = "",
  once = true,
  margin = "-100px"
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      variants={animations[animation]}
      transition={{ 
        duration, 
        delay, 
        ease: [0.25, 0.1, 0.25, 1.0], // Improved easing curve for smoother motion
      }}
      className={cn("overflow-hidden", className)}
    >
      {children}
    </motion.div>
  );
} 
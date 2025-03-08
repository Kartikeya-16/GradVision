"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { useAnimation } from "@/contexts/AnimationContext";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const { prefersReducedMotion } = useAnimation();
  const [exitComplete, setExitComplete] = useState(true);

  // Reset scroll position on page change
  useEffect(() => {
    if (exitComplete) {
      window.scrollTo(0, 0);
    }
  }, [pathname, exitComplete]);

  // Define animation variants
  const variants = {
    hidden: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  // If user prefers reduced motion, use simpler animations
  const reducedMotionVariants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => setExitComplete(true)}
    >
      <motion.div
        key={pathname}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={prefersReducedMotion ? reducedMotionVariants : variants}
        transition={{ duration: 0.4, ease: [0.22, 0.03, 0.26, 1.0] }}
        className="overflow-hidden"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
} 
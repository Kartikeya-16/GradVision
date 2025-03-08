"use client";

import Hero from './hero';
import Banner from '../homepage/banner';
import Admissionprocess from './admissionprocess';
import Ad from './ad';
import Hero2 from './hero2';
import Faq from '../courses/faq';
import { motion } from 'framer-motion';

export default function Home() {
  // Stagger delay for animations
  const getStaggerDelay = (index: number) => index * 0.15;

  return (
    <main className="overflow-hidden">
      <Banner />
      <Hero />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: getStaggerDelay(0) }}
      >
        <Admissionprocess />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: getStaggerDelay(1) }}
      >
        <Ad />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: getStaggerDelay(2) }}
      >
        <Hero2 />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: getStaggerDelay(3) }}
      >
        <Faq />
      </motion.div>
    </main>
  );
}

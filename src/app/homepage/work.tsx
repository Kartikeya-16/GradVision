"use client";

import Image from "next/image"
import capgemini from "../../assets/Capgemini.png"
import cognizant from "../../assets/Cognizant.png"
import cisco from "../../assets/Cisco.png"
import dell from "../../assets/Dell.png"
import deloitte from "../../assets/Deloitte.png"
import gail from "../../assets/Gail.png"
import { motion } from "framer-motion";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";

const companies = [
  { name: "Capgemini", logo: capgemini },
  { name: "Cognizant", logo: cognizant },
  { name: "Cisco", logo: cisco },
  { name: "Dell Technologies", logo: dell },
  { name: "Deloitte", logo: deloitte },
  { name: "GAIL (India) Limited", logo: gail },
]

const AlumniWork = () => {
  return (
    <SectionContainer bgColor="gray">
      <SectionHeading 
        title="Where Do Our Students/Alumni Work?" 
        subtitle="Our graduates have gone on to build successful careers at leading global organizations across various industries."
        center
      />
      
      <motion.div 
        className="mt-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 sm:gap-12">
          {companies.map((company, index) => (
            <motion.li 
              key={company.name} 
              className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.22, 0.03, 0.26, 1.0]
              }}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <Image
                src={company.logo || "/placeholder.svg"}
                alt={`${company.name} logo`}
                width={120}
                height={80}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain",
                  filter: "grayscale(100%)",
                  opacity: 0.8,
                  transition: "all 0.3s ease"
                }}
                className="hover:filter-none hover:opacity-100"
              />
            </motion.li>
          ))}
        </ul>
      </motion.div>
      
      <motion.div 
        className="text-center mt-10 text-sm text-gray-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        * Our alumni network spans across 500+ companies worldwide
      </motion.div>
    </SectionContainer>
  );
};

export default AlumniWork;


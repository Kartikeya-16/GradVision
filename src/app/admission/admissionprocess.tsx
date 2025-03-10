"use client"
import { useMediaQuery } from "react-responsive"
import { motion } from "framer-motion"
import Image from "next/image" // Import the Next.js Image component

export default function AdmissionProcess() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" })

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 0.03, 0.26, 1.0] }
    }
  };

  return (
    <div
      id="admission-process" 
      className={`relative w-full max-w-6xl mx-auto px-4 py-16 font-[Inter] ${isMobile ? "h-auto" : "h-[1950px]"}`}
    >
      {/* Decorative elements */}
      <div className="absolute -top-20 right-10 w-64 h-64 bg-[#0A4DA2]/5 rounded-full opacity-60 blur-3xl -z-10"></div>
      <div className="absolute -bottom-20 left-10 w-72 h-72 bg-[#FF7B30]/5 rounded-full opacity-60 blur-3xl -z-10"></div>

      {/* Header Section */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <motion.h1 
          className="text-[#0A4DA2] text-3xl md:text-4xl font-bold mb-5"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          WELCOME TO THE ADMISSION PROCESS
        </motion.h1>
        <div className="w-24 h-1.5 bg-[#FF7B30] mx-auto rounded-full mb-5"></div>
        <motion.p 
          className="text-gray-700 max-w-3xl mx-auto text-base md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Discover the steps to join our programs. From eligibility to final enrollment, we guide you at every stage.
          Scholarships and fast-track options are available for qualified candidates.
        </motion.p>
      </motion.div>

      {/* Road Map Container */}
      <div className={`relative w-[95%] mx-auto ${isMobile ? "h-auto" : "h-[2200px]"}`}>
        {/* Road path images - only visible on desktop */}
        {!isMobile && (
          <>
            <motion.div 
              className="absolute top-[118px] left-[-75px] w-[90%] h-[1000px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Image 
                src="/admission/roadpath.png" 
                alt="Road Path" 
                className="w-full h-full object-contain rotate-180"
                width={800}
                height={1000}
              />
            </motion.div>
            <motion.div 
              className="absolute top-[813px] left-[-7%] w-[90%] h-[1000px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Image 
                src="/admission/roadpath2.png" 
                alt="Road Path" 
                className="w-full h-full object-contain"
                width={800}
                height={1000}
              />
            </motion.div>
          </>
        )}

        {/* Steps */}
        <motion.div 
          className={`${isMobile ? "flex flex-col gap-8" : ""}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Step 1 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className={`${isMobile ? "" : "absolute top-0 right-[8%]"} w-full md:w-[400px] bg-white rounded-xl border-[1px] border-[#0A4DA2] p-6 z-10 shadow-lg`}
          >
            <h2 className="font-bold mb-3 text-center text-[#0A4DA2] text-lg">STEP 1: CHECK ELIGIBILITY</h2>
            <p className="text-gray-700 mb-3">Ensure you meet the following criteria:</p>
            <ul className="text-gray-700 list-disc pl-5 mb-4 space-y-1">
              <li>Bachelor&apos;s degree with a minimum of 50% (45% for reserved categories).</li>
              <li>Accepted exams: CAT, XAT, GMAT, MAT, CMAT.</li>
              <li>Work experience (if required).</li>
            </ul>
            <button className="bg-gradient-to-r from-[#FF7B30] to-[#FF5B15] text-white px-5 py-2 rounded-full text-sm font-medium hover:from-[#FF5B15] hover:to-[#FF7B30] transition-all duration-300 shadow-md">CHECK ELIGIBILITY</button>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className={`${isMobile ? "" : "absolute top-[12%] left-[-100px]"} w-full md:w-[280px] bg-white rounded-xl border-[1px] border-[#0A4DA2] p-6 z-10 shadow-lg`}
          >
            <h2 className="font-bold mb-3 text-center text-[#0A4DA2] text-lg">STEP 2: SUBMIT YOUR APPLICATION</h2>
            <p className="text-gray-700 mb-3">Apply online with these documents:</p>
            <ul className="text-gray-700 list-disc pl-5 mb-4 space-y-1">
              <li>Academic transcripts.</li>
              <li>Entrance exam scorecard.</li>
              <li>ID proof (e.g., Aadhar passport).</li>
              <li>Passport-sized photo.</li>
            </ul>
            <button className="bg-gradient-to-r from-[#FF7B30] to-[#FF5B15] text-white px-5 py-2 rounded-full text-sm font-medium hover:from-[#FF5B15] hover:to-[#FF7B30] transition-all duration-300 shadow-md">START APPLYING</button>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className={`${isMobile ? "" : "absolute top-[26%] right-[12%]"} w-full md:w-[340px] bg-white rounded-xl border-[1px] border-[#0A4DA2] p-6 z-10 shadow-lg`}
          >
            <h2 className="font-bold mb-3 text-center text-[#0A4DA2] text-lg">STEP 3: SHORTLISTING BASED ON ENTRANCE EXAM SCORES</h2>
            <p className="text-gray-700 text-center">Shortlisted candidates will be notified via email or portal updates.</p>
          </motion.div>

          {/* Step 4 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className={`${isMobile ? "" : "absolute top-[35%] left-[2%]"} w-full md:w-[339px] bg-white rounded-xl border-[1px] border-[#0A4DA2] p-6 z-10 shadow-lg`}
          >
            <h2 className="font-bold mb-3 text-center text-[#0A4DA2] text-lg">STEP 4: PERSONAL INTERVIEW (PI) AND GROUP DISCUSSION (GD)</h2>
            <p className="text-center text-gray-700">
              Participate in evaluations covering communication, problem-solving, and leadership potential. GD topics
              will be shared in advance.
            </p>
          </motion.div>

          {/* Step 5 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className={`${isMobile ? "" : "absolute top-[53%] left-[-2%]"} w-full md:w-[368px] bg-white rounded-xl border-[1px] border-[#0A4DA2] p-6 z-10 shadow-lg`}
          >
            <h2 className="font-bold mb-3 text-center text-[#0A4DA2] text-lg">STEP 5: FINAL SELECTION</h2>
            <p className="text-gray-700 text-center">
              Final selection is based on entrance scores, academic record, and performance in PI/GD. Selected
              candidates receive a provisional admission letter.
            </p>
          </motion.div>

          {/* Step 6 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className={`${isMobile ? "" : "absolute bottom-[25%] right-[11%]"} w-full md:w-[340px] bg-white rounded-xl border-[1px] border-[#0A4DA2] p-6 z-10 shadow-lg`}
          >
            <h2 className="font-bold mb-3 text-center text-[#0A4DA2] text-lg">STEP 6: COMPLETE ADMISSION FORMALITIES</h2>
            <p className="text-gray-700 mb-3">Confirm your admission by:</p>
            <ul className="text-gray-700 list-disc pl-5 space-y-1">
              <li>Paying admission fees.</li>
              <li>Submitting original documents for verification.</li>
              <li>Signing declaration forms.</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
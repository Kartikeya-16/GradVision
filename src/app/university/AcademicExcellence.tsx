import Image from 'next/image'
import React from 'react'

const AcademicExcellence = () => {
  return (
    <div>
    <h2 className='text-[30px] text-center md:text-start text-[#012060] md:px-12 font-[700] px-4'>ACADEMIC EXCELLENCE</h2>
    <p className='text-[15px] text-center md:text-start text-black md:px-12 font-[500] px-4'>Our university offers a wide range of programs across various disciplines, committed to fostering innovation.</p>
    <div className='flex flex-col md:flex-row gap-3 justify-evenly px-20 mt-5'>
      <Image src="/img/university/AcademicExcellence/Frame 79.png" alt='img' width={400} height={300} className='md:w-1/6.5 w-full'/>
      <Image src="/img/university/AcademicExcellence/Frame 77.png" alt='img' width={400} height={500} className='md:w-1/6.5 w-full'/>
      <Image src="/img/university/AcademicExcellence/Frame 76.png" alt='img' width={400} height={500} className='md:w-1/6.5 w-full'/>


    </div>
    <div className="flex justify-center mt-3">
  <button className="bg-[#F6851E] rounded-[10px] text-white font-[700] text-sm px-4 py-2 md:text-base md:px-6 md:py-3 lg:text-lg">
    EXPLORE OUR COURSES
  </button>
</div>

    </div>
  )
}

export default AcademicExcellence

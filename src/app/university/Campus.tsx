import Image from 'next/image'
import React from 'react'

const Campus = () => {
  return (
    <div>
        <h2 className='text-[30px] text-center my-10 text-[#012060] font-[700]'>CAMPUS</h2>
        <div className='flex flex-col gap-3 justify-center items-center md:pr-[40px] md:pl-[20px]'>
            <div className='flex md:flex-row flex-col gap-3'>
                <img src="/img/aboutus/campus/Rectangle 7.png" className='w-full md:w-1/3' alt="" />
                <img src="/img/aboutus/campus/Rectangle 8.png" className='w-full md:w-1/3' alt="" />
                <img src="/img/aboutus/campus/Rectangle 9.png" className='w-full md:w-1/3' alt="" />
            </div>
            <div className='flex md:flex-row gap-3 flex-col mb-3'>
            <img src="/img/aboutus/campus/Rectangle 7.png" className='w-full md:w-1/3' alt="" />
                <img src="/img/aboutus/campus/Rectangle 8.png" className='w-full md:w-1/3' alt="" />
                <img src="/img/aboutus/campus/Rectangle 9.png" className='w-full md:w-1/3' alt="" />
            </div>

            <div className="flex justify-center mt-3">
  <button className="bg-[#F6851E] rounded-[10px] text-white font-bold text-sm px-4 py-2 md:text-base md:px-6 md:py-3 lg:text-lg lg:px-8 lg:py-4 mb-2">
    TAKE CAMPUS TOUR
  </button>
</div>


        </div>
    </div>

  )
}

export default Campus

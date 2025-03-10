import React from 'react'
import Image from 'next/image'

const Campus = () => {
  return (
    <div>
        <h2 className='text-[30px] text-center my-10 text-[#012060] font-[700]'>CAMPUS</h2>
        <div className='flex flex-col gap-3 justify-center items-center md:pr-[60px] md:pl-[20px]'>
            <div className='flex md:flex-row flex-col gap-3'>
                <Image src="/img/aboutus/campus/Rectangle 7.png" width={400} height={300} className='w-full md:w-1/3' alt="Campus Image 1" />
                <Image src="/img/aboutus/campus/Rectangle 8.png" width={400} height={300} className='w-full md:w-1/3' alt="Campus Image 2" />
                <Image src="/img/aboutus/campus/Rectangle 9.png" width={400} height={300} className='w-full md:w-1/3' alt="Campus Image 3" />
            </div>
            <div className='flex md:flex-row gap-3 flex-col mb-10'>
                <Image src="/img/aboutus/campus/Rectangle 7.png" width={400} height={300} className='w-full md:w-1/3' alt="Campus Image 4" />
                <Image src="/img/aboutus/campus/Rectangle 8.png" width={400} height={300} className='w-full md:w-1/3' alt="Campus Image 5" />
                <Image src="/img/aboutus/campus/Rectangle 9.png" width={400} height={300} className='w-full md:w-1/3' alt="Campus Image 6" />
            </div>
        </div>
    </div>
  )
}

export default Campus

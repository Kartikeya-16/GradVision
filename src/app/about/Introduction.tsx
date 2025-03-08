import Image from 'next/image'

import React from 'react'

const introduction = () => {
  return (
    <div className='flex md:flex-row flex-col justify-between p-8 '>
      <div className="section-1 flex flex-col items-start w-full gap-6">
        <h2 className='text-[30px] text-[#012060] font-[700]'>INTRODUCTION</h2>
        <p className="text-[14px] text-[#444444] font-[700]">[Your Firm Name] is a consultancy firm devoted to counseling MBA and PGDM aspirants in their pursuit of premier business institutes.Their expert team guarantees that you will put your best foot forward during admission to renowned institutions like the IIMs and global programs. Working one-on-one with their experienced consultants from the start through school selection, essay writing, and interview preparation, you will effectively unlock your future.</p>

        <div className="items grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="container-1 shadow-[4px_4px] shadow-[#7C74BB] border-[1px] rounded-lg flex flex-row justify-between p-6 gap-1">
                <Image src="/img/aboutus/naac-logo.jpg.png" width={100} height={100} alt="" className='w-20 h-20' />
                <div className='text-container flex flex-col gap-1'>
                    <h3>NAAC</h3>
                    <h3>Accredited&nbsp;A++</h3>
                </div>
            </div>

            <div className="container-2 shadow-[4px_4px] shadow-[#7C74BB] border-[1px] rounded-lg flex flex-row justify-between p-6 gap-1">
                <Image src="/img/aboutus/aicte-icon.jpg.png" width={100} height={100} alt="" className='w-20 h-20' />
                <div className='text-container flex flex-col gap-1'>
                    <h3>AICTE</h3>
                    <h3>Approved</h3>
                </div>
            </div>


            <div className="container-2 shadow-[4px_4px] shadow-[#7C74BB] border-[1px] rounded-lg flex flex-row justify-between p-6 gap-1">
                <Image src="/img/aboutus/ugc-icon.jpg.png" width={100} height={100} alt="" className='w-20 h-20' />
                <div className='text-container flex flex-col gap-1'>
                    <h3>UGC</h3>
                    <h3>Entitled</h3>
                </div>
            </div>
            <button className='bg-[#F6851E] rounded-[10px] text-[14px] font-[700] text-white px-5 py-2'>Know more</button>
        </div>
      </div>

      <div className="section-2 flex justify-center items-center pr-10 md:w-1/2 w-full">
        <Image src="/img/aboutus/Frame 1.png" width={500} height={500} alt="" />
      </div>
    </div>
  )
}

export default introduction

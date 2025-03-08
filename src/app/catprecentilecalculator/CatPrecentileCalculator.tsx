import Image from 'next/image'
import React from 'react'

const CatPrecentileCalculator = () => {
  return (
    <div className="py-10 px-12 bg-[#E9E9E9] flex flex-col">
              <h1 className='mt-20 text-center text-[#012060] text-[45px] font-[700]'>FEATURED SPEAKERS</h1>
        <div className='flex md:flex-row flex-col justify-between px-12'>
      <div className="section-1 flex flex-col justify-center items-center gap-4 text-[#444444] text-[25px] font-[500]">
        <ul className="list-disc list-inside md:text-start text-center">
        <li>Get estimated percentile based on your response</li>
        <li>Talk to our academic counsellor to understand more</li>
        <li>Gaining practical insights</li>
        </ul>
      </div>
      <div className="section-2 flex justify-center items-center">
        <Image src="/img/catprecentilecalculator/rank-predictor-logo.svg fill.png" alt='img' height={300} width={300} />
      </div>
      </div>
    </div>
  )
}

export default CatPrecentileCalculator

import React from 'react'
import Image from 'next/image'

const Achievements = () => {
  return (
    <div className='bg-[#E9E9E9] flex flex-col p-8'>
      <h1 className='text-[#012060] text-center text-[30px] font-[700] p-6'>ACHIEVEMENTS</h1>
      <div className='container flex gap-5 justify-between md:flex-row flex-col'>
        
        <div className='flex flex-col items-center justify-between px-7 py-7 bg-white md:w-1/6 w-full'>
          <Image src="/img/aboutus/achievements/naac-logo.jpg" alt="NAAC Logo" width={100} height={100} />
          <p className='text-center text-[13px] font-[700]'>
            Accredited with <br /> A++ Grade, by <br />NAAC - 2022
          </p>
        </div>

        <div className='flex flex-col items-center justify-between px-7 py-7 bg-white md:w-1/6 w-full'>
          <Image src="/img/aboutus/achievements/study-online.jpg" alt="Study Online" width={100} height={100} />
          <p className='text-center text-[13px] font-[700]'>
            #39 on Overall <br /> basis, All Over <br /> India for its MBA
          </p>
          <p className='text-center text-[13px] font-[700]'>Program, NIRF <br />Ranking 2024</p>
        </div>

        <div className='flex flex-col items-center justify-between px-7 py-7 bg-white md:w-1/6 w-full'>
          <Image src="/img/aboutus/achievements/calendar-duration.jpg" alt="Calendar Duration" width={100} height={100} />
          <p className='text-center text-[13px] font-[700]'>
            Accredited for its <br /> Regular MBA <br /> Program of IBS <br /> Hyderabad by <br /> AACSB
          </p>
        </div>

        <div className='flex flex-col items-center justify-between px-7 py-7 bg-white md:w-1/6 w-full'>
          <Image src="/img/aboutus/achievements/asso-cmm.jpg" alt="Association of Commonwealth Universities" width={100} height={100} />
          <p className='text-center text-[13px] font-[700]'>
            Member, The <br /> Association of <br /> Commonwealth <br /> Universities (ACU)
          </p>
        </div>

        <div className='flex flex-col items-center justify-between px-7 py-7 bg-white md:w-1/6 w-full'>
          <Image src="/img/aboutus/achievements/saqs-logo.jpg" alt="SAQS Accreditation" width={100} height={100} />
          <p className='text-center text-[13px] font-[700]'>
            Accredited by <br /> SAQS (South Asian <br /> Quality Standards), <br /> AMDISA
          </p>
        </div>

        <div className='flex flex-col items-center justify-between px-7 py-7 bg-white md:w-1/6 w-full'>
          <Image src="/img/aboutus/achievements/Amdisa_Member.jpg" alt="AMDISA Member" width={100} height={100} />
          <p className='text-center text-[13px] font-[700]'>
            CDOE is an <br /> Institutional <br /> Member of AMDISA
          </p>
        </div>

      </div>
    </div>
  )
}

export default Achievements

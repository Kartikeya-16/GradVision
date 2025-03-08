import React from 'react'

const Achievements = () => {
  return (
    <div className='bg-[#E9E9E9] flex flex-col p-8'>
      <h1 className='text-[#012060] text-center text-[30px] font-[700] p-6'>ACHIEVEMENTS</h1>
      <div className='container flex gap-5 justify-between md:flex-row flex-col'>
        <div className='flex flex-col items-center justify-between px-7 py-7 bg-white md:w-1/6 w-full'>
            <img src="/img/aboutus/achievements/naac-logo.jpg (1).png" alt="" />
            <p className='text-center text-[13px] font-[700]'>Accredited with <br /> A++ Grade, by <br />NAAC - 2022</p>
        </div>
        

        <div className='flex flex-col items-center justify-between px-7 py-7  md:w-1/6 w-full bg-white'>
            <img src="/img/aboutus/achievements/study-online.jpg.png" alt="" />
            <div>
            <p className='text-center text-[13px] font-[700]'>#39 on Overall <br />basis, All Over <br />India for its MBA</p>
<p className='text-center text-[13px] font-[700]'>Program, NIRF <br />Ranking 2024</p>
</div>
        </div>

        <div className='flex flex-col items-center justify-between px-7 py-7  md:w-1/6 w-full bg-white'>
            <img src="/img/aboutus/achievements/calendar-duration.jpg.png" alt="" />
            <p className='text-center text-[13px] font-[700]'>Accredited for its <br />
Regular MBA <br />
Program of IBS <br />
Hyderabad by <br />
AACSB</p>
        </div>

        <div className='flex flex-col items-center justify-between px-7 py-7  md:w-1/6 w-full bg-white'>
            <img src="/img/aboutus/achievements/asso-cmm.jpg.png" alt="" />
            <p className='text-center text-[13px] font-[700]'>Member, The <br />
Association of <br />
Common wealth <br />
Universities (ACU)</p>
        </div>

        <div className='flex flex-col items-center justify-between px-7 py-7  md:w-1/6 w-full bg-white'>
            <img src="/img/aboutus/achievements/saqs-logo.jpg.png" alt="" />
            <p className='text-center text-[13px] font-[700]'>Accredited by <br />
SAQS (South Asian <br />
Quality Standards), <br />
AMDISA</p>
        </div>

        <div className='flex flex-col items-center justify-between px-7 py-7  md:w-1/6 w-full bg-white'>
            <img src="/img/aboutus/achievements/Amdisa_Member.jpg.png" alt="" />
            <p className='text-center text-[13px] font-[700]'>CDOE is an <br />
Institutional <br />
Member of AMDISA</p>
        </div>

        

      </div>
    </div>
  )
}

export default Achievements

import React from 'react'

const EnterYourCatMark = () => {
  return (
    <div className='px-10 py-12 flex flex-col gap-4'>
    <h1 className='mt-20 text-center md:text-start text-[#012060] text-[45px] font-[700]'>FEATURED SPEAKERS</h1>
    <p className="text-[#3C4852] md:text-start text-center text-[15px] font-[400]">to receive your percentile</p>
    <form action="" className=' flex flex-col gap-4 md:items-start items-center'>
        <div className='flex flex-col gap-2 w-full'>
            <label htmlFor="varc" className='text-[#3C4852] text-[15px] font-[600]'>Expected Marks in VARC</label>
            <input type="text" className='w-full p-5 placeholder:text-[#7A8B94] text-[18px] font-[400] border-[1px] border-[#7A8B94] rounded-[10px]' placeholder='Enter your score out of 72' />
        </div>
        
        <div className='flex flex-col gap-2 w-full'>
            <label htmlFor="varc" className='text-[#3C4852] text-[15px] font-[600]'>Expected Marks in DILR</label>
            <input type="text" className='w-full p-5 placeholder:text-[#7A8B94] text-[18px] font-[400] border-[1px] border-[#7A8B94] rounded-[10px]' placeholder='Enter your score out of 66' />
        </div>

        <div className='flex flex-col gap-2 w-full'>
            <label htmlFor="varc" className='text-[#3C4852] text-[15px] font-[600]'>Expected Marks in Quantitative Ability (QA)</label>
            <input type="text" className='w-full p-5 placeholder:text-[#7A8B94] text-[18px] font-[400] border-[1px] border-[#7A8B94] rounded-[10px]' placeholder='Enter your score out of 66' />
        </div>

        <div className='flex flex-col gap-2 w-full'>
            <label htmlFor="varc" className='text-[#3C4852] text-[15px] font-[600]'>Slot</label>
            <select name="slot" id="slot" className="w-full p-5 placeholder:text-[#7A8B94] text-[18px] font-[400] border-[1px] border-[#7A8B94] rounded-[10px]">
                <option value="morning" className="">Morning</option>
            </select>
        </div>

        <p className="text-[#3C4852] text-start text-[15px] font-[400]">By continuing, you agree to our <a href="#" className='underline'>Terms & Conditions</a></p>

        <button className='bg-[#F6851E] rounded-[10px] text-[14px] font-[700] text-white px-6 py-3'>Predict my Percentile</button>
        <div>

        </div>
    </form>
    </div>
  )
}

export default EnterYourCatMark

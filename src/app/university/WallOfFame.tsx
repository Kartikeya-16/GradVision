import Image from 'next/image'
import React from 'react'

const WallOfFame = () => {

    const ids = [
    {
        image: "/img/university/WallOfFame/Mask group.png",
        title: "Petrova Rada",
    },
    {
        image: "/img/university/WallOfFame/Mask group (1).png",
        title: "Petrova Rada",
    },
    {
        image: "/img/university/WallOfFame/Mask group (2).png",
        title: "Petrova Rada",
    },
    {
        image: "/img/university/WallOfFame/Mask group (3).png",
        title: "Petrova Rada",
    }
]


  return (
    <div>
    <h2 className='text-[30px] text-center my-5 text-[#012060] font-[700] md:px-12 px-4'>WALL OF FAME</h2>
    <div className='flex flex-col md:flex-row justify-between md:items-start items-center gap-6 md:gap-0 px-12 py-8'>
        {ids.map((id, i)=> (
            <div key={i}>
                <Image src={id.image} alt='img' width={150} height={100} />
                <p className='text-[24px] font-[400]'>{id.title}</p>
            </div>
        ))}
    </div>
    </div>
  )
}

export default WallOfFame

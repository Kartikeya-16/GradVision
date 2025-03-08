import Image from 'next/image'
import React from 'react'

const FacultyAndStaff = () => {

    const cards = [
        {
        image: "/img/FacultyAndStaff/49d775c354b495b47710bdfc07c084a2 1.png",
        title: "Mrs. Yuliya Paramonova",
        department: "Business and Management",
        email: "yuparamonova@mdis.uz",
    },
    {
        image: "/img/FacultyAndStaff/49d775c354b495b47710bdfc07c084a2 1.png",
        title: "Mrs. Yuliya Paramonova",
        department: "Business and Management",
        email: "yuparamonova@mdis.uz",
    },
    {
        image: "/img/FacultyAndStaff/39f5cf19d8274afddc0fd9944653a551 1.png",
        title: "Mrs. Yuliya Paramonova",
        department: "Business and Management",
        email: "yuparamonova@mdis.uz",
    },
    {
        image: "/img/FacultyAndStaff/39f5cf19d8274afddc0fd9944653a551 1.png",
        title: "Mrs. Yuliya Paramonova",
        department: "Business and Management",
        email: "yuparamonova@mdis.uz",
    },
    {
        image: "/img/FacultyAndStaff/28b0494e1de1fc0042786738d043debb 1.png",
        title: "Mrs. Yuliya Paramonova",
        department: "Business and Management",
        email: "yuparamonova@mdis.uz",
    },
    {
        image: "/img/FacultyAndStaff/28b0494e1de1fc0042786738d043debb 1.png",
        title: "Mrs. Yuliya Paramonova",
        department: "Business and Management",
        email: "yuparamonova@mdis.uz",
    },
    {
        image: "/img/FacultyAndStaff/fd20703692e929bebc9c98b2c8ed4868 1.png",
        title: "Mrs. Yuliya Paramonova",
        department: "Business and Management",
        email: "yuparamonova@mdis.uz",
    },
    {
        image: "/img/FacultyAndStaff/fd20703692e929bebc9c98b2c8ed4868 1.png",
        title: "Mrs. Yuliya Paramonova",
        department: "Business and Management",
        email: "yuparamonova@mdis.uz",
    },
]


  return (
    <div className='bg-[#E3E3E3] py-12'>
    <h2 className='text-[30px] text-center my-5 text-[#012060] font-[700] md:text-start md:px-12 px-4'>faculty and staff </h2>
    <p className='text-[15px] pb-6 md:text-start text-center md:px-12 px-4 font-[500]'>Our university offers a wide range of programs across various disciplines, committed to fostering innovation.</p>
    <div className='grid grid-cols-1 md:grid-cols-2 justify-start border-none gap-5 w-full'>
    {cards.map((card, i)=> (
        <div key={i} className='flex flex-col md:flex-row px-12 md:w-1/2'>
        <Image src={card.image} height={0} width={200} alt='img' />
        <div className='flex flex-col items-start justify-center'>
        <h3 className='text-black font-[700] text-nowrap text-[15px]'>{card.title}</h3>
        <p className='text-[15px] font-[600] text-nowrap'>DEPARTMENT: {card.department}</p>
        <p className='text-[15px] font-[600]'>EMAIL: {card.email}</p>
        </div>
        </div>
    ))}
    </div>
    <div className="flex justify-center mt-5">
  <button className="bg-[#F6851E] rounded-[10px] text-white font-bold text-sm px-4 py-2 md:text-base md:px-6 md:py-3 lg:text-lg lg:px-8 lg:py-4 mb-2">
    EXPLORE FACULTY
  </button>
</div>

    </div>
  )
}

export default FacultyAndStaff

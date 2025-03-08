import React from 'react'

const PrincipleDesk = () => {
  return (
    <div className='bg-[#E9E9E9] flex flex-col md:flex-row justify-between py-20 px-16'>
      <div className="section-1 flex flex-col items-start justify-center md:w-1/2">
        <h1 className='text-[30px] text-start text-[#012060] font-[700]'>From the Principal’s  Desk</h1>
        <p className="text-[14px] text-[#444444] font-[700]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdamrecusandae alias error harum maxime adipisci amet laborum.</p>
        <button className='bg-[#F6851E] text-[14px] font-[700] rounded-[10px] text-white mt-6 px-5 py-2'>Know more</button>
      </div>

      <div className="section-2 md:w-1/2 flex flex-col justify-center items-center mt-6 md:mt-0">
        <img src="/img/aboutus/Rectangle 6.png" alt="" />
        <h2 className='text-[25px] text-[#012060] font-[700]'>Dr Principal Name</h2>
        <p className='text-[18px] text-[#012060] font-[400]'>Since 2004</p>
      </div>
    </div>
  )
}

export default PrincipleDesk

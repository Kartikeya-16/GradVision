import React from 'react'
import Hero from './Hero';
import Introduction from './Introduction';
import Achievements from './Achievements';
import WhyChooseUs from './WhyChooseUs';
import PrincipleDesk from './PrincipleDesk';
import Campus from './Campus';
import Slider from './Slider';

const page = () => {
  return (
    <div>
      <Hero />
      <Introduction />
      <Achievements />
      <WhyChooseUs />
      <PrincipleDesk />
      <Campus />
      <Slider />
    </div>
  )
}

export default page

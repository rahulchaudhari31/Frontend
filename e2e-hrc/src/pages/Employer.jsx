import React from 'react';
import Hero from '../components/employer/Hero';
import HowWeWork from '../components/employer/HowWeWork';
import Sectors from '../components/home/Sectors';
import FAQAndCTA from '../components/FAQAndCTA';
import Testimonials from '../components/employer/Testimonials';

const Employer = () => {
  return (
    <>
      <Hero />
      <HowWeWork />
      <Sectors />
      <FAQAndCTA />
      <Testimonials />
    </>
  );
};

export default Employer;

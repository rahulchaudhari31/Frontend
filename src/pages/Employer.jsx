import React from 'react';
import Hero from '../components/employer/Hero';
import HowWeWork from '../components/employer/HowWeWork';
import Sectors from '../components/home/Sectors';
import FAQAndCTA from '../components/FAQAndCTA';
import Testimonials from '../components/employer/Testimonials';
import '../components/employer/EmployerPage.css';

const Employer = () => {
  return (
    <div className="employer-page">
      <Hero />
      <HowWeWork />
      <Sectors />
      <FAQAndCTA />
      <Testimonials />
    </div>
  );
};

export default Employer;

import React from 'react';
import Navbar from "../components/shared/Navbar.jsx"
import Hero from '../components/employer/Hero';
import HowWeWork from '../components/employer/HowWeWork';
import Sectors from '../components/home/Sectors';
import FAQAndCTA from '../components/FAQAndCTA';
import Testimonials from '../components/employer/Testimonials';
import Footer from "../components/shared/Footer.jsx"

const Employer = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero />
      <HowWeWork />
      <Sectors />
      <FAQAndCTA />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Employer;

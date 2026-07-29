import React from 'react';
import Navbar from "../components/shared/Navbar.jsx"
import Hero from '../components/employer/Hero';
import HowWeWork from '../components/employer/HowWeWork';
import Sectors from '../components/home/Sectors';
import FAQAndCTA from '../components/employer/FAQAndCTA.jsx';
import Testimonials from '../components/employer/Testimonials';
import Footer from "../components/shared/Footer.jsx"
import '../components/employer/EmployerPage.css';

const Employer = () => {
  return (
    <div className="employer-page">
      <Navbar></Navbar>
      <Hero />
      <HowWeWork />
      <Sectors />
      <FAQAndCTA />
      <Testimonials />
      <Footer />
    </div >
  );
};

export default Employer;

import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import HeroSection from '../components/employee/HeroSection';
import Journeysection from '../components/employee/Journeysection';
import TestimonialsCarousel from '../components/employee/TestimonialsCarousel';
import WhyChooseE2E from '../components/employee/WhyChooseE2E';
import './Employee.css';

import FAQAndCTA from '../components/employee/FAQAndCTA';
import LatestInsights from '../components/home/BlogSection';
import IndustriesSection from '../components/employee/IndustriesSection';


export default function Employee() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar variant="employee" />

      {/* ===== C. HERO SECTION ===== */}
      <HeroSection />

      {/* ===== D. WHY CHOOSE OUR EMPLOYEE JOURNEY SERVICES ===== */}
      <Journeysection></Journeysection>

      {/* ===== E. WHAT MAKES US DIFFERENT ===== */}
      <WhyChooseE2E />

      {/* ===== F. DEEP EXPERTISE ACROSS 25+ SECTORS ===== */}
      <IndustriesSection />

      <FAQAndCTA />

      {/* ===== LATEST INSIGHTS ===== */}
      <LatestInsights />

      {/* ===== G. TESTIMONIALS ===== */}
      <TestimonialsCarousel speed={30} />

      <Footer />
    </div>
  );
}

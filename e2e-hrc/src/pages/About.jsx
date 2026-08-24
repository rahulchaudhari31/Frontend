import React from "react";
import SEO from "../components/SEO/SEO";
import Hero from "../components/aboutus/Hero.jsx";
import Navbar from "../components/shared/Navbar.jsx"
import Footer from "../components/shared/Footer.jsx"
import WhoWeAre2 from "../components/aboutus/WhoWeAre2.jsx";
import WhoWeAre from "../components/aboutus/WhoWeAre.jsx";
import OurJourney from "../components/aboutus/OurJourney.jsx";
import WhyChooseUs from "../components/aboutus/WhyChooseUs.jsx";
import MissionVision from "../components/aboutus/MissionVision.jsx";
import Testimonials from "../components/aboutus/Testimonials.jsx";
import GlobalFootprint from "../components/becomepartner/NetworkMapSection.jsx";
import CallToAction from "../components/aboutus/CallToAction.jsx";
import "../components/aboutus/AboutPage.css";

const About = () => {
  return (
    <main className="font-sans">
      <SEO pageKey="about-us" />
      <Navbar></Navbar>
      <Hero />
      <WhoWeAre2 />
      <WhoWeAre />
      <OurJourney />
      <WhyChooseUs />
      <MissionVision />
      <Testimonials />
      <GlobalFootprint />
      <CallToAction />
      <Footer></Footer>
    </main>
  );
};

export default About;

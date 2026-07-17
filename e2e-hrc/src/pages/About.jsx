import React from "react";
import Hero from "../components/aboutus/Hero.jsx";
import Navbar from "../components/shared/Navbar.jsx"
import Footer from "../components/shared/Footer.jsx"
import WhoWeAre2 from "../components/WhoWeAre2.jsx";
import WhoWeAre from "../components/WhoWeAre.jsx";
import OurJourney from "../components/aboutus/OurJourney.jsx";
import WhyChooseUs from "../components/aboutus/WhyChooseUs.jsx";
import MissionVision from "../components/aboutus/MissionVision.jsx";
import Testimonials from "../components/aboutus/Testimonials.jsx";
import GlobalFootprint from "../components/aboutus/GlobalFootprint.jsx";
import CallToAction from "../components/aboutus/CallToAction.jsx";

const About = () => {
  return (
    <main className="font-sans">
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

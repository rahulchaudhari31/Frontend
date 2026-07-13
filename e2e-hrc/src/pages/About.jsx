import React from "react";
import Hero from "../components/aboutus/Hero.jsx";
import WhoWeAre from "../components/aboutus/WhoWeAre.jsx";
import BridgingGap from "../components/aboutus/BridgingGap.jsx";
import OurJourney from "../components/aboutus/OurJourney.jsx";
import WhyChooseUs from "../components/aboutus/WhyChooseUs.jsx";
import MissionVision from "../components/aboutus/MissionVision.jsx";
import Testimonials from "../components/aboutus/Testimonials.jsx";
import GlobalFootprint from "../components/aboutus/GlobalFootprint.jsx";
import CallToAction from "../components/aboutus/CallToAction.jsx";

const About = () => {
  return (
    <main className="font-sans">
      <Hero />
      <WhoWeAre />
      <BridgingGap />
      <OurJourney />
      <WhyChooseUs />
      <MissionVision />
      <Testimonials />
      <GlobalFootprint />
      <CallToAction />
    </main>
  );
};

export default About;

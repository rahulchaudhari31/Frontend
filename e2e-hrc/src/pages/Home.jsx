import { lazy, Suspense } from "react";

import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import Hero from "../components/home/Hero";
import LazySection from "../components/common/LazySection";
import Loading from "../components/common/Loader";
import WhatMakesUsDifferent from "../components/home/WhatMakesUsDifferent";
import { useContactType } from "../context/ContactTypeContext";

const ServiceCards = lazy(() => import("../components/home/ServiceCards"));
const Sectors = lazy(() => import("../components/home/Sectors"));
const Process = lazy(() => import("../components/home/Process"));
const TrustedClients = lazy(() => import("../components/home/TrustedClients"));
const Locations = lazy(() => import("../components/home/Locations"));
const BlogSection = lazy(() => import("../components/home/BlogSection"));
const ContactSection = lazy(() => import("../components/home/ContactSection"));

function Home() {
  const { contactRef, scrollToContact } = useContactType();

  return (
    <>
    <Navbar/>
      <Hero
        onHireTalent={() => scrollToContact("employer")}
        onFindOpportunities={() => scrollToContact("employee")}
      />

      <LazySection height={500}>
        <Suspense fallback={<Loading />}>
          <ServiceCards />
        </Suspense>
      </LazySection>

      <LazySection height={500}>
        <Suspense fallback={<Loading />}>
          <Sectors />
        </Suspense>
      </LazySection>

      <LazySection height={500}>
        <Suspense fallback={<Loading />}>
          <Process />
        </Suspense>
      </LazySection>

      <LazySection height={500}>
        <Suspense fallback={<Loading />}>
          <WhatMakesUsDifferent />
        </Suspense>
      </LazySection>

      <LazySection height={300}>
        <Suspense fallback={<Loading />}>
          <TrustedClients />
        </Suspense>
      </LazySection>

      <LazySection height={500}>
        <Suspense fallback={<Loading />}>
          <Locations />
        </Suspense>
      </LazySection>

      <LazySection height={500}>
        <Suspense fallback={<Loading />}>
          <BlogSection />
        </Suspense>
      </LazySection>

      <div style={{ height: "80px", background: "#FFFFFF" }} />

      <Suspense fallback={<Loading />}>
        <ContactSection ref={contactRef} />
      </Suspense>
      <Footer/>
    </>
  );
}

export default Home;

import { lazy, Suspense } from "react";

import Hero from "../components/home/Hero";
import LazySection from "../components/common/LazySection";
import Loading from "../components/common/Loader";

const ServiceCards = lazy(() => import("../components/home/ServiceCards"));
const Sectors = lazy(() => import("../components/home/Sectors"));
const Process = lazy(() => import("../components/home/Process"));
const WhyChooseUs = lazy(() => import("../components/home/WhyChooseUs"));
const TrustedClients = lazy(() => import("../components/home/TrustedClients"));
const Locations = lazy(() => import("../components/home/Locations"));
const BlogSection = lazy(() => import("../components/home/BlogSection"));
const ContactSection = lazy(() => import("../components/home/ContactSection"));

function Home() {
  return (
    <>
      <Hero />

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
          <WhyChooseUs />
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

      <LazySection height={500}>
        <Suspense fallback={<Loading />}>
          <ContactSection />
        </Suspense>
      </LazySection>
    </>
  );
}

export default Home;

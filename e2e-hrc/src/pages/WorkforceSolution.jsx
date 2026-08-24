import { lazy, Suspense } from "react";
import SEO from "../components/SEO/SEO";
import Navbar from "../components/shared/Navbar.jsx"
import Footer from "../components/shared/Footer.jsx"
import WorkforceHeroSection from "../components/WorkforceSolution/WorkforceHeroSection.jsx";
import WhyChooseE2E from "../components/employee/WhyChooseE2E";
import Loading from "../components/common/Loader";

const WorkforceSolutions = lazy(() => import("../components/WorkforceSolutions"));
const HowWeWork = lazy(() => import("../components/HowWeWork"));
const WorkforceFAQAndCTA = lazy(() => import("../components/WorkforceFAQAndCTA.jsx"));
const Testimonials = lazy(() => import("../components/Testimonials"));

function WorkforceSolution() {
  return (
    <>
      <SEO pageKey="workforce-solutions" />
      <Navbar />
      <WorkforceHeroSection />
      <WhyChooseE2E />
      <Suspense fallback={<Loading />}>
        <WorkforceSolutions />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <HowWeWork />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <WorkforceFAQAndCTA />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Testimonials />
      </Suspense>
      <Footer />
    </>
  );
}

export default WorkforceSolution;

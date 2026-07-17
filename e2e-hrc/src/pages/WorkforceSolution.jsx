import { lazy, Suspense } from "react";
import Navbar from "../components/shared/Navbar.jsx"
import Footer from "../components/shared/Footer.jsx"
import WorkforceHeroSection from "../components/WorkforceHeroSection/WorkforceHeroSection";
import WhyChooseE2E from "../components/employee/WhyChooseE2E";
import Loading from "../components/common/Loader";

const WorkforceSolutions = lazy(() => import("../components/WorkforceSolutions"));
const HowWeWork = lazy(() => import("../components/HowWeWork"));
const FAQAndCTA = lazy(() => import("../components/FAQAndCTA"));
const Testimonials = lazy(() => import("../components/Testimonials"));

function WorkforceSolution() {
  return (
    <>
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
        <FAQAndCTA />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Testimonials />
      </Suspense>
      <Footer />
    </>
  );
}

export default WorkforceSolution;

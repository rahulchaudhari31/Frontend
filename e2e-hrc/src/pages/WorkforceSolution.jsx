import AnnouncementBar from '../components/AnnouncementBar';
import Navbar from '../components/shared/Navbar';
import Hero from '../components/Hero';
import WorkforceSolutions from '../components/WorkforceSolutions';
import WhyChooseE2E from '../components/employee/WhyChooseE2E';
import HowWeWork from '../components/HowWeWork';
import FAQAndCTA from '../components/FAQAndCTA';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function WorkforceSolution() {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navbar variant="workforce" />
      <Hero />
      <WorkforceSolutions />
      <WhyChooseE2E />
      <HowWeWork />
      <FAQAndCTA />
      <Testimonials />
      <Footer />
    </div>
  );
}

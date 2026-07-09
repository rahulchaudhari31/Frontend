import { Routes, Route } from 'react-router-dom';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/shared/Navbar';
import Hero from './components/Hero';
import WorkforceSolutions from './components/WorkforceSolutions';
import HowWeWork from './components/HowWeWork';
import FAQAndCTA from './components/FAQAndCTA';
import Testimonials from './components/Testimonials';
import WhyChooseE2E from './components/employee/WhyChooseE2E';
import Footer from './components/Footer';
import Employer from './pages/Employer';
import Employee from './pages/Employee';
import Blogs from './pages/Blogs';
import BecomePartner from './pages/BecomePartner';
import ContactUs from './pages/ContactUs';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navbar />
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

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/employer" element={<Employer />} />
      <Route path="/employee" element={<Employee />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/become-a-partner" element={<BecomePartner />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
}

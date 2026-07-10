import { Routes, Route } from 'react-router-dom';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/shared/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Employer from './pages/Employer';
import Employee from './pages/Employee';
import Blogs from './pages/Blogs';
import BecomePartner from './pages/BecomePartner';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import WorkforceSolution from './pages/WorkforceSolution';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navbar />
      <Hero />
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
      <Route path="/about" element={<AboutUs />} />
      <Route path="/workforce-solutions" element={<WorkforceSolution />} />
    </Routes>
  );
}

import { Routes, Route } from 'react-router-dom';
import './components/Home.css';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import Home from './pages/Home';
import Employer from './pages/Employer';
import Employee from './pages/Employee';
import Blogs from './pages/Blogs';
import BlogArticle from './pages/BlogArticle';
import BecomePartner from './pages/BecomePartner';
import ContactUs from './pages/ContactUs';
import About from './pages/About';
import WorkforceSolution from './pages/WorkforceSolution';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen bg-white">
          <Navbar />
          <Home />
          <Footer />
        </div>
      } />
      <Route path="/about-us" element={
        <div className="min-h-screen bg-white">
          <Navbar />
          <About />
          <Footer />
        </div>
      } />
      <Route path="/workforce-solutions" element={
        <div className="min-h-screen bg-white">
          <Navbar />
          <WorkforceSolution />
          <Footer />
        </div>
      } />
      <Route path="/employer" element={
        <div className="min-h-screen bg-white">
          <Navbar />
          <Employer />
          <Footer />
        </div>
      } />
      <Route path="/employee" element={<Employee />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:slug" element={<BlogArticle />} />
      <Route path="/become-a-partner" element={<BecomePartner />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
}

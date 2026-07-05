import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkforceSolutions from './components/WorkforceSolutions';
import HowWeWork from './components/HowWeWork';
import FAQAndCTA from './components/FAQAndCTA';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <WorkforceSolutions />
      <HowWeWork />
      <FAQAndCTA />
      <Testimonials />
      <Footer />
    </div>
  );
}

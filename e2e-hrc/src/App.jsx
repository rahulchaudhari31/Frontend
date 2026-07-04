import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import HowWeWork from './components/HowWeWork';
import FAQAndCTA from './components/FAQAndCTA';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Solutions />
      <HowWeWork />
      <FAQAndCTA />
      <Testimonials />
      <Footer />
    </div>
  );
}

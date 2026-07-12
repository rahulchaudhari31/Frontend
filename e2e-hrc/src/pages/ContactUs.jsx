import AnnouncementBar from '../components/AnnouncementBar';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import HeroSection from '../components/contactus/HeroSection';
import ContactFormSection from '../components/contactus/ContactFormSection';
import GlobalNetworkSection from '../components/contactus/GlobalNetworkSection';
import '../components/contactus/ContactUs.css';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <AnnouncementBar />
      <Navbar variant="home" />
      <HeroSection />
      <ContactFormSection />
      <GlobalNetworkSection />
      <Footer />
    </div>
  );
}

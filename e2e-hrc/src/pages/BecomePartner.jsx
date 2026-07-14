import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import HeroSection from '../components/becomepartner/HeroSection';
import PartnerFormSection from '../components/becomepartner/PartnerFormSection';
import BuiltOnTrustSection from '../components/becomepartner/BuiltOnTrustSection';
import NetworkMapSection from '../components/becomepartner/NetworkMapSection';

export default function BecomePartner() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar variant="partner" />
      <HeroSection />
      <PartnerFormSection />
      <BuiltOnTrustSection />
      <NetworkMapSection />
      <Footer />
    </div>
  );
}

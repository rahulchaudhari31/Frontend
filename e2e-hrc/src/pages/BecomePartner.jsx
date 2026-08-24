import SEO from '../components/SEO/SEO';
import Navbar from '../components/shared/Navbar';
import HeroSection from '../components/becomepartner/HeroSection';
import PartnerFormSection from '../components/becomepartner/PartnerFormSection';
import BuiltOnTrustSection from '../components/becomepartner/BuiltOnTrustSection';
import NetworkMapSection from '../components/becomepartner/NetworkMapSection';
import Footer from '../components/shared/Footer';

export default function BecomePartner() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SEO pageKey="become-a-partner" />
      <Navbar variant="partner" />
      <HeroSection />
      <PartnerFormSection />
      <BuiltOnTrustSection />
      <NetworkMapSection />
      <Footer />
    </div>
  );
}

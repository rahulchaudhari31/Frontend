import { FiArrowRight, FiCheck } from 'react-icons/fi';
import AnnouncementBar from '../components/employee/AnnouncementBar';
import Navbar from '../components/shared/Navbar';
import Hero from '../components/shared/Hero';
import EmployerCandidateSection from '../components/employee/EmployerCandidateSection';
import IndustriesSection from '../components/employee/IndustriesSection';
import HowWeWork from '../components/shared/HowWeWork';
import WhyChooseSection from '../components/employee/WhyChooseSection';
import TrustedClients from '../components/employee/TrustedClients';
import OfficeLocations from '../components/shared/OfficeLocations';
import LatestInsights from '../components/employee/LatestInsights';
import ContactCTA from '../components/shared/ContactCTA';
import Footer from '../components/shared/Footer';
import heroImage from '../assets/assets/images/employee.png';

const heroStats = [
  { value: '0+', label: 'CLIENTS' },
  { value: '0+', label: 'CANDIDATES' },
  { value: '25+', label: 'YEARS OF EXPERIENCE' },
  { value: '4', label: 'OFFICES' },
];

export default function Employee() {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navbar variant="employee" />
      <Hero
        bgColor="#F8FAFC"
        textColor="#004CA5"
        statLabelColor="#64748B"
        badge={{
          bg: 'rgba(201,219,130,0.4)',
          color: '#004CA5',
          icon: <FiCheck size={14} />,
          text: 'Trusted Recruitment Partner Across the UK',
        }}
        headingParts={[
          { text: 'Connecting Talent.\n' },
          { text: 'Building ', highlight: true, color: '#004CA5' },
          { text: 'Futures.', highlight: true, color: '#F39308' },
        ]}
        description="Helping UK employers find exceptional talent and helping candidates discover opportunities to grow and thrive in their careers."
        primaryCta={{
          label: 'Hire Talent',
          href: '#',
          bg: '#F39308',
          icon: <FiArrowRight size={16} />,
        }}
        secondaryCta={{
          label: 'Find Opportunities',
          href: '#',
          border: '2px solid #004CA5',
          color: '#004CA5',
        }}
        stats={heroStats}
        statsType="text"
        image={heroImage}
        imageMaxWidth="max-w-[600px]"
        imageStyle="rounded-[100px_0px_0px_100px]"
        decorativeCircles={[
          { width: '520px', height: '520px', borderRadius: '50%', background: 'rgba(194,215,96,0.33)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
          { width: '400px', height: '400px', borderRadius: '50%', border: '1px dashed rgba(194,215,96,0.5)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
        ]}
      />
      <EmployerCandidateSection />
      <IndustriesSection />
      <HowWeWork />
      <WhyChooseSection />
      <TrustedClients />
      <OfficeLocations variant="scroll" />
      <LatestInsights />
      <ContactCTA />
      <Footer />
    </div>
  );
}

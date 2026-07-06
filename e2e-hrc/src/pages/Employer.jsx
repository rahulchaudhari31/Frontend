import { FiAward, FiUsers, FiCheckCircle, FiClock } from 'react-icons/fi';
import Navbar from '../components/shared/Navbar';
import Hero from '../components/shared/Hero';
import DualCTA from '../components/employer/DualCTA';
import IndustriesCarousel from '../components/employer/IndustriesCarousel';
import HowWeWork from '../components/shared/HowWeWork';
import WhyChooseUs from '../components/employer/WhyChooseUs';
import TrustedBy from '../components/employer/TrustedBy';
import OfficeLocations from '../components/shared/OfficeLocations';
import BlogSection from '../components/employer/BlogSection';
import ContactCTA from '../components/employer/ContactCTA';
import Footer from '../components/shared/Footer';

const employerStats = [
  { icon: FiAward, value: '18+', label: 'Years Experience' },
  { icon: FiUsers, value: '450+', label: 'Happy Clients' },
  { icon: FiCheckCircle, value: '12K+', label: 'Placements' },
  { icon: FiClock, value: '48hr', label: 'Avg Time to Match' },
];

export default function Employer() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar variant="employer" />
      <Hero
        bgColor="#0A1128"
        textColor="#fff"
        statLabelColor="#9CA3AF"
        badge={{
          bg: 'rgba(245,166,35,0.2)',
          color: '#F5A623',
          text: 'Trusted Recruitment Partner Across the UK',
        }}
        headingParts={[
          { text: 'Hire Top Talent.\n' },
          { text: 'Build Your Team.', highlight: true, color: '#F5A623' },
        ]}
        description="We partner with businesses across the UK to deliver end-to-end recruitment solutions that drive growth, efficiency, and long-term success."
        primaryCta={{ label: 'Submit a Vacancy', href: '#', bg: '#F5A623' }}
        secondaryCta={{ label: 'Talk to Us', href: '#', border: '2px solid rgba(255,255,255,0.3)', color: '#fff' }}
        stats={employerStats}
        statsType="icon"
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
        imageStyle="rounded-2xl"
        decorativeCircles={[
          { width: '288px', height: '288px', borderRadius: '50%', background: 'rgba(245,166,35,0.1)', top: '-40px', right: '-40px' },
          { width: '192px', height: '192px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', bottom: '-32px', left: '-32px' },
        ]}
        containerClass="lg:py-24"
      />
      <DualCTA />
      <IndustriesCarousel />
      <HowWeWork />
      <WhyChooseUs />
      <TrustedBy />
      <OfficeLocations variant="grid" />
      <BlogSection />
      <ContactCTA
        bgColor="#0A1128"
        heading="Let's Build Your Team Together"
        leftContent={
          <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-lg">
            Whether you need permanent staff, temporary cover, or specialist contractors, our team is ready to help. Get in touch today.
          </p>
        }
        primaryCta={{ label: 'Submit a Vacancy', href: '#', bg: '#F5A623' }}
        secondaryCta={{ label: 'Contact Us', href: '#', borderColor: 'rgba(255,255,255,0.3)' }}
        formTitle="Send us a message"
        formFields={[
          { id: 'employer-contact-name', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
          { id: 'employer-contact-email', label: 'Company Email', type: 'email', placeholder: 'company@email.com' },
          { id: 'employer-contact-phone', label: 'Phone Number', type: 'tel', placeholder: '+44 (0) 1234 567890' },
        ]}
        ctaBg="#F5A623"
      />
      <Footer />
    </div>
  );
}

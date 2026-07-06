import { FiArrowRight, FiCheck } from 'react-icons/fi';
import AnnouncementBar from '../components/employee/AnnouncementBar';
import Navbar from '../components/shared/Navbar';
import Hero from '../components/shared/Hero';
import EmployerCandidateSection from '../components/employee/EmployerCandidateSection';
import IndustriesSection from '../components/employee/IndustriesSection';
import RecruitmentProcess from '../components/employee/RecruitmentProcess';
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

const employeeChecklist = [
  'Access pre-vetted talent across 25+ sectors',
  'Dedicated recruitment consultants',
  'Fast turnaround times, typically 48 hours',
  'Ongoing support and aftercare',
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
        imageStyle="rounded-[100px_0px_0px_100px]"
        decorativeCircles={[
          { width: '480px', height: '480px', borderRadius: '50%', background: 'rgba(194,215,96,0.33)', className: 'lg:w-[519px] lg:h-[519px]' },
          { width: '380px', height: '380px', borderRadius: '50%', border: '1px dashed rgba(194,215,96,0.5)', className: 'lg:w-[419px] lg:h-[419px]' },
        ]}
      />
      <EmployerCandidateSection />
      <IndustriesSection />
      <RecruitmentProcess />
      <WhyChooseSection />
      <TrustedClients />
      <OfficeLocations variant="scroll" />
      <LatestInsights />
      <ContactCTA
        bgColor="#004CA5"
        badge={{ text: 'Ready to get started?', bg: 'rgba(255,255,255,0.2)', color: '#fff' }}
        heading="Let's Build Success Together"
        leftContent={
          <ul className="flex flex-col gap-4 mb-8">
            {employeeChecklist.map((item) => (
              <li key={item} className="flex items-center gap-3 text-white/90 text-sm">
                <span className="shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <FiCheck size={12} className="text-white" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        }
        primaryCta={{ label: 'Hire Talent', href: '#', bg: '#F39308' }}
        secondaryCta={{ label: 'Explore Opportunities', href: '#', borderColor: 'rgba(255,255,255,0.3)' }}
        formTitle="Employee Team. Contact Us"
        formFields={[
          { id: 'emp-name', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
          { id: 'emp-email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
          {
            id: 'emp-phone', label: 'Contact Number', type: 'select',
            options: [
              { value: '+44', label: '🇬🇧 +44' },
              { value: '+1', label: '🇺🇸 +1' },
              { value: '+971', label: '🇦🇪 +971' },
              { value: '+91', label: '🇮🇳 +91' },
            ],
            placeholder: '(0) 1234 567890',
          },
          { id: 'emp-cv', label: 'Upload CV / Resume', type: 'file', placeholder: 'Drag and drop your CV here, or click to browse' },
        ]}
      />
      <Footer />
    </div>
  );
}

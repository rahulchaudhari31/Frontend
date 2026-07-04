import { FiCheckCircle, FiUsers, FiCheckSquare, FiGlobe } from 'react-icons/fi';
import { useScrollReveal } from '../hooks/useScrollReveal';

const stats = [
  { icon: FiCheckCircle, value: '18+',  label: 'Years Experience' },
  { icon: FiUsers,       value: '450+', label: 'Clients Served' },
  { icon: FiCheckSquare, value: '12K+', label: 'Placements' },
  { icon: FiGlobe,       value: '4',    label: 'Global Offices' },
];

export default function Hero() {
  const [leftRef, leftVisible] = useScrollReveal();
  const [rightRef, rightVisible] = useScrollReveal();

  return (
    <section id="home" className="bg-white py-16 md:py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div
          ref={leftRef}
          className={`flex flex-col gap-6 reveal ${leftVisible ? 'visible' : ''}`}
        >
          <span className="inline-flex items-center gap-2 self-start bg-accent-light text-accent
                           text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-pill">
            <span className="w-2 h-2 rounded-full bg-accent inline-block" />
            Strategic • Flexible • Global
          </span>

          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-primary m-0">
            Workforce Solutions<br />
            That Drive<br />
            <span className="text-accent">Business Growth</span>
          </h1>

          <p className="text-text-body text-base leading-relaxed max-w-lg">
            At E2E Human Resource Consultancy, we provide end-to-end workforce solutions
            that help organisations attract, recruit, manage, and retain exceptional talent.
          </p>

          {/* Stats Card */}
          <div className="bg-white rounded-card shadow-card border border-gray-100 px-6 py-5
                          grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center text-center gap-1.5">
                <span className="w-9 h-9 rounded-full bg-accent-light flex items-center justify-center">
                  <Icon size={16} className="text-accent" />
                </span>
                <span className="font-heading font-bold text-xl text-primary">{value}</span>
                <span className="text-text-body text-xs leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div
          ref={rightRef}
          className={`relative flex items-center justify-center reveal reveal-delay-2 ${rightVisible ? 'visible' : ''}`}
        >
          <div className="absolute -top-8 -left-8 w-48 h-48 bg-white rounded-full opacity-80 z-10" />

          <div className="relative z-20 w-full aspect-[4/3] rounded-card overflow-hidden shadow-card bg-bg-section
                          hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop"
              alt="E2E HRC team collaborating in a modern office"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                e.target.insertAdjacentHTML('afterend',
                  '<span class="text-text-body text-sm">[ Office / Team Photo ]</span>');
              }}
            />
          </div>

          <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-accent-light opacity-60 z-10" />
        </div>

      </div>
    </section>
  );
}

import { useState, useEffect } from 'react';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import { getEmployeeCards } from '../services/employeeCardService';
import { getApproachCards } from '../services/approachCardService';

export default function WorkforceSolution() {
  const [cards, setCards] = useState([]);
  const [approachCards, setApproachCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [empRes, appRes] = await Promise.allSettled([
          getEmployeeCards(),
          getApproachCards(),
        ]);

        if (empRes.status === 'fulfilled') {
          const items = empRes.value?.data ?? empRes.value;
          if (Array.isArray(items)) {
            setCards(items.filter((c) => c.isActive !== false));
          }
        }

        if (appRes.status === 'fulfilled') {
          const items = appRes.value?.data ?? appRes.value;
          if (Array.isArray(items)) {
            setApproachCards(items);
          }
        }
      } catch {
        // use empty state
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar variant="home" />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#004CA5]"></div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar variant="home" />

      {/* Hero */}
      <section className="bg-[#0F2A52] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            Workforce Solutions
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Comprehensive workforce solutions tailored to your business needs.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      {cards.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-heading font-bold text-3xl text-primary text-center mb-12">
              Our Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {cards.map((card, i) => (
                <div
                  key={card._id || i}
                  className="bg-white rounded-2xl shadow-card p-8 border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-heading font-bold text-xl text-primary mb-3">
                    {card.titleLine || card.title || ''}
                  </h3>
                  <p className="text-text-body text-sm leading-relaxed mb-4">
                    {card.description || card.shortDescription || ''}
                  </p>
                  {card.buttonText && (
                    <a
                      href={card.buttonLink || '#'}
                      className="inline-flex bg-accent text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#E07D00] transition-colors"
                    >
                      {card.buttonText}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Approach Cards */}
      {approachCards.length > 0 && (
        <section className="bg-bg-section py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-heading font-bold text-3xl text-primary text-center mb-12">
              Our Approach
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {approachCards.map((card, i) => (
                <div key={card._id || i} className="bg-white rounded-xl shadow-card p-6 border border-gray-100 text-center">
                  {card.image && (
                    <img src={card.image} alt={card.title || ''} className="w-16 h-16 object-contain mx-auto mb-4" loading="lazy" />
                  )}
                  <h3 className="font-heading font-semibold text-lg text-primary mb-2">
                    {card.title || card.name || ''}
                  </h3>
                  <p className="text-text-body text-sm leading-relaxed">
                    {card.description || card.content || ''}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

import { useState, useEffect } from 'react';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import { getAboutHero, getWhoWeAre, getAboutInfo, getMissionVision, getTestimonials } from '../services/aboutServices';

export default function AboutUs() {
  const [hero, setHero] = useState(null);
  const [whoWeAre, setWhoWeAre] = useState(null);
  const [bridging, setBridging] = useState(null);
  const [missionVision, setMissionVision] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [heroRes, whoRes, bridgeRes, mvRes, testRes] = await Promise.allSettled([
          getAboutHero(),
          getWhoWeAre(),
          getAboutInfo(),
          getMissionVision(),
          getTestimonials(),
        ]);

        if (heroRes.status === 'fulfilled' && heroRes.value?.data) setHero(heroRes.value.data);
        if (whoRes.status === 'fulfilled' && whoRes.value?.data) setWhoWeAre(whoRes.value.data);
        if (bridgeRes.status === 'fulfilled' && bridgeRes.value?.data) setBridging(bridgeRes.value.data);
        if (mvRes.status === 'fulfilled' && mvRes.value?.data?.data) setMissionVision(mvRes.value.data.data);
        if (testRes.status === 'fulfilled' && testRes.value?.data?.data) setTestimonials(testRes.value.data.data);
      } catch {
        // use fallback empty
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
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
      <section className="bg-[#F2EFEA] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
            {hero?.title || 'About E2E HRC'}
          </h1>
          <p className="text-text-body text-lg max-w-3xl mx-auto">
            {hero?.description || 'Learn more about our journey, mission, and the team behind E2E Human Resource Consultancy.'}
          </p>
        </div>
      </section>

      {/* Who We Are */}
      {whoWeAre && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl text-primary mb-6">
                {whoWeAre.title || 'Who We Are'}
              </h2>
              <p className="text-text-body leading-relaxed">{whoWeAre.description || whoWeAre.content || ''}</p>
            </div>
            {whoWeAre.image && (
              <div>
                <img src={whoWeAre.image} alt="Who We Are" className="rounded-2xl w-full object-cover" loading="lazy" />
              </div>
            )}
          </div>
        </section>
      )}

      {/* Bridging the Gap */}
      {bridging && (
        <section className="bg-bg-section py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl text-primary mb-6">
              {bridging.title || 'Bridging the Gap'}
            </h2>
            <p className="text-text-body text-lg max-w-4xl mx-auto leading-relaxed">
              {bridging.description || bridging.content || ''}
            </p>
          </div>
        </section>
      )}

      {/* Mission & Vision */}
      {missionVision.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            {missionVision.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-card p-8 border border-gray-100">
                <h3 className="font-heading font-bold text-2xl text-primary mb-4">
                  {item.title || (i === 0 ? 'Our Mission' : 'Our Vision')}
                </h3>
                <p className="text-text-body leading-relaxed">{item.description || item.content || ''}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="bg-bg-section py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-heading font-bold text-3xl text-primary text-center mb-12">
              What People Say
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.slice(0, 3).map((t, i) => (
                <div key={i} className="bg-white rounded-xl shadow-card p-6 border border-gray-100">
                  <p className="text-text-body text-sm leading-relaxed mb-4">"{t.quote || t.testimonial || t.description || ''}"</p>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="font-heading font-semibold text-primary text-sm">{t.name || t.author || ''}</p>
                    <p className="text-text-body text-xs">{t.company || t.industry || ''}</p>
                  </div>
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

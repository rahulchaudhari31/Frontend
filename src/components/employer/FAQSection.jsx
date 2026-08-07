import React, { useState } from 'react';
import { ChevronDown, Users, Globe, User } from 'lucide-react';

const defaultFaqs = [
  { _id: "1", question: "How does E2E HRC source candidates for employer roles?", answer: "We use a multi-channel approach including our extensive talent database, professional networks, job boards, and direct headhunting to find the best candidates for your specific needs.", order: 1 },
  { _id: "2", question: "What industries does E2E HRC specialize in?", answer: "We cover a wide range of industries including Engineering, Healthcare, IT, Finance, Construction, Logistics, Education, and many more specialized sectors.", order: 2 },
  { _id: "3", question: "What is the typical turnaround time for hiring?", answer: "Our typical turnaround time varies by role complexity, but we aim to present shortlisted candidates within 2-3 weeks for most positions.", order: 3 },
  { _id: "4", question: "Do you offer replacement guarantees?", answer: "Yes, we offer a replacement guarantee period for all placed candidates. If a candidate leaves or is terminated within the guarantee period, we will find a replacement at no additional cost.", order: 4 },
];

const defaultCta = {
  ctaTitle: "Partner with E2E HRC Today",
  ctaDescription: "Let us help you find the perfect talent for your organization. Our dedicated team is ready to understand your needs and deliver results.",
  buttonText: "Submit a Vacancy",
  buttonLink: "#",
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = defaultFaqs;
  const cta = defaultCta;

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqContent = (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={faq._id || index}
          className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
          >
            <span className="text-base font-semibold text-blue-900 pr-4">
              {faq.question}
            </span>
            <ChevronDown
              size={24}
              className={`shrink-0 text-gray-400 transition-transform duration-300 ${
                openIndex === index ? 'transform rotate-180' : ''
              }`}
            />
          </button>

          {openIndex === index && (
            <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-200">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const ctaContent = (
    <div className="relative w-full max-w-xl bg-linear-to-br from-blue-700 to-blue-900 rounded-3xl p-8 text-white shadow-2xl">
      <div className="absolute top-6 right-4 space-y-7">
        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
          <Users size={24} className="text-blue-200" />
        </div>
        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
          <Globe size={24} className="text-blue-200" />
        </div>
        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
          <User size={24} className="text-blue-200" />
        </div>
      </div>

      <div className="space-y-6 pr-4">
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            {cta.ctaTitle}
          </h2>
          <p className="text-blue-100 text-sm leading-relaxed">
            {cta.ctaDescription}
          </p>
        </div>

        <a
          href={cta.buttonLink}
          className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300 group"
        >
          {cta.buttonText}
          <span className="transition-transform group-hover:translate-x-1">&#8594;</span>
        </a>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          <div className="space-y-6">
            <div className="text-sm font-semibold tracking-wide text-amber-500 uppercase">
              Frequently Asked Questions
            </div>
            {faqContent}
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            {ctaContent}
          </div>
        </div>
      </div>
    </div>
  );
}

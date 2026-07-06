import { FiCheck } from 'react-icons/fi';

export default function ContactCTA({
  bgColor = '#004CA5',
  badge = null,
  heading = "Let's Build Success Together",
  leftContent = null,
  primaryCta = null,
  secondaryCta = null,
  formTitle = 'Contact Us',
  formFields = [],
  ctaBg = '#F39308',
  ctaHover = '#E07D00',
  accentColor = '#F5A623',
}) {
  return (
    <section className="py-16 md:py-20 px-4 lg:min-h-[513px]" style={{ background: bgColor }}>
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          {badge && (
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6"
              style={{ background: badge.bg, color: badge.color }}
            >
              {badge.text}
            </span>
          )}

          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-[48px] text-white leading-snug mb-6">
            {heading}
          </h2>

          {leftContent}

          <div className="flex flex-wrap gap-4">
            {primaryCta && (
              <a
                href={primaryCta.href || '#'}
                className="inline-flex items-center justify-center text-white font-semibold text-sm px-8 py-3.5 rounded-[999px] transition-colors duration-200"
                style={{ background: primaryCta.bg || ctaBg }}
              >
                {primaryCta.label}
              </a>
            )}
            {secondaryCta && (
              <a
                href={secondaryCta.href || '#'}
                className="inline-flex items-center justify-center border-2 text-white font-semibold text-sm px-8 py-3.5 rounded-[999px] transition-colors duration-200"
                style={{ borderColor: secondaryCta.borderColor || 'rgba(255,255,255,0.3)' }}
              >
                {secondaryCta.label}
              </a>
            )}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl lg:w-[612px]">
          <h3 className="font-heading font-bold text-xl text-[#004CA5] mb-6">{formTitle}</h3>
          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            {formFields.map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} className="block text-xs font-semibold text-[#64748B] mb-1.5">
                  {field.label}
                </label>
                {field.type === 'select' ? (
                  <div className="flex gap-2">
                    <select
                      id={field.id}
                      className="border border-gray-200 rounded-lg px-3 py-3 text-sm text-[#0F2A52] bg-white focus:outline-none focus:ring-2 transition-colors"
                      style={{ focusRing: `2px solid ${accentColor}/50` }}
                    >
                      {field.options?.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      placeholder={field.placeholder}
                      className="flex-1 border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#0F2A52] placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors"
                      style={{ focusRing: `2px solid ${accentColor}/50` }}
                    />
                  </div>
                ) : field.type === 'file' ? (
                  <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center hover:border-[#F5A623] transition-colors cursor-pointer">
                    <p className="text-[#64748B] text-xs">{field.placeholder}</p>
                  </div>
                ) : (
                  <input
                    id={field.id}
                    type={field.type || 'text'}
                    placeholder={field.placeholder}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#0F2A52] placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors"
                    style={{ focusRing: `2px solid ${accentColor}/50` }}
                  />
                )}
              </div>
            ))}
            <button
              type="submit"
              className="w-full bg-[#F39308] text-white font-semibold text-sm px-6 py-3.5 rounded-[999px] transition-colors duration-200"
              style={{ background: ctaBg }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

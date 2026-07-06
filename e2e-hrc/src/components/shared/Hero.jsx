export default function Hero({
  bgColor = '#F8FAFC',
  badge = null,
  headingParts = [],
  description = '',
  primaryCta = null,
  secondaryCta = null,
  stats = [],
  statsType = 'text',
  image = null,
  imageStyle = '',
  decorativeCircles = null,
  containerClass = '',
  textColor = '#004CA5',
  statLabelColor = '#64748B',
}) {
  return (
    <section className="relative overflow-hidden" style={{ background: bgColor }}>
      <div className={`mx-auto max-w-[1440px] px-4 xl:px-16 py-12 lg:py-0 ${containerClass}`}>
        <div className="grid lg:grid-cols-2 gap-8 xl:gap-16 items-center min-h-[638px]">
          <div className="flex flex-col gap-6 py-12 lg:py-16">
            {badge && (
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full w-max text-xs font-semibold tracking-wide" style={{ background: badge.bg, color: badge.color }}>
                {badge.icon && <span style={{ color: badge.color }}>{badge.icon}</span>}
                {badge.text}
              </span>
            )}

            <h1 className="font-body font-[800] text-[44px] sm:text-[50px] lg:text-[60px] leading-[1.1] tracking-[-0.02em]" style={{ color: textColor }}>
              {headingParts.map((part, i) =>
                part.highlight ? (
                  <span key={i} style={{ color: part.color || textColor }}>{part.text}</span>
                ) : (
                  <span key={i}>{part.text}</span>
                )
              )}
            </h1>

            <p className="text-base sm:text-lg max-w-xl leading-relaxed" style={{ color: description === '' ? 'inherit' : undefined }}>
              {description}
            </p>

            <div className="flex flex-wrap gap-4">
              {primaryCta && (
                <a
                  href={primaryCta.href || '#'}
                  className="inline-flex items-center gap-2 text-white font-semibold text-sm px-8 py-3.5 rounded-[999px] transition-colors duration-200"
                  style={{ background: primaryCta.bg }}
                >
                  {primaryCta.label}
                  {primaryCta.icon}
                </a>
              )}
              {secondaryCta && (
                <a
                  href={secondaryCta.href || '#'}
                  className="inline-flex items-center justify-center font-semibold text-sm px-8 py-3.5 rounded-[999px] transition-colors duration-200"
                  style={{ border: secondaryCta.border, color: secondaryCta.color }}
                >
                  {secondaryCta.label}
                </a>
              )}
            </div>

            {stats.length > 0 && (
              <div className="border-t border-gray-200 pt-6 mt-2">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {stats.map(({ icon: Icon, value, label }) => (
                    <div key={label}>
                      {Icon && statsType === 'icon' && <Icon size={24} style={{ color: textColor }} className="mx-auto mb-2" />}
                      <p className="font-heading font-bold text-2xl sm:text-3xl" style={{ color: textColor }}>{value}</p>
                      <p className="text-xs tracking-widest font-semibold" style={{ color: statLabelColor }}>{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="relative flex items-center justify-center h-full py-12 lg:py-16">
            {decorativeCircles && decorativeCircles.map((circle, i) => (
              <div key={i} className="absolute" style={circle} />
            ))}
            {image && (
              <img
                src={image}
                alt="Hero"
                className={`relative z-10 shadow-2xl w-full max-w-lg object-cover ${imageStyle}`}
                style={{ aspectRatio: '4/3' }}
              />
            )}
          </div>
        </div>

        {stats.length > 0 && statsType === 'icon' && (
          <div
            className="relative z-10 mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10"
            style={{ display: 'none' }}
          />
        )}
      </div>
    </section>
  );
}

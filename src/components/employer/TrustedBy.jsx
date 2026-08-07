const logos = [
  { name: 'REC', src: 'https://via.placeholder.com/140x60/e2e8f0/475569?text=REC' },
  { name: 'ICO', src: 'https://via.placeholder.com/140x60/e2e8f0/475569?text=ICO' },
  { name: 'BSI', src: 'https://via.placeholder.com/140x60/e2e8f0/475569?text=BSI' },
  { name: 'CIPD', src: 'https://via.placeholder.com/140x60/e2e8f0/475569?text=CIPD' },
  { name: 'UKWA', src: 'https://via.placeholder.com/140x60/e2e8f0/475569?text=UKWA' },
  { name: 'ISO', src: 'https://via.placeholder.com/140x60/e2e8f0/475569?text=ISO' },
];

export default function TrustedBy() {
  return (
    <section className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-xs font-semibold tracking-widest uppercase text-text-body mb-10">
          Trusted by leading organisations across the UK
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map(({ name, src }) => (
            <img
              key={name}
              src={src}
              alt={`${name} logo`}
              className="h-10 md:h-14 w-auto opacity-40 grayscale hover:opacity-70 hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

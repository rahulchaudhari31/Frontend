export default function DualCTA() {
  return (
    <section className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="rounded-2xl p-8 md:p-10 flex flex-col gap-5" style={{ background: '#4A6C3F' }}>
          <h3 className="font-heading font-bold text-2xl md:text-3xl text-white leading-snug">
            Permanent Staffing
          </h3>
          <p className="text-white/80 text-sm leading-relaxed">
            Find the perfect long-term addition to your team. We source, vet, and present top candidates for your permanent roles.
          </p>
          <a
            href="#"
            className="self-start bg-accent text-white font-semibold text-sm px-6 py-3 rounded-pill hover:bg-orange-500 transition-colors duration-200"
          >
            Hire Permanently
          </a>
        </div>

        <div className="rounded-2xl p-8 md:p-10 flex flex-col gap-5 border border-gray-200 shadow-sm">
          <h3 className="font-heading font-bold text-2xl md:text-3xl text-primary leading-snug">
            Contract & Temporary
          </h3>
          <p className="text-text-body text-sm leading-relaxed">
            Need flexible staffing solutions? We provide skilled temporary and contract professionals to meet your business demands.
          </p>
          <a
            href="#"
            className="self-start bg-accent text-white font-semibold text-sm px-6 py-3 rounded-pill hover:bg-orange-500 transition-colors duration-200"
          >
            Hire Temporarily
          </a>
        </div>
      </div>
    </section>
  );
}

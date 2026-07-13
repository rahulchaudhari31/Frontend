import { useState, useRef, useEffect } from "react";
import { Check, Phone, Mail, User, Paperclip, ChevronDown, ArrowRight, Search } from "lucide-react";
import groupIcon from "../../assets/images/Career Growth imgs/Group.png";

const COUNTRIES = [
  { name: "United Kingdom", code: "GB", dial: "+44", flag: "🇬🇧" },
  { name: "United Arab Emirates", code: "AE", dial: "+971", flag: "🇦🇪" },
  { name: "India", code: "IN", dial: "+91", flag: "🇮🇳" },
  { name: "Germany", code: "DE", dial: "+49", flag: "🇩🇪" },
  { name: "Pakistan", code: "PK", dial: "+92", flag: "🇵🇰" },
  { name: "Saudi Arabia", code: "SA", dial: "+966", flag: "🇸🇦" },
  { name: "Qatar", code: "QA", dial: "+974", flag: "🇶🇦" },
  { name: "Kuwait", code: "KW", dial: "+965", flag: "🇰🇼" },
  { name: "Bahrain", code: "BH", dial: "+973", flag: "🇧🇭" },
  { name: "Oman", code: "OM", dial: "+968", flag: "🇴🇲" },
  { name: "United States", code: "US", dial: "+1", flag: "🇺🇸" },
  { name: "Canada", code: "CA", dial: "+1", flag: "🇨🇦" },
  { name: "Australia", code: "AU", dial: "+61", flag: "🇦🇺" },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    attachment: null,
  });

  const [selectedCountry, setSelectedCountry] = useState(
    COUNTRIES.find((c) => c.code === "AE")
  );
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const badgeText = "Ready to get started?";
  const headingLine1 = "Let's Build";
  const highlightText = "Success";
  const headingLine2 = "Together";
  const description = "Whether you're hiring exceptional talent or searching for your next opportunity, we are here to help every step of the way.";
  const feature1 = "Dedicated consultant assigned to you";
  const feature2 = "Response within 24 hours";
  const button1Text = "Hire Talent";
  const button2Text = "Explore Opportunities";

  const filteredCountries = COUNTRIES.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.dial.includes(search)
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, attachment: e.target.files?.[0] || null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      ...formData,
      countryCode: selectedCountry.dial,
    });
  };

  return (
    <section className="relative w-full bg-[#0b3a91] py-16 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div className="text-white">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            {badgeText}
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold leading-tight mb-6">
            {headingLine1}{" "}
            <span className="text-amber-400">{highlightText}</span>
            <br />
            {headingLine2}
          </h2>
          <p className="text-white/80 text-base sm:text-lg max-w-md mb-8">
            {description}
          </p>
          <div className="space-y-3 mb-10">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-5 h-5 rounded-full border border-emerald-400">
                <Check className="w-3 h-3 text-emerald-400" strokeWidth={3} />
              </span>
              <span className="text-white/90">{feature1}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-5 h-5 rounded-full border border-emerald-400">
                <Check className="w-3 h-3 text-emerald-400" strokeWidth={3} />
              </span>
              <span className="text-white/90">{feature2}</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button type="button" className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 transition-colors text-[#0b3a91] font-semibold px-6 py-3 rounded-full">
              {button1Text} <ArrowRight className="w-4 h-4" />
            </button>
            <button type="button" className="inline-flex items-center gap-2 bg-transparent border border-white/40 hover:border-white transition-colors text-white font-semibold px-6 py-3 rounded-full">
              {button2Text}
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - FORM CARD */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 w-full max-w-md mx-auto lg:mx-0 lg:ml-auto h-[560px] flex flex-col">
          <div className="flex items-start justify-between mb-3 shrink-0">
            <div className="flex-1 pr-3">
              <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: "1.2", color: "#004CA5", margin: 0 }}>
                Get in Touch with Our Employee Team
              </h3>
            </div>
            <div className="shrink-0">
              <img src={groupIcon} alt="" style={{ width: "80px", height: "60px", opacity: 1 }} />
            </div>
          </div>
          <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "1.5", color: "#6F6C8F", margin: 0, marginBottom: "16px" }}>
            Have questions about job opportunities, applications, or workplace support? Fill out the form below and our team will get back to you shortly.
          </p>

          <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto pr-2 space-y-4 contact-scroll">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-[#0b3a91] mb-1.5">Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Name"
                  className="w-full rounded-full border border-gray-200 pl-11 pr-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0b3a91]/30 focus:border-[#0b3a91]" />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#0b3a91] mb-1.5">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter your email"
                  className="w-full rounded-full border border-gray-200 pl-11 pr-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0b3a91]/30 focus:border-[#0b3a91]" />
              </div>
            </div>

            {/* Contact Number */}
            <div ref={dropdownRef} className="relative">
              <label htmlFor="contactNumber" className="block text-sm font-semibold text-[#0b3a91] mb-1.5">Contact Number</label>
              <div className="flex items-center rounded-full border border-gray-200 pl-2 pr-4 py-1.5 focus-within:ring-2 focus-within:ring-[#0b3a91]/30 focus-within:border-[#0b3a91]">
                <Phone className="w-4 h-4 text-gray-400 ml-2 mr-2 shrink-0" />
                <button type="button" onClick={() => setDropdownOpen((o) => !o)} className="flex items-center gap-1 pr-3 border-r border-gray-200 shrink-0">
                  <span className="text-base leading-none">{selectedCountry.flag}</span>
                  <span className="text-sm text-gray-600 font-medium whitespace-nowrap">{selectedCountry.dial}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                </button>
                <input id="contactNumber" name="contactNumber" type="tel" value={formData.contactNumber} onChange={handleChange} placeholder="(000) 000-0000"
                  className="w-full bg-transparent pl-3 py-1.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none" />
              </div>
              {dropdownOpen && (
                <div className="absolute z-20 mt-2 w-72 max-w-[90vw] bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
                  <div className="p-2 border-b border-gray-100">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                      <input autoFocus type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search country or code"
                        className="w-full rounded-full border border-gray-200 pl-8 pr-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0b3a91]/30" />
                    </div>
                  </div>
                  <ul className="max-h-56 overflow-y-auto contact-scroll">
                    {filteredCountries.length === 0 && <li className="px-4 py-3 text-sm text-gray-400">No matches found</li>}
                    {filteredCountries.map((c) => (
                      <li key={c.code}>
                        <button type="button" onClick={() => { setSelectedCountry(c); setDropdownOpen(false); setSearch(""); }}
                          className="w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors">
                          <span className="text-base leading-none">{c.flag}</span>
                          <span className="text-sm text-gray-700 flex-1 truncate">{c.name}</span>
                          <span className="text-sm text-gray-400">{c.dial}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Attachment */}
            <div>
              <label htmlFor="attachment" className="block text-sm font-semibold text-[#0b3a91] mb-1.5">Attachment</label>
              <label htmlFor="attachment" className="flex items-center gap-3 w-full rounded-full border border-gray-200 px-4 py-3 text-sm text-gray-400 cursor-pointer hover:border-gray-300 transition-colors">
                <Paperclip className="w-4 h-4 text-gray-400 shrink-0" />
                <span className="truncate">{formData.attachment ? formData.attachment.name : "Upload your resume / CV"}</span>
                <input id="attachment" name="attachment" type="file" onChange={handleFileChange} className="hidden" />
              </label>
            </div>

            {/* Submit */}
            <button type="submit" className="w-full mt-2 bg-gradient-to-r from-[#0b3a91] to-[#1d56c9] hover:from-[#0a3380] hover:to-[#1a4cb3] transition-colors text-white font-semibold py-3.5 rounded-full shadow-md">
              Submit
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .contact-scroll { scrollbar-width: thin; scrollbar-color: #c7d2e8 transparent; }
        .contact-scroll::-webkit-scrollbar { width: 6px; }
        .contact-scroll::-webkit-scrollbar-track { background: transparent; }
        .contact-scroll::-webkit-scrollbar-thumb { background-color: #c7d2e8; border-radius: 9999px; }
        .contact-scroll::-webkit-scrollbar-thumb:hover { background-color: #a9b9e0; }
      `}</style>
    </section>
  );
};

export default ContactSection;

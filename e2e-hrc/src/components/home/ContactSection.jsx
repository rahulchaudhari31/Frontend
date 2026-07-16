import { useState, useRef, useEffect, forwardRef } from "react";
import { Check, Phone, Mail, User, MapPin, Briefcase, CloudUpload, ChevronDown, ArrowRight, Search } from "lucide-react";
import groupIcon from "../../assets/images/Career Growth imgs/Group.png";
import { useContactType } from "../../context/ContactTypeContext";

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

const content = {
  employer: {
    title: "Get in Touch with Our Employer Team",
    description:
      "Looking to hire exceptional talent? Fill out the form below and our recruitment specialists will contact you shortly.",
  },
  employee: {
    title: "Get in Touch with Our Employee Team",
    description:
      "Have questions about job opportunities, applications, or workplace support? Fill out the form below and our team will get back to you shortly.",
  },
};

const ContactSection = forwardRef(function ContactSection(props, ref) {
  const { contactType } = useContactType();
  const type = contactType;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    location: "",
    organization: "",
    vacancy: "",
    attachment: null,
  });

  const [selectedCountry, setSelectedCountry] = useState(
    COUNTRIES.find((c) => c.code === "AE")
  );
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    setFormData({ name: "", email: "", contactNumber: "", location: "", organization: "", vacancy: "", attachment: null });
  }, [type]);

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

  const labelStyle = {
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
    fontSize: "14px",
    color: "#170F49",
    marginBottom: "6px",
    display: "block",
  };

  const inputStyle = {
    height: "44px",
    border: "1px solid #F1F2F9",
    borderRadius: "16px",
    boxShadow: "0px 0.5px 1px rgba(25,33,61,0.04)",
    padding: "8px 16px",
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
    color: "#170F49",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
  };

  return (
    <section className="relative w-full bg-[#0b3a91] py-16 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div className="text-white">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Ready to get started?
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold leading-tight mb-6 text-white">
            Let's Build{" "}
            <span className="text-[#FFB800]">Success</span>
            <br />
            Together
          </h2>
          <p className="text-white/80 text-base sm:text-lg max-w-md mb-8">
            Whether you're hiring exceptional talent or searching for your next opportunity, we are here to help every step of the way.
          </p>
          <div className="space-y-3 mb-10">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-5 h-5 rounded-full border border-emerald-400">
                <Check className="w-3 h-3 text-emerald-400" strokeWidth={3} />
              </span>
              <span className="text-white/90">Dedicated consultant assigned to you</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-5 h-5 rounded-full border border-emerald-400">
                <Check className="w-3 h-3 text-emerald-400" strokeWidth={3} />
              </span>
              <span className="text-white/90">Response within 24 hours</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button type="button" className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 transition-colors text-[#0b3a91] font-semibold px-6 py-3 rounded-full">
              Hire Talent <ArrowRight className="w-4 h-4" />
            </button>
            <button type="button" className="inline-flex items-center gap-2 bg-transparent border border-white/40 hover:border-white transition-colors text-white font-semibold px-6 py-3 rounded-full">
              Explore Opportunities
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - FORM CARD */}
        <div
          id="contact-form-card"
          ref={ref}
          className="home-contact-form-card w-full max-w-md mx-auto lg:mx-0 lg:ml-auto flex flex-col"
          style={{
            background: "#FFFFFF",
            border: "1px solid #F1F2F9",
            borderRadius: "24px",
            boxShadow: "0px 4px 32px -4px rgba(111,108,143,0.12), 0px 3px 12px -2px rgba(170,170,190,0.06)",
            padding: "32px",
            maxHeight: "600px",
          }}
        >
          <div className="flex items-start justify-between mb-2 shrink-0">
            <div className="flex-1 pr-3">
              <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "20px", lineHeight: "1.3", color: "#170F49", margin: 0 }}>
                {content[type]?.title || content.employer.title}
              </h3>
            </div>
            <div className="shrink-0">
              <img src={groupIcon} alt="" style={{ width: "80px", height: "60px" }} />
            </div>
          </div>
          <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "1.5", color: "#6F6C8F", margin: 0, marginBottom: "20px" }}>
            {content[type]?.description || content.employer.description}
          </p>

          <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto pr-2 contact-scroll" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* Name */}
            <div>
              <label style={labelStyle}>Name</label>
              <div style={{ position: "relative" }}>
                <User size={16} color="#A0A3BD" style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)" }} />
                <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Name"
                  style={{ ...inputStyle, paddingLeft: "44px" }} />
              </div>
            </div>

            {/* Email */}
            <div>
              <label style={labelStyle}>Email</label>
              <div style={{ position: "relative" }}>
                <Mail size={16} color="#A0A3BD" style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)" }} />
                <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter your email"
                  style={{ ...inputStyle, paddingLeft: "44px" }} />
              </div>
            </div>

            {/* Contact Number */}
            <div ref={dropdownRef} className="relative">
              <label style={labelStyle}>Contact Number</label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "44px",
                  border: "1px solid #F1F2F9",
                  borderRadius: "16px",
                  boxShadow: "0px 0.5px 1px rgba(25,33,61,0.04)",
                  padding: "8px 16px",
                  gap: "8px",
                }}
              >
                <Phone size={16} color="#A0A3BD" />
                <button type="button" onClick={() => setDropdownOpen((o) => !o)} className="flex items-center gap-1 shrink-0" style={{ borderRight: "1px solid #F1F2F9", paddingRight: "12px" }}>
                  <span style={{ fontSize: "16px", lineHeight: 1 }}>{selectedCountry.flag}</span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "#6F6C8F", fontWeight: 500 }}>{selectedCountry.dial}</span>
                  <ChevronDown size={14} color="#A0A3BD" />
                </button>
                <input id="contactNumber" name="contactNumber" type="tel" value={formData.contactNumber} onChange={handleChange} placeholder="(000) 000-0000"
                  style={{ flex: 1, border: "none", outline: "none", fontFamily: "Inter, sans-serif", fontSize: "14px", color: "#170F49", background: "transparent" }} />
              </div>
              {dropdownOpen && (
                <div style={{ position: "absolute", zIndex: 20, marginTop: "8px", width: "280px", maxHeight: "224px", background: "#FFFFFF", border: "1px solid #F1F2F9", borderRadius: "16px", boxShadow: "0px 4px 24px rgba(0,0,0,0.12)", overflow: "hidden" }}>
                  <div style={{ padding: "8px", borderBottom: "1px solid #F1F2F9" }}>
                    <div className="relative">
                      <Search size={14} color="#A0A3BD" style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)" }} />
                      <input autoFocus type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search country or code"
                        style={{ width: "100%", border: "1px solid #F1F2F9", borderRadius: "9999px", padding: "8px 12px 8px 32px", fontSize: "14px", outline: "none", fontFamily: "Inter, sans-serif" }} />
                    </div>
                  </div>
                  <ul style={{ maxHeight: "180px", overflowY: "auto", padding: 0, margin: 0, listStyle: "none" }}>
                    {filteredCountries.length === 0 && <li style={{ padding: "12px 16px", fontSize: "14px", color: "#A0A3BD" }}>No matches found</li>}
                    {filteredCountries.map((c) => (
                      <li key={c.code}>
                        <button type="button" onClick={() => { setSelectedCountry(c); setDropdownOpen(false); setSearch(""); }}
                          style={{ width: "100%", display: "flex", alignItems: "center", gap: "12px", padding: "8px 16px", border: "none", background: "transparent", cursor: "pointer", textAlign: "left", fontFamily: "Inter, sans-serif", fontSize: "14px" }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = "#F8F9FF")}
                          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
                          <span style={{ fontSize: "16px" }}>{c.flag}</span>
                          <span style={{ flex: 1, color: "#170F49" }}>{c.name}</span>
                          <span style={{ color: "#A0A3BD" }}>{c.dial}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Location - Employee only */}
            {type === "employee" && (
              <div>
                <label style={labelStyle}>Location</label>
                <div style={{ position: "relative" }}>
                  <MapPin size={16} color="#A0A3BD" style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)" }} />
                  <input id="location" name="location" type="text" value={formData.location} onChange={handleChange} placeholder="Location"
                    style={{ ...inputStyle, paddingLeft: "44px" }} />
                </div>
              </div>
            )}

            {/* Organization Name */}
            <div>
              <label style={labelStyle}>Organization Name</label>
              <div style={{ position: "relative" }}>
                <Briefcase size={16} color="#A0A3BD" style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)" }} />
                <input id="organization" name="organization" type="text" value={formData.organization} onChange={handleChange} placeholder="Enter your Organization Name"
                  style={{ ...inputStyle, paddingLeft: "44px" }} />
              </div>
            </div>

            {/* Vacancy - Employer only */}
            {type === "employer" && (
              <div>
                <label style={labelStyle}>Vacancy</label>
                <div style={{ position: "relative" }}>
                  <Briefcase size={16} color="#A0A3BD" style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)" }} />
                  <input id="vacancy" name="vacancy" type="text" value={formData.vacancy} onChange={handleChange} placeholder="Vacancy"
                    style={{ ...inputStyle, paddingLeft: "44px" }} />
                </div>
              </div>
            )}

            {/* File Upload - Employee only */}
            {type === "employee" && (
              <div>
                <label style={labelStyle}>Upload and attach files</label>
                <label
                  htmlFor="attachment"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "80px",
                    border: "2px dashed #CADBF9",
                    borderRadius: "16px",
                    background: "#F8F9FF",
                    cursor: "pointer",
                    gap: "4px",
                    padding: "12px",
                  }}
                >
                  <CloudUpload size={24} color="#004CA5" />
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "#6F6C8F" }}>
                    Drag and drop your file here or <span style={{ color: "#004CA5", fontWeight: 500 }}>Browse</span>
                  </span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", color: "#6F7885" }}>
                    PDF, DOC, DOCX (Max. 10MB)
                  </span>
                  <input id="attachment" name="attachment" type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" />
                </label>
              </div>
            )}

            {/* Divider */}
            <div style={{ width: "100%", height: "1px", background: "#F1F2F9" }} />

            {/* Submit */}
            <button
              type="submit"
              style={{
                width: "100%",
                height: "44px",
                background: "#004CA5",
                border: "0.5px solid #897FFF",
                borderRadius: "16px",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                color: "#FFFFFF",
                cursor: "pointer",
                boxShadow: "0px 2px 3px rgba(55,52,209,0.21), inset 0px -2px 2px rgba(80,70,189,0.6), inset 0px 1px 1px rgba(255,255,255,0.35), inset 0px 3px 4px rgba(223,229,255,0.3)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
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
});

export default ContactSection;

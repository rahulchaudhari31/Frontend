import discoveryIcon from "../../assets/images/Career Growth imgs/DISCOVERY.png";

const stepIcons = [
  <img key="discovery" src={discoveryIcon} alt="Discovery" style={{ width: 66, height: 55, objectFit: "contain" }} />,
  <svg key="requirement" width="66" height="55" viewBox="0 0 66 55" fill="none">
    <rect x="12" y="8" width="42" height="44" rx="4" stroke="#2B2B2F" strokeWidth="3" />
    <line x1="22" y1="22" x2="44" y2="22" stroke="#2B2B2F" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="22" y1="32" x2="38" y2="32" stroke="#2B2B2F" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="22" y1="42" x2="32" y2="42" stroke="#2B2B2F" strokeWidth="2.5" strokeLinecap="round" />
  </svg>,
  <svg key="search" width="66" height="55" viewBox="0 0 66 55" fill="none">
    <circle cx="24" cy="18" r="8" stroke="#2B2B2F" strokeWidth="2.5" />
    <circle cx="44" cy="18" r="6" stroke="#2B2B2F" strokeWidth="2" />
    <path d="M10 48C10 38 16 32 24 32C28 32 30 33 32 35" stroke="#2B2B2F" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M36 48C36 40 40 36 44 36C48 36 50 38 52 40" stroke="#2B2B2F" strokeWidth="2" strokeLinecap="round" />
  </svg>,
  <svg key="shortlist" width="66" height="55" viewBox="0 0 66 55" fill="none">
    <rect x="10" y="6" width="46" height="42" rx="4" stroke="#2B2B2F" strokeWidth="2.5" />
    <polyline points="20,20 26,26 36,16" stroke="#2B2B2F" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="20,34 26,40 36,30" stroke="#2B2B2F" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="40" y1="22" x2="50" y2="22" stroke="#2B2B2F" strokeWidth="2" strokeLinecap="round" />
    <line x1="40" y1="36" x2="50" y2="36" stroke="#2B2B2F" strokeWidth="2" strokeLinecap="round" />
  </svg>,
  <svg key="interview" width="66" height="55" viewBox="0 0 66 55" fill="none">
    <circle cx="22" cy="16" r="8" stroke="#2B2B2F" strokeWidth="2.5" />
    <circle cx="46" cy="16" r="7" stroke="#2B2B2F" strokeWidth="2.5" />
    <path d="M8 46C8 36 14 30 22 30C26 30 28 31 30 33" stroke="#2B2B2F" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M34 46C34 38 38 34 46 34C50 34 52 35 54 37" stroke="#2B2B2F" strokeWidth="2.5" strokeLinecap="round" />
    <rect x="30" y="10" width="12" height="8" rx="3" stroke="#2B2B2F" strokeWidth="2" />
  </svg>,
  <svg key="hire" width="66" height="55" viewBox="0 0 66 55" fill="none">
    <path d="M8 28L18 18L28 28L38 18L48 28L58 18" stroke="#2B2B2F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 32L26 40L42 24" stroke="#2B2B2F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="33" cy="46" r="4" stroke="#2B2B2F" strokeWidth="2" />
  </svg>,
];

const displaySteps = [
  { _id: "1", title: "Discovery", description: "Understanding your business, culture, and requirements.", order: 1 },
  { _id: "2", title: "Requirement Planning", description: "Defining the ideal candidate profile and timeline.", order: 2 },
  { _id: "3", title: "Candidate Search", description: "Active headhunting across our talent network.", order: 3 },
  { _id: "4", title: "Shortlisting", description: "Presenting only the best-matched candidates.", order: 4 },
  { _id: "5", title: "Interview Support", description: "Full coordination and coaching throughout.", order: 5 },
  { _id: "6", title: "Successful Hire", description: "Placement, onboarding support, and follow-up.", order: 6 },
];

export default function HowWeWork() {
  return (
    <section className="how-we-work-section">
      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 1220, margin: "0 auto", padding: "0 15px", boxSizing: "border-box" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0 15px",
            marginBottom: 30,
          }}
        >
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: 20,
              lineHeight: "30px",
              letterSpacing: 1,
              textTransform: "uppercase",
              color: "#7A777E",
              textAlign: "center",
              margin: "0 0 8px",
            }}
          >
            From brief to successful hire
          </p>
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 800,
              fontSize: 36,
              lineHeight: "50px",
              letterSpacing: -1,
              color: "#2B2B2F",
              textAlign: "center",
              margin: 0,
            }}
          >
            How We Work
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            position: "relative",
          }}
        >
          {displaySteps.slice(0, 6).map((step, index) => {
            const isTopRow = index < 3;
            const col = index % 3;

            return (
              <div
                key={step._id || `${step.title}-${index}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: isTopRow ? "0 0 17px" : "17px 0",
                  gap: 17,
                  borderRight: col < 2 ? "1px solid rgba(0,0,0,0.1)" : "none",
                  borderBottom: isTopRow ? "none" : "none",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: 144.53,
                    height: 144.53,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      width: 120,
                      height: 60,
                      background: "#71DF14",
                      opacity: 0.12,
                      transform: index % 2 === 0 ? "rotate(-40deg)" : "rotate(140deg)",
                      left: "50%",
                      top: "50%",
                      marginLeft: -60,
                      marginTop: -30,
                    }}
                  />
                  <div
                    style={{
                      position: "relative",
                      width: 120,
                      height: 120,
                      borderRadius: 60,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 1,
                    }}
                  >
                    {stepIcons[index] || stepIcons[0]}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    padding: "0 10px",
                    width: "100%",
                    boxSizing: "border-box",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 600,
                      fontSize: 24,
                      lineHeight: "22px",
                      color: "#2B2B2F",
                      textAlign: "center",
                      width: "100%",
                      margin: "0 0 8px",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 500,
                      fontSize: 18,
                      lineHeight: "34px",
                      textAlign: "center",
                      color: "#7A777E",
                      margin: 0,
                      width: "100%",
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .how-we-work-section {
          position: relative;
          background: linear-gradient(135deg, #fdf3e0 0%, #f9dfa0 30%, #f0b84f 55%, #f5d99a 75%, #fdf3e0 100%);
          overflow: hidden;
          padding: 80px 40px;
        }
        .how-we-work-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 600px 400px at 20% 30%, rgba(255,255,255,0.5), transparent 60%),
            radial-gradient(ellipse 500px 350px at 80% 70%, rgba(240,180,80,0.4), transparent 60%),
            linear-gradient(120deg, transparent 40%, rgba(255,255,255,0.35) 48%, transparent 56%),
            linear-gradient(115deg, transparent 55%, rgba(255,200,120,0.3) 62%, transparent 70%);
          filter: blur(20px);
          pointer-events: none;
        }
        .how-we-work-section > * {
          position: relative;
          z-index: 1;
        }
      `}</style>
    </section>
  );
}

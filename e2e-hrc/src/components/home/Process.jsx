const fallbackEmployerSteps = [
  { title: "Discovery", description: "Understanding your business, culture, and requirements." },
  { title: "Requirement Planning", description: "Defining the ideal candidate profile and timeline." },
  { title: "Candidate Search", description: "Active headhunting across our talent network." },
  { title: "Shortlisting", description: "Presenting only the best-matched candidates." },
  { title: "Interview Support", description: "Full coordination and coaching throughout." },
  { title: "Successful Hire", description: "Placement, onboarding support, and follow-up." },
];

const fallbackEmployeeSteps = [
  { title: "Register", description: "Create your profile and tell us about your goals." },
  { title: "CV Review", description: "Expert feedback to make your application stand out" },
  { title: "Job Matching", description: "We match you with roles that fit your experience." },
  { title: "Interview Preparation", description: "Tailored coaching and briefing for every interview" },
  { title: "Placement", description: "We negotiate the best offer on your behalf." },
  { title: "Career Support", description: "Ongoing support as your career progresses." },
];

function StepItem({ stepNumber, title, description, isBlue, isLast, animIndex }) {
  return (
    <div
      className="flex items-start process-step-item"
      style={{ gap: 16, padding: 0, animationDelay: `${(animIndex || 0) * 0.1}s` }}
    >
      <div className="flex flex-col items-center" style={{ width: 36, minWidth: 36 }}>
        <div
          className="flex items-center justify-center shrink-0"
          style={{
            width: 36, height: 36,
            borderRadius: "50%",
            background: isBlue ? "#004CA5" : "#C8D96F",
          }}
        >
          <span
            className="font-heading font-bold"
            style={{
              fontSize: 12, lineHeight: "16px",
              color: isBlue ? "#FFFFFF" : "#004CA5",
              width: "fit-content",
            }}
          >
            {stepNumber}
          </span>
        </div>
        {!isLast && (
          <div
            style={{
              width: 1, height: 32,
              minHeight: 32,
              marginTop: 4,
              background: isBlue ? "#004CA5" : "#C8D96F",
              opacity: isBlue ? 0.2 : 0.5,
            }}
          />
        )}
      </div>
      <div style={{ flex: 1, paddingBottom: isLast ? 0 : 24 }}>
        <h4
          className="font-heading font-semibold"
          style={{ fontSize: 16, lineHeight: "22px", color: "#004CA5", margin: 0 }}
        >
          {title}
        </h4>
        <p
          className="font-body font-normal"
          style={{ fontSize: 14, lineHeight: "20px", color: "#64748B", margin: 0, marginTop: 4 }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

function Process() {
  return (
    <section style={{ background: "#F8FAFC" }}>
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 pt-8 pb-12 lg:pt-[35px] lg:pb-0">
        {/* Header */}
        <div className="flex flex-col items-center justify-center gap-2 lg:gap-1.5 mb-8 lg:mb-[70px]">
          <span
            className="font-body font-semibold"
            style={{
              background: "#E8EDF5", borderRadius: "50px",
              padding: "6px 12px", fontSize: 12, lineHeight: "16px",
              color: "#004CA5", display: "inline-flex", alignItems: "center", gap: 8,
            }}
          >
            Our Process
          </span>
          <h2
            className="font-heading font-[800] text-center"
            style={{ fontSize: "clamp(24px, 4vw, 36px)", lineHeight: "1.2", color: "#004CA5", margin: 0 }}
          >
            How We Work
          </h2>
          <p
            className="font-body font-normal text-center"
            style={{
              fontSize: "clamp(14px, 2vw, 18px)", lineHeight: "1.5", color: "#64748B",
              maxWidth: 775, padding: "10px 0", margin: 0,
            }}
          >
            Dedicated pathways for employers and job seekers, united by one commitment to success.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-0 w-full">
          {/* Employer Journey Column */}
          <div className="w-full lg:w-[503px] lg:flex-shrink-0 process-journey-col process-journey-col-employer">
            <div
              className="flex items-center process-journey-header"
              style={{
                width: "100%", maxWidth: 503, height: 72, background: "#004CA5",
                borderRadius: 16, padding: 16, gap: 12, boxSizing: "border-box",
              }}
            >
              <div
                className="flex items-center justify-center shrink-0"
                style={{ width: 40, height: 40, background: "#C8D96F", borderRadius: 16 }}
              >
                <span className="font-heading font-[800]" style={{ fontSize: 14, lineHeight: "20px", color: "#004CA5" }}>E</span>
              </div>
              <div>
                <h3 className="font-heading font-bold" style={{ fontSize: 16, lineHeight: "24px", color: "#FFFFFF", margin: 0 }}>Employer Journey</h3>
                <p className="font-body font-normal" style={{ fontSize: 12, lineHeight: "16px", color: "rgba(255,255,255,0.6)", margin: 0 }}>From brief to successful hire</p>
              </div>
            </div>
            <div className="flex flex-col pt-6 lg:ml-11 pl-0 lg:pl-0" style={{ maxWidth: 416 }}>
              {fallbackEmployerSteps.map((step, index) => (
                <StepItem
                  key={step.title}
                  stepNumber={String(index + 1).padStart(2, "0")}
                  title={step.title}
                  description={step.description}
                  isBlue={true}
                  isLast={index === fallbackEmployerSteps.length - 1}
                  animIndex={index}
                />
              ))}
            </div>
          </div>

          {/* Center E2E Logo - desktop only */}
          <div
            className="hidden lg:flex flex-col items-center mx-auto px-4 lg:px-8"
            style={{ paddingTop: 140 }}
          >
            <div className="e2e-badge-wrapper" style={{ width: 160, height: 160, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div
                className="e2e-dashed-ring"
                style={{
                  width: 160, height: 160, borderRadius: "50%",
                  border: "1.6px dashed rgba(0,92,185,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  position: "absolute", zIndex: 0,
                }}
              >
                <span className="e2e-dot e2e-dot-orange-top" style={{ position: "absolute", top: 0, left: "48%", width: "4%", height: 8, background: "#F5A300", borderRadius: 4 }} />
                <span className="e2e-dot e2e-dot-orange-bottom" style={{ position: "absolute", bottom: 0, left: "48%", width: "4%", height: 8, background: "#F5A300", borderRadius: 4 }} />
                <span className="e2e-dot e2e-dot-green-left" style={{ position: "absolute", left: 0, top: "48%", width: 8, height: "4%", background: "#C8D96F", borderRadius: 4 }} />
                <span className="e2e-dot e2e-dot-green-right" style={{ position: "absolute", right: 0, top: "48%", width: 8, height: "4%", background: "#C8D96F", borderRadius: 4 }} />
              </div>
              <div
                className="e2e-blue-ring"
                style={{
                  width: 112, height: 112, borderRadius: "50%",
                  border: "1.6px solid rgba(0,92,185,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                <div
                  className="e2e-inner-circle flex items-center justify-center"
                  style={{
                    width: 80, height: 80, borderRadius: "50%",
                    background: "linear-gradient(135deg, #005CB9 0%, #003B7A 100%)",
                  }}
                >
                  <span className="font-heading font-[800]" style={{ fontSize: 20, lineHeight: "28px", color: "#FFFFFF" }}>E2E</span>
                </div>
              </div>
            </div>
            <div className="e2e-text" style={{ paddingTop: 16, display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
              <span className="font-body font-semibold" style={{ fontSize: 12, lineHeight: "16px", textAlign: "center", color: "#64748B" }}>Connecting</span>
              <span className="font-body font-semibold" style={{ fontSize: 12, lineHeight: "16px", textAlign: "center", color: "#004CA5" }}>Both Journeys</span>
            </div>
          </div>

          {/* Employee Journey Column */}
          <div className="w-full lg:w-[498px] lg:flex-shrink-0 process-journey-col process-journey-col-employee">
            <div
              className="flex items-center process-journey-header"
              style={{
                width: "100%", maxWidth: 498, height: 72, background: "#C8D96F",
                borderRadius: 16, padding: 16, gap: 12, boxSizing: "border-box",
              }}
            >
              <div
                className="flex items-center justify-center shrink-0"
                style={{ width: 40, height: 40, background: "#004CA5", borderRadius: 16 }}
              >
                <span className="font-heading font-[800]" style={{ fontSize: 14, lineHeight: "20px", color: "#F39308" }}>E</span>
              </div>
              <div>
                <h3 className="font-heading font-bold" style={{ fontSize: 16, lineHeight: "24px", color: "#004CA5", margin: 0 }}>Employee Journey</h3>
                <p className="font-body font-normal" style={{ fontSize: 12, lineHeight: "16px", color: "rgba(0,59,122,0.6)", margin: 0 }}>From registration to career support</p>
              </div>
            </div>
            <div className="flex flex-col pt-6 lg:ml-10 pl-0 lg:pl-0" style={{ maxWidth: 416 }}>
              {fallbackEmployeeSteps.map((step, index) => (
                <StepItem
                  key={step.title}
                  stepNumber={String(index + 1).padStart(2, "0")}
                  title={step.title}
                  description={step.description}
                  isBlue={false}
                  isLast={index === fallbackEmployeeSteps.length - 1}
                  animIndex={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes e2e-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes e2e-pulse {
          0% { transform: scale(1); opacity: 0.7; }
          100% { transform: scale(1.05); opacity: 1; }
        }
        @keyframes e2e-breathe {
          0% { transform: scale(1); box-shadow: 0 0 20px rgba(0,60,140,0.4); }
          100% { transform: scale(1.03); box-shadow: 0 0 20px rgba(0,60,140,0.6); }
        }
        @keyframes e2e-text-in {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .e2e-dashed-ring {
          animation: e2e-spin 20s linear infinite;
          will-change: transform;
        }
        .e2e-blue-ring {
          animation: e2e-pulse 2.5s ease-in-out infinite alternate;
          will-change: transform, opacity;
        }
        .e2e-inner-circle {
          animation: e2e-breathe 3s ease-in-out infinite alternate;
          will-change: transform, box-shadow;
        }
        .e2e-text {
          animation: e2e-text-in 0.6s ease-out forwards;
          opacity: 0;
        }

        @keyframes processStepFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes processColFadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .process-journey-col {
          opacity: 0;
          animation: processColFadeIn 0.5s ease forwards;
        }
        .process-journey-col-employer {
          animation-delay: 0.1s;
        }
        .process-journey-col-employee {
          animation-delay: 0.3s;
        }

        .process-step-item {
          opacity: 0;
          animation: processStepFadeUp 0.4s ease forwards;
        }

        @media (min-width: 1024px) {
          .process-journey-col,
          .process-step-item {
            opacity: 1 !important;
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Process;

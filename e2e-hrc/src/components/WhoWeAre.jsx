import office2 from "../assets/image/office 2.png";

const features = [
  "Personalized consultancy that prioritizes culture and fit.",
  "Unrivaled access to passive talent pools globally.",
  "Data-driven screening combined with human intuition.",
];

const WhoWeAre = () => {
  return (
    <section
      className="relative isolate bg-white w-full"
      style={{ padding: "67px 41px 74px 113.5px" }}
    >
      <div
        className="mx-auto flex flex-col lg:flex-row items-start gap-20"
        style={{ maxWidth: "1286px" }}
      >
        {/* Left column — Image block */}
        <div
          className="relative isolate w-full max-w-[603px] z-10"
          style={{ aspectRatio: "603 / 587" }}
        >
          {/* Decorative circle */}
          <div
            className="absolute rounded-full z-0"
            style={{
              width: "128px",
              height: "128px",
              right: "-50px",
              top: "-49px",
              background: "#C8D96F",
              opacity: 0.2,
            }}
          />

          {/* Decorative square */}
          <div
            className="absolute z-0"
            style={{
              width: "192px",
              height: "192px",
              left: "-32px",
              bottom: "-32px",
              background: "#005CB9",
              opacity: 0.5,
              borderRadius: "24px",
            }}
          />

          {/* Photo card */}
          <div
            className="relative w-full h-full rounded-3xl overflow-hidden z-10"
            style={{
              boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
          >
            <img
              src={office2}
              alt="Two business professionals discussing at a conference table in a modern office"
              className="object-cover w-full h-full"
            />

            {/* Oversized "C" watermark */}
            <span
              className="absolute font-inter font-black pointer-events-none select-none z-20 flex items-center justify-center max-lg:text-[40vw] max-lg:leading-[1] max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:w-full max-lg:h-full max-lg:top-0"
              style={{
                fontSize: "577px",
                lineHeight: "866px",
                color: "rgba(236, 238, 240, 0.3)",
                left: "81px",
                top: "-116px",
                width: "444px",
                height: "866px",
              }}
            >
              C
            </span>
          </div>
        </div>

        {/* Right column — Content block */}
        <div className="max-w-[603px] flex flex-col gap-8">
          {/* Eyebrow */}
          <p
            className="font-inter font-semibold text-sm uppercase"
            style={{
              letterSpacing: "1.4px",
              color: "#00458D",
              margin: 0,
            }}
          >
            MORE THAN A RECRUITMENT AGENCY
          </p>

          {/* Heading */}
          <h2
            className="font-poppins font-extrabold text-4xl"
            style={{
              lineHeight: "56px",
              letterSpacing: "-0.48px",
              color: "#191C1E",
              margin: 0,
            }}
          >
            Bridging the Gap Between Ambition and Achievement
          </h2>

          {/* Paragraph */}
          <p
            className="font-inter text-lg"
            style={{ lineHeight: "28px", color: "#424752", margin: 0 }}
          >
            Since our inception, E2E HRC has been more than just a matching
            service. We are strategic growth partners. We specialize in
            deep-market intelligence, identifying the unique DNA of
            organizations and the professionals who can lead them into the next
            decade.
          </p>

          {/* Checklist */}
          <ul className="flex flex-col gap-4" style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {features.map((feature, index) => (
              <li key={index} className="flex gap-4 items-start">
                <span
                  className="shrink-0"
                  style={{
                    width: "24px",
                    height: "24px",
                    marginTop: "4px",
                    background: "#00458D",
                  }}
                />
                <span
                  className="font-inter text-base"
                  style={{ lineHeight: "24px", color: "#191C1E" }}
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

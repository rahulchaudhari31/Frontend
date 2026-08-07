import office1 from "../assets/image/office 1.png";

const WhoWeAre2 = () => {
  return (
    <section
      className="relative isolate bg-white w-full about-whoweare2"
      style={{ padding: "64px 41px 64px 113.5px" }}
    >
      {/* Background decoration */}
      <div
        className="absolute rounded-full z-0"
        style={{
          width: "128px",
          height: "128px",
          right: "-44px",
          top: "16px",
          background: "#F39308",
          opacity: 0.2,
        }}
      />

      <div
        className="mx-auto flex flex-col lg:flex-row items-start gap-16"
        style={{ maxWidth: "1286px" }}
      >
        {/* Left column — Text content */}
        <div className="max-w-[593px] flex flex-col gap-6">
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
            Who We Are
          </h2>

          {/* Accent underline */}
          <div className="w-16 h-1 bg-[#00458D]" />

          {/* Paragraphs */}
          <div className="flex flex-col gap-6 pt-2">
            <p
              className="font-inter text-lg"
              style={{ lineHeight: "28px", color: "#424752", margin: 0 }}
            >
              Established in 2007, E2E Human Resource Consultancy has evolved
              from a boutique agency into a premier global recruitment
              powerhouse. We specialize in identifying, attracting, and securing
              top-tier talent for organizations that demand excellence.
            </p>

            <p
              className="font-inter text-lg"
              style={{ lineHeight: "28px", color: "#424752", margin: 0 }}
            >
              Our approach is deeply consultative. We don&apos;t just fill
              vacancies; we analyze workforce requirements, understand corporate
              cultures, and deliver talent solutions that drive measurable
              business outcomes. With deep multi-sector expertise ranging from
              Engineering to Healthcare, our consultants operate as an extension
              of your own internal teams.
            </p>

            <p
              className="font-inter text-lg"
              style={{ lineHeight: "28px", color: "#424752", margin: 0 }}
            >
              In an era of automated hiring, we remain staunch advocates for the
              human element&mdash;balancing cutting-edge sourcing technology with
              nuanced human judgment to create perfect professional alignments.
            </p>
          </div>
        </div>

        {/* Right column — Image block */}
        <div
          className="relative isolate w-full max-w-[593px] z-10"
          style={{ aspectRatio: "593 / 432" }}
        >
          {/* Oversized "HR" watermark */}
          <span
            className="absolute font-inter font-black pointer-events-none select-none z-0 max-lg:text-[35vw] max-lg:leading-[1] max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:top-1/2 max-lg:-translate-y-1/2 max-lg:w-full max-lg:h-full max-lg:flex max-lg:items-center max-lg:justify-center"
            style={{
              fontSize: "577px",
              lineHeight: "866px",
              color: "rgba(236, 238, 240, 0.3)",
              left: "-10%",
              top: "-35px",
              width: "444px",
              height: "866px",
            }}
          >
            HR
          </span>

          {/* Photo card */}
          <div
            className="relative w-full h-full rounded-3xl overflow-hidden z-10"
            style={{
              border: "1px solid rgba(194, 198, 212, 0.2)",
              boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
            }}
          >
            <img
              src={office1}
              alt="Diverse team of corporate professionals collaborating in a modern, well-lit boardroom with glass walls."
              className="object-cover w-full h-full"
            />
          </div>

          {/* Floating stat card */}
          <div
            className="absolute bg-white/85 backdrop-blur-md rounded-3xl flex flex-col gap-1 z-20 max-lg:-left-4 max-lg:-bottom-4 max-lg:p-5 max-lg:w-[180px]"
            style={{
              left: "-32px",
              bottom: "-32px",
              width: "220px",
              padding: "32px",
              border: "1px solid rgba(226, 232, 240, 0.8)",
              boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
            }}
          >
            <span
              className="font-poppins font-semibold"
              style={{
                fontSize: "32px",
                lineHeight: "40px",
                color: "#00458D",
              }}
            >
              15+ Years
            </span>
            <span
              className="font-inter font-semibold text-sm uppercase"
              style={{ letterSpacing: "0.7px", color: "#424752" }}
            >
              OF EXCELLENCE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre2;

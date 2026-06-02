import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";

function FeatureShowcase() {
  const features = [
    {
      title: "AI-Powered Engagements Platform",
      image: feature1,
      description:
        "A unified, AI-automated platform for diverse events including hackathons, case competitions, quizzes, and more. Gain unmatched visibility among top talent.",
      points: [
        "Seamlessly manage diverse campaigns from one platform.",
        "Automate end-to-end logistics for professional execution.",
        "Reach hard-to-access student and talent communities.",
      ],
    },

    {
      title: "Build Your Custom Brand Space",
      image: feature2,
      description:
        "Unify your brand story, content, and opportunities in one custom hub. Build authentic trust through dedicated company profiles and review pages.",
      points: [
        "Dedicated review pages from real employees.",
        "Custom company profile for opportunities and content.",
        "Consistent brand messaging across all touchpoints.",
      ],
    },

    {
      title: "Access & Build a Global Community",
      image: feature3,
      description:
        "Expand your brand reach by leveraging a global community of students and professionals. Build your own always-on talent network.",
      points: [
        "Instant access to a massive talent community.",
        "Engage through AMAs, mentorships, and content.",
        "Nurture long-term relationships with future talent.",
      ],
    },
  ];

  return (
    <section className="bg-[#f5f9ff] py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-28">
        {features.map((item, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-16 items-center ${
              index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* Image */}
            <div className="flex justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-full max-w-md"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
                {item.title}
              </h2>

              <p className="mt-5 text-gray-600 leading-relaxed">
                {item.description}
              </p>

              <div className="mt-6 space-y-3">
                {item.points.map((point, i) => (
                  <div
                    key={i}
                    className="text-gray-700 text-sm md:text-base"
                  >
                    {i + 1}. {point}
                  </div>
                ))}
              </div>

              <button className="mt-8 bg-blue-600 hover:bg-blue-700 transition cursor-pointer text-white px-7 py-3 rounded-full font-medium">
                Explore Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureShowcase;
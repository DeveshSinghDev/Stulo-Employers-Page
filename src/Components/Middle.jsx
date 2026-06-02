import { useState } from "react";

function EngagementSection() {
  const data = [
    {
      title: "Hackathons",
      company: "Adobe",
      impressions: "1.4 Crore",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_logo.svg",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
      description:
        "Open industry-specific business problems to a massive developer community and talent pool nationwide.",
    },

    {
      title: "Ideathons",
      company: "Reliance",
      impressions: "1 Crore",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/Reliance_Industries_Logo.svg/512px-Reliance_Industries_Logo.svg.png",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200",
      description:
        "Transform engagements into an engine for innovation, solution and idea crowdsourcing.",
    },

    {
      title: "Innovation Challenges",
      company: "Tata",
      impressions: "1.7 Crore",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200",
      description:
        "Engage top talent across the nation and drive innovation by solving real business problems.",
    },

    {
      title: "Case Study Challenges",
      company: "EY",
      impressions: "1.6 Crore",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/9/9f/EY_logo_2019.svg",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200",
      description:
        "Solve real business problems and evaluate future leaders.",
    },

    {
      title: "Quiz Marathons",
      company: "Tata",
      impressions: "2.7 Crore",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200",
      description:
        "Achieve mass-scale brand engagement through competitive quizzes.",
    },

    {
      title: "Business Simulations",
      company: "Coca-Cola",
      impressions: "1.2 Crore",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
      description:
        "Challenge future managers with real-life business simulations.",
    },

    {
      title: "Treasure Hunts",
      company: "Samsung",
      impressions: "54.2 Lac",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200",
      description:
        "Create high-volume brand visibility through gamified experiences.",
    },

    {
      title: "Design Challenges",
      company: "Asian Paints",
      impressions: "83 Lac",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Asian_Paints_logo.svg/512px-Asian_Paints_logo.svg.png",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
      description:
        "Attract and engage exceptional creative talent nationwide.",
    },

    {
      title: "Data Science Hackathons",
      company: "American Express",
      impressions: "1.2 Crore",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
      description:
        "Engage niche Data Science and ML communities by challenging them with real industry problems.",
    },
  ];

  const [active, setActive] = useState(0);
  const activeData = data[active];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-center text-5xl md:text-6xl font-bold text-slate-800">
        How Engagement Drives Branding & Innovation
      </h2>

      <p className="text-center text-gray-600 mt-5 max-w-4xl mx-auto text-lg">
        High-scale events that turn static branding into brand-as-experience,
        driving innovation and engagement.
      </p>

      {/* Tabs */}
     <div className="relative mt-12">

  {/* Left Decoration */}
  <div className="hidden lg:flex absolute left-25 bottom-38">
    <div className="w-10 h-10 bg-blue-600 rounded-l-full"></div>
    <div className="w-5 h-5 bg-yellow-400 rounded-full self-center -ml-1"></div>
  </div>

  {/* Tabs */}
  <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-3">

    {data.map((item, index) => (
      <button
        key={index}
        onClick={() => setActive(index)}
        className={`
          h-[58px]
          px-7
          rounded-full
          border
          flex
          items-center
          gap-3
          cursor-pointer
          text-[15px]
          font-medium
          transition-all
          duration-300
          
          ${
            active === index
              ? "border-blue-600 text-slate-800 shadow-sm"
              : "border-gray-300 text-slate-700"
          }
        `}
      >
        <span className="text-xl">
          {
            ["💻","💡","💡","📖","❓","📊","💎","🎨","⚛️"][index]
          }
        </span>

        {item.title}
      </button>
    ))}

  </div>

  {/* Right Decoration */}
  <div className="hidden lg:flex absolute right-22 top-20">
    <div className="w-10 h-10 bg-blue-600 rounded-l-full"></div>
    <div className="w-5 h-5 bg-yellow-400 rounded-full self-center -ml-1"></div>
  </div>

</div>

      {/* Main Content */}
      <div className="relative mt-12">
        <div className="flex flex-col lg:flex-row gap-4">

          {/* Left Card */}
          <div className="w-full lg:w-[38%] bg-[#f3edd8] rounded-[36px] p-10">
            <h3 className="text-4xl font-bold text-slate-800">
              {activeData.title}
            </h3>

            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
              {activeData.description}
            </p>

            <button className="mt-8 bg-blue-600 hover:bg-blue-700 transition cursor-pointer text-white px-8 py-4 rounded-full">
              Explore Now
            </button>

            <div className="mt-10 flex items-center gap-4 bg-white rounded-full px-5 py-3 w-fit shadow-md">
              <img
                src={activeData.logo}
                alt={activeData.company}
                className="h-10 w-auto object-contain"
              />

              <div>
                <h4 className="font-bold text-2xl">
                  {activeData.impressions}
                </h4>

                <p className="text-gray-500 text-sm">
                  Impressions
                </p>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative w-full lg:w-[62%] rounded-[36px] overflow-hidden bg-gradient-to-br from-blue-500 via-blue-400 to-cyan-400 min-h-[500px]">

            {/* White Circles */}
            <div className="hidden lg:flex absolute left-[-18px] top-1/2 -translate-y-1/2 flex-col gap-3 z-20">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="w-9 h-9 bg-white rounded-full"
                />
              ))}
            </div>

            {/* Glow */}
            <div className="absolute top-16 left-20 w-56 h-56 bg-yellow-300/50 blur-[100px]" />

            {/* Image */}
            <div className="h-full flex items-center justify-center p-10">
              <img
                src={activeData.image}
                alt={activeData.title}
                className="w-full max-w-[720px] rounded-3xl shadow-2xl border border-white/30"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default EngagementSection;
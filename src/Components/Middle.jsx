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
  <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
    
    {/* Heading */}
   <h2 className="text-center text-3xl sm:text-4xl md:text-6xl font-bold text-slate-800 leading-tight max-w-4xl mx-auto">
  How Engagement Drives Branding & Innovation
</h2>

    <p className="text-center text-gray-600 mt-4 max-w-4xl mx-auto text-sm sm:text-base md:text-lg px-2">
      High-scale events that turn static branding into brand-as-experience,
      driving innovation and engagement.
    </p>

    {/* Tabs */}
    <div className="relative mt-10 md:mt-12">

      {/* Left Decoration */}
      <div className="hidden lg:flex absolute left-16 top-10">
        <div className="w-10 h-10 bg-blue-600 rounded-l-full"></div>
        <div className="w-5 h-5 bg-yellow-400 rounded-full self-center -ml-1"></div>
      </div>

      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-2 sm:gap-3">

        {data.map((item, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`
              h-[46px]
              sm:h-[52px]
              md:h-[58px]
              px-4
              sm:px-5
              md:px-7
              rounded-full
              border
              flex
              items-center
              gap-2
              md:gap-3
              text-xs
              sm:text-sm
              md:text-[15px]
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
            <span className="text-base md:text-xl">
              {
                [
                  "💻",
                  "💡",
                  "💡",
                  "📖",
                  "❓",
                  "📊",
                  "💎",
                  "🎨",
                  "⚛️",
                ][index]
              }
            </span>

            {item.title}
          </button>
        ))}
      </div>

      {/* Right Decoration */}
      <div className="hidden lg:flex absolute right-16 top-20">
        <div className="w-10 h-10 bg-blue-600 rounded-l-full"></div>
        <div className="w-5 h-5 bg-yellow-400 rounded-full self-center -ml-1"></div>
      </div>

    </div>

    {/* Content */}
    {/* Content */}
<div className="relative mt-8 md:mt-12">

  <div className="flex flex-col lg:flex-row gap-4 lg:gap-5">

    {/* Left Card */}
    <div className="w-full lg:w-[38%] bg-[#f3edd8] rounded-[24px] md:rounded-[32px] p-6 md:p-8">

      <h3 className="text-[28px] md:text-[42px] font-bold text-slate-800 leading-tight">
        {activeData.title}
      </h3>

      <p className="mt-4 md:mt-6 text-gray-700 text-[16px] md:text-lg leading-relaxed">
        {activeData.description}
      </p>

      <button className="mt-5 md:mt-8 bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-full text-sm md:text-base">
        Explore Now
      </button>

      <div className="mt-6 md:mt-8 flex items-center gap-3 bg-white rounded-full px-4 py-3 w-fit shadow-md">

        <img
          src={activeData.logo}
          alt={activeData.company}
          className="h-8 md:h-10 w-auto object-contain"
        />

        <div>
          <h4 className="font-bold text-xl md:text-2xl">
            {activeData.impressions}
          </h4>

          <p className="text-gray-500 text-xs md:text-sm">
            Impressions
          </p>
        </div>

      </div>

    </div>

    {/* Right Card */}
    <div className="relative w-full lg:w-[62%] rounded-[24px] md:rounded-[36px] overflow-hidden bg-gradient-to-br from-blue-500 via-blue-400 to-cyan-400 min-h-[220px] sm:min-h-[300px] md:min-h-[420px]">

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
      <div className="absolute top-8 left-8 md:top-16 md:left-20 w-32 md:w-56 h-32 md:h-56 bg-yellow-300/50 blur-[80px]" />

      {/* Image */}
      <div className="h-full flex items-center justify-center p-3 md:p-8">

        <img
          src={activeData.image}
          alt={activeData.title}
          className="w-full h-auto rounded-[20px] md:rounded-[28px] shadow-2xl border border-white/30"
        />

      </div>

    </div>

  </div>

</div>

  </section>
);
}

export default EngagementSection;
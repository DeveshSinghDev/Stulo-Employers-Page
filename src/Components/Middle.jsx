import { useState } from "react";

function EngagementSection() {

 const data = [
  {
    title: "Hackathons",
    company: "Adobe",
    impressions: "1.4 Crore",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_logo.svg",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
    description:
      "Open industry-specific business problems to a massive developer community and talent pool nationwide.",
  },

  {
    title: "Ideathons",
    company: "Reliance",
    impressions: "1 Crore",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/Reliance_Industries_Logo.svg/512px-Reliance_Industries_Logo.svg.png",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200",
    description:
      "Transform engagements into an engine for innovation, solution and idea crowdsourcing.",
  },

  {
    title: "Innovation Challenges",
    company: "Tata",
    impressions: "1.7 Crore",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200",
    description:
      "Engage top talent across the nation and drive innovation by solving real business problems.",
  },

  {
    title: "Case Study Challenges",
    company: "EY",
    impressions: "1.6 Crore",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9f/EY_logo_2019.svg",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200",
    description:
      "Solve real business problems and evaluate future leaders.",
  },

  {
    title: "Quiz Marathons",
    company: "Tata",
    impressions: "2.7 Crore",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200",
    description:
      "Achieve mass-scale brand engagement through competitive quizzes.",
  },

  {
    title: "Business Simulations",
    company: "Coca-Cola",
    impressions: "1.2 Crore",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
    description:
      "Challenge future managers with real-life business simulations.",
  },

  {
    title: "Treasure Hunts",
    company: "Samsung",
    impressions: "54.2 Lac",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200",
    description:
      "Create high-volume brand visibility through gamified experiences.",
  },

  {
    title: "Design Challenges",
    company: "Asian Paints",
    impressions: "83 Lac",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Asian_Paints_logo.svg/512px-Asian_Paints_logo.svg.png",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
    description:
      "Attract and engage exceptional creative talent nationwide.",
  },

  {
    title: "Data Science Hackathons",
    company: "American Express",
    impressions: "1.2 Crore",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
    description:
      "Engage niche Data Science and ML communities by challenging them with real industry problems.",
  },
];

  const [active, setActive] = useState(0);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <h2 className="text-center text-6xl font-bold text-slate-800">
        How Engagement Drives Branding & Innovation
      </h2>

      <p className="text-center text-gray-600 mt-5 max-w-5xl mx-auto">
        High-scale events that turn static branding into brand-as-experience.
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mt-12">
        {data.map((item, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`px-6 py-3 rounded-full border transition-all
              ${
                active === index
                  ? "border-blue-600 text-blue-600 shadow-md"
                  : "border-gray-300"
              }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="grid lg:grid-cols-2 mt-12 rounded-[40px] overflow-hidden">

        <div className="bg-[#F3EFD9] p-12">
          <h3 className="text-5xl font-bold text-slate-800">
            {data[active].title}
          </h3>

          <p className="mt-6 text-gray-700 leading-relaxed">
            {data[active].description}
          </p>

          <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-full">
            Explore Now
          </button>

          <div className="mt-10 bg-white rounded-full flex items-center gap-4 w-fit px-4 py-3 shadow">
            <img
              src={data[active].logo}
              alt=""
              className="h-8 object-contain"
            />

            <div>
              <div className="font-bold text-2xl">
                {data[active].impressions}
              </div>
              <div className="text-gray-500 text-sm">
                Impressions
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-10">
          <img
            src={data[active].image}
            alt=""
            className="w-full rounded-3xl shadow-2xl"
          />
        </div>

      </div>

    </section>
  );
}

export default EngagementSection;
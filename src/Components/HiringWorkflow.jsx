import {
  Megaphone,
  Users,
  Video,
  ScanSearch,
  ClipboardCheck,
  Bot,
} from "lucide-react";

function HiringWorkflow() {
  const offerings = [
    {
      title: "Brand & Engage",
      color: "blue",
      icon: Megaphone,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    },
    {
      title: "Source",
      color: "green",
      icon: Users,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
    },
    {
      title: "AI Interview",
      color: "blue",
      icon: Video,
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800",
    },
    {
      title: "AI Screening",
      color: "orange",
      icon: ScanSearch,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    },
    {
      title: "Assessments",
      color: "purple",
      icon: ClipboardCheck,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    },
    {
      title: "Hiring Automation",
      color: "orange",
      icon: Bot,
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
    },
  ];

  const colors = {
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      pill: "bg-blue-100 border-blue-300 text-blue-900",
    },
    green: {
      bg: "bg-green-50",
      border: "border-green-200",
      pill: "bg-green-100 border-green-300 text-green-900",
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      pill: "bg-purple-100 border-purple-300 text-purple-900",
    },
    orange: {
      bg: "bg-orange-50",
      border: "border-orange-200",
      pill: "bg-orange-100 border-orange-300 text-orange-900",
    },
  };

  return (
    <section className="max-w-[950px] mx-auto py-12 md:py-16 px-4">
      {/* Heading */}
      <h2 className="text-center text-[18px] sm:text-[24px] md:text-[42px] font-bold leading-tight text-slate-800">
        One-Stop Solution For Complete
        <br />
        Hiring Workflow
      </h2>

      <p className="text-center text-gray-500 mt-3 md:mt-4 text-sm md:text-lg">
        Explore Stulo's Offerings
      </p>

      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-x-5 md:gap-y-12 mt-10 md:mt-14">
        {offerings.map((item, index) => (
          <div
            key={index}
            className={`
              relative
              h-[145px]
              md:h-[190px]
              rounded-[24px]
              cursor-pointer
              border
              overflow-visible
              transition-all
              duration-300
              ease-in-out
              hover:shadow-[0_0_30px_rgba(0,0,0,0.12)]
              hover:border-slate-500
              hover:-translate-y-1
              ${colors[item.color].bg}
              ${colors[item.color].border}
            `}
          >
            <img
              src={item.image}
              alt={item.title}
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
                rounded-[24px]
                p-2
                md:p-3
              "
            />

            {/* Floating Button */}
            <div
              className={`
                absolute
                left-1/2
                -translate-x-1/2
                bottom-[-18px]
                md:bottom-[-24px]
                min-w-[130px]
                md:min-w-[200px]
                h-[38px]
                md:h-[54px]
                flex
                items-center
                justify-center
                gap-1
                md:gap-2
                rounded-full
                border
                text-[12px]
                md:text-[15px]
                font-bold
                shadow-md
                ${colors[item.color].pill}
              `}
            >
              <item.icon
                size={14}
                className="md:w-5 md:h-5"
              />
              <span>{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HiringWorkflow;
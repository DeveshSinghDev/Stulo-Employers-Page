import { useState } from "react";
import { Plus, Minus } from "lucide-react";

function FAQ() {
  const faqs = [
    {
      question:
        "What does employer branding mean, and why is it important for TA leaders?",
      answer:
        "Employer branding helps organizations attract top talent, improve candidate quality, and strengthen their reputation among students and professionals.",
    },
    {
      question:
        "How can I measure the ROI of brand engagement activities on Stulo?",
      answer:
        "Track impressions, registrations, participation rates, applicant quality, and hiring conversions through detailed analytics dashboards.",
    },
    {
      question:
        "What is Stulo's reach, and can we target niche or global talent pools?",
      answer:
        "Yes. Stulo enables access to students, professionals, and niche talent communities across multiple domains and regions.",
    },
    {
      question:
        "How much internal bandwidth is required to run a high-impact event series?",
      answer:
        "Very little. Our team manages operations, promotion, execution, and reporting to reduce your internal workload.",
    },
    {
      question:
        "How does Stulo ensure our events accurately assess real skills?",
      answer:
        "Through practical assessments, project-based evaluations, AI screening, interviews, and expert-designed challenges.",
    },
    {
      question:
        "Why should we invest in experiential branding instead of standard campaigns?",
      answer:
        "Experiential branding creates deeper engagement, stronger recall, higher participation, and more meaningful candidate interactions.",
    },
  ];

  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto py-16 md:py-24 px-4 md:px-6">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-5xl font-bold text-slate-800">
        Frequently Asked Questions
      </h2>

      {/* Subtitle */}
      <p className="text-center text-gray-500 mt-3 md:mt-4 text-sm md:text-base">
        Get to know us a bit more!
      </p>

      {/* FAQ List */}
      <div className="mt-10 md:mt-14 space-y-3 md:space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="
              bg-slate-100
              rounded-xl
              md:rounded-2xl
              overflow-hidden
              transition-all
              duration-300
              hover:bg-slate-200
            "
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="
                w-full
                flex
                items-center
                justify-between
                gap-4
                px-4
                md:px-6
                py-4
                md:py-6
                text-left
              "
            >
              <span className="text-slate-700 text-sm md:text-base font-medium">
                {faq.question}
              </span>

              {active === index ? (
                <Minus
                  size={22}
                  className="min-w-[22px] text-slate-700"
                />
              ) : (
                <Plus
                  size={22}
                  className="min-w-[22px] text-slate-700"
                />
              )}
            </button>

            {active === index && (
              <div className="px-4 md:px-6 pb-4 md:pb-6 text-sm md:text-base text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
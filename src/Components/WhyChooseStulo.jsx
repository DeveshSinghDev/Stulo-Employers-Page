function WhyChooseStulo() {
  return (
    <section className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-6">
      {/* Heading */}
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
          Why Stulo is the Ultimate
          <br />
          Employer Branding Platform?
        </h2>

        <p className="text-gray-600 text-base md:text-lg mt-4 md:mt-5 max-w-4xl mx-auto">
          Everything you need to build a magnetic brand, attract the right
          talent, and nurture a future-ready community.
        </p>
      </div>

      {/* MOBILE SLIDER */}
      <div className="lg:hidden overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 w-max pb-4">

          {/* Card 1 */}
          <div className="w-[320px] bg-blue-100 border border-blue-300 rounded-3xl overflow-hidden p-5 flex-shrink-0">
            <div className="p-5">
              <h3 className="text-2xl font-bold text-blue-700">
                Branded Control
              </h3>

              <p className="text-gray-700 mt-3 leading-relaxed">
                Get a dedicated no-code company page instantly with full
                control over visuals, media and opportunities.
              </p>
            </div>

            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200"
              alt=""
              className="w-full h-[220px] rounded-2xl object-cover"
            />
          </div>

          {/* Card 2 */}
          <div className="w-[320px] bg-purple-100 border border-purple-300 rounded-3xl p-5 flex-shrink-0">
            <div>
              <h3 className="text-2xl font-bold text-purple-700">
                AI Assistance
              </h3>

              <p className="text-gray-700 mt-3">
                AI-powered evaluations and candidate insights.
              </p>
            </div>

            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600"
              alt=""
              className="w-full h-[240px] mt-15 rounded-2xl object-cover"
            />
          </div>

          {/* Card 3 */}
          <div className="w-[320px] bg-green-100 border border-green-300 rounded-3xl p-5 flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600"
              alt=""
              className="rounded-2xl h-52 w-full object-cover"
            />

            <h3 className="text-2xl font-bold text-green-700 mt-4">
              Dedicated Support Team
            </h3>

            <p className="text-gray-700 mt-3">
              Full support from planning to execution.
            </p>
          </div>

          {/* Card 4 */}
          <div className="w-[320px] bg-yellow-50 border border-yellow-300 rounded-3xl p-5 flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600"
              alt=""
              className="rounded-2xl h-52 w-full object-cover"
            />

            <h3 className="text-2xl font-bold text-yellow-700 mt-4">
              Measurable ROI
            </h3>

            <p className="text-gray-700 mt-3">
              Track engagement and campaign performance.
            </p>
          </div>

          {/* Card 5 */}
          <div className="w-[320px] bg-orange-50 border border-orange-300 rounded-3xl p-5 flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600"
              alt=""
              className="rounded-2xl h-52 w-full object-cover"
            />

            <h3 className="text-2xl font-bold text-orange-700 mt-4">
              Campaign Execution
            </h3>

            <p className="text-gray-700 mt-3">
              Manage complete campaign lifecycle effortlessly.
            </p>
          </div>
        </div>
      </div>

      {/* DESKTOP GRID */}
      <div className="hidden lg:grid lg:grid-cols-5 gap-5">

        {/* Branded Control */}
        <div className="lg:col-span-2 lg:row-span-2 bg-blue-100 border border-blue-300 rounded-3xl overflow-hidden">
          <div className="p-8">
            <h3 className="text-3xl font-bold text-blue-700 mb-4">
              Branded Control
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Get a dedicated no-code company page instantly with full control
              over visuals, media, testimonials and opportunities.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200"
            alt=""
            className="w-full h-[320px] object-cover"
          />
        </div>

        {/* AI Assistance */}
        <div className="lg:col-span-2 bg-purple-100 border border-purple-300 rounded-3xl p-8 flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold text-purple-700">
              AI Assistance & Insight
            </h3>

            <p className="text-gray-700 mt-3 max-w-sm">
              AI-powered evaluations and smart candidate insights.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600"
            alt=""
            className="w-26 h-26 rounded-2xl object-cover"
          />
        </div>

        {/* Support */}
        <div className="lg:row-span-2 bg-green-100 border border-green-300 rounded-3xl p-6">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600"
            alt=""
            className="rounded-2xl h-56 w-full object-cover"
          />

          <h3 className="text-2xl font-bold text-green-700 mt-4">
            Dedicated Support Team
          </h3>

          <p className="text-gray-700 mt-3">
            Full support from planning and launch to completion.
          </p>
        </div>

        {/* ROI */}
        <div className="lg:col-span-2 bg-yellow-50 border border-yellow-300 rounded-3xl p-8 flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold text-yellow-700">
              Measurable ROI
            </h3>

            <p className="text-gray-700 mt-3">
              Track engagement and campaign performance.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600"
            alt=""
            className="w-36 h-36 rounded-2xl object-cover"
          />
        </div>

        {/* Campaign */}
        <div className="lg:col-span-2 bg-orange-50 border border-orange-300 rounded-3xl p-8 flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold text-orange-700">
              Seamless Campaign Execution
            </h3>

            <p className="text-gray-700 mt-3">
              Manage campaigns from launch to reporting.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600"
            alt=""
            className="w-36 h-36 rounded-2xl object-cover"
          />
        </div>

        {/* Outreach */}
        <div className="lg:col-span-2 bg-pink-50 border border-pink-300 rounded-3xl p-8 flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold text-pink-700">
              Targeted Talent Outreach
            </h3>

            <p className="text-gray-700 mt-3">
              Reach students through promotions and campaigns.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600"
            alt=""
            className="w-36 h-36 rounded-2xl object-cover"
          />
        </div>

      </div>
    </section>
  );
}

export default WhyChooseStulo;
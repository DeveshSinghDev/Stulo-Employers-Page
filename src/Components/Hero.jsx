function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-12 flex items-center justify-center">

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 md:left-20 w-24 md:w-32 h-24 md:h-32 bg-blue-200 rounded-full opacity-40 blur-xl animate-float" />

      <div className="absolute bottom-20 right-10 md:right-20 w-20 md:w-24 h-20 md:h-24 bg-indigo-200 rounded-3xl opacity-40 blur-lg animate-float-delay" />

      <div className="absolute top-1/2 right-4 md:right-40 w-28 md:w-40 h-28 md:h-40 border-8 border-blue-100 rounded-full opacity-40 animate-spin-slow" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.12),transparent_45%)]" />

      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-16 relative z-10">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">

          {/* Left Content */}
          <div className="max-w-[650px] text-center lg:text-left order-1">

            <h1 className="font-bold text-[#2f2f2f] leading-[0.95] tracking-[-1px]
            text-[32px]
            sm:text-[40px]
            md:text-[45px]">
              Best Employer
              <br />
              Branding Platform
            </h1>

            <p className="mt-6 md:mt-8 text-gray-600 leading-relaxed
            text-[12px]
            md:text-[15px]">
              One-stop solution for all your employer branding &
              engagement needs: hackathons, innovation challenges,
              quizzes, company pages, reviews, and more.
              Access a community of 30M+ students and early talent,
              instantly.
            </p>

            <button className="mt-8 md:mt-10 bg-[#1677FF] hover:bg-[#0F68E8]
            text-white px-3 md:px-5 py-3.5 md:py-2
            rounded-full text-base md:text-sm font-medium
            shadow-lg transition-all duration-300 hover:scale-105">
              📅 Book a Free Demo Now
            </button>

          </div>

          {/* Right Image */}
          <div className="flex justify-center order-2">

            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/avif/Build_your_employer_brand.png?d=1000x1000"
              alt="Employer Branding"
              className="
              w-full
              max-w-[320px]
              sm:max-w-[420px]
              md:max-w-[550px]
              lg:max-w-[720px]
              object-contain"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
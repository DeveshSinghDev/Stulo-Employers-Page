function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
        {/* Animated Grid */}
<div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:70px_70px] animate-grid"></div>

{/* Floating Circle */}
<div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full opacity-40 blur-xl animate-float"></div>

{/* Floating Square */}
<div className="absolute bottom-20 right-20 w-24 h-24 bg-indigo-200 rounded-3xl opacity-40 blur-lg animate-float-delay"></div>

{/* Floating Ring */}
<div className="absolute top-1/2 right-40 w-40 h-40 border-8 border-blue-100 rounded-full opacity-40 animate-spin-slow"></div>

      {/* Professional Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.12),transparent_45%)]"></div>

      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `
            linear-gradient(to right, #f1f5f9 1px, transparent 1px),
            linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-16 relative z-10">

        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* Left Side */}

          <div className="max-w-[620px]">

            <h1 className="text-[56px] lg:text-[72px] font-bold leading-[0.95] tracking-[-2px] text-[#2f2f2f]">
              Best Employer
              <br />
              Branding Platform
            </h1>

            <p className="mt-8 text-[20px] leading-[1.8] text-gray-600">
              One-stop solution for all your employer branding &
              engagement needs: hackathons, innovation challenges,
              quizzes, company pages, reviews, and more.
              Access a community of 30M+ students and early talent,
              instantly.
            </p>

            <button className="mt-10 bg-[#1677FF] hover:bg-[#0F68E8] text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg transition-all duration-300 hover:scale-105">
              📅 Book a Free Demo Now
            </button>

          </div>

          {/* Right Side */}

          <div className="flex justify-center lg:justify-end">

            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/avif/Build_your_employer_brand.png?d=1000x1000"
              alt="Employer Branding"
              className="w-full max-w-[820px] object-contain"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
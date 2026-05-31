function Hero() {
    return (
        <section className="bg-[#f7f7f7] min-h-screen flex items-center">
            <div className="max-w-[1400px] mx-auto w-full px-8 lg:px-16 ">

                <div className="grid lg:grid-cols-2 items-center gap-6">

                    {/* Left */}
                    <div className="max-w-[620px]">

                        <h1 className="
              text-[#333]
              font-bold
              leading-[0.95]
              text-[50px]
              tracking-[-2px]
            ">
                            Best Employer
                            <br />
                            Branding Platform
                        </h1>

                        <p className="
              mt-8
              text-[#6B7280]
              text-[16px]
              leading-[1.8]
              max-w-[600px]
            ">
                            One-stop solution for all your employer branding &
                            engagement needs: hackathons, innovation challenges,
                            quizzes, company pages, reviews, and more. Access a
                            community of 30M+ students and early talent, instantly.
                        </p>

                        <button className="
              mt-10
              bg-[#1677FF]
              hover:bg-[#0f68e8]
              text-white
              px-7
              py-3
              rounded-full
              text-[16px]
              shadow-lg
              transition
            ">
                            📅 Book a Free Demo Now
                        </button>

                    </div>

                    {/* Right */}
                    <div className="flex justify-center lg:justify-end">

                        <img
                            src="https://d8it4huxumps7.cloudfront.net/uploads/images/avif/Build_your_employer_brand.png?d=1000x1000"
                            alt="Employer Branding"
                            className="
                w-full
                max-w-[760px]
                object-contain
              "
                        />

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Hero;
function Companies() {
  const logos = [
    "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/6114f9c73b596_ey_logo.PNG?d=178x181",
    "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/5e895eb520e7b_hero_motocorp.png?d=188x62",
    "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/6373373a88a47_screenshot_2022-11-15_at_12.21.42_pm.png?d=110x34",
    "https://d8it4huxumps7.cloudfront.net/images/partners/partners125/5c7a7bebf06cc_aditya.png?d=168x96",
    "https://d8it4huxumps7.cloudfront.net/images/partners/partners75/5c77b3e35903f_KPMG.png?d=175x72",
    "https://d8it4huxumps7.cloudfront.net/uploads/images/6401fbc087e3d_2560px_mondelez_international_2012_logo_svg.png?d=162x40",
    "https://d8it4huxumps7.cloudfront.net/images/partners/partners125/60d5e91b93542_PepsiCo_logo.png?d=120x34",
    "https://d8it4huxumps7.cloudfront.net/images/partners/partners125/5c7d138408595_image__15_.png?d=200x200",
    "https://d8it4huxumps7.cloudfront.net/uploads/images/63dcfec0b7c7a_agoda_new.png?d=220x112",
    "https://d8it4huxumps7.cloudfront.net/uploads/images/6493cc5d320ff_fedex.png?d=120x120",
    "https://d8it4huxumps7.cloudfront.net/uploads/images/682eba2ac696f_amazon.png?d=150x45",
  ];

  return (
    <section className=" py-8 overflow-hidden mt-25 mb-15">
      <div className="relative">

        {/* Left Fade */}
        <div className="absolute left-0 top-0 z-10 h-full w-28 bg-gradient-to-r from-[#f8fafc] to-transparent" />

        {/* Right Fade */}
        <div className="absolute right-0 top-0 z-10 h-full w-28 bg-gradient-to-l from-[#f8fafc] to-transparent" />

        <div className="flex w-max animate-marquee">

          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-12"
            >
              <img
                src={logo}
                alt="company"
                className="
                  h-10
                  md:h-12
                  w-auto
                  object-contain
                  grayscale-0
                  opacity-100
                "
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Companies;
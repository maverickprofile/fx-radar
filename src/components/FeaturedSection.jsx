import React from "react";

const logos = [
  "https://d33vw3iu5hs0zi.cloudfront.net/media/logo_big_new_f7ebab0194.svg",
  "https://www.vantagemarkets.com/wp-content/themes/vantage/images/logo.svg",
  "https://cfi.trade/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FnewLogo.cfcea89b.svg&w=1920&q=75",
  "https://mhmarkets.com/favicon.ico",
  "https://www.forexschoolonline.com/wp-content/uploads/2022/07/blackbull-logo.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqadMi2Mk8rVXSnS3wxplBQgjNjjRALgfPiA&s"
];

const FeaturedSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#181539] via-[#282454] to-[#131128] py-12 px-4 text-white overflow-hidden">
      {/* Top blend */}
      <div
        className="absolute top-0 left-0 w-full h-40 z-10"
        style={{
          background: 'linear-gradient(to bottom, #1F1C41 0%, rgba(31, 28, 65, 0) 100%)', // Blend from next section color
        }}
      />

      <div className="max-w-7xl mx-auto text-center relative z-20">
        <h3 className="text-sm md:text-base tracking-widest mb-8 uppercase text-gray-300">
          Our copy trading broker support
        </h3>

        <div className="relative h-20 w-full overflow-hidden rounded-2xl backdrop-blur-md bg-white border border-white/10 flex items-center">
          <div className="flex w-max animate-marquee gap-12 items-center">
            {[...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos].map((src, index) => (
              <div key={index} className="flex-shrink-0 px-4 flex items-center justify-center"> {/* Added flex alignment */}
                <img
  src={src}
  alt={`Logo ${index}`}
  className="h-10 object-contain max-w-[80px]" // White texture effect
/>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
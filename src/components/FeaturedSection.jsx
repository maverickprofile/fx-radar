import React from "react";

const logos = [
  "https://rmgcore2.s3.amazonaws.com/uploads/g1n4l8l/FPMarkets_Logo_204_70.svg",
  "https://dwptxtcjzzofa.cloudfront.net/uploads/g1n544q/FXCM-Logo-Blue-on-White_204_70.svg",
  "https://dwptxtcjzzofa.cloudfront.net/uploads/g0u868k/tickmill-logo-svg.svg",
  "https://dwptxtcjzzofa.cloudfront.net/uploads/g20rc6l/IC_Markets_logo_204_70.svg",
  "https://dwptxtcjzzofa.cloudfront.net/uploads/g20rknl/vantage-full-logo_204_70.svg",
  "https://dwptxtcjzzofa.cloudfront.net/uploads/g1n4o66/Pepperstone_Logo_Primary_204_70.svg",
  "https://dwptxtcjzzofa.cloudfront.net/uploads/g1qu3jp/eToro%20logo%20green_204_70.svg",
  "https://dwptxtcjzzofa.cloudfront.net/uploads/g2j0jv4/AvaTrade_Logo_Tagline_White_Transperant_204_70.svg",
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
          Our copy trading has been listed on
        </h3>

        <div className="relative h-20 w-full overflow-hidden rounded-2xl backdrop-blur-md bg-white/10 border border-white/10 flex items-center">
          <div className="flex w-max animate-marquee gap-12 items-center">
            {[...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos].map((src, index) => (
              <div key={index} className="flex-shrink-0 px-4">
                <img
                  src={src}
                  alt={`Logo ${index}`}
                  className="h-10 object-contain"
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
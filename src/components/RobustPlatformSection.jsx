import React from 'react';
import { ShieldCheck, Percent, Headset } from 'lucide-react';

const RobustPlatformSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#1C1A3D] to-[#0F0D24] py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content Container */}
        <div className="space-y-6 z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-[60px] font-bold text-white tracking-tight">
  Experience Secure & Profitable Copy Trading with Expert Support
</h2>
<p className="text-gray-400 text-lg sm:text-xl leading-relaxed">
  Trade with confidence on our secure platform, designed for consistent returns. Benefit from a proven track record of 10-20% monthly ROI, backed by our dedicated 24/5 support team, always ready to assist you.
</p>

          {/* Feature List */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-[#6C4FFC] p-2 rounded-full">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg font-semibold text-white">Secured trades</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#6C4FFC] p-2 rounded-full">
                <Percent className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg font-semibold text-white">10-20% ROI/month</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#6C4FFC] p-2 rounded-full">
                <Headset className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg font-semibold text-white">24/5 Dedicated support</span>
            </div>
          </div>
        </div>

        {/* Image Container */}
        <div className="relative -mr-32 md:-mr-48 lg:-mr-64 xl:-mr-72 overflow-hidden">
          <img
            src="/5fac4393d23be745c00c8137_image-mockup-specs-2-crypto-template.png"
            alt="Platform on Laptop"
            className="lg:scale-120 xl:scale-[1] transform origin-right"
          />
        </div>
      </div>
    </section>
  );
};

export default RobustPlatformSection;

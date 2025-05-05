import React from 'react';
import { Wallet, Zap, Lock } from 'lucide-react';

const CryptoWalletSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#181539] via-[#282454] to-[#131128] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content Container - Comes First on Small Screens */}
        <div className="order-1 md:order-2 space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-[60px] font-bold text-white tracking-tight">
            A crypto wallet from the future
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit non neque orci amet, amet consectetur eget
            suspendisse in. Adipiscing vitae dignissim facilisi ut.
          </p>

          {/* Feature List */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-[#6C4FFC] p-2 rounded-full">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg font-semibold text-white">Lowest fees in market</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#6C4FFC] p-2 rounded-full">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg font-semibold text-white">Fast and secure transactions</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#6C4FFC] p-2 rounded-full">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg font-semibold text-white">256-bit secure encryption</span>
            </div>
          </div>

          {/* CTA Button */}
          {/* <button className="bg-[#6C4FFC] hover:bg-[#5945c6] text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300">
            Explore our collection of 200+ Premium Webflow Templates
          </button> */}
        </div>

        {/* Image Container - Comes Second on Small Screens */}
        <div className="order-2 md:order-1 relative flex justify-center h-[500px] md:h-[600px] lg:h-[650px]">
          {/* Left Phone */}
          <img
            src="/5fac920b7756b832c97df684_image-mockup-specs-1-1-crypto-template.png"
            alt="Crypto Wallet App on Phone (Left)"
            className="absolute left-[8%] top-[0%] w-[220px] sm:w-[260px] md:w-[280px] rotate-[-12deg] z-10 rounded-3xl shadow-2xl"
          />
          {/* Right Phone */}
          <img
            src="/5fac920afd897708ca667698_image-mockup-specs-1-2-crypto-template.png"
            alt="Crypto Wallet App on Phone (Right)"
            className="absolute right-[8%] top-[0%] w-[220px] sm:w-[260px] md:w-[280px] rotate-[2deg] z-20 rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default CryptoWalletSection;

import React from 'react';

const CryptoDownloadSection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#181539] via-[#282454] to-[#131128] text-white relative overflow-hidden">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 bg-[#6639E4] w-full">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left py-20 px-6 lg:px-20 z-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
            Try the future, today.<br />
            <span className="text-white">Download Crypto</span>
          </h2>
          <p className="text-base sm:text-lg text-white/80 mb-8 max-w-md lg:mx-0">
            Manage your cryptocurrency portfolio with ease. Track price trends, monitor changes, and trade securely—all in one intuitive app.
          </p>
          <button className="bg-white text-[#7B4DF7] font-bold py-3 px-8 rounded-full shadow-md hover:scale-105 transition duration-300">
            DOWNLOAD APP
          </button>
        </div>

        {/* Right - Phones Display */}
        <div className="hidden lg:flex lg:w-1/2 flex justify-center lg:justify-end relative pr-6 lg:pr-20 pb-10 lg:pb-0 z-0">
          {/* Background glow */}
          <div className="absolute -top-10 -left-10 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl z-0"></div>

          {/* Phone mockups */}
          <img
            src="/5fac920afd897708ca667698_image-mockup-specs-1-2-crypto-template.png"
            alt="Crypto App Screen 1"
            className="w-40 sm:w-52 md:w-60 lg:w-64 xl:w-72 transform rotate-[6deg] z-999 relative"
          />
          <img
            src="/5fac920afd897708ca667698_image-mockup-specs-1-2-crypto-template.png"
            alt="Crypto App Screen 2"
            className="w-40 sm:w-52 md:w-60 lg:w-64 xl:w-72 absolute top-5 left-12 sm:left-16 lg:left-20 transform rotate-[-6deg] z-998 opacity-90"
          />
        </div>
      </div>
    </section>
  );
};

export default CryptoDownloadSection;

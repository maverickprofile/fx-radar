import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center px-6 sm:px-10 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/3d-abstract-soundwaves-background-with-flowing-lines.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Top fade */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#00000044] to-transparent z-10" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#00000044] to-transparent z-10" />

      {/* Main Content */}
      <div className="max-w-3xl text-center w-full relative z-20">
        <h1 className="text-4xl md:text-6xl lg:text-[60px] font-extrabold text-white mb-6">
          Trading Forex made easy.
        </h1>
        <p className="text-gray-300 text-lg mb-6 px-2 sm:px-0">
          Join our copy trading platform with the advantage of state-of-the-art EA.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-2 sm:px-0">
          <button className="bg-[#6C5DD3] hover:bg-[#5945c6] text-white lg:w-auto sm:w-[30px] px-6 py-3 rounded-full font-semibold transition text-lg">
            JOIN NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

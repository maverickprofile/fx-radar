import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center px-6 sm:px-10 overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://videocdn.cdnpk.net/videos/1fecd02a-a569-5a51-85ba-46fbc6b46713/horizontal/previews/clear/large.mp4?token=exp=1746433904~hmac=fe2bee70673f9e17746815ccab7185f15cc45471aaafb9fc0e2744c839dcd393" // replace with your actual video path
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Top fade */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#00000044] to-transparent z-20" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#00000044] to-transparent z-20" />

      {/* Main Content */}
      <div className="max-w-3xl text-center w-full relative z-30">
        <h1 className="text-4xl md:text-6xl lg:text-[60px] font-extrabold text-white mb-6">
          Trading Forex made easy.
        </h1>
        <p className="text-gray-300 text-lg mb-6 px-2 sm:px-0">
          Join our copy trading platform with the advantage of state-of-the-art EA.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-2 sm:px-0">
          <button className="bg-[#6C5DD3] hover:bg-[#542859] text-white lg:w-auto sm:w-[30px] px-6 py-3 rounded-full font-semibold transition text-lg">
            JOIN NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

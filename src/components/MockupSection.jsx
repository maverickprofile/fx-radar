import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const MockupSection = () => {
  const { scrollY } = useScroll();

  // Scroll-based smooth vertical transform
  const laptopY = useTransform(scrollY, [0, 300], [0, -50]);
  const phoneY = useTransform(scrollY, [0, 300], [0, 30]);

  return (
    <section className="min-h-screen bg-gradient-to-r from-[#181539] via-[#282454] to-[#131128] flex items-center justify-center px-4 py-12 overflow-hidden">
      <div className="relative w-full max-w-7xl flex items-end justify-center">
        {/* Laptop Mockup with scroll animation */}
        <motion.img
          src="/macbook mockup.png"
          alt="Laptop"
          style={{ y: laptopY }}
          className="w-full max-w-[950px] z-10"
        />

        {/* Phone Mockup with scroll animation */}
        <motion.img
          src="/phone mockup.png"
          alt="Phone"
          style={{ y: phoneY }}
          className="absolute right-[5%] bottom-0 w-[180px] md:w-[200px] lg:w-[220px] z-20 shadow-2xl"
        />
      </div>
    </section>
  );
};

export default MockupSection;

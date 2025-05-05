import React from 'react';
import {
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaTelegramPlane, FaWhatsapp,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1A1846] text-white pt-16 pb-8 px-6 sm:px-10 lg:px-30">
      <div className="flex flex-col lg:flex-row justify-between gap-12">
        {/* Logo and Socials */}
        <div className="flex flex-col gap-6 max-w-sm">
          <div className="flex items-center gap-1 text-2xl font-bold">
            <img src="/R_Fav_logo.svg" alt="FxRadar Logo" className="w-10 h-10" />
            <span>FxRadar</span>
          </div>
          <p className="text-sm text-white/70">
            FxRadar is a next-gen copy trading platform empowering traders to follow top-performing strategies with ease and transparency.
          </p>
          <div className="flex gap-4 text-white/80 text-xl mt-4">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
            <FaYoutube />
            <FaTelegramPlane />
            <FaWhatsapp />
          </div>
        </div>

        {/* Menu and Utility Pages */}
        <div className="grid grid-cols-2 gap-10 sm:gap-16 lg:gap-20 lg:pr-20">
          <div>
            <h4 className="text-lg font-semibold mb-4">Menu</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Strategies</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Utility Pages</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-white">Start Here</a></li>
              <li><a href="#" className="hover:text-white">Style Guide</a></li>
              <li><a href="#" className="hover:text-white">404 Not Found</a></li>
              <li><a href="#" className="hover:text-white">Licenses</a></li>
              <li><a href="#" className="hover:text-white">Changelog</a></li>
            </ul>
          </div>
        </div>
      </div>

       {/* Disclaimer */}
       <div className="mt-6 text-center text-xs text-white/50 px-2 sm:px-10 lg:px-50">
        Disclaimer: Forex Radar is not responsible for the losses incurred. Forex Radar runs the copy trading service on expert advisor — both buy and sell are executed automatically. Please read all the terms and conditions before subscribing.
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-6 pt-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} FxRadar. All rights reserved. Built for the future of copy trading.
      </div>

      
    </footer>
  );
};

export default Footer;

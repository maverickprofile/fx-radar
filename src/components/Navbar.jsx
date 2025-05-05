import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'auto';
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 py-4 transition duration-300 ${
        scrolled ? 'bg-white/10 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/R_Fav_logo.svg" alt="Crypto Logo" className="h-7 w-auto mr-1" />
          <span className="font-bold text-white text-[27px]">FxRadar</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-white font-medium">
          <Link to="/" className="hover:text-gray-300">Home</Link> {/* Assuming '/' is your homepage route */}
          <Link to="/about" className="hover:text-gray-300">About</Link> {/* Assuming '/about' is your about page route */}
          <Link to="/pricing" className="hover:text-gray-300">Pricing</Link> {/* Link to your PricingPage */}
          {/* <a href="#" className="hover:text-gray-300">Tokens</a>
          <a href="#" className="hover:text-gray-300">Blog</a>
          <a href="#" className="hover:text-gray-300">Pages</a> */}
        </div>

        {/* Right - Button + Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          <button className="bg-[#5C49C8] text-white font-bold py-2 px-4 rounded-full hidden md:block">
            Contact Us
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-50">
            <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
              {isMobileMenuOpen ? (
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/10 backdrop-blur-xl flex flex-col items-center justify-center text-white text-2xl space-y-8 font-semibold px-8">
          <Link to="/" onClick={toggleMobileMenu} className="hover:text-gray-300">Home</Link>
          <Link to="/about" onClick={toggleMobileMenu} className="hover:text-gray-300">About</Link>
          <Link to="/pricing" onClick={toggleMobileMenu} className="hover:text-gray-300">Pricing</Link> {/* Link to your PricingPage */}
          {/* <a href="#" onClick={toggleMobileMenu} className="hover:text-gray-300">Tokens</a>
          <a href="#" onClick={toggleMobileMenu} className="hover:text-gray-300">Blog</a>
          <a href="#" onClick={toggleMobileMenu} className="hover:text-gray-300">Pages</a> */}
          <button
            className="bg-[#5C49C8] text-white text-lg py-2 px-6 rounded-full mt-4"
            onClick={toggleMobileMenu}
          >
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
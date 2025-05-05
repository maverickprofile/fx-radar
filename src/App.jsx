import { useState } from 'react';
import './index.css';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
// import MockupSection from './components/MockupSection';
import FeaturedSection from './components/FeaturedSection';
import CryptoFeaturesSection from './components/CryptoFeaturesSection';
import CryptoWalletSection from './components/CryptoWalletSection';
import RobustPlatformSection from './components/RobustPlatformSection';
import CryptoDownloadSection from './components/CryptoDownloadSection';
import Footer from './components/Footer';
import PricingPage from './pages/Pricing'; // Import your PricingPage component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router and Routes
import { SiAppstore, SiGoogleplay } from 'react-icons/si';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              {/* <MockupSection /> */}
              <FeaturedSection />
              <CryptoFeaturesSection />
              <CryptoWalletSection />
              <RobustPlatformSection />
              <CryptoDownloadSection />
            </>
          } />
          <Route path="/pricing" element={<PricingPage />} /> {/* Add the route for your PricingPage */}
          {/* You can add more routes for other potential pages here */}
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
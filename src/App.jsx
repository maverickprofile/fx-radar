import { useState } from 'react'
import './index.css'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import MockupSection from './components/MockupSection'
import FeaturedSection from './components/FeaturedSection'
import CryptoFeaturesSection from './components/CryptoFeaturesSection'
import CryptoWalletSection from './components/CryptoWalletSection'
import RobustPlatformSection from './components/RobustPlatformSection'
import CryptoDownloadSection from './components/CryptoDownloadSection'
import Footer from './components/Footer'
import { SiAppstore, SiGoogleplay } from 'react-icons/si'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
      <HeroSection />
      {/* <MockupSection /> */}
      <FeaturedSection />
      <CryptoFeaturesSection />
      <CryptoWalletSection />
      <RobustPlatformSection />
      <CryptoDownloadSection />
      <Footer />
      {/* Add more sections as needed */}
    </>
  )
}

export default App

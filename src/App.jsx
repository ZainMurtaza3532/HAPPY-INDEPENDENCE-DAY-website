import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Countdown } from './components/Countdown'
import { NationalPride } from './components/NationalPride'
import { History } from './components/History'
import { QuaidSection } from './components/QuaidSection'
import { PakistanRegions } from './components/PakistanRegions'
import { Landmarks } from './components/Landmarks'
import { Celebration } from './components/Celebration'
import { Gallery } from './components/Gallery'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="bg-[#020B06] text-white min-h-screen selection:bg-emerald-500 selection:text-white font-sans antialiased overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Countdown />
        <NationalPride />
        <History />
        <QuaidSection />
        <PakistanRegions />
        <Landmarks />
        <Gallery />
        <Celebration />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}

export default App
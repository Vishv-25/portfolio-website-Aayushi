import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatToExpect from './components/WhatToExpect';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Accomplishments from './components/Accomplishments';
import Languages from './components/Languages';
import PricingBar from './components/PricingBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-light">
      <Header />
      <main>
        <Hero />
        <WhatToExpect />
        <About />
        <Services />
        <Experience />
        <Accomplishments />
        <Languages />
        <PricingBar />
      </main>
      <Footer />
    </div>
  );
}

export default App;
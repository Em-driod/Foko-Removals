// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './component/navBar';
import Footer from './component/Footer';
import Home from './pages/Home';
import Contact from './pages/contact';
import Service from './pages/service';
import AnimatedBackground from './component/AnimatedBackground';

import ScrollToTop from './component/ScrollToTop';

import newbackImageUrl from '/newback.png?url';
import serviceImageUrl from '/service.png?url';

const heroImages = [newbackImageUrl, serviceImageUrl];

function BackgroundSwitcher() {
  return (
    <>
      <AnimatedBackground images={heroImages} />
      <div className="absolute inset-0 bg-black/60 z-0"></div>
    </>
  );
}

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="fixed inset-0 min-h-screen w-full bg-cover bg-center z-0 overflow-hidden">
        <BackgroundSwitcher />
      </div>
      <div className="relative z-10 min-h-screen flex flex-col">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/service' element={<Service />} />
          
          {/* Add your service page route here if needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;


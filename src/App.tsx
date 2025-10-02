// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './component/navBar';
import Footer from './component/Footer';
import Home from './pages/Home';
import Contact from './pages/contact';
import Service from './pages/service';
import AnimatedBackground from './component/AnimatedBackground';

const backgroundMap: Record<string, string[] | undefined> = {
  '/': ['/hero back.png', '/service.png'], // Landing page images
  '/contact': ['/hero back.png'],
  '/service': ['/service.png'],
};

function BackgroundSwitcher() {
  const location = useLocation();
  const bgImages = backgroundMap[location.pathname] || backgroundMap['/'] || [];
  return (
    <>
      <AnimatedBackground images={bgImages as string[]} />
      <div className="absolute inset-0 bg-black/60 z-0"></div>
    </>
  );
}

const App: React.FC = () => {
  return (
    <Router>
      <div className="fixed inset-0 min-h-screen w-full bg-cover bg-center z-0">
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

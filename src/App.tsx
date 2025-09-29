// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './component/navBar';
import Footer from './component/Footer';
import Home from './pages/Home';




const App: React.FC = () => {
  return (
    <Router>
      <div className="fixed inset-0 min-h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('/hero back.png')", zIndex: 0 }}>
        <div className="absolute inset-0 bg-black/60 z-0"></div>
      </div>
      <div className="relative z-10 min-h-screen flex flex-col">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

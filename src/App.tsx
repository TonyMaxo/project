import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Submit from './pages/Submit';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import AffiliateProgram from './pages/AffiliateProgram';
import BrowseAgents from './pages/BrowseAgents'; // Import BrowseAgents

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<BrowseAgents />} /> {/* Add BrowseAgents route */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/affiliate" element={<AffiliateProgram />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

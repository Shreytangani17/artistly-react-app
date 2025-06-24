import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

// Pages
import Home from './pages/Home';

import About from './pages/About';
import Contact from './pages/Contact';
import Artists from './pages/Artists';
import ArtistOnboarding from './pages/ArtistOnboarding';
import ThankYou from './pages/ThankYou';
import NotFound from './pages/NotFound';
import ManagerDashboard from './pages/ManagerDashboard';


// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/onboard" element={<ArtistOnboarding />} />
      <Route path="/dashboard" element={<ManagerDashboard />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="*" element={<NotFound />} />
     
    </Routes>

   
    <Footer />
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

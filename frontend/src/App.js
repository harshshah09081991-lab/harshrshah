import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from './components/ui/sonner';
import Header from './components/Header';
import Footer from './components/Footer';
import StickyContact from './components/StickyContact';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import WhyChooseUs from './pages/WhyChooseUs';
import Testimonials from './pages/Testimonials';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <StickyContact />
        <Toaster position="top-right" />
      </BrowserRouter>
    </div>
  );
}

export default App;

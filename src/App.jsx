import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <div className="pt-20"> {/* Espaço para navbar fixa */}
        <Hero />
        <Services />
        <Testimonials />
        <Clients />
        <Contact />
        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  );
}

export default App;

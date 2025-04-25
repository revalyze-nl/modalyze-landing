import React from 'react';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import UseCasesSection from "./components/UseCasesSection";
import FeatureHighlights from "./components/FeatureHighlights";
import HowItWorks from "./components/HowItWorks";
import PricingSection from "./components/PricingSection";
import FinalCTA from "./components/FinalCTA";
import WaitlistForm from "./components/WaitlistForm";
import FAQSection from "./components/FAQSection";
import AboutSection from "./components/AboutSection";

export default function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection /> {/* 👈 Eklendi */}
      <FeatureSection />
      <UseCasesSection />
      <FeatureHighlights />
      <HowItWorks />
      <PricingSection />
      <FinalCTA />
      <WaitlistForm />
      <FAQSection />
      <Footer />
    </div>
  );
}


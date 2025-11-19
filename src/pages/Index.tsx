import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { BookingSection } from "@/components/BookingSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [language, setLanguage] = useState<"en" | "pt">("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "pt" : "en"));
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navigation
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation
        language={language}
        onLanguageToggle={toggleLanguage}
        onNavigate={scrollToSection}
      />
      <HeroSection language={language} onNavigate={scrollToSection} />
      <AboutSection language={language} />
      <ServicesSection language={language} />
      <PortfolioSection language={language} />
      <BookingSection language={language} />
      <Footer language={language} />
    </div>
  );
};

export default Index;

import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { BookingSection } from "@/components/BookingSection";

interface IndexProps {
  language: "en" | "pt";
  onNavigate: (section: string) => void;
}

const Index = ({ language, onNavigate }: IndexProps) => {
  return (
    <>
      <HeroSection language={language} onNavigate={onNavigate} />
      <AboutSection language={language} />
      <ServicesSection language={language} />
      <PortfolioSection language={language} />
      <BookingSection language={language} />
    </>
  );
};

export default Index;

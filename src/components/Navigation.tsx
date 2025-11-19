import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/airclinik-logo.jpg";

interface NavigationProps {
  language: "en" | "pt";
  onLanguageToggle: () => void;
  onNavigate: (section: string) => void;
}

export const Navigation = ({ language, onLanguageToggle, onNavigate }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { en: "Home", pt: "Início", id: "home" },
    { en: "Services", pt: "Serviços", id: "services" },
    { en: "About", pt: "Sobre", id: "about" },
    { en: "Portfolio", pt: "Portfólio", id: "portfolio" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            onClick={() => onNavigate("home")}
            className="flex items-center"
          >
            <span className="text-2xl font-bold text-foreground">AirClinik</span>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="text-foreground hover:text-primary transition-colors"
              >
                {language === "en" ? item.en : item.pt}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={onLanguageToggle}
              className="rounded-full"
            >
              <span className="text-xl">{language === "en" ? "🇺🇸" : "🇵🇹"}</span>
              <span className="sr-only">Toggle language</span>
            </Button>
            
            <Button
              onClick={() => onNavigate("booking")}
              className="hidden md:inline-flex bg-primary hover:bg-primary/90"
            >
              {language === "en" ? "Book Service" : "Agendar"}
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pt-4 pb-2"
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className="text-left text-foreground hover:text-primary transition-colors py-2"
                  >
                    {language === "en" ? item.en : item.pt}
                  </button>
                ))}
                <Button
                  onClick={() => {
                    onNavigate("booking");
                    setMobileMenuOpen(false);
                  }}
                  className="bg-primary hover:bg-primary/90 w-full"
                >
                  {language === "en" ? "Book Service" : "Agendar"}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

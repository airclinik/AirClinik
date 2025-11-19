import { Mail, Phone, MessageCircle, Instagram } from "lucide-react";

interface FooterProps {
  language: "en" | "pt";
}

export const Footer = ({ language }: FooterProps) => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">AirClinik</h3>
            <p className="text-primary-foreground/80">
              Driven by Detail. Inspired by Flight.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {language === "en" ? "Contact" : "Contato"}
            </h4>
            <div className="space-y-3">
              <a 
                href="mailto:airclinik@gmail.com" 
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                airclinik@gmail.com
              </a>
              <a 
                href="tel:+351963170417" 
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                +351 963 170 417
              </a>
              <a 
                href="https://wa.me/351963170417" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a 
                href="https://www.instagram.com/airclinik" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {language === "en" ? "Service Areas" : "Áreas de Serviço"}
            </h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>{language === "en" ? "Private Jets" : "Jatos Privados"}</li>
              <li>{language === "en" ? "Turboprops" : "Turboélices"}</li>
              <li>{language === "en" ? "Helicopters" : "Helicópteros"}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>© 2025 AirClinik. {language === "en" ? "All rights reserved." : "Todos os direitos reservados."}</p>
        </div>
      </div>
    </footer>
  );
};

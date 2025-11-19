import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Plane } from "lucide-react";
import heroJet from "@/assets/hero-jet.jpg";
interface HeroSectionProps {
  language: "en" | "pt";
  onNavigate: (section: string) => void;
}
export const HeroSection = ({
  language,
  onNavigate
}: HeroSectionProps) => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={heroJet} alt="Private jet in hangar" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-gradient opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Driven by Detail. Inspired by Flight.
          </h1>
          
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="text-xl md:text-2xl text-secondary mb-12 max-w-3xl mx-auto">
            {language === "en" ? "The ultimate detailing solution for private aviation. From Turboprops to Private Jets." : "A solução definitiva em estética para aviação executiva. De Turboélices a Jatos Privados."}
          </motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => onNavigate("booking")} className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
              {language === "en" ? "Request Quote" : "Pedir Orçamento"}
            </Button>
            <Button size="lg" variant="outline" onClick={() => onNavigate("services")} className="border-secondary hover:bg-secondary/20 px-8 py-6 text-lg text-slate-900">
              {language === "en" ? "Our Services" : "Nossos Serviços"}
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1,
      duration: 1
    }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div animate={{
        y: [0, 10, 0]
      }} transition={{
        duration: 1.5,
        repeat: Infinity
      }}>
          <Plane className="w-8 h-8 text-secondary" />
        </motion.div>
      </motion.div>
    </section>;
};

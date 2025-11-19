import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Shield, Droplet, Zap } from "lucide-react";

interface ServicesSectionProps {
  language: "en" | "pt";
}

export const ServicesSection = ({ language }: ServicesSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Sparkles,
      title: { en: "Interior Detailing", pt: "Detailing Interior" },
      description: {
        en: "Deep sanitation, leather conditioning, carpet extraction.",
        pt: "Higienização profunda, tratamento de couros, limpeza de carpetes.",
      },
      features: {
        en: ["Deep Cleaning", "Leather Care", "Carpet Extraction"],
        pt: ["Limpeza Profunda", "Cuidado com Couro", "Extração de Carpete"],
      },
    },
    {
      icon: Shield,
      title: { en: "Exterior Detailing", pt: "Detailing Exterior" },
      description: {
        en: "Polishing, paint correction, dry wash.",
        pt: "Polimento, correção de pintura, lavagem a seco.",
      },
      features: {
        en: ["Brightwork", "Paint Correction", "Dry Wash"],
        pt: ["Polimento de Metais", "Correção de Pintura", "Lavagem a Seco"],
      },
    },
    {
      icon: Droplet,
      title: { en: "Ceramic Coating", pt: "Proteção Cerâmica" },
      description: {
        en: "Ceramic Coating and Sealants for UV and corrosion protection.",
        pt: "Aplicação de Proteção Cerâmica e Selantes para proteção contra raios UV e corrosão.",
      },
      features: {
        en: ["UV Protection", "Corrosion Shield", "Long-lasting"],
        pt: ["Proteção UV", "Proteção contra Corrosão", "Longa Duração"],
      },
    },
    {
      icon: Zap,
      title: { en: "Quick Turnaround", pt: "Serviço Rápido" },
      description: {
        en: "Fast service for quick stops without compromising quality.",
        pt: "Serviço rápido para paradas curtas sem comprometer a qualidade.",
      },
      features: {
        en: ["Express Service", "Flexible Schedule", "Premium Speed"],
        pt: ["Serviço Expresso", "Horário Flexível", "Velocidade Premium"],
      },
    },
  ];

  return (
    <section id="services" ref={ref} className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {language === "en" ? "Our Services" : "Nossos Serviços"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === "en"
              ? "Compatible with Jets, Turboprops, and Helicopters"
              : "Compatível com Jatos, Turboélices e Helicópteros"}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="metallic-card p-6 hover-lift"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">
                {language === "en" ? service.title.en : service.title.pt}
              </h3>
              
              <p className="text-muted-foreground mb-4 text-sm">
                {language === "en" ? service.description.en : service.description.pt}
              </p>
              
              <ul className="space-y-2">
                {(language === "en" ? service.features.en : service.features.pt).map(
                  (feature, idx) => (
                    <li key={idx} className="text-sm text-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  )
                )}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

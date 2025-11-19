import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Award, Plane } from "lucide-react";

interface AboutSectionProps {
  language: "en" | "pt";
}

export const AboutSection = ({ language }: AboutSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Shield,
      title: { en: "Clinical Precision", pt: "Precisão Clínica" },
      description: {
        en: "Aviation-grade detailing standards",
        pt: "Padrões de detalhamento de aviação",
      },
    },
    {
      icon: Award,
      title: { en: "Premium Materials", pt: "Materiais Premium" },
      description: {
        en: "Only the finest products for your aircraft",
        pt: "Apenas os melhores produtos para sua aeronave",
      },
    },
    {
      icon: Plane,
      title: { en: "Bespoke Solutions", pt: "Soluções à Medida" },
      description: {
        en: "Plans designed exclusively for your aircraft's unique condition",
        pt: "Planos desenhados exclusivamente para a condição única da sua aeronave",
      },
    },
  ];

  return (
    <section id="about" ref={ref} className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {language === "en" ? "The AirClinik Standard" : "O Padrão AirClinik"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {language === "en"
              ? "AirClinik isn't just a cleaning company. We are aviation preservationists. We understand that every micron of paint and every stitch of leather matters. Whether it's a helicopter or a private jet, we apply clinical precision to protect your asset."
              : "A AirClinik não é apenas uma empresa de limpeza. Somos preservacionistas da aviação. Entendemos que cada mícron de pintura e cada costura do couro importa. Seja um helicóptero ou um jato privado, aplicamos precisão clínica para proteger o seu ativo."}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="metallic-card p-8 hover-lift"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">
                {language === "en" ? feature.title.en : feature.title.pt}
              </h3>
              <p className="text-muted-foreground">
                {language === "en" ? feature.description.en : feature.description.pt}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

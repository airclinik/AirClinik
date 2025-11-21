import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileCheck, ShieldCheck, Award, CheckCircle } from "lucide-react";

interface SafetyProps {
  language: "en" | "pt";
}

const Safety = ({ language }: SafetyProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const safetyFeatures = [
    {
      icon: FileCheck,
      title: {
        en: "Aviation Approved",
        pt: "Aprovado para Aviação",
      },
      description: {
        en: "All compounds meet Boeing/Airbus specifications. We use only industry-certified products designed specifically for aviation substrates.",
        pt: "Todos os compostos atendem às especificações Boeing/Airbus. Usamos apenas produtos certificados pela indústria, projetados especificamente para substratos de aviação.",
      },
    },
    {
      icon: ShieldCheck,
      title: {
        en: "Fully Insured",
        pt: "Totalmente Assegurado",
      },
      description: {
        en: "Comprehensive liability insurance covering all operations. Your aircraft is protected throughout our service process.",
        pt: "Seguro de responsabilidade abrangente cobrindo todas as operações. A sua aeronave está protegida durante todo o nosso processo de serviço.",
      },
    },
    {
      icon: Award,
      title: {
        en: "Certified Technicians",
        pt: "Técnicos Certificados",
      },
      description: {
        en: "Specialized training in aviation substrates. Our team understands the unique requirements of aircraft detailing and maintenance.",
        pt: "Treino especializado em substratos de aviação. A nossa equipe compreende os requisitos únicos de detailing e manutenção de aeronaves.",
      },
    },
    {
      icon: CheckCircle,
      title: {
        en: "Quality Guarantee",
        pt: "Garantia de Qualidade",
      },
      description: {
        en: "Every service is performed to the highest standards. We stand behind our work with complete satisfaction guarantee.",
        pt: "Cada serviço é realizado com os mais altos padrões. Garantimos a satisfação completa com o nosso trabalho.",
      },
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {language === "en" ? "Safety & Standards" : "Segurança & Padrões"}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === "en"
              ? "Your aircraft deserves the highest level of care and protection"
              : "A sua aeronave merece o mais alto nível de cuidado e proteção"}
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {safetyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="metallic-card p-8 hover-lift"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {language === "en" ? feature.title.en : feature.title.pt}
              </h2>
              
              <p className="text-muted-foreground leading-relaxed">
                {language === "en" ? feature.description.en : feature.description.pt}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <div className="metallic-card p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {language === "en" ? "Our Commitment" : "Nosso Compromisso"}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {language === "en"
                ? "At AirClinik, safety and quality are not just priorities, they're fundamental to everything we do. We maintain the highest industry standards to ensure your aircraft receives premium care while protecting your asset."
                : "Na AirClinik, segurança e qualidade não são apenas prioridades, são fundamentais em tudo o que fazemos. Mantemos os mais altos padrões da indústria para garantir que a sua aeronave receba cuidados premium enquanto protegemos o seu investimento."}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Safety;

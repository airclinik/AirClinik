import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

interface FAQProps {
  language: "en" | "pt";
}

const FAQ = ({ language }: FAQProps) => {
  const navigate = useNavigate();

  const handleBookNowClick = () => {
    navigate("/");
    setTimeout(() => {
      const bookingSection = document.getElementById("booking");
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const faqs = [
    {
      question: {
        en: "Does AirClinik offer mobile services?",
        pt: "A AirClinik oferece serviços móveis?",
      },
      answer: {
        en: "Yes, we travel to most aerodromes in the country.",
        pt: "Sim, deslocamo-nos à maioria dos aeródromos do país.",
      },
    },
    {
      question: {
        en: "How far in advance should I book?",
        pt: "Com quanto tempo de antecedência devo reservar?",
      },
      answer: {
        en: "We recommend booking at least 48-72 hours in advance to ensure crew availability, especially for full details.",
        pt: "Recomendamos reservar com pelo menos 48-72 horas de antecedência para garantir disponibilidade da equipa, especialmente para detalhes completos.",
      },
    },
    {
      question: {
        en: "How long does a full detail take?",
        pt: "Quanto tempo demora um detailing completo?",
      },
      answer: {
        en: "It depends on the specific job. Typically 2-3 hours work for the average jets.",
        pt: "Depende do trabalho específico. Tipicamente 2-3 horas de trabalho para jatos médios.",
      },
    },
    {
      question: {
        en: "Are products aviation approved?",
        pt: "Os produtos são aprovados para aviação?",
      },
      answer: {
        en: "Yes, we only use Boeing/Airbus spec products.",
        pt: "Sim, usamos apenas produtos com especificação Boeing/Airbus.",
      },
    },
    {
      question: {
        en: "What is 'Brightwork' polishing?",
        pt: "O que é o polimento 'Brightwork'?",
      },
      answer: {
        en: "It is a specialized process to restore bare metal surfaces (like leading edges and engine inlets) to a mirror-like finish, removing oxidation.",
        pt: "É um processo especializado para restaurar superfícies metálicas expostas (como bordos de ataque e entradas de motor) a um acabamento espelhado, removendo oxidação.",
      },
    },
    {
      question: {
        en: "Do you treat leather interiors?",
        pt: "Tratam interiores em pele?",
      },
      answer: {
        en: "Yes. We use aviation-grade pH-balanced conditioners that clean and hydrate leather without affecting its fire-retardant properties.",
        pt: "Sim. Usamos condicionadores de grau aeronáutico com pH equilibrado que limpam e hidratam a pele sem afetar as suas propriedades retardadoras de fogo.",
      },
    },
    {
      question: {
        en: "Does Ceramic Coating add weight?",
        pt: "O revestimento cerâmico adiciona peso?",
      },
      answer: {
        en: "No. Unlike heavy wax layers, ceramic coating bonds at a molecular level and is microns thin, providing protection without weight penalty.",
        pt: "Não. Ao contrário de camadas de cera pesadas, o revestimento cerâmico liga-se a nível molecular e tem apenas microns de espessura, proporcionando proteção sem penalização de peso.",
      },
    },
    {
      question: {
        en: "Do you need water/power?",
        pt: "Precisam de água/eletricidade?",
      },
      answer: {
        en: "Ideally yes, but we have autonomous solutions if notified.",
        pt: "Idealmente sim, mas temos soluções autónomas se avisados previamente.",
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
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
            {language === "en" ? "Frequently Asked Questions" : "Perguntas Frequentes"}
          </h1>
          <p className="text-lg text-muted-foreground mb-12 text-center">
            {language === "en"
              ? "Find answers to common questions about our services"
              : "Encontre respostas para perguntas comuns sobre os nossos serviços"}
          </p>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  {language === "en" ? faq.question.en : faq.question.pt}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {language === "en" ? faq.answer.en : faq.answer.pt}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              {language === "en"
                ? "Ready to schedule your aircraft detail?"
                : "Pronto para agendar o seu detailing de aeronave?"}
            </p>
            <Button size="lg" onClick={handleBookNowClick}>
              {language === "en" ? "Book Now" : "Agendar Agora"}
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;

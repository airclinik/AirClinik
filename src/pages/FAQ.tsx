import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  language: "en" | "pt";
}

const FAQ = ({ language }: FAQProps) => {
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
        en: "Do you need water/power?",
        pt: "Precisam de água/eletricidade?",
      },
      answer: {
        en: "Ideally yes, but we have autonomous solutions if notified.",
        pt: "Idealmente sim, mas temos soluções autónomas se avisados previamente.",
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
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;

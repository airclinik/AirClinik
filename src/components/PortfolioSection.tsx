import { motion } from "framer-motion";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-paint-correction.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

interface PortfolioSectionProps {
  language: "en" | "pt";
}

export const PortfolioSection = ({ language }: PortfolioSectionProps) => {
  const portfolioItems = [
    { 
      id: 1, 
      image: portfolio1,
      title: language === "en" ? "Exterior Detailing" : "Polimento Exterior",
      description: language === "en" ? "Private Jet" : "Jato Privado"
    },
    { 
      id: 2, 
      image: portfolio2,
      title: language === "en" ? "Interior Detailing" : "Detalhamento Interior",
      description: language === "en" ? "Luxury Cabin" : "Cabine de Luxo"
    },
    { 
      id: 3, 
      image: portfolio3,
      title: language === "en" ? "Ceramic Coating" : "Revestimento Cerâmico",
      description: language === "en" ? "Helicopter" : "Helicóptero"
    },
    { 
      id: 4, 
      image: portfolio4,
      title: language === "en" ? "Windshield Treatment" : "Tratamento de Vidros",
      description: language === "en" ? "Turboprop" : "Turboélice"
    },
    { 
      id: 5, 
      image: portfolio5,
      title: language === "en" ? "Paint Protection" : "Proteção de Pintura",
      description: language === "en" ? "Business Jet" : "Jato Executivo"
    },
    { 
      id: 6, 
      image: portfolio6,
      title: language === "en" ? "Cockpit Detailing" : "Detalhamento de Cockpit",
      description: language === "en" ? "Flight Deck" : "Cabine de Comando"
    },
  ];

  return (
    <section id="portfolio" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {language === "en" ? "Our Work" : "Nosso Trabalho"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === "en" 
              ? "Precision detailing across all aircraft types" 
              : "Detalhamento de precisão em todos os tipos de aeronaves"}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.title} - ${item.description}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-secondary text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

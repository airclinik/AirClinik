import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
// 1. IMPORTAR O ÍCONE DE LOADING
import { Loader2 } from "lucide-react";

interface BookingSectionProps {
  language: "en" | "pt";
}

export const BookingSection = ({ language }: BookingSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    aircraftType: "",
    aircraftModel: "",
    tailNumber: "",
    location: "",
    services: [] as string[],
    message: "",
  });
  
  // 2. ADICIONAR UM STATE DE SUBMISSÃO (para o botão de loading)
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = [
    { en: "Interior Detailing", pt: "Detalhamento Interior" },
    { en: "Exterior Detailing", pt: "Polimento Exterior" },
    { en: "Ceramic Coating", pt: "Proteção Cerâmica" },
    { en: "Quick Turnaround", pt: "Serviço Rápido" },
    { en: "Others", pt: "Outros" },
  ];

  // 3. ATUALIZAR A FUNÇÃO 'handleSubmit'
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true); // Ativa o loading

    // 4. CRIE ESTE URL NO FORMSPREE.IO E COLE-O AQUI
    const FORMSPREE_URL = "https://formspree.io/f/xpwbaolj";

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // SUCESSO: Mostra o toast e limpa o formulário
        toast({
          title: language === "en" ? "Quote Request Received!" : "Orçamento Recebido!",
          description:
            language === "en"
              ? "We'll contact you within 24 hours."
              : "Entraremos em contato em 24 horas.",
        });
        // Limpa o formulário
        setFormData({
          name: "", company: "", email: "", phone: "",
          aircraftType: "", aircraftModel: "", tailNumber: "",
          location: "", services: [], message: "",
        });
      } else {
        // ERRO NO ENVIO
        throw new Error("Form submission failed");
      }
    } catch (error) {
      // ERRO DE REDE
      toast({
        variant: "destructive",
        title: language === "en" ? "Error" : "Erro",
        description:
          language === "en"
            ? "An error occurred. Please try again later."
            : "Ocorreu um erro. Por favor, tente mais tarde.",
      });
    } finally {
      setIsSubmitting(false); // Desativa o loading
    }
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  return (
    <section id="booking" ref={ref} className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {language === "en" ? "Request Service" : "Pedir Orçamento"}
          </h2>
          <p className="text-lg text-muted-foreground">
            {language === "en"
              ? "Fill out the form and we'll get back to you within 24 hours"
              : "Preencha o formulário e retornaremos em até 24 horas"}
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="metallic-card p-8 space-y-6"
        >
          {/* ... (O resto do seu formulário continua igual) ... */}
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === "en" ? "Name" : "Nome"} *
              </label>
              <Input
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={language === "en" ? "John Doe" : "João Silva"}
                disabled={isSubmitting} // Desativa campos durante o envio
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === "en" ? "Company" : "Empresa"}
              </label>
              <Input
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder={language === "en" ? "Company Name" : "Nome da Empresa"}
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email *
              </label>
              <Input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="email@example.com"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === "en" ? "Phone" : "Telefone"} *
              </label>
              <Input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+351 912 345 678"
                disabled={isSubmitting}
              />
            </div>
          </div>
          
          {/* ... (o resto dos seus campos <Input> e <Select> devem ter "disabled={isSubmitting}" também) ... */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === "en" ? "Aircraft Type" : "Tipo de Aeronave"} *
              </label>
              <Select
                required
                value={formData.aircraftType}
                onValueChange={(value) => setFormData({ ...formData, aircraftType: value })}
                disabled={isSubmitting}
              >
                <SelectTrigger>
                  <SelectValue
                    placeholder={language === "en" ? "Select type" : "Selecione o tipo"}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="jet">Jet</SelectItem>
                  <SelectItem value="turboprop">Turboprop / {language === "pt" ? "Turboélice" : ""}</SelectItem>
                  <SelectItem value="helicopter">Helicopter / {language === "pt" ? "Helicóptero" : ""}</SelectItem>
                  <SelectItem value="piston">Piston / {language === "pt" ? "Pistão" : ""}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === "en" ? "Aircraft Model" : "Modelo da Aeronave"} *
              </label>
              <Input
                required
                value={formData.aircraftModel}
                onChange={(e) => setFormData({ ...formData, aircraftModel: e.target.value })}
                placeholder={language === "en" ? "e.g., Gulfstream G650" : "ex: Gulfstream G650"}
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === "en" ? "Tail Number / Registration" : "Matrícula"}
              </label>
              <Input
                value={formData.tailNumber}
                onChange={(e) => setFormData({ ...formData, tailNumber: e.target.value })}
                placeholder={language === "en" ? "N12345" : "PR-ABC"}
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === "en" ? "Airport / Location" : "Aeroporto / Localização"} *
              </label>
              <Input
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder={language === "en" ? "ICAO code or city" : "Código ICAO ou cidade"}
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              {language === "en" ? "Services Required" : "Serviços Necessários"} *
            </label>
            <div className="grid md:grid-cols-2 gap-4">
              {serviceOptions.map((service, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Checkbox
                    id={`service-${index}`}
                    checked={formData.services.includes(
                      language === "en" ? service.en : service.pt
                    )}
                    onCheckedChange={() =>
                      handleServiceToggle(language === "en" ? service.en : service.pt)
                    }
                    disabled={isSubmitting}
                  />
                  <label
                    htmlFor={`service-${index}`}
                    className="text-sm text-foreground cursor-pointer"
                  >
                    {language === "en" ? service.en : service.pt}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              {language === "en" ? "Additional Message" : "Mensagem Adicional"}
            </label>
            <Textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={
                language === "en"
                  ? "Tell us more about your requirements..."
                  : "Descreva o seu pedido com mais detalhe..."
              }
              rows={4}
              disabled={isSubmitting}
            />
          </div>

          {/* 5. ATUALIZAR O BOTÃO DE SUBMISSÃO */}
          <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
            {isSubmitting ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              language === "en" ? "Submit Request" : "Enviar Solicitação"
            )}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

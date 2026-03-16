import { motion } from "framer-motion";
import lemaLogo from "@/assets/lema-logo.png";

const FooterSection = () => (
  <footer className="bg-secondary py-10 relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
      style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }}
    />
    <motion.div
      className="container mx-auto px-4 md:px-8 text-center space-y-4 relative z-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <img src={lemaLogo} alt="Lema Digital" className="h-10 mx-auto brightness-0 invert" />
      <p className="text-secondary-foreground font-bold text-lg">Agência Lema Digital</p>
      <p className="text-secondary-foreground/70 text-sm">
        © 2025 Agência Lema Digital — Todos os direitos reservados.
      </p>
      <p className="text-secondary-foreground/50 text-xs max-w-lg mx-auto">
        Esta sessão é gratuita e sem compromisso. Vagas limitadas por semana para garantir a qualidade do atendimento.
      </p>
      <a href="#" className="text-secondary-foreground/60 text-xs underline hover:text-secondary-foreground/80 transition-colors">
        Política de Privacidade
      </a>
    </motion.div>
  </footer>
);

export default FooterSection;
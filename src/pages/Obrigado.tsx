import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, MessageCircle, CalendarDays, BarChart3 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import heroLogo from "@/assets/hero-logo.png";
import heroCapa from "@/assets/hero-capa.png";
import heroCapaMobile from "@/assets/hero-capa-mobile.png";
import lemaLogo from "@/assets/lema-logo.png";

const steps = [
  {
    icon: MessageCircle,
    text: "Nosso time vai analisar suas respostas e preparar um diagnóstico personalizado para a sua clínica.",
  },
  {
    icon: CalendarDays,
    text: "Vamos entrar em contato para agendar sua sessão estratégica no melhor horário para você.",
  },
  {
    icon: BarChart3,
    text: "Na sessão, você vai receber um plano de ação com os ajustes prioritários para os próximos 30 dias.",
  },
];

const Obrigado = () => {

  return (
    <>
      <Helmet>
        <title>Obrigado | Lema Digital</title>
        <meta
          name="description"
          content="Suas informações foram recebidas. Nossa equipe entrará em contato em breve."
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content="Obrigado | Lema Digital" />
        <meta
          property="og:description"
          content="Suas informações foram recebidas. Entraremos em contato em breve."
        />
        <meta
          property="og:image"
          content="https://lemaagdigital.com.br/og-image.png"
        />
      </Helmet>

      {/* Hero background */}
      <div className="min-h-screen flex flex-col relative overflow-hidden">
        {/* Background image - Desktop */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none hidden md:block"
          style={{ backgroundImage: `url(${heroCapa})` }}
        />
        {/* Background image - Mobile */}
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat pointer-events-none md:hidden"
          style={{ backgroundImage: `url(${heroCapaMobile})` }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />

        {/* Header */}
        <header className="relative z-10 py-6 flex justify-center">
          <img src={heroLogo} alt="Lema Digital" className="w-14 md:w-20" />
        </header>

        {/* Main content */}
        <main className="relative z-10 flex-1 flex items-center justify-center px-4 pb-8">
          <div className="max-w-2xl w-full text-center space-y-8">

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[28px] md:text-[36px] font-extrabold text-primary-foreground leading-tight"
            >
              Perfeito! Recebemos suas informações.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-base md:text-lg text-white/80 max-w-[600px] mx-auto leading-relaxed"
            >
              Um especialista da Lema Digital vai entrar em contato pelo seu
              WhatsApp nas próximas horas para agendar sua sessão estratégica
              gratuita.
            </motion.p>

            {/* Next steps card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-[#EDE9FE] rounded-xl p-6 md:p-8 text-left space-y-5"
            >
              <h2 className="text-lg md:text-xl font-bold text-secondary text-center">
                Enquanto isso, veja o que vai acontecer:
              </h2>
              <div className="space-y-5">
                {steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-sm md:text-[15px] text-foreground leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Reinforcement message */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="text-sm text-white/60 italic"
            >
              Fique atento ao seu WhatsApp — nossa mensagem vai chegar em breve.
            </motion.p>

            {/* Instagram button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.75 }}
            >
              <a
                href="https://instagram.com/lemaagdigital"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary font-semibold text-sm px-6 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Conheça nosso Instagram
              </a>
            </motion.div>
          </div>
        </main>

        {/* Footer */}
        <footer className="relative z-10 py-4 text-center">
          <p className="text-xs text-white/40">
            © Agência Lema Digital — Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </>
  );
};

export default Obrigado;

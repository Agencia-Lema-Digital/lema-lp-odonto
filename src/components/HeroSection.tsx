import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import CTAButton from "./CTAButton";
import heroCapa from "@/assets/hero-capa.png";
import heroCapaMobile from "@/assets/hero-capa-mobile.png";
import heroLogo from "@/assets/hero-logo.png";

const HeroSection = () =>
<section className="hero-gradient py-12 md:py-[100px] relative overflow-hidden">
    {/* Background image - Desktop */}
    <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none hidden md:block"
    style={{ backgroundImage: `url(${heroCapa})` }} />

    {/* Background image - Mobile */}
    <div
    className="absolute inset-0 bg-cover bg-top bg-no-repeat pointer-events-none md:hidden"
    style={{ backgroundImage: `url(${heroCapaMobile})` }} />

    {/* Dark overlay for text contrast */}
    <div className="absolute inset-0 bg-black/50 md:bg-black/40 pointer-events-none" />

    <div className="container mx-auto px-4 md:px-8 relative z-10">
      <div className="max-w-3xl">
        <AnimatedSection className="space-y-4 md:space-y-6 text-left">
          <motion.img
            src={heroLogo}
            alt="Lema Digital"
            className="w-10 md:w-20 mb-0 md:mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
          <h1>
            <motion.span
            className="block font-extrabold uppercase text-[1.75rem] leading-[1.1] md:text-5xl lg:text-5xl text-primary-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}>
            
              DIAGNÓSTICO COMPLETO
            </motion.span>
            <motion.span
            className="block font-extrabold uppercase text-[1.75rem] leading-[1.1] mt-1 md:text-5xl lg:text-5xl text-[#896bff]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}>
            
              DO FUNIL DE CAPTAÇÃO DA SUA CLÍNICA
            </motion.span>
          </h1>

          {/* Mobile subheadline - shorter */}
          <motion.p
          className="text-[14px] text-white/90 max-w-2xl leading-relaxed md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}>
            Descubra onde sua clínica está <strong className="font-bold text-[#896bff]">perdendo pacientes</strong> e receba um <strong className="font-bold text-[#896bff]">plano de ação personalizado</strong> em 30 minutos.
          </motion.p>

          {/* Desktop subheadline - original */}
          <motion.p
          className="hidden md:block text-[20px] text-white/90 max-w-2xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}>
            Em 30 minutos, nosso time vai identificar por que sua clínica está{" "}
            <strong className="font-bold text-[#896bff]">perdendo pacientes</strong> e entregar
            um plano personalizado para unir{" "}
            <strong className="font-bold text-[#896bff]">
              anúncios, conteúdo e processo comercial
            </strong>{" "}
            em um único funil que transforma cliques em{" "}
            <strong className="font-bold text-[#896bff]">
              agenda cheia com previsibilidade  
            </strong>
            .
          </motion.p>

          <motion.div
          className="space-y-2 pt-1 md:pt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}>
            {/* Desktop helper text */}
            <p className="hidden md:block text-[13px] text-white/70 italic">
              Toque no botão abaixo e garanta um dos poucos horários disponíveis com nosso time
            </p>
            <CTAButton className="w-full md:w-auto bg-[#6A48F4] text-primary-foreground font-bold uppercase text-base px-8 py-4 md:py-[18px] rounded-lg cta-glow hover:bg-secondary transition-colors">
              AGENDAR MINHA SESSÃO ESTRATÉGICA GRATUITA
            </CTAButton>
            {/* Mobile scarcity text */}
            <p className="md:hidden text-[12px] text-white/60 text-center pt-1">
              Vagas limitadas por semana.
            </p>
          </motion.div>
        </AnimatedSection>
      </div>
    </div>
  </section>;


export default HeroSection;
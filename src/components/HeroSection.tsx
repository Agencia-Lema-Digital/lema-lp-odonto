import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import CTAButton from "./CTAButton";
import heroCapa from "@/assets/hero-capa.png";
import heroCapaMobile from "@/assets/hero-capa-mobile.png";
import heroLogo from "@/assets/hero-logo.png";

const HeroSection = () =>
<section className="hero-gradient min-h-[100svh] md:min-h-0 md:py-[100px] relative overflow-hidden flex flex-col md:block">
    {/* Background image - Desktop */}
    <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none hidden md:block"
    style={{ backgroundImage: `url(${heroCapa})` }} />

    {/* Background image - Mobile */}
    <div
    className="absolute inset-0 bg-cover bg-top bg-no-repeat pointer-events-none md:hidden"
    style={{ backgroundImage: `url(${heroCapaMobile})` }} />

    {/* Dark overlay - gradient from bottom for mobile, uniform for desktop */}
    <div className="absolute inset-0 pointer-events-none hidden md:block bg-black/40" />
    <div className="absolute inset-0 pointer-events-none md:hidden" style={{ background: 'linear-gradient(to bottom, transparent 15%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.75) 70%)' }} />

    {/* Mobile: push content to bottom, with slight offset up */}
    <div className="flex-1 md:hidden" style={{ maxHeight: 'calc(100svh - 420px)' }} />

    <div className="container mx-auto px-4 md:px-8 relative z-10 pb-8 md:pb-0">
      <div className="max-w-3xl">
        <AnimatedSection className="space-y-2 md:space-y-6 text-left">
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
            className="font-extrabold uppercase text-[1.75rem] leading-[1.1] md:text-5xl lg:text-5xl text-primary-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}>
            
              VOCÊ INVESTE EM ANÚNCIO, O LEAD CHEGA,{" "}
            </motion.span>
            <motion.span
            className="font-extrabold uppercase text-[1.75rem] leading-[1.1] md:text-5xl lg:text-5xl text-[#896bff]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}>
            
              MAS SOME NO WHATSAPP?
            </motion.span>
          </h1>

          {/* Mobile subheadline - shorter */}
          <motion.p
          className="text-[14px] text-white/90 max-w-2xl leading-relaxed md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}>
            Em <strong className="font-bold text-[#896bff]">30 minutos</strong>, um especialista da Lema Digital analisa o funil da sua clínica e mostra <strong className="font-bold text-[#896bff]">onde os leads estão fugindo</strong> antes de virar avaliação agendada.
          </motion.p>

          {/* Desktop subheadline - original */}
          <motion.p
          className="hidden md:block text-[20px] text-white/90 max-w-2xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}>
            Em <strong className="font-bold text-[#896bff]">30 minutos</strong>, um especialista da Lema Digital analisa o{" "}
            <strong className="font-bold text-[#896bff]">funil da sua clínica</strong> e te mostra exatamente onde os{" "}
            <strong className="font-bold text-[#896bff]">leads de implante e estética</strong> estão fugindo antes de virar{" "}
            <strong className="font-bold text-[#896bff]">avaliação agendada</strong>.
          </motion.p>

          <motion.div
          className="space-y-2 pt-2 md:pt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}>
            {/* Desktop helper text */}
            <p className="hidden md:block text-[13px] text-white/70 italic">
              Toque no botão abaixo e garanta um dos poucos horários disponíveis com nosso time
            </p>
            <CTAButton className="w-full md:w-auto bg-[#6A48F4] text-primary-foreground font-bold uppercase text-base px-8 py-4 md:py-[18px] rounded-lg cta-glow hover:bg-secondary transition-colors">
              QUERO MEU DIAGNÓSTICO GRATUITO
            </CTAButton>
            <p className="text-[11px] md:text-[12px] text-white/60 text-center md:text-left pt-1">
              Você será direcionado para agendar um horário de 30 minutos.
            </p>
            {/* Mobile scarcity text */}
            <p className="md:hidden text-[11px] text-white/50 text-center">
              Vagas limitadas por semana.
            </p>
          </motion.div>
        </AnimatedSection>
      </div>
    </div>
  </section>;


export default HeroSection;
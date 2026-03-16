import { useEffect, useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";
import CTAButton from "./CTAButton";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const useCountUp = (end: number, suffix: string, duration = 2000) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return { ref, display: `${value}${suffix}` };
};

const testimonials = [
  {
    name: "Dra Bruna Couto",
    role: "Madrid/Espanha",
    photo: testimonial1,
    quote:
      "Tive uma ótima experiência com a Lema, são profissionais muito atenciosos e detalhistas, buscando o melhor em tudo que fazem. Muito dedicados e acessíveis na comunicação, fazendo reuniões e tentando alcançar o melhor possível.",
    badge: "+6 fechamentos de implante/mês",
  },
  {
    name: "Raquel Viana",
    role: "São Paulo/SP",
    photo: testimonial2,
    quote:
      "Maravilhosos\nCompetentes, atenciosos, dedicados, solícitos e muito mais.\nAgradeço por todo cuidado. Eles nos ajudam a ter um visão dos meios que podem alavancar o nosso negócio e nos guia, sempre com reuniões para mostrar o que podemos melhorar.",
    badge: "3x mais conversão em 60 dias",
  },
  {
    name: "Patricia Ramos",
    role: "Fortaleza/CE",
    photo: testimonial3,
    quote:
      "Queria deixar aqui a minha mensagem de agradecimento a vocês. Essa semana, quando recebi os scripts para stories, eu enxerguei uma montanha imensa na minha frente! Uma barreira mesmo, mas falei aqui que eu ia dar o meu máximo pra sair, e se eu conseguisse completar, nada mais me abalaria. Saí total da zona de conforto.\nEntão obrigada pelas orientações e apoio. Vocês são excelentes!",
    badge: "Agenda previsível em 45 dias",
  },
];

const statsData = [
  { end: 30, suffix: "+", label: "Empresas atendidas" },
  { end: 3, suffix: "x", label: "Aumento médio na taxa de conversão" },
  { end: 4, suffix: "+", label: "Anos de mercado" },
];

const CountUpStat = ({ end, suffix, label }: { end: number; suffix: string; label: string }) => {
  const { ref, display } = useCountUp(end, suffix);
  return (
    <div ref={ref} className="stat-pulse cursor-default">
      <p className="text-3xl md:text-4xl font-extrabold text-primary-foreground">{display}</p>
      <p className="text-xs md:text-sm text-secondary-foreground/80 mt-1">{label}</p>
    </div>
  );
};

const SocialProofSection = () => (
  <section className="bg-secondary py-16 md:py-24 relative overflow-hidden">
    {/* Subtle background glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

    <div className="container mx-auto px-4 md:px-8 relative z-10">
      <AnimatedSection>
        <h2 className="text-2xl md:text-3xl font-bold text-secondary-foreground text-center mb-12">
          As clínicas que aplicaram esse diagnóstico não param de crescer.
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6 mb-14">
        {testimonials.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.15}>
            <div className="card-hover glass-card shimmer rounded-xl p-6 h-full flex flex-col cursor-default transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <img src={t.photo} alt={t.name} className="w-11 h-11 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-secondary-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-secondary-foreground/70">{t.role}</p>
                </div>
              </div>
              <p className="text-sm text-secondary-foreground/90 italic flex-1">"{t.quote}"</p>
              <span className="mt-4 inline-block self-start bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                {t.badge}
              </span>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection>
        <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto text-center mb-10">
          {statsData.map((s) => (
            <CountUpStat key={s.label} end={s.end} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="text-center">
        <CTAButton className="inline-flex items-center gap-2 bg-background text-primary font-bold px-8 py-4 rounded-lg cta-glow hover:bg-accent transition-colors">
          QUERO AGENDAR O DIAGNÓSTICO GRATUITO →
        </CTAButton>
      </AnimatedSection>
    </div>
  </section>
);

export default SocialProofSection;

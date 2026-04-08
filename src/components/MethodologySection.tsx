import { TrendingUp, MessageSquare, Handshake } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import CTAButton from "./CTAButton";

const cards = [
  {
    icon: TrendingUp,
    title: "Geração de Demanda",
    text: "Vamos analisar de perto todo o seu processo atual para atrair leads — criativos, segmentação, landing page e canais. Identificamos os gargalos que fazem seu investimento em tráfego não se converter em avaliações agendadas, e mostramos como corrigi-los.",
  },
  {
    icon: MessageSquare,
    title: "Conversão e Atendimento",
    text: "Após mapear a entrada de leads, mergulhamos no seu processo de atendimento. Analisamos velocidade de resposta, script de abordagem, cadência de follow-up e os pontos onde os leads estão 'esfriando' — para que você converta mais sem precisar de mais verba.",
  },
  {
    icon: Handshake,
    title: "Processo Comercial e Fechamento",
    text: "Nesse ponto, entendemos o que acontece dentro da avaliação: como o valor do tratamento é apresentado, como objeções de preço são tratadas e como o processo de fechamento funciona. O objetivo é construir junto com você um funil do anúncio ao fechamento — padronizado, escalável e previsível.",
  },
];

const MethodologySection = () => (
  <section className="bg-[#0a0a0a] py-16 md:py-24">
    <div className="container mx-auto px-4 md:px-8">
      <AnimatedSection>
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center max-w-3xl mx-auto mb-12">
          Um diagnóstico personalizado e único para o momento atual da sua clínica, onde vamos
          analisar os 3 pontos críticos que estão travando sua previsibilidade de agenda.
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <AnimatedSection key={card.title} delay={i * 0.15}>
            <div className="card-hover bg-white/5 border border-white/10 rounded-xl shadow-md border-l-4 border-l-primary p-6 h-full cursor-default">
              <card.icon className="text-primary mb-4 icon-float" size={32} />
              <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{card.text}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center mt-10">
        <CTAButton className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-lg cta-glow hover:bg-secondary transition-colors">
          QUERO MEU DIAGNÓSTICO GRATUITO →
        </CTAButton>
        <p className="text-[12px] text-white/50 mt-2">
          Você será direcionado para agendar um horário de 30 minutos.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default MethodologySection;

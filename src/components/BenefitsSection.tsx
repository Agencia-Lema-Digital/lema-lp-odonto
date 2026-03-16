import { ClipboardList, Target, MessageCircle, BarChart3 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import CTAButton from "./CTAButton";
import benefitsBg from "@/assets/benefits-bg.png";

const items = [
  {
    icon: ClipboardList,
    title: "Diagnóstico completo do seu funil de captação",
    text: "Vamos identificar exatamente onde sua clínica está perdendo leads — do anúncio ao fechamento — e o que está custando mais caro no seu processo atual.",
  },
  {
    icon: Target,
    title: "Um plano de ação personalizado para os próximos 30 dias",
    text: "Você sai da sessão com um roteiro claro e específico para a sua clínica: o que ajustar no tráfego, como melhorar o atendimento e como estruturar o processo comercial para fechar mais tratamentos de alto valor.",
  },
  {
    icon: MessageCircle,
    title: "Como responder e converter leads que chegam no WhatsApp",
    text: "Você vai entender como o script de abordagem correto pode aumentar sua taxa de agendamento em até 3x — sem depender de desconto ou de preço baixo para fechar.",
  },
  {
    icon: BarChart3,
    title: "Clareza sobre quais métricas acompanhar",
    text: "Você vai saber exatamente quais números olhar toda semana para tomar decisões com base em dados — e parar de adivinhar o que está funcionando ou não na sua captação.",
  },
];

const BenefitsSection = () => (
  <section
    className="py-16 md:py-24 relative bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${benefitsBg})` }}
  >
    <div className="absolute inset-0 bg-[#0a0a0a]/70" />
    <div className="container mx-auto px-4 md:px-8 relative z-10">
      <AnimatedSection>
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
          Nessa Sessão Estratégica Gratuita, você vai ter acesso a:
        </h2>
      </AnimatedSection>

      <div className="space-y-2 max-w-3xl mx-auto">
        {items.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.1}>
            <div className="benefit-row flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center icon-float">
                <item.icon className="text-primary-foreground" size={22} />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{item.text}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center mt-10">
        <CTAButton className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-lg cta-glow hover:bg-secondary transition-colors">
          QUERO AGENDAR O DIAGNÓSTICO GRATUITO →
        </CTAButton>
      </AnimatedSection>
    </div>
  </section>
);

export default BenefitsSection;

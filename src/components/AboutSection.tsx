import { TrendingUp, Settings, Handshake, Target } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import CTAButton from "./CTAButton";
import { motion } from "framer-motion";
import team1 from "@/assets/team-1.png";
import team2 from "@/assets/team-2.png";
import team3 from "@/assets/team-3.png";
import team4 from "@/assets/team-4.png";

const diffs = [
  { icon: TrendingUp, title: "Método orientado a dados", text: "Tomamos decisões com base em métricas reais: CPL, taxa de conversão, show rate e fechamento." },
  { icon: Settings, title: "Funil integrado ponta a ponta", text: "Anúncio, atendimento, agendamento e fechamento funcionando juntos." },
  { icon: Handshake, title: "Parceria consultiva", text: "Somos extensão do seu time — não apenas um fornecedor de anúncios." },
  { icon: Target, title: "Foco exclusivo em odontologia premium", text: "Entendemos a venda consultiva de tratamentos de alto valor." },
];

const teamPhotos = [team1, team3, team2, team4];

const AboutSection = () => (
  <section className="bg-[#0a0a0a] py-16 md:py-24">
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
        {/* Team photos - horizontal row */}
        <div className="flex items-center justify-center gap-3 md:gap-4">
          {teamPhotos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
              whileHover={{ scale: 1.08, y: -10 }}
              className="w-[22%] aspect-[2/5] rounded-lg overflow-hidden cursor-pointer shadow-lg shadow-primary/10 transition-shadow duration-300 hover:shadow-2xl hover:shadow-primary/40 relative group"
            >
              <img
                src={photo}
                alt={`Membro da equipe ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
            </motion.div>
          ))}
        </div>

        <AnimatedSection delay={0.15} className="space-y-5">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Prazer, somos a Agência Lema Digital
          </h2>
           <p className="text-white/70 leading-relaxed">
            Somos uma assessoria especializada em Marketing e Vendas para clínicas de Odontologia Estética e Implantodontia. Não entregamos "apenas anúncios" — construímos o funil completo: do clique ao fechamento do tratamento.
          </p>
          <p className="text-white/70 leading-relaxed">
            Nosso método integra três pilares que a maioria das agências ignora: tráfego pago, atração orgânica e estruturação comercial. Porque de nada adianta ter leads chegando se a clínica não tem processo para convertê-los em pacientes.
          </p>
          <p className="text-white/70 leading-relaxed">
            Já ajudamos clínicas particulares a saírem da dependência de indicações e convênios, construírem previsibilidade de agenda e fecharem tratamentos de alto valor com mais segurança e menos desconto.
          </p>
        </AnimatedSection>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 mt-8">
        <div className="hidden lg:block" />
        <div className="flex flex-col gap-6">
          {diffs.map((d, i) => (
            <AnimatedSection key={d.title} delay={i * 0.1}>
              <div className="benefit-row flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center icon-float">
                  <d.icon className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{d.title}</h4>
                  <p className="text-sm text-white/70">{d.text}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}

          <AnimatedSection className="mt-4 pl-0 text-center lg:pl-14 lg:text-left">
            <CTAButton className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-lg cta-glow hover:bg-secondary transition-colors">
              QUERO AGENDAR O DIAGNÓSTICO GRATUITO →
            </CTAButton>
          </AnimatedSection>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
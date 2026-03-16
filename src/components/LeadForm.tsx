import { useState } from "react";
import { Lock } from "lucide-react";

const selectOptions = {
  foco: [
    "Odontologia Estética (lentes, facetas, clareamento premium)",
    "Implantodontia (implantes, protocolo, reabilitação total)",
    "Ambos",
  ],
  cadeiras: ["1 cadeira", "2 a 3 cadeiras", "4 ou mais cadeiras"],
  pacientes: [
    "Majoritariamente particular",
    "Misto (particular + convênio)",
    "Majoritariamente convênio",
  ],
  investimento: [
    "Não invisto atualmente",
    "Até R$1.500/mês",
    "De R$1.500 a R$3.000/mês",
    "Acima de R$3.000/mês",
  ],
  desafio: [
    "Os leads chegam mas não agendam",
    "Os leads agendam mas não aparecem",
    "Os leads aparecem mas não fecham",
    "Recebo poucos leads",
    "Não faço tráfego ainda",
  ],
};

const urgencyOptions = [
  "Quero resolver imediatamente",
  "Nas próximas semanas",
  "No próximo mês",
  "Nos próximos meses",
];

const LeadForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [compromisso, setCompromisso] = useState(7);
  const [urgencia, setUrgencia] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div id="formulario" className="card-lema p-8 text-center space-y-4">
        <div className="text-4xl">✅</div>
        <h3 className="text-xl font-bold text-secondary">Recebemos sua solicitação!</h3>
        <p className="text-muted-foreground">
          Nossa equipe entrará em contato em até 24h para confirmar seu horário.
        </p>
      </div>
    );
  }

  return (
    <div id="formulario" className="card-lema p-6 md:p-8">
      <h3 className="text-xl font-bold text-secondary mb-1">
        Agende sua Sessão Estratégica Gratuita
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        Preencha os dados abaixo. Nossa equipe entrará em contato para confirmar seu horário.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input label="Nome completo" name="nome" required />
        <Input label="E-mail" name="email" type="email" required />
        <Input label="WhatsApp / Telefone" name="whatsapp" type="tel" required />
        <Input label="Instagram da clínica" name="instagram" placeholder="@suaclinica" />

        <SectionLabel>Sobre sua clínica</SectionLabel>

        <Select label="Qual é o foco principal da sua clínica?" name="foco" options={selectOptions.foco} required />
        <Select label="Quantas cadeiras ou profissionais ativos?" name="cadeiras" options={selectOptions.cadeiras} required />
        <Select label="Pacientes particulares ou convênio?" name="pacientes" options={selectOptions.pacientes} required />
        <Select label="Quanto investe por mês em tráfego pago?" name="investimento" options={selectOptions.investimento} required />
        <Select label="Qual é o seu principal desafio com os leads?" name="desafio" options={selectOptions.desafio} required />

        <SectionLabel>Comprometimento</SectionLabel>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1">
            Descreva sua maior dificuldade em ter agenda previsível com pacientes de alto valor:
          </label>
          <textarea
            name="dificuldade"
            rows={3}
            required
            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Qual é o seu nível de urgência?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {urgencyOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setUrgencia(opt)}
                className={`text-left text-sm px-4 py-2.5 rounded-lg border transition-colors ${
                  urgencia === opt
                    ? "border-primary bg-primary/10 text-primary font-medium"
                    : "border-input hover:border-primary/40"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            De 0 a 10, qual é o seu nível de comprometimento? <span className="font-bold text-primary">{compromisso}</span>
          </label>
          <input
            type="range"
            min={0}
            max={10}
            value={compromisso}
            onChange={(e) => setCompromisso(Number(e.target.value))}
            className="w-full accent-primary"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>0</span>
            <span>10</span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-primary-foreground font-bold text-base py-4 rounded-lg hover:bg-secondary transition-colors"
        >
          QUERO AGENDAR MINHA SESSÃO GRATUITA →
        </button>

        <p className="text-center text-xs text-muted-foreground flex items-center justify-center gap-1">
          <Lock size={12} /> Seus dados estão seguros. Não enviamos spam. Vagas limitadas por semana.
        </p>
      </form>
    </div>
  );
};

const Input = ({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-foreground mb-1">
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
    />
  </div>
);

const Select = ({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-foreground mb-1">
      {label}
    </label>
    <select
      id={name}
      name={name}
      required={required}
      className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
      defaultValue=""
    >
      <option value="" disabled>
        Selecione...
      </option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  </div>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="pt-2">
    <span className="text-xs font-bold uppercase tracking-wider text-primary">
      {children}
    </span>
    <div className="h-px bg-primary/20 mt-1" />
  </div>
);

export default LeadForm;

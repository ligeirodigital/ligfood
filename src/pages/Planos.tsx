import { Check, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PublicLayout from "@/components/public/PublicLayout";
import Seo from "@/components/Seo";
import { useState } from "react";

const plans = [
  {
    name: "Essencial",
    price: "69",
    desc: "Ideal para pequenos restaurantes.",
    features: [
      "Cardápio Digital",
      "Pedidos ilimitados",
      "Atendimento automático básico",
      "Dashboard",
      "Relatórios básicos",
      "Suporte por WhatsApp",
    ],
    cta: "Começar Agora",
    highlight: false,
  },
  {
    name: "Pro",
    price: "99",
    desc: "Para quem quer escalar as vendas.",
    features: [
      "Tudo do Essencial",
      "Atendimento inteligente com IA",
      "Integração com iFood e 99food",
      "Carrinho automático",
      "Upsell automático",
      "Cupons",
      "Relatórios avançados",
      "Personalização completa",
      "Prioridade no suporte",
    ],
    cta: "Assinar Plano Pro",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "149",
    desc: "Para redes e operações complexas.",
    features: [
      "Tudo do Pro",
      "Integração com iFood e 99food",
      "Multiunidades",
      "Multiatendentes",
      "API / Webhooks",
      "Integrações personalizadas",
      "Recursos exclusivos",
      "Suporte prioritário",
    ],
    cta: "Falar com especialista",
    highlight: false,
  },
];

const faqs = [
  { q: "Posso cancelar quando quiser?", a: "Sim. Sem multa, sem fidelidade. O cancelamento é feito no próprio painel." },
  { q: "Existe fidelidade?", a: "Não. Você paga mês a mês e cancela quando quiser." },
  { q: "Preciso instalar algum aplicativo?", a: "Não. O LigFood funciona 100% pelo navegador, em qualquer dispositivo." },
  { q: "Funciona em qualquer celular?", a: "Sim. O painel e o cardápio são totalmente responsivos." },
  { q: "Como conecto meu WhatsApp?", a: "Na aba WhatsApp do painel, basta escanear o QR Code, como no WhatsApp Web." },
  { q: "Existe período de teste?", a: "Sim, você pode testar a plataforma antes de assinar." },
  { q: "Como funciona o suporte?", a: "Suporte via WhatsApp em horário comercial, com prioridade para Pro e Enterprise." },
];

export default function Planos() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <PublicLayout>
      <Seo
        title="Planos e preços — LigFood"
        description="Compare os planos do LigFood e escolha o ideal para o seu delivery. Sem fidelidade, sem cartão de crédito para testar."
        path="/planos"
      />
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-10 text-center">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter">
          Escolha o plano ideal para <br /> seu restaurante.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Sem taxas ocultas. Sem comissão por pedido. Cancele quando quiser.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`relative rounded-3xl p-8 border-2 flex flex-col ${
              p.highlight
                ? "border-primary bg-primary/5 shadow-xl shadow-primary/10"
                : "border-border/50 bg-card/40"
            }`}
          >
            {p.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                <Star className="size-3 fill-current" /> Mais Popular
              </div>
            )}
            <h3 className="text-2xl font-black">{p.name}</h3>
            <p className="text-sm text-muted-foreground mt-2">{p.desc}</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-5xl font-black tracking-tighter">R${p.price}</span>
              <span className="text-muted-foreground font-bold">/mês</span>
            </div>
            <ul className="mt-8 space-y-3 flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className="size-4 text-success shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className={`mt-8 rounded-2xl h-12 font-black ${!p.highlight && "bg-secondary text-foreground hover:bg-secondary/80"}`}>
              <a href="https://app.gestorpedido.com/ligfood/register">{p.cta} <ArrowRight className="ml-2 size-4" /></a>
            </Button>
          </div>
        ))}
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-black tracking-tight text-center mb-10">Perguntas Frequentes</h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <button
              key={i}
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left rounded-2xl border border-border/50 bg-card/40 p-5 hover:border-primary/40 transition"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-bold">{f.q}</span>
                <span className="text-primary text-2xl leading-none">{open === i ? "−" : "+"}</span>
              </div>
              {open === i && <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>}
            </button>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}

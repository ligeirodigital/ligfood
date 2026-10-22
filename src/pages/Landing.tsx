import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Bot,
  ClipboardList,
  LayoutDashboard,
  BarChart3,
  Building2,
  ArrowRight,
  Check,
  X,
  Sparkles,
  Zap,
  ShieldCheck,
  Clock,
  Smartphone,
  Bike,
  CreditCard,
  Star,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import PublicLayout from "@/components/public/PublicLayout";
import Seo from "@/components/Seo";
import LeadForm from "@/components/public/LeadForm";
import PainelMockup from "@/components/mockups/PainelMockup";
import PedidosMockup from "@/components/mockups/PedidosMockup";
import CardapioMockup from "@/components/mockups/CardapioMockup";
import WhatsappMockup from "@/components/mockups/WhatsappMockup";
import DashboardMockup from "@/components/mockups/DashboardMockup";
import { SITE_URL } from "@/lib/site";

const showcase = [
  {
    tag: "Painel",
    titulo: "Um painel para comandar tudo",
    desc: "Faturamento, pedidos e ticket médio em uma tela só, atualizados em tempo real.",
    bullets: ["Visão geral em um clique", "Indicadores em tempo real", "Rápido e leve no navegador"],
    Comp: PainelMockup,
  },
  {
    tag: "Pedidos",
    titulo: "Kanban de pedidos em tempo real",
    desc: "Acompanhe cada pedido do recebimento à entrega, com timers e status claros para a equipe.",
    bullets: ["Timers por pedido", "Status arrastável entre colunas", "Alertas de atraso"],
    Comp: PedidosMockup,
  },
  {
    tag: "Cardápio",
    titulo: "Cardápio digital que vende mais",
    desc: "Categorias, busca e checkout rápido direto do celular do cliente.",
    bullets: ["Link próprio da loja", "Fotos, adicionais e promoções", "Checkout em poucos toques"],
    Comp: CardapioMockup,
  },
  {
    tag: "WhatsApp",
    titulo: "Atendimento automático no WhatsApp",
    desc: "Seu robô responde na hora, envia o cardápio e confirma pedidos 24h por dia.",
    bullets: ["Respostas instantâneas 24/7", "Cardápio enviado na conversa", "Pedido confirmado no painel"],
    Comp: WhatsappMockup,
  },
  {
    tag: "Relatórios",
    titulo: "Dashboards para decidir melhor",
    desc: "Vendas por dia, mix de produtos e ticket médio em gráficos simples.",
    bullets: ["Vendas por dia da semana", "Mix de produtos", "Horários de pico"],
    Comp: DashboardMockup,
  },
];

const REGISTER_URL = "https://app.gestorpedido.com/ligfood/register";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

const stats = [
  { value: "+1.200", label: "Pedidos processados por dia" },
  { value: "3 min", label: "Tempo médio de configuração" },
  { value: "24/7", label: "Atendimento automático" },
  { value: "99,9%", label: "Disponibilidade da plataforma" },
];

const clientes = [
  "Burger House",
  "Cantina Nonna",
  "Sushi Prime",
  "Açaí do Bairro",
  "Pizza Forno",
  "Grill & Co",
];

const steps = [
  { n: "01", t: "Cadastre seu restaurante", d: "Crie sua conta em segundos, sem cartão de crédito.", icon: Building2 },
  { n: "02", t: "Monte seu cardápio", d: "Categorias, produtos, fotos e adicionais.", icon: ShoppingBag },
  { n: "03", t: "Conecte seu WhatsApp", d: "Escaneie o QR Code e o robô assume o atendimento.", icon: Smartphone },
  { n: "04", t: "Comece a vender", d: "Pedidos entram direto no painel, 24 horas por dia.", icon: Zap },
];

const benefits = [
  { icon: Bot, title: "Atendimento automático", desc: "O robô responde, tira dúvidas e fecha pedidos sozinho no WhatsApp." },
  { icon: ShoppingBag, title: "Cardápio digital", desc: "Link próprio, bonito e rápido, atualizado em tempo real." },
  { icon: ClipboardList, title: "Gestão de pedidos", desc: "Kanban operacional com status, tempo de preparo e alertas." },
  { icon: LayoutDashboard, title: "Dashboard em tempo real", desc: "Faturamento, ticket médio e produtos campeões num só lugar." },
  { icon: BarChart3, title: "Relatórios avançados", desc: "Entenda horários de pico, recorrência e margem por produto." },
  { icon: Building2, title: "Multiempresa", desc: "Gerencie várias lojas com ambientes totalmente separados." },
];

const features = [
  { icon: Bike, title: "Módulo de entregadores", desc: "Atribua rotas, acompanhe entregas e calcule taxas por bairro." },
  { icon: CreditCard, title: "Pagamentos flexíveis", desc: "Pix, cartão na entrega e dinheiro com troco calculado." },
  { icon: Clock, title: "Horários e pausas", desc: "Abra e feche a loja automaticamente por dia da semana." },
  { icon: ShieldCheck, title: "Dados isolados", desc: "Cada restaurante com ambiente e permissões próprias." },
];

const comparativo = [
  { label: "Atendimento automático no WhatsApp", lig: true, outros: false },
  { label: "Cardápio digital com link próprio", lig: true, outros: true },
  { label: "Kanban de pedidos em tempo real", lig: true, outros: false },
  { label: "Sem comissão por pedido", lig: true, outros: false },
  { label: "Multiempresa incluso", lig: true, outros: false },
  { label: "Suporte humano por WhatsApp", lig: true, outros: false },
];

const faq = [
  { q: "Preciso instalar algo para usar?", a: "Não. O LigFood funciona 100% no navegador. Basta criar sua conta, montar o cardápio e conectar o WhatsApp pelo QR Code." },
  { q: "O LigFood cobra comissão por pedido?", a: "Não cobramos comissão. Você paga apenas a mensalidade do plano escolhido, independentemente do volume de vendas." },
  { q: "Posso testar antes de assinar?", a: "Sim. O teste é gratuito e não exige cartão de crédito. Você configura tudo e só decide depois." },
  { q: "Funciona com mais de uma loja?", a: "Sim. O modo multiempresa permite gerenciar várias unidades, cada uma com cardápio, pedidos e relatórios separados." },
  { q: "Meus clientes precisam baixar aplicativo?", a: "Não. Eles pedem pelo WhatsApp ou pelo link do seu cardápio digital, direto do navegador do celular." },
  { q: "Como funciona o suporte?", a: "Suporte humano por WhatsApp em horário comercial, além da documentação completa disponível no site." },
];

export default function Landing() {
  return (
    <PublicLayout>
      <Seo
        title="LigFood — Delivery e cardápio digital no WhatsApp"
        description="Automatize o atendimento do seu restaurante no WhatsApp: cardápio digital, pedidos em tempo real, relatórios e gestão completa de delivery."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "LigFood",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          url: `${SITE_URL}/`,
          inLanguage: "pt-BR",
          description:
            "Plataforma SaaS para restaurantes: cardápio digital, atendimento automático no WhatsApp, gestão de pedidos e relatórios em tempo real.",
        }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.16),transparent_60%)] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.35] pointer-events-none [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--border)/0.6) 1px,transparent 1px),linear-gradient(90deg,hsl(var(--border)/0.6) 1px,transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em]">
              <Sparkles className="size-3" /> Plataforma SaaS para restaurantes
            </span>
            <h1 className="mt-6 text-5xl md:text-6xl xl:text-[4.25rem] font-black tracking-tighter leading-[0.98]">
              Seu restaurante <br />
              vendendo sozinho <br />
              <span className="text-primary">no WhatsApp.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Automatize o atendimento, receba pedidos organizados em tempo real e aumente o faturamento com um sistema
              completo de delivery — sem comissão por venda.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="h-14 rounded-2xl px-8 font-black text-sm uppercase tracking-widest shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all">
                <a href={REGISTER_URL}>Testar gratuitamente <ArrowRight className="ml-2 size-4" /></a>
              </Button>
              <Button asChild size="lg" variant="secondary" className="h-14 rounded-2xl px-8 font-black text-sm uppercase tracking-widest border border-border/50">
                <Link to="/planos">Ver planos</Link>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground font-semibold">
              <span className="inline-flex items-center gap-1.5"><Check className="size-3.5 text-success" /> Sem cartão de crédito</span>
              <span className="inline-flex items-center gap-1.5"><Check className="size-3.5 text-success" /> Sem fidelidade</span>
              <span className="inline-flex items-center gap-1.5"><Star className="size-3.5 text-primary" /> Suporte humano</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <PainelMockup />
          </motion.div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="max-w-7xl mx-auto px-6 py-24 space-y-24">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Por dentro</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-black tracking-tight">Veja o LigFood por dentro</h2>
          <p className="mt-4 text-muted-foreground">Tudo o que sua operação precisa, em uma única plataforma.</p>
        </motion.div>
        {showcase.map((s, i) => (
          <div key={s.titulo} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div {...fadeUp} className={i % 2 ? "lg:order-2" : ""}>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">{s.tag}</p>
              <h3 className="mt-3 text-2xl md:text-4xl font-black tracking-tight">{s.titulo}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{s.desc}</p>
              <ul className="mt-6 space-y-2.5">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-sm font-semibold">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary">
                      <Check className="size-3" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`relative ${i % 2 ? "lg:order-1" : ""}`}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-8 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.16),transparent_70%)] blur-2xl"
              />
              <div className="relative transition-transform duration-500 ease-out hover:-translate-y-1 hover:scale-[1.02]">
                <s.Comp />
              </div>
            </motion.div>
          </div>
        ))}
      </section>

      {/* ESTATÍSTICAS */}
      <section className="border-b border-border/40 bg-card/20">
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div key={s.label} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.06 }} className="text-center">
              <div className="font-mono text-3xl md:text-4xl font-black text-primary">{s.value}</div>
              <p className="mt-2 text-xs md:text-sm text-muted-foreground font-semibold">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LOGOS DE CLIENTES */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <motion.p {...fadeUp} className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">
          Restaurantes que vendem com o LigFood
        </motion.p>
        <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {clientes.map((c) => (
            <div
              key={c}
              className="rounded-2xl border border-border/40 bg-card/30 py-4 px-3 text-center text-sm font-black tracking-tight text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
            >
              {c}
            </div>
          ))}
        </motion.div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-card/30 border-y border-border/40">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">Como funciona</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tighter">Em 4 passos você já vende.</h2>
            <p className="mt-4 text-muted-foreground">Do cadastro ao primeiro pedido em menos de 10 minutos.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-3xl border border-border/50 bg-background/40 p-6 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="size-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                    <s.icon className="size-5" />
                  </div>
                  <span className="font-mono text-primary text-sm font-black">{s.n}</span>
                </div>
                <div className="mt-4 font-black text-lg">{s.t}</div>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">Benefícios</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tighter">Tudo o que seu delivery precisa.</h2>
          <p className="mt-4 text-muted-foreground">Em uma única plataforma, sem gambiarras.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-3xl border border-border/50 bg-card/40 p-6 hover:border-primary/40 hover:-translate-y-1 transition-all"
            >
              <div className="size-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <b.icon className="size-6" />
              </div>
              <h3 className="text-xl font-black">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA INTERMEDIÁRIO */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <motion.div
          {...fadeUp}
          className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-primary/20"
        >
          <div className="flex items-center gap-6">
            <img
              src="/logo-ligfood-on-orange.svg"
              alt=""
              aria-hidden
              loading="lazy"
              width={160}
              height={82}
              className="hidden sm:block h-16 w-auto"
            />
            <div>
              <h3 className="text-2xl md:text-3xl font-black tracking-tighter">Configure seu cardápio hoje mesmo.</h3>
              <p className="mt-2 text-sm text-primary-foreground/85">Teste grátis, sem cartão de crédito e sem fidelidade.</p>
            </div>
          </div>
          <Button asChild size="lg" className="h-13 rounded-2xl px-8 font-black text-sm uppercase tracking-widest shrink-0 bg-[hsl(var(--brand-black))] text-white hover:bg-[hsl(var(--brand-black))]/90">
            <a href={REGISTER_URL}>Começar grátis <ArrowRight className="ml-2 size-4" /></a>
          </Button>
        </motion.div>
      </section>

      <LeadForm />

      {/* RECURSOS */}
      <section className="bg-card/30 border-y border-border/40">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">Recursos</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tighter">Feito para a operação real.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex gap-4 rounded-3xl border border-border/50 bg-background/40 p-6 hover:border-primary/40 transition-colors"
              >
                <div className="size-12 shrink-0 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <f.icon className="size-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black">{f.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARATIVO */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <motion.div {...fadeUp} className="text-center mb-12">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">Comparativo</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tighter">Por que escolher o LigFood?</h2>
        </motion.div>
        <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="overflow-hidden rounded-3xl border border-border/50 bg-card/40">
          <div className="grid grid-cols-[1fr_auto_auto] gap-4 px-6 py-4 border-b border-border/40 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
            <span>Recurso</span>
            <span className="w-20 text-center text-primary">LigFood</span>
            <span className="w-20 text-center">Outros</span>
          </div>
          {comparativo.map((row) => (
            <div key={row.label} className="grid grid-cols-[1fr_auto_auto] gap-4 px-6 py-4 border-b border-border/20 last:border-0 items-center">
              <span className="text-sm font-semibold">{row.label}</span>
              <span className="w-20 flex justify-center">
                {row.lig ? <Check className="size-5 text-success" /> : <X className="size-5 text-muted-foreground" />}
              </span>
              <span className="w-20 flex justify-center">
                {row.outros ? <Check className="size-5 text-success" /> : <X className="size-5 text-muted-foreground" />}
              </span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="bg-card/30 border-y border-border/40">
        <div className="max-w-3xl mx-auto px-6 py-24">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">FAQ</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tighter">Perguntas frequentes</h2>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }}>
            <Accordion type="single" collapsible className="space-y-3">
              {faq.map((item, i) => (
                <AccordionItem
                  key={item.q}
                  value={`faq-${i}`}
                  className="rounded-2xl border border-border/50 bg-background/40 px-5"
                >
                  <AccordionTrigger className="text-left font-black hover:no-underline">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <motion.div
          {...fadeUp}
          className="relative overflow-hidden rounded-[2.5rem] border-2 border-primary/40 bg-gradient-to-br from-primary/20 via-card to-card p-12 md:p-16 text-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.2),transparent_70%)] pointer-events-none" />
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Pronto para vender mais?</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Comece hoje mesmo. Sem cartão de crédito, sem fidelidade e sem comissão por pedido.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="h-14 rounded-2xl px-10 font-black text-sm uppercase tracking-widest shadow-xl shadow-primary/40">
                <a href={REGISTER_URL}>Começar agora <ArrowRight className="ml-2 size-4" /></a>
              </Button>
              <Button asChild size="lg" variant="secondary" className="h-14 rounded-2xl px-10 font-black text-sm uppercase tracking-widest border border-border/50">
                <Link to="/contato">Falar com especialista</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </PublicLayout>
  );
}

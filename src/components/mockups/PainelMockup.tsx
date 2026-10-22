import { motion } from "framer-motion";
import { LayoutDashboard, ClipboardList, ShoppingBag, Bot, BarChart3, Bell } from "lucide-react";
import { BrowserFrame } from "./Frames";

const nav = [
  { icon: LayoutDashboard, label: "Painel", active: true },
  { icon: ClipboardList, label: "Pedidos" },
  { icon: ShoppingBag, label: "Cardápio" },
  { icon: Bot, label: "WhatsApp" },
  { icon: BarChart3, label: "Relatórios" },
];

const kpis = [
  { label: "Faturamento hoje", value: "R$ 4.280", delta: "+18%" },
  { label: "Pedidos", value: "132", delta: "+9%" },
  { label: "Ticket médio", value: "R$ 32,40", delta: "+4%" },
];

/** Mockup do painel administrativo — apenas SVG/CSS. */
export default function PainelMockup() {
  return (
    <BrowserFrame url="app.ligfood.com/painel">
      <div className="flex gap-3">
        <aside className="hidden w-32 shrink-0 flex-col gap-1 sm:flex" aria-hidden>
          {nav.map((n) => (
            <div
              key={n.label}
              className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-[10px] font-bold ${
                n.active ? "bg-primary/15 text-primary" : "text-muted-foreground"
              }`}
            >
              <n.icon className="size-3.5" />
              {n.label}
            </div>
          ))}
        </aside>

        <div className="min-w-0 flex-1 space-y-3">
          <div className="flex items-center justify-between">
            <div className="h-2.5 w-24 rounded-full bg-foreground/25" />
            <div className="flex items-center gap-2">
              <Bell className="size-3.5 text-muted-foreground" />
              <div className="size-5 rounded-full bg-primary/30" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {kpis.map((k, i) => (
              <motion.div
                key={k.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i }}
                className="rounded-xl border border-border/40 bg-card/70 p-2.5"
              >
                <div className="text-[8px] font-bold uppercase tracking-wider text-muted-foreground">{k.label}</div>
                <div className="mt-1 font-mono text-sm font-black">{k.value}</div>
                <div className="text-[9px] font-bold text-success">{k.delta}</div>
              </motion.div>
            ))}
          </div>

          <div className="rounded-xl border border-border/40 bg-card/60 p-3">
            <div className="mb-2 h-2 w-20 rounded-full bg-foreground/20" />
            <svg viewBox="0 0 300 90" className="h-24 w-full" role="img" aria-label="Gráfico de vendas da semana">
              <defs>
                <linearGradient id="painelArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[0, 22, 44, 66].map((y) => (
                <line key={y} x1="0" y1={y + 10} x2="300" y2={y + 10} stroke="hsl(var(--border))" strokeWidth="0.5" />
              ))}
              <motion.path
                d="M0,70 L40,58 L80,64 L120,40 L160,46 L200,26 L240,32 L300,12 L300,90 L0,90 Z"
                fill="url(#painelArea)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              <motion.path
                d="M0,70 L40,58 L80,64 L120,40 L160,46 L200,26 L240,32 L300,12"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: "easeOut" }}
              />
            </svg>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

import { motion } from "framer-motion";
import { Plus, Search } from "lucide-react";
import { PhoneFrame } from "./Frames";

const categorias = ["Destaques", "Burgers", "Pizzas", "Bebidas"];

const itens = [
  { nome: "Smash Duplo", desc: "2 blends, cheddar e bacon", preco: "R$ 34,90" },
  { nome: "Pizza Pepperoni", desc: "Massa artesanal, 8 fatias", preco: "R$ 58,00" },
  { nome: "Combo Família", desc: "2 burgers + fritas + refri", preco: "R$ 89,90" },
];

/** Ilustração vetorial de prato — evita imagens pesadas. */
function DishGlyph({ hue = 0 }: { hue?: number }) {
  return (
    <svg viewBox="0 0 48 48" className="size-11 shrink-0" role="presentation" aria-hidden>
      <circle cx="24" cy="24" r="22" fill="hsl(var(--primary) / 0.12)" />
      <circle cx="24" cy="24" r="14" fill={`hsl(${20 + hue} 85% 55% / 0.85)`} />
      <path d="M10 28 q14 -10 28 0" stroke="hsl(var(--background))" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="18" cy="19" r="2" fill="hsl(var(--background) / 0.8)" />
      <circle cx="29" cy="17" r="1.6" fill="hsl(var(--background) / 0.8)" />
    </svg>
  );
}

/** Mockup do cardápio digital em um celular. */
export default function CardapioMockup() {
  return (
    <PhoneFrame>
      <div className="space-y-2.5 p-3 pt-6">
        <div className="flex items-center gap-2">
          <div className="size-7 rounded-lg bg-primary/20" />
          <div className="flex-1">
            <div className="h-2 w-20 rounded-full bg-foreground/30" />
            <div className="mt-1 h-1.5 w-14 rounded-full bg-success/50" />
          </div>
        </div>

        <div className="flex items-center gap-1.5 rounded-lg border border-border/50 bg-secondary/50 px-2 py-1.5">
          <Search className="size-3 text-muted-foreground" />
          <span className="text-[9px] text-muted-foreground">Buscar no cardápio</span>
        </div>

        <div className="flex gap-1.5 overflow-hidden">
          {categorias.map((c, i) => (
            <span
              key={c}
              className={`whitespace-nowrap rounded-full px-2 py-1 text-[8px] font-bold ${
                i === 0 ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
              }`}
            >
              {c}
            </span>
          ))}
        </div>

        <div className="space-y-2">
          {itens.map((it, i) => (
            <motion.div
              key={it.nome}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i }}
              className="flex items-center gap-2 rounded-xl border border-border/40 bg-card/70 p-2"
            >
              <DishGlyph hue={i * 14} />
              <div className="min-w-0 flex-1">
                <div className="truncate text-[10px] font-black">{it.nome}</div>
                <div className="truncate text-[8px] text-muted-foreground">{it.desc}</div>
                <div className="mt-0.5 font-mono text-[9px] font-black text-primary">{it.preco}</div>
              </div>
              <span className="flex size-5 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Plus className="size-3" />
              </span>
            </motion.div>
          ))}
        </div>

        <div className="rounded-xl bg-primary px-3 py-2 text-center text-[9px] font-black uppercase tracking-widest text-primary-foreground">
          Finalizar pedido · R$ 92,90
        </div>
      </div>
    </PhoneFrame>
  );
}

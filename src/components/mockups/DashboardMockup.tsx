import { motion } from "framer-motion";
import { BrowserFrame } from "./Frames";

const barras = [38, 55, 42, 70, 61, 88, 76];
const dias = ["S", "T", "Q", "Q", "S", "S", "D"];
const donut = [
  { label: "Burgers", value: 46, color: "hsl(var(--primary))" },
  { label: "Pizzas", value: 30, color: "hsl(var(--success))" },
  { label: "Bebidas", value: 24, color: "hsl(var(--muted-foreground))" },
];

/** Mockup de dashboards e relatórios com gráficos SVG. */
export default function DashboardMockup() {
  let offset = 0;
  const raio = 26;
  const circ = 2 * Math.PI * raio;

  return (
    <BrowserFrame url="app.ligfood.com/relatorios">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1.4fr_1fr]">
        <div className="rounded-xl border border-border/40 bg-card/60 p-3">
          <div className="text-[9px] font-black uppercase tracking-wider text-muted-foreground">
            Vendas por dia da semana
          </div>
          <div className="mt-3 flex h-28 gap-2">
            {barras.map((b, i) => (
              <div key={i} className="flex h-full flex-1 flex-col items-center justify-end gap-1">
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: `${b}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="w-full rounded-t-md bg-gradient-to-t from-primary/30 to-primary"
                />
                <span className="text-[8px] font-bold text-muted-foreground">{dias[i]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-border/40 bg-card/60 p-3">
          <div className="text-[9px] font-black uppercase tracking-wider text-muted-foreground">Mix de produtos</div>
          <div className="mt-2 flex items-center gap-3">
            <svg viewBox="0 0 64 64" className="size-20 -rotate-90" role="img" aria-label="Distribuição de vendas por categoria">
              {donut.map((d) => {
                const dash = (d.value / 100) * circ;
                const el = (
                  <circle
                    key={d.label}
                    cx="32"
                    cy="32"
                    r={raio}
                    fill="none"
                    stroke={d.color}
                    strokeWidth="9"
                    strokeDasharray={`${dash} ${circ - dash}`}
                    strokeDashoffset={-offset}
                  />
                );
                offset += dash;
                return el;
              })}
            </svg>
            <ul className="space-y-1">
              {donut.map((d) => (
                <li key={d.label} className="flex items-center gap-1.5 text-[9px] font-bold text-muted-foreground">
                  <span className="size-2 rounded-full" style={{ background: d.color }} />
                  {d.label} <span className="font-mono text-foreground">{d.value}%</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

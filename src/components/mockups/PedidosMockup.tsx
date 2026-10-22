import { motion } from "framer-motion";
import { Clock, Bike } from "lucide-react";
import { BrowserFrame } from "./Frames";

const colunas = [
  {
    titulo: "Novos",
    cor: "bg-primary",
    cards: [
      { id: "#1042", cliente: "Marina S.", itens: "2 itens · R$ 48,90", tempo: "1 min" },
      { id: "#1041", cliente: "Rafael T.", itens: "1 item · R$ 29,00", tempo: "3 min" },
    ],
  },
  {
    titulo: "Em produção",
    cor: "bg-warning",
    cards: [
      { id: "#1039", cliente: "Bruna M.", itens: "4 itens · R$ 92,50", tempo: "8 min" },
      { id: "#1038", cliente: "Caio L.", itens: "2 itens · R$ 51,00", tempo: "12 min" },
    ],
  },
  {
    titulo: "Em entrega",
    cor: "bg-success",
    cards: [{ id: "#1035", cliente: "Diego P.", itens: "3 itens · R$ 74,30", tempo: "22 min", rota: true }],
  },
];

/** Mockup do Kanban de pedidos em tempo real. */
export default function PedidosMockup() {
  return (
    <BrowserFrame url="app.ligfood.com/pedidos">
      <div className="grid grid-cols-3 gap-2">
        {colunas.map((col, i) => (
          <div key={col.titulo} className="rounded-xl border border-border/40 bg-secondary/40 p-2">
            <div className="mb-2 flex items-center gap-1.5">
              <span className={`size-1.5 rounded-full ${col.cor}`} />
              <span className="truncate text-[9px] font-black uppercase tracking-wider text-muted-foreground">
                {col.titulo}
              </span>
            </div>
            <div className="space-y-2">
              {col.cards.map((c, j) => (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i + 0.08 * j }}
                  className="rounded-lg border border-border/40 bg-card p-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] font-black text-primary">{c.id}</span>
                    <span className="inline-flex items-center gap-0.5 text-[8px] font-bold text-muted-foreground">
                      <Clock className="size-2.5" />
                      {c.tempo}
                    </span>
                  </div>
                  <div className="mt-1 truncate text-[10px] font-bold">{c.cliente}</div>
                  <div className="truncate text-[9px] text-muted-foreground">{c.itens}</div>
                  {"rota" in c && c.rota && (
                    <div className="mt-1.5 inline-flex items-center gap-1 rounded-md bg-success/15 px-1.5 py-0.5 text-[8px] font-bold text-success">
                      <Bike className="size-2.5" /> A caminho
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </BrowserFrame>
  );
}

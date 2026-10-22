import { motion } from "framer-motion";
import { Bot, Check } from "lucide-react";
import { PhoneFrame } from "./Frames";

const mensagens = [
  { de: "cliente", texto: "Oi! Vocês estão abertos?" },
  { de: "bot", texto: "Estamos sim 🍔 Aqui está nosso cardápio digital." },
  { de: "cliente", texto: "Quero 1 Smash Duplo e uma Coca." },
  { de: "bot", texto: "Anotado! Total R$ 41,90. Entrega em ~35 min. Confirmar?" },
  { de: "cliente", texto: "Confirmar ✅" },
];

/** Mockup da conversa automática no WhatsApp. */
export default function WhatsappMockup() {
  return (
    <PhoneFrame>
      <div className="flex items-center gap-2 border-b border-border/40 bg-secondary/60 px-3 pb-2 pt-6">
        <span className="flex size-7 items-center justify-center rounded-full bg-success/20 text-success">
          <Bot className="size-3.5" />
        </span>
        <div>
          <div className="text-[10px] font-black">Atendimento LigFood</div>
          <div className="text-[8px] font-bold text-success">online · responde na hora</div>
        </div>
      </div>

      <div className="space-y-2 p-3">
        {mensagens.map((m, i) => (
          <motion.div
            key={m.texto}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 * i }}
            className={`flex ${m.de === "cliente" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-2.5 py-1.5 text-[9px] leading-snug ${
                m.de === "cliente"
                  ? "rounded-br-sm bg-success/20 text-foreground"
                  : "rounded-bl-sm bg-secondary text-muted-foreground"
              }`}
            >
              {m.texto}
              {m.de === "cliente" && <Check className="ml-1 inline size-2.5 text-success" />}
            </div>
          </motion.div>
        ))}
        <div className="flex items-center gap-1 pl-1" aria-hidden>
          {[0, 1, 2].map((d) => (
            <motion.span
              key={d}
              className="size-1.5 rounded-full bg-muted-foreground/60"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: d * 0.2 }}
            />
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}

import { useState } from "react";
import { z } from "zod";
import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100, "Nome muito longo"),
  whatsapp: z
    .string()
    .transform((v) => v.replace(/\D/g, ""))
    .refine((v) => v.length >= 10 && v.length <= 13, "WhatsApp inválido (com DDD)"),
});

function maskPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

export default function LeadForm() {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const parsed = schema.safeParse({ name, whatsapp });
    if (!parsed.success) {
      setError(parsed.error.issues[0].message);
      return;
    }
    if (!supabase) {
      setError("Não foi possível enviar agora. Fale com a gente pelo WhatsApp (85) 99275-3337.");
      return;
    }
    setLoading(true);
    const { error: err } = await supabase.from("lead_submissions").insert(parsed.data);
    setLoading(false);
    if (err) {
      setError("Não foi possível enviar. Tente novamente.");
      return;
    }
    setDone(true);
  }

  return (
    <section className="max-w-5xl mx-auto px-6 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl border border-primary/30 bg-card/40 p-8 md:p-10 grid gap-8 md:grid-cols-2 items-center"
      >
        <div>
          <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">Ainda pensando?</span>
          <h3 className="mt-3 text-2xl md:text-3xl font-black tracking-tighter">Receba uma demonstração no WhatsApp.</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Deixe seu nome e WhatsApp e um especialista mostra como o LigFood funciona no seu restaurante.
          </p>
        </div>
        {done ? (
          <div role="status" className="flex items-center gap-3 rounded-2xl border border-success/40 bg-success/10 p-5 font-semibold">
            <Check className="size-5 text-success shrink-0" /> Recebemos seu contato! Em breve falaremos com você.
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-3" noValidate>
            <Input aria-label="Seu nome" placeholder="Seu nome" value={name} maxLength={100} onChange={(e) => setName(e.target.value)} />
            <Input
              aria-label="WhatsApp com DDD"
              placeholder="(11) 99999-9999"
              inputMode="tel"
              value={whatsapp}
              onChange={(e) => setWhatsapp(maskPhone(e.target.value))}
            />
            {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
            <Button type="submit" size="lg" disabled={loading} className="w-full h-13 rounded-2xl font-black text-sm uppercase tracking-widest">
              <MessageCircle className="mr-2 size-4" /> {loading ? "Enviando..." : "Quero uma demonstração"}
            </Button>
          </form>
        )}
      </motion.div>
    </section>
  );
}

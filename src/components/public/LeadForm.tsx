import { useState } from "react";
import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { maskPhone, saveLead, whatsappUrl } from "@/lib/leads";
import { trackEvent } from "@/lib/tracking";

export default function LeadForm() {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const err = await saveLead({ name, whatsapp }, "demo");
    setLoading(false);
    if (err) {
      setError(err);
      return;
    }
    setDone(true);
  }

  const firstName = name.trim().split(/\s+/)[0];
  const followUp = whatsappUrl(
    `Olá! Sou ${name.trim()} e acabei de pedir uma demonstração do LigFood pelo site.`,
  );

  return (
    <section id="demonstracao" className="max-w-5xl mx-auto px-6 pb-24 scroll-mt-28">
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
          <div role="status" className="space-y-4 rounded-2xl border border-success/40 bg-success/10 p-5">
            <p className="flex items-start gap-3 font-semibold">
              <Check className="mt-0.5 size-5 shrink-0 text-success" />
              Pronto{firstName ? `, ${firstName}` : ""}! Recebemos seu contato.
            </p>
            <p className="text-sm text-muted-foreground">
              Quer adiantar? Mande um oi agora e já começamos sua demonstração.
            </p>
            <Button asChild size="lg" className="w-full h-12 rounded-2xl font-black bg-[#25D366] text-white hover:bg-[#25D366]/90">
              <a
                href={followUp}
                target="_blank"
                rel="noopener"
                onClick={() => trackEvent("whatsapp_click", { origin: "pos_demo" })}
              >
                <MessageCircle className="mr-2 size-4" /> Falar agora no WhatsApp
              </a>
            </Button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-3" noValidate>
            <Input
              aria-label="Seu nome"
              placeholder="Seu nome"
              autoComplete="name"
              value={name}
              maxLength={100}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              aria-label="WhatsApp com DDD"
              placeholder="(85) 99999-9999"
              inputMode="tel"
              autoComplete="tel-national"
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

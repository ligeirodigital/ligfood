import PublicLayout from "@/components/public/PublicLayout";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, AtSign, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contato() {
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const nome = form.get("nome");
    const msg = form.get("mensagem");
    setLoading(true);
    const url = `https://wa.me/5585992753337?text=${encodeURIComponent(`Olá, sou ${nome}. ${msg}`)}`;
    window.open(url, "_blank");
    setLoading(false);
    toast.success("Mensagem preparada no WhatsApp!");
  };

  return (
    <PublicLayout>
      <Seo
        title="Contato — LigFood"
        description="Fale com a equipe LigFood pelo WhatsApp, Instagram ou e-mail e tire suas dúvidas sobre a plataforma de delivery."
        path="/contato"
      />
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">Contato</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-black tracking-tighter">
            Fale com a gente.
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Tire suas dúvidas, peça uma demonstração ou converse com nosso time.
          </p>

          <div className="mt-10 space-y-4">
            <a href="https://wa.me/5585992753337" className="flex items-center gap-3 rounded-2xl border border-border/50 bg-card/40 p-4 hover:border-success/40">
              <div className="size-10 rounded-xl bg-success/10 text-success flex items-center justify-center"><MessageCircle className="size-5" /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">WhatsApp</div>
                <div className="font-bold">(85) 99275-3337</div>
              </div>
            </a>
            <a href="https://instagram.com/ligeirodigital" className="flex items-center gap-3 rounded-2xl border border-border/50 bg-card/40 p-4 hover:border-primary/40">
              <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center"><AtSign className="size-5" /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Instagram</div>
                <div className="font-bold">@ligeirodigital</div>
              </div>
            </a>
          </div>
        </div>

        <form onSubmit={submit} className="rounded-3xl border border-border/50 bg-card/40 p-8 space-y-4">
          <div>
            <Label htmlFor="nome">Nome</Label>
            <Input id="nome" name="nome" required className="mt-1" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required className="mt-1" />
          </div>
          <div>
            <Label htmlFor="telefone">Telefone</Label>
            <Input id="telefone" name="telefone" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="mensagem">Mensagem</Label>
            <Textarea id="mensagem" name="mensagem" required rows={5} className="mt-1" />
          </div>
          <Button type="submit" size="lg" disabled={loading} className="w-full rounded-2xl font-black">
            <Mail className="mr-2 size-4" /> Enviar Mensagem
          </Button>
        </form>
      </section>
    </PublicLayout>
  );
}

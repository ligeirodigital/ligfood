import { createContext, useCallback, useContext, useState, type ReactNode, type MouseEvent } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { REGISTER_URL, maskPhone, saveLead, whatsappUrl } from "@/lib/leads";
import { trackEvent, withAttribution } from "@/lib/tracking";

type Ctx = { openTrial: (origin: string) => void };
const LeadCaptureContext = createContext<Ctx | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export function useLeadCapture() {
  const ctx = useContext(LeadCaptureContext);
  if (!ctx) throw new Error("useLeadCapture precisa estar dentro de <LeadCaptureProvider>");
  return ctx;
}

export function LeadCaptureProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [origin, setOrigin] = useState("");
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const openTrial = useCallback((o: string) => {
    setOrigin(o);
    setError(null);
    setOpen(true);
    trackEvent("trial_open", { origin: o });
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const err = await saveLead({ name, whatsapp }, "teste");
    if (err) {
      setLoading(false);
      setError(err);
      return;
    }
    trackEvent("trial_redirect", { origin });
    // pequena pausa para os pixels registrarem o evento antes de sair da página
    setTimeout(() => {
      window.location.href = withAttribution(REGISTER_URL);
    }, 350);
  }

  return (
    <LeadCaptureContext.Provider value={{ openTrial }}>
      {children}
      <Dialog.Root open={open} onOpenChange={(v) => !loading && setOpen(v)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-primary/30 bg-card p-6 sm:p-8 shadow-2xl focus:outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95">
            <Dialog.Close
              className="absolute right-4 top-4 rounded-lg p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground"
              aria-label="Fechar"
            >
              <X className="size-4" />
            </Dialog.Close>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Teste grátis</span>
            <Dialog.Title className="mt-2 font-display text-2xl font-black tracking-tighter">
              Crie sua conta em 1 minuto
            </Dialog.Title>
            <Dialog.Description className="mt-2 text-sm text-muted-foreground">
              Informe seu nome e WhatsApp para a gente te ajudar a configurar. Em seguida você vai para o cadastro.
            </Dialog.Description>

            <form onSubmit={onSubmit} className="mt-6 space-y-3" noValidate>
              <Input
                aria-label="Seu nome"
                placeholder="Seu nome"
                autoComplete="name"
                value={name}
                maxLength={100}
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
              <Input
                aria-label="WhatsApp com DDD"
                placeholder="WhatsApp com DDD"
                inputMode="tel"
                autoComplete="tel-national"
                value={whatsapp}
                onChange={(e) => setWhatsapp(maskPhone(e.target.value))}
              />
              {error && (
                <p role="alert" className="text-sm text-destructive">
                  {error}
                </p>
              )}
              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full h-13 rounded-2xl font-black text-sm uppercase tracking-widest"
              >
                {loading ? "Abrindo cadastro..." : "Continuar para o cadastro"} <ArrowRight className="ml-1 size-4" />
              </Button>
            </form>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              Sem cartão de crédito · Sem fidelidade
            </p>
            <a
              href={whatsappUrl("Olá! Quero testar o LigFood e prefiro falar por aqui.")}
              target="_blank"
              rel="noopener"
              onClick={() => trackEvent("whatsapp_click", { origin: "modal_teste" })}
              className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-muted-foreground hover:text-success"
            >
              <MessageCircle className="size-4" /> Prefiro falar pelo WhatsApp
            </a>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </LeadCaptureContext.Provider>
  );
}

/**
 * Link de "teste grátis": abre o formulário rápido antes do cadastro.
 * Mantém o href real para quem abre em nova aba (ctrl/cmd+clique).
 */
export function TrialLink({
  origin,
  children,
  className,
}: {
  origin: string;
  children: ReactNode;
  className?: string;
}) {
  const { openTrial } = useLeadCapture();
  function onClick(e: MouseEvent<HTMLAnchorElement>) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    openTrial(origin);
  }
  return (
    <a href={REGISTER_URL} onClick={onClick} className={className}>
      {children}
    </a>
  );
}

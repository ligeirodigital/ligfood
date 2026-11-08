import { ArrowRight } from "lucide-react";
import { whatsappUrl } from "@/lib/leads";
import { trackEvent } from "@/lib/tracking";
import { TrialLink } from "./LeadCapture";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.45 9.45 0 0 1-4.82-1.32l-.35-.2-3.58.94.96-3.49-.23-.36a9.43 9.43 0 0 1-1.45-5.03c0-5.22 4.25-9.47 9.48-9.47 2.53 0 4.9.99 6.7 2.78a9.4 9.4 0 0 1 2.77 6.7c0 5.22-4.25 9.46-9.47 9.46zm8.06-17.52A11.3 11.3 0 0 0 12.04.66C5.76.66.65 5.77.64 12.05c0 2 .52 3.97 1.52 5.7L.55 23.66l6.05-1.59a11.4 11.4 0 0 0 5.44 1.39h.01c6.28 0 11.39-5.11 11.39-11.39 0-3.04-1.18-5.9-3.34-8.06z" />
    </svg>
  );
}

const WHATS_MSG = "Olá! Vim pelo site e quero conhecer o LigFood.";

/** Botão flutuante (desktop) e barra fixa com WhatsApp + teste grátis (celular). */
export default function WhatsAppCTA() {
  return (
    <>
      <a
        href={whatsappUrl(WHATS_MSG)}
        target="_blank"
        rel="noopener"
        onClick={() => trackEvent("whatsapp_click", { origin: "flutuante" })}
        aria-label="Falar com o LigFood no WhatsApp"
        className="group fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-2 rounded-full bg-[#25D366] pl-4 pr-5 py-3 text-sm font-bold text-white shadow-xl shadow-black/40 transition-transform hover:-translate-y-0.5"
      >
        <WhatsAppIcon className="size-6" />
        Fale com a gente
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-border/60 bg-background/95 p-3 backdrop-blur-xl md:hidden">
        <a
          href={whatsappUrl(WHATS_MSG)}
          target="_blank"
          rel="noopener"
          onClick={() => trackEvent("whatsapp_click", { origin: "barra_mobile" })}
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] text-sm font-bold text-white"
        >
          <WhatsAppIcon className="size-5" /> WhatsApp
        </a>
        <TrialLink
          origin="barra_mobile"
          className="flex h-12 flex-1 items-center justify-center gap-1.5 rounded-xl bg-primary text-sm font-bold text-primary-foreground"
        >
          Testar grátis <ArrowRight className="size-4" />
        </TrialLink>
      </div>
    </>
  );
}

export { WhatsAppIcon };

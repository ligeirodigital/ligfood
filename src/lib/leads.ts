import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { getAttribution, trackEvent } from "@/lib/tracking";

export const REGISTER_URL = "https://app.gestorpedido.com/ligfood/register";
export const LOGIN_URL = "https://app.gestorpedido.com/ligfood/login";
export const WHATSAPP_NUMBER = "5585992753337";
export const WHATSAPP_DISPLAY = "(85) 99275-3337";

export function whatsappUrl(message = "Olá! Vim pelo site e quero conhecer o LigFood.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const leadSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100, "Nome muito longo"),
  whatsapp: z
    .string()
    .transform((v) => v.replace(/\D/g, ""))
    .refine((v) => v.length >= 10 && v.length <= 13, "WhatsApp inválido (com DDD)"),
});

export function maskPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

export type LeadIntent = "demo" | "teste";

/**
 * Valida e salva o lead com a origem do visitante.
 * Retorna `null` em caso de sucesso ou a mensagem de erro para mostrar ao usuário.
 */
export async function saveLead(input: { name: string; whatsapp: string }, intent: LeadIntent): Promise<string | null> {
  const parsed = leadSchema.safeParse(input);
  if (!parsed.success) return parsed.error.issues[0].message;
  if (!supabase) return `Não foi possível enviar agora. Fale com a gente pelo WhatsApp ${WHATSAPP_DISPLAY}.`;

  const a = getAttribution();
  const { error } = await supabase.from("lead_submissions").insert({
    ...parsed.data,
    source: "landing",
    intent,
    page: typeof window !== "undefined" ? window.location.pathname.slice(0, 300) : null,
    referrer: a.referrer ?? null,
    utm_source: a.utm_source ?? null,
    utm_medium: a.utm_medium ?? null,
    utm_campaign: a.utm_campaign ?? null,
    utm_content: a.utm_content ?? null,
    utm_term: a.utm_term ?? null,
  });
  if (error) return "Não foi possível enviar. Tente novamente.";

  trackEvent("lead", { intent, source: a.utm_source ?? "direto" });
  return null;
}

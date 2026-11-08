/**
 * Medição de conversões.
 * - Meta Pixel e GA4 só carregam se os IDs estiverem definidos (VITE_META_PIXEL_ID, VITE_GA4_ID).
 * - Vercel Web Analytics é montado em App.tsx.
 * - Origem do visitante (UTMs, referrer, página de entrada) é guardada no primeiro acesso
 *   e enviada junto com cada lead.
 */
import { track as vercelTrack } from "@vercel/analytics";

const META_PIXEL_ID = (import.meta.env.VITE_META_PIXEL_ID as string | undefined)?.trim();
const GA4_ID = (import.meta.env.VITE_GA4_ID as string | undefined)?.trim();

type AnyFn = (...args: unknown[]) => void;
declare global {
  interface Window {
    fbq?: AnyFn & { queue?: unknown[]; loaded?: boolean; version?: string; callMethod?: AnyFn; push?: AnyFn };
    _fbq?: unknown;
    dataLayer?: unknown[];
    gtag?: AnyFn;
  }
}

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;
const ATTR_KEY = "ligfood_attribution";

export type Attribution = Partial<Record<(typeof UTM_KEYS)[number], string>> & {
  referrer?: string;
  page?: string;
};

function safeGet(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSet(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* navegação privada ou armazenamento bloqueado */
  }
}

let memoryAttribution: Attribution | null = null;

/** Guarda a origem do visitante. Uma visita nova com UTMs substitui a anterior. */
export function captureAttribution() {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const fromUrl: Attribution = {};
  for (const k of UTM_KEYS) {
    const v = params.get(k);
    if (v) fromUrl[k] = v.slice(0, 150);
  }
  // fbclid / gclid indicam anúncio mesmo sem UTM
  if (!fromUrl.utm_source && params.get("fbclid")) fromUrl.utm_source = "facebook";
  if (!fromUrl.utm_source && params.get("gclid")) fromUrl.utm_source = "google";

  const hasNew = Object.keys(fromUrl).length > 0;
  const stored = safeGet(ATTR_KEY);
  if (stored && !hasNew) {
    try {
      memoryAttribution = JSON.parse(stored);
      return;
    } catch {
      /* ignora valor corrompido */
    }
  }

  const ref = document.referrer && !document.referrer.includes(window.location.host) ? document.referrer : "";
  memoryAttribution = {
    ...fromUrl,
    referrer: ref ? ref.slice(0, 500) : undefined,
    page: (window.location.pathname + window.location.search).slice(0, 300),
  };
  safeSet(ATTR_KEY, JSON.stringify(memoryAttribution));
}

export function getAttribution(): Attribution {
  if (!memoryAttribution) captureAttribution();
  return memoryAttribution ?? {};
}

/** Acrescenta as UTMs guardadas a um link externo (ex.: página de cadastro). */
export function withAttribution(url: string): string {
  const a = getAttribution();
  try {
    const u = new URL(url);
    for (const k of UTM_KEYS) if (a[k] && !u.searchParams.has(k)) u.searchParams.set(k, a[k]!);
    return u.toString();
  } catch {
    return url;
  }
}

function loadScript(src: string) {
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

let initialized = false;

export function initTracking() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;
  captureAttribution();

  if (META_PIXEL_ID && !window.fbq) {
    const fbq = function (...args: unknown[]) {
      if (fbq.callMethod) fbq.callMethod(...args);
      else fbq.queue!.push(args);
    } as NonNullable<Window["fbq"]>;
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = [];
    window.fbq = fbq;
    window._fbq = fbq;
    loadScript("https://connect.facebook.net/en_US/fbevents.js");
    window.fbq("init", META_PIXEL_ID);
  }

  if (GA4_ID && !window.gtag) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function (...args: unknown[]) {
      // gtag espera o objeto `arguments`
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
      void args;
    };
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`);
    window.gtag("js", new Date());
    window.gtag("config", GA4_ID, { send_page_view: false });
  }
}

export function trackPageView(path: string) {
  window.fbq?.("track", "PageView");
  window.gtag?.("event", "page_view", { page_path: path, page_location: window.location.href });
}

type EventName = "lead" | "whatsapp_click" | "trial_open" | "trial_redirect";

/** Envia um evento para todas as ferramentas configuradas. */
export function trackEvent(name: EventName, params: Record<string, string | number> = {}) {
  try {
    vercelTrack(name, params);
  } catch {
    /* Analytics da Vercel desativado */
  }
  if (name === "lead") {
    window.fbq?.("track", "Lead", params);
    window.gtag?.("event", "generate_lead", params);
  } else if (name === "whatsapp_click") {
    window.fbq?.("track", "Contact", params);
    window.gtag?.("event", "contact_whatsapp", params);
  } else {
    window.gtag?.("event", name, params);
  }
}

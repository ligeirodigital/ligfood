import { createClient } from "@supabase/supabase-js";

// Chave pública (anon/publishable) — feita para ficar no navegador; a segurança vem das políticas RLS.
const DEFAULT_URL = "https://svvlxtnalfuqwzfcvxgk.supabase.co";
const DEFAULT_PUBLISHABLE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN2dmx4dG5hbGZ1cXd6ZmN2eGdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYyOTA5OTAsImV4cCI6MjA5MTg2Njk5MH0.tzUJxi9RbU68BI1Jipy1aJV2TfDZdRy7AZgLbNth0Tc";

const SUPABASE_URL = (import.meta.env.VITE_SUPABASE_URL as string) || DEFAULT_URL;
const SUPABASE_PUBLISHABLE_KEY = (import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string) || DEFAULT_PUBLISHABLE_KEY;

function isNewSupabaseApiKey(value: string): boolean {
  return value.startsWith("sb_publishable_") || value.startsWith("sb_secret_");
}

function createSupabaseFetch(supabaseKey: string): typeof fetch {
  return (input, init) => {
    const headers = new Headers(
      typeof Request !== "undefined" && input instanceof Request ? input.headers : undefined,
    );

    if (init?.headers) {
      new Headers(init.headers).forEach((value, key) => headers.set(key, value));
    }

    // New Supabase API keys are opaque strings, not bearer JWTs.
    if (isNewSupabaseApiKey(supabaseKey) && headers.get("Authorization") === `Bearer ${supabaseKey}`) {
      headers.delete("Authorization");
    }

    headers.set("apikey", supabaseKey);
    return fetch(input, { ...init, headers });
  };
}

export const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_PUBLISHABLE_KEY);

if (!isSupabaseConfigured) {
  console.warn("Supabase não configurado: defina VITE_SUPABASE_URL e VITE_SUPABASE_PUBLISHABLE_KEY.");
}

// import { supabase } from "@/integrations/supabase/client";
export const supabase = isSupabaseConfigured
  ? createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
      global: {
        fetch: createSupabaseFetch(SUPABASE_PUBLISHABLE_KEY),
      },
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    })
  : null;

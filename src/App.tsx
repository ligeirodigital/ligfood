import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { LeadCaptureProvider } from "@/components/public/LeadCapture";
import { initTracking, trackPageView } from "@/lib/tracking";
import { lazy, Suspense, useEffect } from "react";

const Landing = lazy(() => import("@/pages/Landing"));
const Planos = lazy(() => import("@/pages/Planos"));
const Contato = lazy(() => import("@/pages/Contato"));
const Privacidade = lazy(() => import("@/pages/Privacidade"));
const Termos = lazy(() => import("@/pages/Termos"));
const Documentacao = lazy(() => import("@/pages/Documentacao"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const queryClient = new QueryClient();

initTracking();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="flex flex-col items-center gap-3 text-muted-foreground">
      <div className="size-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      <span className="text-sm">Carregando...</span>
    </div>
  </div>
);

function RouteTracker() {
  const { pathname } = useLocation();
  useEffect(() => {
    trackPageView(pathname);
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Sonner />
    <BrowserRouter>
      <RouteTracker />
      <LeadCaptureProvider>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/planos" element={<Planos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/privacidade" element={<Privacidade />} />
            <Route path="/termos" element={<Termos />} />
            <Route path="/documentacao" element={<Documentacao />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </LeadCaptureProvider>
    </BrowserRouter>
    <Analytics />
  </QueryClientProvider>
);

export default App;

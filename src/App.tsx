import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { lazy, Suspense } from "react";

const Landing = lazy(() => import("@/pages/Landing"));
const Planos = lazy(() => import("@/pages/Planos"));
const Contato = lazy(() => import("@/pages/Contato"));
const Privacidade = lazy(() => import("@/pages/Privacidade"));
const Termos = lazy(() => import("@/pages/Termos"));
const Documentacao = lazy(() => import("@/pages/Documentacao"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="flex flex-col items-center gap-3 text-muted-foreground">
      <div className="size-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      <span className="text-sm">Carregando...</span>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Sonner />
    <BrowserRouter>
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
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;

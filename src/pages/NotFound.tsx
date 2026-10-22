import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Seo from "@/components/Seo";
import PublicLayout from "@/components/public/PublicLayout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: rota inexistente:", location.pathname);
  }, [location.pathname]);

  return (
    <PublicLayout>
      <Seo
        title="Página não encontrada — LigFood"
        description="A página que você procura não existe ou foi movida. Volte para a home do LigFood."
        path={location.pathname}
        noindex
      />
      <section className="max-w-3xl mx-auto px-6 py-32 text-center">
        <p className="font-mono text-sm font-black uppercase tracking-[0.3em] text-primary">Erro 404</p>
        <h1 className="mt-4 text-5xl md:text-6xl font-black tracking-tighter">Página não encontrada</h1>
        <p className="mt-4 text-muted-foreground">
          O endereço acessado não existe ou foi movido. Confira o link ou volte para o início.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="rounded-2xl font-black uppercase tracking-widest text-sm">
            <Link to="/">Voltar para a home</Link>
          </Button>
          <Button asChild size="lg" variant="secondary" className="rounded-2xl font-black uppercase tracking-widest text-sm">
            <Link to="/planos">Ver planos</Link>
          </Button>
        </div>
      </section>
    </PublicLayout>
  );
};

export default NotFound;

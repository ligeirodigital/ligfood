import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/planos", label: "Planos" },
];

export default function PublicNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-[72px] md:h-24 flex items-center justify-between gap-2">
        <Link to="/" aria-label="LigFood — página inicial" className="flex items-center gap-2 shrink-0">
          <img
            src="/logo-ligfood-dark.svg"
            alt="LigFood — plataforma de delivery no WhatsApp"
            className="h-14 md:h-[4.5rem] w-auto"
            width={240}
            height={122}
            fetchPriority="high"
          />
        </Link>
        <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
            <a href="https://app.gestorpedido.com/ligfood/login">Entrar</a>
          </Button>
          <Button asChild size="sm" className="rounded-full">
            <a href="https://app.gestorpedido.com/ligfood/register">Testar grátis</a>
          </Button>
        </div>
      </div>
    </header>
  );
}

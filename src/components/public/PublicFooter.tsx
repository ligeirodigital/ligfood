import { Link } from "react-router-dom";
import { AtSign, MessageCircle, MapPin, Mail } from "lucide-react";

const REGISTER_URL = "https://app.gestorpedido.com/ligfood/register";
const LOGIN_URL = "https://app.gestorpedido.com/ligfood/login";

export default function PublicFooter() {
  return (
    <footer className="border-t border-border/40 bg-card/40 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="space-y-4 lg:col-span-2">
          <img
            src="/logo-ligfood-dark.svg"
            alt="LigFood"
            loading="lazy"
            width={240}
            height={122}
            className="h-20 w-auto"
          />
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
            Plataforma completa para restaurantes venderem mais no WhatsApp com automação, cardápio digital e gestão de
            delivery — sem comissão por pedido.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground pt-2">
            <li className="flex items-center gap-2">
              <MessageCircle className="size-4 text-success shrink-0" />
              <a href="https://wa.me/5585992753337" className="hover:text-primary">(85) 99275-3337</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-primary shrink-0" />
              <a href="mailto:contato@ligfood.com.br" className="hover:text-primary">contato@ligfood.com.br</a>
            </li>
            <li className="flex items-center gap-2">
              <AtSign className="size-4 text-primary shrink-0" />
              <a href="https://instagram.com/ligeirodigital" className="hover:text-primary">@ligeirodigital</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-muted-foreground shrink-0" />
              <span>Fortaleza — CE, Brasil</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-black uppercase tracking-widest mb-4 text-foreground">Produto</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/planos" className="hover:text-primary">Planos e preços</Link></li>
            <li><a href={REGISTER_URL} className="hover:text-primary">Testar gratuitamente</a></li>
            <li><a href={LOGIN_URL} className="hover:text-primary">Entrar no sistema</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-black uppercase tracking-widest mb-4 text-foreground">Recursos</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/documentacao" className="hover:text-primary">Documentação</Link></li>
            <li><Link to="/contato" className="hover:text-primary">Contato e suporte</Link></li>
            <li><a href="https://wa.me/5585992753337" className="hover:text-primary">Suporte no WhatsApp</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-black uppercase tracking-widest mb-4 text-foreground">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/privacidade" className="hover:text-primary">Política de Privacidade</Link></li>
            <li><Link to="/termos" className="hover:text-primary">Termos de Uso</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40 py-6 px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground max-w-7xl mx-auto">
        <span>© 2026 LigFood. Todos os direitos reservados.</span>
        <span>Feito no Brasil para restaurantes que querem vender mais.</span>
      </div>
    </footer>
  );
}

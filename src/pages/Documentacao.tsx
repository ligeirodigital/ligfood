import PublicLayout from "@/components/public/PublicLayout";
import Seo from "@/components/Seo";
import { useState } from "react";

const sections = [
  { id: "introducao", title: "Introdução", body: "O LigFood é uma plataforma SaaS de gestão de delivery para restaurantes. Esta documentação cobre o passo a passo de cada funcionalidade." },
  { id: "conta", title: "Como criar conta", body: "Acesse /auth, informe e-mail e senha. Após confirmar o e-mail, você será redirecionado ao onboarding." },
  { id: "restaurante", title: "Como cadastrar restaurante", body: "No onboarding, informe o nome do restaurante, slug (usado no link público /menu/seu-slug), endereço e telefone." },
  { id: "categorias", title: "Como criar categorias", body: "Em Cardápio → Categorias, clique em 'Nova categoria', defina nome e ordem de exibição." },
  { id: "produtos", title: "Como cadastrar produtos", body: "Em Cardápio → Produtos, informe nome, descrição, preço, categoria e disponibilidade. Você pode marcar 'Destaque' para exibir no topo." },
  { id: "fotos", title: "Como adicionar fotos", body: "No formulário de produto, use o campo de upload. Recomendamos imagens 1:1 com no mínimo 800x800px." },
  { id: "horarios", title: "Como configurar horários", body: "Em Configurações → Horários, defina abertura e fechamento por dia da semana. O cardápio fecha automaticamente fora do horário." },
  { id: "entrega", title: "Como configurar entrega", body: "Em Configurações → Entrega, cadastre bairros com taxa fixa, ou defina faixas por distância (raio em km)." },
  { id: "mensagens", title: "Mensagens automáticas", body: "Em WhatsApp → Mensagens, personalize as mensagens de boas-vindas, confirmação de pedido, saiu para entrega e finalização." },
  { id: "painel", title: "Como utilizar o painel", body: "O painel exibe métricas em tempo real: pedidos ativos, faturamento do dia e produtos mais vendidos. Use a barra lateral para navegar." },
  { id: "pedidos", title: "Como acompanhar pedidos", body: "Em Pedidos, arraste os cards do kanban entre as etapas: Novo → Em produção → Saiu → Entregue." },
  { id: "cupons", title: "Como cadastrar cupons", body: "Em Configurações → Cupons, crie códigos com desconto fixo ou percentual, com limite de uso e validade." },
  { id: "usuarios", title: "Como configurar usuários", body: "Em Configurações → Equipe, convide usuários por e-mail e defina o papel (admin, atendente, cozinha)." },
  { id: "relatorios", title: "Como visualizar relatórios", body: "Em Relatórios, filtre por período e visualize faturamento, ticket médio, produtos campeões e horários de pico." },
  { id: "faq", title: "FAQ técnico", body: "Suporte a webhooks, integração via API REST e limites por plano estão documentados internamente. Solicite pelo suporte." },
  { id: "boas-praticas", title: "Boas práticas", body: "Mantenha fotos de qualidade, descrições claras, preços atualizados e o WhatsApp sempre conectado para não perder pedidos." },
];

export default function Documentacao() {
  const [active, setActive] = useState(sections[0].id);
  const current = sections.find((s) => s.id === active)!;

  return (
    <PublicLayout>
      <Seo
        title="Documentação — LigFood"
        description="Guia passo a passo do LigFood: cadastro, cardápio, produtos, horários, entrega e integração com WhatsApp."
        path="/documentacao"
      />
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">Docs</span>
          <h1 className="mt-2 text-2xl font-black tracking-tight">Documentação</h1>
          <nav className="mt-6 space-y-1">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-semibold transition ${
                  active === s.id ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {s.title}
              </button>
            ))}
          </nav>
        </aside>

        <article className="min-w-0">
          <div className="text-xs text-muted-foreground mb-2">Documentação › {current.title}</div>
          <h2 className="text-4xl font-black tracking-tighter">{current.title}</h2>
          <div className="mt-6 rounded-3xl border border-border/50 bg-card/40 p-8 text-muted-foreground leading-relaxed">
            {current.body}
          </div>
        </article>
      </section>
    </PublicLayout>
  );
}

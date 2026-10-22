import PublicLayout from "@/components/public/PublicLayout";
import Seo from "@/components/Seo";

const sections = [
  { t: "1. Aceitação dos termos", c: "Ao criar uma conta e usar o LigFood, você declara que leu, entendeu e concorda integralmente com estes Termos de Uso e com a Política de Privacidade." },
  { t: "2. Cadastro", c: "Você deve fornecer informações verdadeiras e mantê-las atualizadas. É responsável por manter a confidencialidade das credenciais de acesso." },
  { t: "3. Responsabilidades do usuário", c: "Você é responsável pelas informações cadastradas (cardápio, preços, horários), pelo atendimento aos seus clientes e pelo cumprimento das leis aplicáveis ao seu negócio." },
  { t: "4. Responsabilidades da plataforma", c: "Comprometemo-nos a manter o serviço disponível, aplicar boas práticas de segurança e oferecer suporte conforme o plano contratado." },
  { t: "5. Assinaturas", c: "Os planos são cobrados mensalmente via processador de pagamento parceiro. O acesso é liberado após confirmação do pagamento." },
  { t: "6. Cancelamento", c: "Você pode cancelar a assinatura a qualquer momento pelo painel. O acesso permanece ativo até o fim do ciclo já pago, sem reembolso proporcional." },
  { t: "7. Suspensão", c: "Podemos suspender ou encerrar contas em caso de inadimplência, uso indevido, violação destes Termos ou solicitação legal." },
  { t: "8. Limitação de responsabilidade", c: "O LigFood não se responsabiliza por lucros cessantes, indisponibilidades de terceiros (WhatsApp, provedores de pagamento) ou danos indiretos decorrentes do uso da plataforma." },
  { t: "9. Propriedade intelectual", c: "Todo o software, marca, logotipos e conteúdos do LigFood são de propriedade exclusiva da empresa. É proibida a reprodução, engenharia reversa ou redistribuição." },
  { t: "10. Atualizações dos termos", c: "Podemos atualizar estes Termos a qualquer momento. Alterações relevantes serão comunicadas por e-mail ou no painel." },
  { t: "11. Foro competente", c: "Fica eleito o foro da comarca de Fortaleza/CE para dirimir quaisquer controvérsias oriundas destes Termos, com renúncia a qualquer outro." },
];

export default function Termos() {
  return (
    <PublicLayout>
      <Seo
        title="Termos de Uso — LigFood"
        description="Conheça as regras de uso, assinatura, cancelamento e responsabilidades da plataforma LigFood."
        path="/termos"
      />
      <article className="max-w-3xl mx-auto px-6 py-20">
        <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">Legal</span>
        <h1 className="mt-4 text-4xl md:text-5xl font-black tracking-tighter">Termos de Uso</h1>
        <p className="mt-4 text-sm text-muted-foreground">Última atualização: janeiro de 2026.</p>
        <div className="mt-10 space-y-8">
          {sections.map((s) => (
            <section key={s.t}>
              <h2 className="text-xl font-black">{s.t}</h2>
              <p className="mt-2 text-muted-foreground leading-relaxed">{s.c}</p>
            </section>
          ))}
        </div>
      </article>
    </PublicLayout>
  );
}

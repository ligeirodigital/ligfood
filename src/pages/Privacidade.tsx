import PublicLayout from "@/components/public/PublicLayout";
import Seo from "@/components/Seo";

const sections = [
  { t: "1. Dados que coletamos", c: "Coletamos dados de cadastro (nome, e-mail, telefone, CPF/CNPJ), dados do restaurante (endereço, horários, cardápio), dados de uso (pedidos, métricas de acesso) e dados de clientes finais fornecidos por você (nome, telefone, endereço de entrega) para viabilizar o serviço." },
  { t: "2. Finalidade do tratamento", c: "Utilizamos os dados para prestar o serviço contratado, processar pedidos, enviar comunicações operacionais, melhorar a plataforma, prevenir fraudes e cumprir obrigações legais." },
  { t: "3. Cookies", c: "Utilizamos cookies essenciais (sessão, autenticação) e cookies analíticos anônimos. Você pode desativá-los no seu navegador — algumas funções podem deixar de funcionar." },
  { t: "4. Compartilhamento de dados", c: "Não vendemos seus dados. Compartilhamos apenas com sub-operadores necessários à prestação do serviço (hospedagem, processador de pagamento, envio de mensagens), sempre sob contrato e em conformidade com a LGPD." },
  { t: "5. Armazenamento", c: "Os dados são armazenados em servidores seguros com criptografia em trânsito e em repouso, com backups automáticos. Mantemos os dados apenas pelo tempo necessário ao serviço ou exigido por lei." },
  { t: "6. Direitos do titular (LGPD)", c: "Você pode solicitar acesso, correção, portabilidade, anonimização, eliminação e revogação de consentimento a qualquer momento, entrando em contato pelos canais oficiais." },
  { t: "7. Segurança das informações", c: "Adotamos medidas técnicas e organizacionais para proteger seus dados, incluindo controle de acesso, criptografia, monitoramento e resposta a incidentes." },
  { t: "8. Contato para privacidade", c: "Dúvidas sobre privacidade? Fale com nosso encarregado (DPO) pelo WhatsApp (85) 99275-3337 ou pelo Instagram @ligeirodigital." },
];

export default function Privacidade() {
  return (
    <PublicLayout>
      <Seo
        title="Política de Privacidade — LigFood"
        description="Saiba como o LigFood coleta, usa, armazena e protege seus dados em conformidade com a LGPD."
        path="/privacidade"
      />
      <article className="max-w-3xl mx-auto px-6 py-20">
        <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">Legal</span>
        <h1 className="mt-4 text-4xl md:text-5xl font-black tracking-tighter">Política de Privacidade</h1>
        <p className="mt-4 text-sm text-muted-foreground">Última atualização: janeiro de 2026 • Em conformidade com a Lei nº 13.709/2018 (LGPD).</p>
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

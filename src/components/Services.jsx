import React from "react";

const services = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M20 36s-9.5-8.1-13.6-12.2C3.1 21.1 2 18.7 2 16.1 2 10.8 6.8 6 12.1 6c2.7 0 5.1 1.3 6.7 3.3C20.8 7.3 23.2 6 25.9 6 31.2 6 36 10.8 36 16.1c0 2.6-1.1 5-4.4 7.7C29.5 27.9 20 36 20 36z" stroke="#e53935" strokeWidth="2" fill="#fff"/></svg>
    ),
    title: "Autogestão em Saúde",
    desc: "Sistema completo para atendimento à saúde de servidores públicos municipais e estaduais.",
    features: [
      "Prontuário eletrônico integrado",
      "Gestão de agendamentos e exames",
      "Relatórios de saúde e BI",
      "Acesso do servidor e do RH"
    ]
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M20 4l14 6v8c0 9.4-8.2 15.8-14 18-5.8-2.2-14-8.6-14-18V10l14-6z" stroke="#1976d2" strokeWidth="2" fill="#fff"/></svg>
    ),
    title: "Previdência e Perícia Médica",
    desc: "Gestão de RPPS, concessão de benefícios e controle de perícias médicas.",
    features: [
      "Gestão de aposentadorias e pensões",
      "Controle de laudos e perícias",
      "Fluxos automatizados de concessão",
      "Portal do beneficiário"
    ]
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="16" stroke="#43a047" strokeWidth="2" fill="#fff"/><ellipse cx="20" cy="23" rx="7" ry="3.5" fill="#e0e0e0"/><circle cx="15.5" cy="18" r="1.5" fill="#43a047"/><circle cx="24.5" cy="18" r="1.5" fill="#43a047"/></svg>
    ),
    title: "Chatbot e Atendimento via WhatsApp",
    desc: "Automatização do atendimento com flows personalizados e integração com IA.",
    features: [
      "Respostas automáticas 24h",
      "Integração com sistemas internos",
      "Personalização por setor",
      "Atendimento humano e IA"
    ]
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><ellipse cx="20" cy="20" rx="14" ry="10" stroke="#ffb300" strokeWidth="2" fill="#fff"/><path d="M14 20c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6" stroke="#ffb300" strokeWidth="2" fill="none"/></svg>
    ),
    title: "IA para Licitações e Contratos",
    desc: "Análise automatizada de processos de licitação e contratos com inteligência artificial.",
    features: [
      "Auditoria automática de editais",
      "Detecção de riscos e inconsistências",
      "Geração de relatórios inteligentes",
      "Recomendações de compliance"
    ]
  }
];

export default function Services() {
  return (
    <section id="servicos" className="max-w-6xl mx-auto px-4 mt-16">
      <h2 className="text-2xl font-bold text-blue-900 text-center mb-8">Nossos Serviços</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((s, idx) => (
          <div key={s.title} className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:scale-105 transition-transform group">
            <span className="rounded-full p-3 mb-4 bg-gradient-to-tr from-yellow-50 to-blue-50 group-hover:scale-110 transition-transform">
              {s.icon}
            </span>
            <h3 className="font-bold text-blue-900 text-lg mt-2 mb-1 text-center group-hover:text-yellow-600 transition-colors">{s.title}</h3>
            <p className="text-center text-gray-700 text-sm mb-2">{s.desc}</p>
            <ul className="text-gray-600 text-sm list-disc pl-5 text-left">
              {s.features.map(f => <li key={f}>{f}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

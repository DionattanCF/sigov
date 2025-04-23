import React from "react";

const testimonials = [
  {
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "O Sigov revolucionou nossa gestão em saúde. Atendimento ágil e tecnologia de ponta!",
    name: "João Silva",
    role: "Prefeito de Nova Esperança"
  },
  {
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "A automação de licitações com IA trouxe economia e segurança para nosso município.",
    name: "Ana Souza",
    role: "Secretária de Administração"
  },
  {
    img: "https://randomuser.me/api/portraits/men/55.jpg",
    quote: "O atendimento via WhatsApp facilitou o acesso dos servidores a informações essenciais.",
    name: "Carlos Pereira",
    role: "Diretor do Instituto Municipal"
  }
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-blue-50 mt-16 py-12 rounded-2xl shadow-inner">
      <h2 className="text-2xl font-bold text-blue-900 text-center mb-8">Depoimentos de Clientes</h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md p-6 max-w-xs min-w-[220px] flex flex-col items-center hover:shadow-lg transition-shadow">
            <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full mb-3 shadow" />
            <p className="italic text-gray-800 text-center mb-2">“{t.quote}”</p>
            <span className="font-bold text-blue-700 text-center">{t.name}<br/><span className="font-normal text-gray-500">{t.role}</span></span>
          </div>
        ))}
      </div>
    </section>
  );
}

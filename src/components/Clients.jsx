import React from "react";

const clients = [
  {
    img: "https://img.icons8.com/color/48/000000/city.png",
    name: "Prefeitura Nova Esperança"
  },
  {
    svg: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="14" r="8" fill="#ffd600" stroke="#004085" strokeWidth="2"/>
        <path d="M16 22v6M12 26l4-4 4 4" stroke="#004085" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    name: "Instituto Previdência"
  },
  {
    img: "https://img.icons8.com/color/48/000000/organization.png",
    name: "Secretaria de Saúde"
  },
  {
    img: "https://img.icons8.com/color/48/000000/department.png",
    name: "Prefeitura São Lucas"
  }
];

export default function Clients() {
  return (
    <section id="clientes" className="mt-16">
      <h2 className="text-2xl font-bold text-blue-900 text-center mb-8">Veja quem são nossos clientes</h2>
      <div className="flex flex-wrap justify-center gap-10 items-center mt-8">
        {clients.map((c, idx) => (
          <div key={c.name} className="bg-white rounded-lg shadow-md p-6 flex items-center min-w-[160px] grayscale hover:grayscale-0 transition-all duration-300">
            {c.img && <img src={c.img} alt={c.name} className="mr-3 w-12 h-12" />}
            {c.svg && <span className="mr-3 w-12 h-12 flex items-center justify-center">{c.svg}</span>}
            <span className="font-bold text-blue-900">{c.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

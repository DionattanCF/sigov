import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow z-50 flex justify-center items-center py-3 px-4 gap-8 text-blue-900 font-semibold text-lg">
      <a href="#hero" className="hover:text-yellow-500 transition-colors">Início</a>
      <a href="#servicos" className="hover:text-yellow-500 transition-colors">Serviços</a>
      <a href="#depoimentos" className="hover:text-yellow-500 transition-colors">Depoimentos</a>
      <a href="#clientes" className="hover:text-yellow-500 transition-colors">Clientes</a>
      <a href="#contato" className="hover:text-yellow-500 transition-colors">Contato</a>
    </nav>
  );
}

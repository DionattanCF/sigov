import React from "react";

export default function Header() {
  return (
    <header className="relative bg-gradient-to-r from-blue-900 to-blue-400 text-white text-center py-16 rounded-b-3xl shadow-lg overflow-hidden">
      {/* Gradiente animado */}
      <div className="absolute inset-0 opacity-30 animate-pulse bg-gradient-to-br from-yellow-300 to-blue-500 blur-2xl" />
      <div className="relative z-10">
        <h1 className="text-5xl font-extrabold tracking-tight mb-2 drop-shadow-lg animate-fade-in">Sigov</h1>
        <h2 className="text-xl font-semibold text-yellow-300 mb-3 tracking-wide animate-fade-in delay-150">Sistemas Governamentais</h2>
        <p className="text-lg font-medium text-blue-100 animate-fade-in delay-300">
          Soluções Inteligentes para prefeituras e Institutos de Previdência
        </p>
        <a href="#contato" className="inline-block mt-8 px-8 py-3 bg-yellow-400 text-blue-900 font-bold rounded-full shadow-lg hover:bg-yellow-300 transition-colors animate-bounce">Solicite uma Demonstração</a>
      </div>
    </header>
  );
}

import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-[70vh] pt-32 pb-16 bg-gradient-to-br from-blue-900 via-blue-500 to-cyan-300 overflow-hidden">
      {/* SVG animado de fundo */}
      <svg className="absolute left-0 top-0 w-full h-full opacity-30 animate-pulse" viewBox="0 0 1440 320"><path fill="#ffd600" fillOpacity="0.4" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,176C840,192,960,256,1080,266.7C1200,277,1320,235,1380,213.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4 animate-fade-in">SIGOV</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-yellow-300 mb-6 animate-fade-in delay-150">Sistemas Governamentais</h2>
        <p className="text-lg md:text-xl text-blue-100 max-w-2xl text-center mb-8 animate-fade-in delay-300">
          Soluções inteligentes, inovadoras e integradas para prefeituras e institutos de previdência. O futuro da gestão pública começa aqui.
        </p>
        <a href="#contato" className="px-8 py-3 bg-yellow-400 text-blue-900 font-bold rounded-full shadow-lg hover:bg-yellow-300 transition-colors animate-bounce">Solicite uma Demonstração</a>
      </div>
    </section>
  );
}

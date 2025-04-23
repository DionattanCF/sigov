import React from "react";

export default function Contact() {
  return (
    <section id="contato" className="py-20 px-4 bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50 flex justify-center items-center">
      <div className="bg-white rounded-2xl shadow-xl max-w-xl w-full p-10 flex flex-col items-center border border-blue-100">
        <div className="bg-green-100 rounded-full p-4 mb-5 shadow-md">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <circle cx="28" cy="28" r="28" fill="#25d366"/>
            <path d="M38.6 37.7l-3.2-.9c-.5-.1-1 0-1.1.3l-.9.9c-2.5-1.3-4.7-3.5-6-6l.9-.9c.3-.3.4-.7.3-1.1l-.9-3.2c-.1-.5-.6-.7-1.1-.7h-1.8c-1.6 0-3 1.4-3 3 0 6.6 5.4 12 12 12 1.2 0 2.3-.2 3.2-.5.5-.1.7-.6.7-1.1v-1.8c0-.5-.2-.9-.7-1z" fill="#fff"/>
          </svg>
        </div>
        <h2 className="text-2xl font-extrabold text-blue-900 mb-3 text-center">Fale com a equipe Sigov</h2>
        <p className="text-gray-700 text-center mb-6">Atendimento especializado para prefeituras, institutos e órgãos públicos. Tire dúvidas, solicite demonstração ou converse com nossos especialistas!</p>
        <a href="https://wa.me/5562983404044" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-lg px-8 py-3 rounded-full shadow-lg gap-3 hover:from-green-600 hover:to-green-700 transition-colors">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#25d366"/>
            <path d="M24.6 21.7l-2.2-.6c-.3-.1-.6 0-.8.2l-.6.6c-1.7-.9-3.1-2.3-4-4l.6-.6c.2-.2.3-.5.2-.8l-.6-2.2c-.1-.3-.4-.5-.7-.5h-1.2c-1.1 0-2 .9-2 2 0 4.4 3.6 8 8 8 .8 0 1.5-.1 2.2-.3.3-.1.5-.4.5-.7v-1.2c0-.3-.2-.6-.5-.7z" fill="#fff"/>
          </svg>
          WhatsApp: (62) 9.8340-4044
        </a>
      </div>
    </section>
  );
}

import React from "react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5562983404044"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-xl flex items-center justify-center transition-colors border-4 border-white"
      title="Fale conosco pelo WhatsApp"
    >
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="18" fill="#25d366"/>
        <path d="M27.6 25.7l-3.2-.9c-.5-.1-1 0-1.1.3l-.9.9c-2.5-1.3-4.7-3.5-6-6l.9-.9c.3-.3.4-.7.3-1.1l-.9-3.2c-.1-.5-.6-.7-1.1-.7h-1.8c-1.6 0-3 1.4-3 3 0 6.6 5.4 12 12 12 1.2 0 2.3-.2 3.2-.5.5-.1.7-.6.7-1.1v-1.8c0-.5-.2-.9-.7-1z" fill="#fff"/>
      </svg>
    </a>
  );
}

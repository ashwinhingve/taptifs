"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "+919876543210"; // Replace with your actual WhatsApp number
  const message = "Hi! I'm interested in your products.";

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-all shadow-lg hover:scale-110 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
    </button>
  );
}

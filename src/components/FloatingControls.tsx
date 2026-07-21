import { useEffect, useState } from "react";
import { BUSINESS_DETAILS } from "../types";
import { MessageSquareText, Phone, ArrowUp } from "lucide-react";

export default function FloatingControls() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const text = `Hello New Awadh Medical Hall, I would like to make an inquiry about some medicines. Please guide me.`;
  const whatsappUrl = `https://wa.me/91${BUSINESS_DETAILS.phone}?text=${encodeURIComponent(text)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3.5 items-end">
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="p-3.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-full shadow-lg border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 hover:-translate-y-1 transition duration-300 flex items-center justify-center cursor-pointer"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href={`tel:${BUSINESS_DETAILS.phone}`}
        aria-label="Call pharmacy"
        className="p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 hover:-translate-y-1 transition duration-300 flex items-center justify-center relative group"
      >
        <Phone className="w-5 h-5 animate-pulse" />
        <span className="absolute right-14 bg-gray-900 text-white text-xs px-2.5 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap pointer-events-none">
          Call Now: {BUSINESS_DETAILS.phoneDisplay}
        </span>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp"
        className="p-4 bg-emerald-600 text-white rounded-full shadow-xl hover:bg-emerald-700 hover:-translate-y-1 transition duration-300 flex items-center justify-center relative group"
      >
        <MessageSquareText className="w-6 h-6" />
        <span className="absolute right-14 bg-gray-900 text-white text-xs px-2.5 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap pointer-events-none">
          WhatsApp Chat & Order
        </span>
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
      </a>
    </div>
  );
}

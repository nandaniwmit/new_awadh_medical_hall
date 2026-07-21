import { useState, useEffect } from "react";
import { BUSINESS_DETAILS } from "../types";
import { Menu, X, MessageSquare, Phone, Sun, Moon, HeartPulse } from "lucide-react";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export default function Navbar({ activeTab, setActiveTab, darkMode, setDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect to make header translucent on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Services", id: "services" },
    { label: "Gallery", id: "gallery" },
    { label: "Testimonials", id: "testimonials", anchor: "testimonials-section" },
    { label: "FAQs", id: "faq", anchor: "faq-section" },
    { label: "Contact Us", id: "contact" },
  ];

  const handleNavClick = (item: { label: string; id: string; anchor?: string }) => {
    setIsOpen(false);
    if (item.anchor) {
      if (activeTab !== "home") {
        setActiveTab("home");
        // Wait for page render then scroll
        setTimeout(() => {
          const element = document.getElementById(item.anchor!);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 150);
      } else {
        const element = document.getElementById(item.anchor);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    } else {
      setActiveTab(item.id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const genericWhatsAppText = encodeURIComponent(
    "Hello New Awadh Medical Hall, I am visiting your website and would like to ask a question."
  );

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 w-full ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 shadow-md backdrop-blur-md py-3"
          : "bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 py-4.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <div
            onClick={() => {
              setActiveTab("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2.5 cursor-pointer select-none group"
          >
            <div className="relative flex items-center justify-center w-10.5 h-10.5 rounded-xl bg-emerald-600 text-white shadow-md shadow-emerald-600/20 group-hover:bg-emerald-700 transition duration-300">
              <HeartPulse className="w-6 h-6 group-hover:scale-110 transition duration-300" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-sky-400 rounded-full border-2 border-white dark:border-gray-950"></span>
            </div>
            <div className="text-left">
              <span className="block text-lg font-extrabold tracking-tight text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition leading-tight">
                New Awadh
              </span>
              <span className="block text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 leading-none">
                Medical Hall
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive =
                item.anchor
                  ? false // Anchor items aren't pages themselves
                  : activeTab === item.id;

              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition cursor-pointer ${
                    isActive
                      ? "text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-950/40"
                      : "text-gray-650 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 hover:bg-gray-50 dark:hover:bg-gray-800/40"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Utility Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-55 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Direct Call Button */}
            <a
              href={`tel:${BUSINESS_DETAILS.phone}`}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-gray-700 dark:text-gray-200 border border-gray-250 dark:border-gray-750 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
            >
              <Phone className="w-4 h-4 text-sky-500" />
              <span>Call Now</span>
            </a>

            {/* Quick Order Button */}
            <button
              onClick={() => {
                setActiveTab("whatsapp-order");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition shadow-sm shadow-emerald-600/10 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Order</span>
            </button>
          </div>

          {/* Mobile Buttons Layout */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Dark Mode */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 cursor-pointer"
            >
              {darkMode ? <Sun className="w-4.5 h-4.5 text-amber-400" /> : <Moon className="w-4.5 h-4.5" />}
            </button>

            {/* Call */}
            <a
              href={`tel:${BUSINESS_DETAILS.phone}`}
              className="p-2 rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400 border border-blue-100 dark:border-blue-900"
            >
              <Phone className="w-4.5 h-4.5" />
            </a>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-150 dark:border-gray-850 mt-3 px-4 py-4 bg-white dark:bg-gray-900 shadow-inner space-y-2">
          {navItems.map((item) => {
            const isActive = item.anchor ? false : activeTab === item.id;
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition ${
                  isActive
                    ? "text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-950/30"
                    : "text-gray-700 hover:text-emerald-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                }`}
              >
                {item.label}
              </button>
            );
          })}
          
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
            <a
              href={`tel:${BUSINESS_DETAILS.phone}`}
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700"
            >
              <Phone className="w-4 h-4 text-blue-500" />
              <span>Call Us</span>
            </a>
            <button
              onClick={() => {
                setIsOpen(false);
                setActiveTab("whatsapp-order");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Order Now</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

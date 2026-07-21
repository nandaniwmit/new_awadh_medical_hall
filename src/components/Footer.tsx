import React, { useState } from "react";
import { BUSINESS_DETAILS } from "../types";
import { Phone, MessageSquare, MapPin, Clock, Mail, HeartPulse, Send, CheckCircle2, ShieldAlert } from "lucide-react";

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
      }, 3000);
    }
  };

  const handleQuickLink = (tab: string, elementId?: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (elementId) {
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Banner: Emergency Contact Section */}
        <div className="bg-gradient-to-r from-red-900/40 to-blue-900/30 border border-red-500/30 rounded-2xl p-6 md:p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-red-400 font-bold text-sm tracking-wider uppercase">
              <ShieldAlert className="w-5 h-5 animate-bounce" /> Emergency & Non-Emergency Direct Helpline
            </div>
            <h4 className="text-xl md:text-2xl font-extrabold text-white">
              Looking for Medicine Stock or Urgent Healthcare Supplies?
            </h4>
            <p className="text-sm text-gray-300 max-w-2xl">
              We stock life-saving cardiac, oncology, and critical care injectables. Dial our emergency hotline or snap your prescription on WhatsApp for instant priority service.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
            <a
              href={`tel:${BUSINESS_DETAILS.phone}`}
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition shadow-lg shadow-red-600/25 text-sm"
            >
              <Phone className="w-4 h-4" /> Call: {BUSINESS_DETAILS.phoneDisplay}
            </a>
            <button
              onClick={() => handleQuickLink("whatsapp-order")}
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition shadow-lg shadow-emerald-600/25 text-sm cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp Order
            </button>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 text-left">
          
          {/* Company Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-emerald-600 text-white rounded-lg">
                <HeartPulse className="w-5 h-5" />
              </div>
              <span className="text-lg font-black text-white tracking-tight">
                New Awadh Medical Hall
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your trusted licensed community pharmacy in Tekari, Gaya. Dedicated to dispensing 100% genuine medications, biological insulins, and advanced diagnostics at the most honest prices.
            </p>
            
            {/* Contact Details Grid */}
            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{BUSINESS_DETAILS.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`tel:${BUSINESS_DETAILS.phone}`} className="hover:text-white transition">
                  {BUSINESS_DETAILS.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                <a href="mailto:info@newawadhmedical.com" className="hover:text-white transition">
                  info@newawadhmedical.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Directories */}
          <div>
            <h5 className="text-sm font-extrabold uppercase tracking-widest text-white mb-5 border-l-2 border-emerald-500 pl-2.5">
              Useful Links
            </h5>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleQuickLink("home")} className="hover:text-white hover:translate-x-1 transition text-gray-400 cursor-pointer">
                  Home Page
                </button>
              </li>
              <li>
                <button onClick={() => handleQuickLink("about")} className="hover:text-white hover:translate-x-1 transition text-gray-400 cursor-pointer">
                  About Our Pharmacy
                </button>
              </li>
              <li>
                <button onClick={() => handleQuickLink("services")} className="hover:text-white hover:translate-x-1 transition text-gray-400 cursor-pointer">
                  Our Medical Services
                </button>
              </li>
              <li>
                <button onClick={() => handleQuickLink("gallery")} className="hover:text-white hover:translate-x-1 transition text-gray-400 cursor-pointer">
                  Store Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleQuickLink("home", "testimonials-section")} className="hover:text-white hover:translate-x-1 transition text-gray-400 cursor-pointer">
                  Customer Testimonials
                </button>
              </li>
              <li>
                <button onClick={() => handleQuickLink("home", "faq-section")} className="hover:text-white hover:translate-x-1 transition text-gray-400 cursor-pointer">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => handleQuickLink("contact")} className="hover:text-white hover:translate-x-1 transition text-gray-400 cursor-pointer">
                  Contact & Map Location
                </button>
              </li>
            </ul>
          </div>

          {/* Services & Highlights */}
          <div>
            <h5 className="text-sm font-extrabold uppercase tracking-widest text-white mb-5 border-l-2 border-emerald-500 pl-2.5">
              Our Departments
            </h5>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <button onClick={() => handleQuickLink("services")} className="hover:text-white transition">
                  Prescription Medicines
                </button>
              </li>
              <li>
                <button onClick={() => handleQuickLink("services")} className="hover:text-white transition">
                  General OTC Tablets
                </button>
              </li>
              <li>
                <button onClick={() => handleQuickLink("services")} className="hover:text-white transition">
                  Diabetic & Gluco Care
                </button>
              </li>
              <li>
                <button onClick={() => handleQuickLink("services")} className="hover:text-white transition">
                  Baby Nutrition & Wipes
                </button>
              </li>
              <li>
                <button onClick={() => handleQuickLink("services")} className="hover:text-white transition">
                  Diagnostic BP Monitors
                </button>
              </li>
              <li>
                <button onClick={() => handleQuickLink("services")} className="hover:text-white transition">
                  Surgical & First Aid Kits
                </button>
              </li>
            </ul>
          </div>

          {/* Business Hours & Newsletter */}
          <div className="space-y-5">
            <div>
              <h5 className="text-sm font-extrabold uppercase tracking-widest text-white mb-4 border-l-2 border-emerald-500 pl-2.5">
                Working Hours
              </h5>
              <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold mb-2.5">
                <Clock className="w-4 h-4" />
                <span>{BUSINESS_DETAILS.hours}</span>
              </div>
              <span className="block text-xs text-gray-400 leading-normal">
                Open all 7 days of the week, including national holidays, to serve Tekari.
              </span>
            </div>

            <div className="border-t border-gray-800 pt-4.5">
              <h6 className="text-xs font-bold uppercase text-white mb-2.5 tracking-wider">
                Monthly Health Newsletter
              </h6>
              {subscribed ? (
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-800/40">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Subscribed successfully!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address"
                    className="flex-1 px-3 py-1.5 text-xs rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-emerald-500 transition"
                  />
                  <button
                    type="submit"
                    className="p-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Disclaimer Warning (Medical Websites must have this for high-trust and SEO) */}
        <div className="bg-gray-950 rounded-xl p-4 text-left border border-gray-800/60 mb-8">
          <p className="text-[11px] text-gray-500 leading-relaxed font-sans">
            <span className="font-extrabold text-gray-400 uppercase tracking-wide mr-1.5 flex sm:inline-flex items-center gap-1">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-500 inline" /> Disclaimer:
            </span>
            All health tips, product specs, and dosage guides shared on this website are for general awareness and educational objectives only. They should never substitute for specialized clinical diagnosis, professional medical counseling, or active prescriptions from a certified practitioner. We strictly dispense Schedule H drugs only upon receiving a validated prescription slip.
          </p>
        </div>

        {/* Footer Sub Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} <strong>New Awadh Medical Hall</strong>. All Rights Reserved. | <a href="https://main.webmakerit.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Developed by WMIT</a>
          </div>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <button onClick={() => alert("Privacy Policy: All customer prescription uploads and phone records are encrypted locally and never distributed to third parties.")} className="hover:text-gray-300 transition cursor-pointer">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => alert("Terms and Conditions: Standard drug returns are processed inside 7 days with invoice validation. Cold storage drugs are exempted from refunds.")} className="hover:text-gray-300 transition cursor-pointer">
              Terms & Conditions
            </button>
            <span>•</span>
            <button onClick={() => alert("Regulatory: Licensed under Drugs & Cosmetics Rules. Retail license registered under Tekari Municipality, Bihar.")} className="hover:text-gray-300 transition cursor-pointer">
              Disclaimer
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

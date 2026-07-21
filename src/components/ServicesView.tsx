import React from "react";
import { SERVICES_DATA, BUSINESS_DETAILS } from "../types";
import {
  FileText,
  Pill,
  Sparkles,
  Baby,
  Smile,
  Activity,
  Scissors,
  Heart,
  Droplet,
  ShieldAlert,
  ChevronRight,
  MessageSquare,
  PhoneCall
} from "lucide-react";

interface ServicesViewProps {
  setActiveTab: (tab: string) => void;
  setPrefilledMedicine: (med: string) => void;
}

export default function ServicesView({ setActiveTab, setPrefilledMedicine }: ServicesViewProps) {
  
  // Icon mapper helper
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "FileText":
        return <FileText className="w-6 h-6" />;
      case "Pill":
        return <Pill className="w-6 h-6" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6" />;
      case "Baby":
        return <Baby className="w-6 h-6" />;
      case "Smile":
        return <Smile className="w-6 h-6" />;
      case "Activity":
        return <Activity className="w-6 h-6" />;
      case "Scissors":
        return <Scissors className="w-6 h-6" />;
      case "Heart":
        return <Heart className="w-6 h-6" />;
      case "Droplet":
        return <Droplet className="w-6 h-6" />;
      default:
        return <ShieldAlert className="w-6 h-6" />;
    }
  };

  const handleServiceInquiry = (serviceName: string) => {
    setPrefilledMedicine(`- Inquiry about Service: ${serviceName}\n`);
    setActiveTab("whatsapp-order");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-16 py-12 text-left">
      
      {/* Services Banner */}
      <section className="relative bg-gradient-to-br from-blue-500/10 via-emerald-500/5 to-transparent dark:from-gray-900 dark:to-gray-950 border-b border-gray-150 dark:border-gray-800 py-16 text-center rounded-3xl mx-4 sm:mx-6 lg:mx-8">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-2xl"></div>
        <div className="relative z-10 space-y-3">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-black uppercase tracking-widest bg-white dark:bg-gray-850 px-3 py-1 rounded-full shadow-sm">
            What We Offer
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
            Our Medical Services
          </h1>
          <p className="text-gray-500 dark:text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed px-4">
            New Awadh Medical Hall provides expert prescription care, daily wellness, advanced medical equipment, and reliable surgical supplies.
          </p>
        </div>
      </section>

      {/* Services Detailed Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-150 dark:border-gray-800/80 p-6 flex flex-col justify-between hover:border-emerald-500/50 hover:shadow-lg transition duration-300"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    {service.category}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-extrabold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Service Action Bar */}
              <div className="mt-6 pt-4 border-t border-gray-50 dark:border-gray-850 flex items-center justify-between">
                <button
                  onClick={() => handleServiceInquiry(service.title)}
                  className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 hover:underline cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" /> Order / Inquire
                </button>
                <a
                  href={`tel:${BUSINESS_DETAILS.phone}`}
                  className="p-2 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-400 hover:text-emerald-600 rounded-lg transition"
                  aria-label="Call Store"
                >
                  <PhoneCall className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Quality Assurance Statement */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl p-8 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <h3 className="text-2xl font-black leading-tight">Need a customized medication plan?</h3>
            <p className="text-xs text-emerald-100 leading-relaxed">
              For patients managing severe ailments like chronic high blood pressure, diabetes, or long-term joint pain, our pharmacist can package customized weekly or monthly packs and coordinate continuous refills. Get in touch to schedule yours.
            </p>
          </div>
          <button
            onClick={() => handleServiceInquiry("Monthly Chronic Refill Subscription")}
            className="px-6 py-3.5 bg-white hover:bg-emerald-50 text-emerald-700 font-extrabold rounded-xl text-xs transition whitespace-nowrap cursor-pointer shadow-lg shadow-emerald-900/10"
          >
            Setup Refill Planner
          </button>
        </div>
      </section>

    </div>
  );
}

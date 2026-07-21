import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingControls from "./components/FloatingControls";
import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import ServicesView from "./components/ServicesView";
import GalleryView from "./components/GalleryView";
import ContactView from "./components/ContactView";
import WhatsAppForm from "./components/WhatsAppForm";
import { BUSINESS_DETAILS } from "./types";
import { ShieldCheck, Sparkles, MessageSquare, PhoneCall, HelpCircle, FileText } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [prefilledMedicine, setPrefilledMedicine] = useState<string>("");

  // Sync dark mode state with document HTML element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Global Tracker Integration
  useEffect(() => {
    const TRACKING_ENDPOINT = "https://tools.cprajapati.com/tracker/track.php";
    const urlParams = new URLSearchParams(window.location.search);
    
    const cid = urlParams.get("cid") || localStorage.getItem("wmit_active_cid");
    if (urlParams.get("cid")) {
      localStorage.setItem("wmit_active_cid", urlParams.get("cid") || "");
    }
    
    if (!cid) return;

    const visitorId = localStorage.getItem("wmit_visitor_id") || "wmit_" + Math.random().toString(36).substring(2, 15);
    localStorage.setItem("wmit_visitor_id", visitorId);

    const sessionId = sessionStorage.getItem("wmit_session_id") || "wmit_" + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem("wmit_session_id", sessionId);

    const getPageName = () => {
      if (activeTab) {
        return activeTab.charAt(0).toUpperCase() + activeTab.slice(1);
      }
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split("?")[0] : "Home";
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid,
        visitor_id: visitorId,
        session_id: sessionId,
        page_name: getPageName(),
        referrer: document.referrer || "",
        device: window.innerWidth < 768 ? "Mobile" : "Desktop",
        browser: navigator.userAgent,
        action: "init"
      };
      fetch(TRACKING_ENDPOINT, {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      }).catch(() => {});
    };

    const sendExitPayload = () => {
      const payload = {
        cid: cid,
        session_id: sessionId,
        page_name: getPageName(),
        action: "page_change"
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: "application/json" });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, {
          method: "POST",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(() => {});
      }
    };

    sendInitPayload();

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("pagehide", sendExitPayload);
    
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        sendExitPayload();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    
    return () => {
      sendExitPayload();
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("pagehide", sendExitPayload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [activeTab]);

  // Render the appropriate sub-view based on the state routing
  const renderActiveView = () => {
    switch (activeTab) {
      case "home":
        return <HomeView setActiveTab={setActiveTab} setPrefilledMedicine={setPrefilledMedicine} />;
      case "about":
        return <AboutView />;
      case "services":
        return <ServicesView setActiveTab={setActiveTab} setPrefilledMedicine={setPrefilledMedicine} />;
      case "gallery":
        return <GalleryView />;
      case "contact":
        return <ContactView />;
      case "whatsapp-order":
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Form itself */}
              <div className="lg:col-span-8">
                <WhatsAppForm
                  prefilledMedicine={prefilledMedicine}
                  onSuccess={() => setPrefilledMedicine("")}
                />
              </div>

              {/* Right Column: Dynamic Support Info */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* 100% Genuine Pharmacy Assurance */}
                <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border border-emerald-500/20 rounded-2xl p-6 space-y-3.5">
                  <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-extrabold text-sm uppercase">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" /> Genuine Medicines Guarantee
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                    New Awadh Medical Hall operates under a certified retail drug license in Bihar. Every medicine is sourced directly from official wholesale drug channels with authorized tax invoices.
                  </p>
                  <ul className="text-xs text-gray-500 dark:text-gray-450 space-y-2 pt-1">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                      Alpha pharmaceutical sorting system
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                      Continuous cold storage logging
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                      Doctor prescription check guidelines
                    </li>
                  </ul>
                </div>

                {/* Delivery Guidelines Card */}
                <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-150 dark:border-gray-800 p-6 space-y-3">
                  <h4 className="font-extrabold text-gray-900 dark:text-white text-sm">
                    How it Works:
                  </h4>
                  <ol className="text-xs text-gray-550 dark:text-gray-400 space-y-3 list-decimal list-inside pl-1 leading-normal">
                    <li>
                      <strong>Fill Form:</strong> Specify medicine names, quantities, and preferred delivery hour.
                    </li>
                    <li>
                      <strong>Prescription:</strong> Toggle 'Yes' to browse or drag-and-drop a photo of your doctor's slip.
                    </li>
                    <li>
                      <strong>Send:</strong> Click 'Send' to automatically compile and load a pre-formatted message in WhatsApp.
                    </li>
                    <li>
                      <strong>Confirm:</strong> We verify availability, share final price totals, and dispatch immediately!
                    </li>
                  </ol>
                </div>

                {/* Urgent Call Desk Card */}
                <div className="bg-blue-500/5 border border-blue-500/15 rounded-2xl p-6 text-left space-y-4">
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-gray-950 dark:text-white text-xs uppercase tracking-wider text-blue-700 dark:text-blue-400 flex items-center gap-1">
                      <PhoneCall className="w-4 h-4 text-blue-600" /> Direct Assistance
                    </h4>
                    <p className="text-xs text-gray-655 dark:text-gray-300">
                      Need help formatting your order or looking for rare critical drugs? Talk to our chief pharmacist directly.
                    </p>
                  </div>
                  <a
                    href={`tel:${BUSINESS_DETAILS.phone}`}
                    className="block w-full text-center py-2 bg-blue-650 hover:bg-blue-700 text-white font-extrabold text-xs rounded-xl transition"
                  >
                    Call Now: {BUSINESS_DETAILS.phoneDisplay}
                  </a>
                </div>

              </div>

            </div>
          </div>
        );
      default:
        return <HomeView setActiveTab={setActiveTab} setPrefilledMedicine={setPrefilledMedicine} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/40 dark:bg-gray-950 text-gray-800 dark:text-gray-200 flex flex-col justify-between font-sans transition-colors duration-300">
      
      {/* 1. Header Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          // Always clear pre-filled medicine if navigating away from the WhatsApp Order page
          if (tab !== "whatsapp-order") {
            setPrefilledMedicine("");
          }
        }}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* 2. Page Content Shell */}
      <main className="flex-grow">
        {renderActiveView()}
      </main>

      {/* 3. Footer Directories */}
      <Footer setActiveTab={setActiveTab} />

      {/* 4. Global Overlays: Back to top, Floating WhatsApp and Call dials */}
      <FloatingControls />

    </div>
  );
}

import React, { useState, useMemo } from "react";
import {
  BUSINESS_DETAILS,
  CHOOSE_US_DATA,
  TRUST_METRICS,
  WORKING_PROCESS_DATA,
  CATEGORIES_DATA,
  PRODUCT_CATALOG,
  TESTIMONIALS_DATA,
  FAQ_DATA,
  HEALTH_TIPS,
  PROMO_OFFERS,
  ProductItem,
  FAQItem,
} from "../types";
import {
  Search,
  CheckCircle2,
  Phone,
  MessageSquare,
  MapPin,
  ChevronRight,
  HelpCircle,
  Plus,
  Minus,
  Sparkles,
  Heart,
  Check,
  Send,
  ShieldCheck,
  FileText,
  Percent,
  Calendar,
  AlertCircle
} from "lucide-react";

interface HomeViewProps {
  setActiveTab: (tab: string) => void;
  setPrefilledMedicine: (med: string) => void;
}

export default function HomeView({ setActiveTab, setPrefilledMedicine }: HomeViewProps) {
  // Search query state
  const [searchQuery, setSearchQuery] = useState("");
  // Selected search category
  const [selectedSearchCat, setSelectedSearchCat] = useState("All");

  // FAQ toggle state
  const [expandedFaq, setExpandedFaq] = useState<string | null>("faq-1");
  // FAQ active filter tab
  const [activeFaqTab, setActiveFaqTab] = useState("All");

  // Quick inquiry form state
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryPhone, setInquiryPhone] = useState("");
  const [inquiryText, setInquiryText] = useState("");
  const [inquirySuccess, setInquirySuccess] = useState(false);

  // Filter products based on search query & active category
  const filteredProducts = useMemo(() => {
    return PRODUCT_CATALOG.filter((item) => {
      const matchesQuery =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory =
        selectedSearchCat === "All" || item.category === selectedSearchCat;

      return matchesQuery && matchesCategory;
    });
  }, [searchQuery, selectedSearchCat]);

  // Categories present in catalog for search filter
  const catalogCategories = ["All", "Tablets", "Capsules", "Syrups", "Vitamins", "Medical Equipment", "Personal Care"];

  // Filter FAQs
  const faqCategories = ["All", "Ordering & Supply", "Prescription", "Home Delivery", "Specialized Storage"];
  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      return activeFaqTab === "All" || item.category === activeFaqTab;
    });
  }, [activeFaqTab]);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inquiryName && inquiryPhone) {
      setInquirySuccess(true);
      setTimeout(() => {
        setInquirySuccess(false);
        setInquiryName("");
        setInquiryPhone("");
        setInquiryText("");
      }, 4000);
    }
  };

  const handleOrderRedirect = (productName: string) => {
    setPrefilledMedicine(`- ${productName} (1 Strip/Unit)\n`);
    setActiveTab("whatsapp-order");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Structured schemas to load for search optimization (JSON-LD)
  const renderLocalBusinessSchema = () => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Pharmacy",
      "name": BUSINESS_DETAILS.name,
      "image": "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=800",
      "telephon": BUSINESS_DETAILS.phone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Tekari Gaya Tekari",
        "addressLocality": "Gaya",
        "addressRegion": "Bihar",
        "postalCode": "823001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "24.9392",
        "longitude": "84.8361"
      },
      "url": "https://newawadhmedicalhall.com",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "08:00",
        "closes": "22:00"
      }
    };
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    );
  };

  return (
    <div className="space-y-20 pb-16">
      {renderLocalBusinessSchema()}

      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-br from-slate-50 via-teal-50/20 to-sky-50/30 dark:from-gray-950 dark:via-gray-900/60 dark:to-gray-900 border-b border-gray-100 dark:border-gray-800 py-16 md:py-24 overflow-hidden text-left">
        {/* Abstract decorative background rings */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-500/5 dark:bg-sky-500/10 rounded-full blur-2xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left: Text & CTA Buttons */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-100 dark:border-emerald-900/60 text-emerald-800 dark:text-emerald-300 font-bold text-xs uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-emerald-600 animate-spin-slow" /> Approved Licensed Pharmacy
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-tight">
                  {BUSINESS_DETAILS.name}
                  <span className="block text-emerald-600 dark:text-emerald-400 text-2xl sm:text-3xl lg:text-4xl font-extrabold mt-2">
                    Your Trusted Pharmacy in Tekari
                  </span>
                </h1>
                <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                  {BUSINESS_DETAILS.tagline}. We dispense 100% genuine medicines, surgical supplies, specialized diabetic care, baby essentials, and daily personal care items at competitive discounts.
                </p>
              </div>

              {/* Trust badges row */}
              <div className="grid grid-cols-3 gap-4 border-y border-gray-200/50 dark:border-gray-800 py-4 max-w-xl">
                <div className="flex items-center gap-2">
                  <div className="p-1 bg-emerald-100 dark:bg-emerald-950 rounded-full text-emerald-600 dark:text-emerald-400">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs font-bold text-gray-800 dark:text-gray-200">100% Genuine</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-1 bg-emerald-100 dark:bg-emerald-950 rounded-full text-emerald-600 dark:text-emerald-400">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs font-bold text-gray-800 dark:text-gray-200">Insulin Cold Storage</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-1 bg-emerald-100 dark:bg-emerald-950 rounded-full text-emerald-600 dark:text-emerald-400">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs font-bold text-gray-800 dark:text-gray-200">UPI Accepted</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${BUSINESS_DETAILS.phone}`}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-xl transition duration-300 shadow-lg shadow-blue-600/20 text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" /> Call: {BUSINESS_DETAILS.phoneDisplay}
                </a>
                <button
                  onClick={() => {
                    setActiveTab("whatsapp-order");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl transition duration-300 shadow-lg shadow-emerald-600/20 text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5" /> WhatsApp Order
                </button>
                <a
                  href="https://maps.google.com/?q=Tekari+Gaya+Bihar+823001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-250 dark:border-gray-700 font-extrabold rounded-xl transition duration-300 text-center flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4.5 h-4.5 text-red-500" /> Get Directions
                </a>
              </div>
            </div>

            {/* Hero Right: Pharmacy Visual Card & Fast Hours badge */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-2xl border border-gray-100 dark:border-gray-800/80 group">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=800"
                    alt="New Awadh Medical Hall Storefront"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                      Located in Tekari
                    </span>
                    <span className="px-2.5 py-1 bg-sky-50 dark:bg-sky-950/50 text-sky-750 dark:text-sky-350 text-xs font-bold rounded-lg border border-sky-100 dark:border-sky-900/40">
                      Open All 7 Days
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">New Awadh Medical Hall</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Tekari Gaya Tekari, Gaya, Bihar 823001. Directly opposite traditional local medical hubs.
                  </p>

                  <div className="bg-emerald-50/50 dark:bg-emerald-950/20 rounded-xl p-3 border border-emerald-100/40 dark:border-emerald-900/20 text-left space-y-1.5">
                    <span className="text-xs font-extrabold text-emerald-800 dark:text-emerald-400 block">
                      Pharmacy Highlights:
                    </span>
                    <ul className="text-[11px] text-gray-600 dark:text-gray-300 space-y-1">
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        Qualified Pharmacists on premise
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        Vaccines & Insulins kept under strict cold storage
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        Fast home delivery within Tekari and Gaya margins
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Floating Hours Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-4 rounded-2xl shadow-xl text-center flex flex-col items-center justify-center">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-200">Store Hours</span>
                  <span className="text-sm font-black mt-0.5">8 AM - 10 PM</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. REAL-TIME MEDICINE SEARCH BOX & QUICK FINDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-150 dark:border-gray-800 shadow-xl p-6 md:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-xl"></div>
          
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white flex items-center gap-2">
              <Search className="w-6 h-6 text-emerald-600" /> Real-Time Medicine Availability Search
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Search our active pharmacy database of 40+ featured daily medications, vitamins, and diagnostics. Find pricing, correct usage details, and order immediately on WhatsApp.
            </p>
          </div>

          {/* Search Inputs */}
          <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Type medicine name or use (e.g. Dolo, Acidity, Calcium, Omron)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-250 dark:border-gray-700 bg-gray-55 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 font-medium transition"
              />
            </div>

            {/* Category selection scroll list */}
            <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-1.5 md:pb-0 scrollbar-none">
              {catalogCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedSearchCat(cat)}
                  className={`px-4 py-2.5 rounded-lg text-xs font-extrabold whitespace-nowrap transition cursor-pointer ${
                    selectedSearchCat === cat
                      ? "bg-emerald-600 text-white"
                      : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Search Results Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-h-[420px] overflow-y-auto pr-2">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="bg-gray-50 dark:bg-gray-950 p-4 rounded-xl border border-gray-150 dark:border-gray-800/80 hover:border-emerald-500/50 hover:shadow-md transition duration-200 text-left flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-2">
                      <span className="px-2 py-0.5 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 text-[10px] font-extrabold rounded">
                        {prod.category}
                      </span>
                      <span className="text-xs font-mono font-bold text-gray-500 dark:text-gray-400">
                        {prod.form}
                      </span>
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm line-clamp-1">
                      {prod.name}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                      {prod.description}
                    </p>
                    <div className="text-[11px] bg-sky-50/50 dark:bg-sky-950/25 text-sky-850 dark:text-sky-350 p-2 rounded border border-sky-100/30 dark:border-sky-900/25">
                      <strong className="font-bold">Usage:</strong> {prod.usage}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-200/50 dark:border-gray-800/60 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-gray-400 block uppercase tracking-wider">Est Price</span>
                      <span className="font-extrabold text-emerald-600 dark:text-emerald-400 text-sm">
                        {prod.priceDisplay || "Inquire"}
                      </span>
                    </div>
                    <button
                      onClick={() => handleOrderRedirect(prod.name)}
                      className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-lg transition flex items-center gap-1 cursor-pointer"
                    >
                      <MessageSquare className="w-3 h-3" /> Order Now
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-10 text-center space-y-2">
                <AlertCircle className="w-10 h-10 text-gray-300 dark:text-gray-600 mx-auto" />
                <h5 className="font-bold text-gray-600 dark:text-gray-400">No matching medicines found</h5>
                <p className="text-xs text-gray-400 dark:text-gray-500 max-w-sm mx-auto">
                  But don't worry! We have over 250+ brands in-store. Click below to inquire directly via WhatsApp.
                </p>
                <button
                  onClick={() => handleOrderRedirect(searchQuery || "Special Prescription Medicine")}
                  className="mt-3 px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition"
                >
                  Ask Pharmacist on WhatsApp
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5" /> High Standards
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Why Choose New Awadh Medical Hall?
          </h2>
          <p className="text-gray-655 dark:text-gray-400 max-w-2xl mx-auto">
            We are more than just a medicine shelf. We are a dedicated health service built on precision, care, and continuous local availability.
          </p>
        </div>

        {/* Bento grid of CHOOSE US cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CHOOSE_US_DATA.map((card, index) => (
            <div
              key={card.title}
              className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-800 hover:-translate-y-1 hover:shadow-lg transition duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 font-bold">
                {/* Dynamically picking icon matching the title */}
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-gray-900 dark:text-white mb-2 text-base">
                {card.title}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. OFFERS & DISCOUNTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-4 space-y-3">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 text-emerald-100 rounded-full text-xs font-bold uppercase tracking-wider">
                <Percent className="w-3.5 h-3.5" /> Direct Savings
              </span>
              <h3 className="text-2xl md:text-3xl font-black">Offers & Healthcare Discounts</h3>
              <p className="text-sm text-emerald-100/95 leading-relaxed">
                We believe in making life-saving treatments accessible. Take advantage of our recurring medical packages and local delivery perks.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {PROMO_OFFERS.map((promo) => (
                <div key={promo.title} className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-left flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold bg-white text-emerald-800 px-2 py-0.5 rounded uppercase inline-block mb-2.5">
                      {promo.discount}
                    </span>
                    <h4 className="font-bold text-sm text-white">{promo.title}</h4>
                    <p className="text-[11px] text-emerald-100/90 mt-1">
                      {promo.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 flex justify-between items-center">
                    <span className="text-[9px] uppercase tracking-widest text-emerald-200">PROMO CODE</span>
                    <span className="font-mono text-xs font-bold text-yellow-300">{promo.code}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. TRUST METRICS BANNER */}
      <section className="bg-emerald-600 dark:bg-emerald-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {TRUST_METRICS.map((metric) => (
              <div key={metric.label} className="space-y-1.5">
                <span className="block text-3xl md:text-5xl font-black tracking-tight text-white">
                  {metric.value}
                </span>
                <span className="block text-xs md:text-sm font-extrabold uppercase tracking-wider text-emerald-100">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WORKING PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="text-center space-y-3 mb-16">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-black uppercase tracking-widest bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-full">
            Simple 4 Steps
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Our Working Process
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm">
            Getting your medical refills from our Tekari counter is fast, simple, and fully digital-assisted.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connector line on desktop */}
          <div className="hidden md:block absolute top-1/2 left-4 right-4 h-0.5 bg-gray-200 dark:bg-gray-800 -translate-y-12 z-0"></div>

          {WORKING_PROCESS_DATA.map((item) => (
            <div key={item.step} className="space-y-4 relative z-10 text-center md:text-left">
              <div className="w-14 h-14 rounded-full bg-white dark:bg-gray-900 border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-black text-lg shadow-md mx-auto md:mx-0">
                {item.step}
              </div>
              <h3 className="font-extrabold text-gray-900 dark:text-white text-base">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs mx-auto md:mx-0">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CUSTOMER TESTIMONIALS (MINIMUM 6) */}
      <section id="testimonials-section" className="bg-gray-50 dark:bg-gray-950 py-16 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          <div className="text-center space-y-3 mb-12">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest rounded-full">
              <Heart className="w-3.5 h-3.5 fill-current text-rose-500" /> Customer Reviews
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Why Customers Trust Us
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm">
              We take care of our local Gaya and Tekari neighbors. Read some honest feedback from our real customers.
            </p>
          </div>

          {/* Testimonial Masonry/Grid of exactly 6 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-150 dark:border-gray-800 shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Star Ratings */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-amber-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-655 dark:text-gray-300 italic leading-relaxed mb-6">
                    "{item.text}"
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800/60">
                  <div>
                    <h4 className="font-extrabold text-sm text-gray-900 dark:text-white">
                      {item.name}
                    </h4>
                    <span className="text-[10px] text-gray-400 block mt-0.5">
                      {item.role}
                    </span>
                  </div>
                  <span className="text-[10px] text-gray-400 font-medium">
                    {item.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION (10 MOST COMMON FAQS) */}
      <section id="faq-section" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left scroll-mt-20">
        <div className="text-center space-y-3 mb-10">
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest rounded-full">
            <HelpCircle className="w-3.5 h-3.5" /> FAQs & Answers
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Pharmacy FAQs
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Clear responses to prescription guidelines, home delivery protocols, and payment queries.
          </p>
        </div>

        {/* Category switcher for FAQs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {faqCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFaqTab(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                activeFaqTab === cat
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-850 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isExpanded = expandedFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white dark:bg-gray-900 rounded-xl border border-gray-150 dark:border-gray-800 overflow-hidden shadow-sm transition"
              >
                <button
                  onClick={() => setExpandedFaq(isExpanded ? null : faq.id)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-800/20"
                >
                  <span className="font-extrabold text-gray-900 dark:text-white text-sm pr-4">
                    {faq.question}
                  </span>
                  <span className="text-emerald-600 shrink-0">
                    {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                
                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 border-t border-gray-50 dark:border-gray-800 text-xs text-gray-600 dark:text-gray-350 leading-relaxed bg-gray-50/30 dark:bg-gray-900/30">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. HEALTH BLOG / tips */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="text-center space-y-3 mb-12">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-black uppercase tracking-widest bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-full">
            Health awareness
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Latest Medical Tips & Blog
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-md mx-auto">
            Guidance from our pharmacy desk to help manage critical daily health therapies correctly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HEALTH_TIPS.map((tip) => (
            <div key={tip.id} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-150 dark:border-gray-800 overflow-hidden shadow-sm flex flex-col justify-between">
              <div className="p-5 space-y-3">
                <div className="flex justify-between items-center text-[10px] text-gray-400 font-bold">
                  <span className="text-emerald-600 dark:text-emerald-400 uppercase">{tip.category}</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {tip.date}
                  </span>
                </div>
                <h3 className="font-extrabold text-gray-950 dark:text-white text-base hover:text-emerald-600 transition leading-tight line-clamp-2">
                  {tip.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3">
                  {tip.excerpt}
                </p>
                <div className="bg-gray-55 dark:bg-gray-950 p-3 rounded-lg border border-gray-150/40 dark:border-gray-800 text-[11px] text-gray-600 dark:text-gray-350">
                  {tip.content}
                </div>
              </div>
              <div className="px-5 py-3 bg-gray-50 dark:bg-gray-900/60 border-t border-gray-100 dark:border-gray-850 flex justify-between items-center text-[10px] font-bold text-gray-400">
                <span>{tip.readTime}</span>
                <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5 hover:underline cursor-pointer">
                  Learn More <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. GOOGLE MAP SECTION & QUICK INQUIRY FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Map Left */}
          <div className="lg:col-span-7 bg-white dark:bg-gray-900 rounded-3xl border border-gray-150 dark:border-gray-800 p-5 shadow-lg flex flex-col justify-between">
            <div className="space-y-1 mb-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" /> Find Us on Google Maps
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Tekari Gaya Tekari, Gaya, Bihar 823001. Walking distance from Municipal Council.
              </p>
            </div>

            {/* Embedded Iframe */}
            <div className="w-full h-80 rounded-2xl overflow-hidden bg-gray-150 border border-gray-200 dark:border-gray-850">
              <iframe
                title="New Awadh Medical Hall Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14434.904257125301!2d84.8248386!3d24.9391851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398cd24d4fb47bfd%3A0x6b8ef9ea2fe9d569!2sTekari%2C%20Bihar%20823001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row gap-4 items-center justify-between text-xs text-gray-500">
              <span className="font-semibold text-gray-700 dark:text-gray-300">
                Need phone assistance while driving?
              </span>
              <a
                href={`tel:${BUSINESS_DETAILS.phone}`}
                className="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 dark:bg-blue-950 dark:hover:bg-blue-900 dark:text-blue-300 rounded-lg font-bold transition"
              >
                Call: {BUSINESS_DETAILS.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Inquiry Form Right */}
          <div className="lg:col-span-5 bg-white dark:bg-gray-900 rounded-3xl border border-gray-150 dark:border-gray-800 p-6 shadow-lg flex flex-col justify-between">
            <div className="space-y-1 mb-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-600" /> Quick Medicine Inquiry
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Type your requirements below. We will check our shelf database and call you back immediately.
              </p>
            </div>

            {inquirySuccess ? (
              <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 p-6 rounded-2xl text-center space-y-3 my-auto">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto" />
                <h4 className="font-bold text-gray-900 dark:text-white">Inquiry Received</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Thank you! Our pharmacy assistant will cross-check the medicines and ring you back on **{inquiryPhone}** within 15 minutes.
                </p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4 my-auto">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    placeholder="Enter full name"
                    className="w-full px-4 py-2 text-xs rounded-xl border border-gray-250 dark:border-gray-700 bg-gray-55 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={inquiryPhone}
                    onChange={(e) => setInquiryPhone(e.target.value)}
                    placeholder="10-digit number"
                    className="w-full px-4 py-2 text-xs rounded-xl border border-gray-255 dark:border-gray-700 bg-gray-55 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">List Medicines Required</label>
                  <textarea
                    rows={3}
                    value={inquiryText}
                    onChange={(e) => setInquiryText(e.target.value)}
                    placeholder="Type name & power (e.g. Glycomet GP1, Lipvas 10...)"
                    className="w-full px-4 py-2 text-xs rounded-xl border border-gray-250 dark:border-gray-700 bg-gray-55 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" /> Submit Stock Inquiry
                </button>
              </form>
            )}

            <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-850 text-[10px] text-gray-400 text-center">
              Our direct counter hotline is also active 14 hours a day.
            </div>
          </div>

        </div>
      </section>

      {/* 11. CONTACT CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white text-center space-y-6 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-2xl"></div>
          
          <div className="max-w-xl mx-auto space-y-3 relative z-10">
            <span className="text-yellow-300 text-xs font-bold uppercase tracking-widest block">Immediate Assistance</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Need Medicines Urgetly?</h2>
            <p className="text-sm text-blue-100 leading-relaxed">
              Don't compromise on your health. Send us a quick WhatsApp text or call us now. We will instantly locate your required products on our racks.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10 max-w-md mx-auto">
            <a
              href={`tel:${BUSINESS_DETAILS.phone}`}
              className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-gray-50 text-blue-700 font-extrabold rounded-xl transition flex items-center justify-center gap-2"
            >
              <Phone className="w-4.5 h-4.5" /> Call Store Now
            </a>
            <button
              onClick={() => {
                setActiveTab("whatsapp-order");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4.5 h-4.5" /> WhatsApp Order
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

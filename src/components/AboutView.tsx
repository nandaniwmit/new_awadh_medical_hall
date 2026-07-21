import React from "react";
import { BUSINESS_DETAILS } from "../types";
import { Heart, ShieldCheck, Target, Award, Sparkles, PhoneCall, CalendarDays, Compass, Quote } from "lucide-react";

export default function AboutView() {
  const timelineMilestones = [
    {
      year: "2015",
      title: "The Inception",
      description: "Founded New Awadh Medical Hall in Tekari, Gaya with a core vision to offer 100% genuine medications, bridging the gap for life-saving therapeutics in local communities."
    },
    {
      year: "2018",
      title: "Insulin Cold Storage Setup",
      description: "Installed medical-grade deep refrigerators with fully uninterrupted power backup to secure biological vaccines, pediatric serums, and insulins under strict cold chains."
    },
    {
      year: "2021",
      title: "Critical Care Expansion",
      description: "Expanded inventory to cover oncology injectables, rare respiratory solutions, and orthopedic braces, establishing ourselves as a one-stop-shop medical hall."
    },
    {
      year: "2024",
      title: "Digital WhatsApp Pharmacy",
      description: "Launched an interactive WhatsApp catalog and local home-delivery team, facilitating order placements via mobile and offering fast doorstep supply."
    }
  ];

  const values = [
    {
      title: "100% Authentic Integrity",
      description: "We work directly with approved wholesalers of pharmaceutical houses. We completely guard against expired or counterfeit drugs.",
      icon: "ShieldCheck"
    },
    {
      title: "Community Empathy First",
      description: "We value people before transactions. Our pharmacists proactively assist, offering clear directions on when and how to consume pills.",
      icon: "Heart"
    },
    {
      title: "Affordable Access",
      description: "We pass retail margins directly down as honest consumer discounts, ensuring regular monthly chronic medicines are highly economical.",
      icon: "Award"
    }
  ];

  return (
    <div className="space-y-16 py-12 text-left">
      
      {/* Page Header Banner */}
      <section className="relative bg-gradient-to-br from-emerald-500/10 to-blue-500/5 dark:from-emerald-950/20 dark:to-gray-900 border-b border-gray-150 dark:border-gray-800 py-16 text-center rounded-3xl mx-4 sm:mx-6 lg:mx-8">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03]"></div>
        <div className="relative z-10 space-y-3">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-black uppercase tracking-widest bg-white dark:bg-gray-850 px-3 py-1 rounded-full shadow-sm">
            Our Business Story
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
            About New Awadh Medical Hall
          </h1>
          <p className="text-gray-500 dark:text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed px-4">
            A pillar of professional pharmacy standards in Tekari, Gaya, committed to genuine medicines, patient care, and strict storage compliance.
          </p>
        </div>
      </section>

      {/* Grid: Business Story & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
              Serving the Health of Tekari with Absolute Trust
            </h2>
            
            <div className="space-y-4 text-xs md:text-sm text-gray-655 dark:text-gray-350 leading-relaxed">
              <p>
                At New Awadh Medical Hall, we believe that access to genuine healthcare is a fundamental right. Established in the heart of Tekari, Gaya (Bihar), our pharmacy was born out of a determination to solve local medicine shortages. Before our establishment, families frequently had to travel long distances into major municipal cities to purchase specialized prescription drugs, biological vaccines, and cardiac medicines.
              </p>
              <p>
                Today, we proudly house over 250+ certified pharmaceutical brands under a spacious, air-conditioned, and sterile environment. From infant formulas to geriatric supplements, diabetes testing equipment, and surgical supplies, we cater to every generation with careful pharmaceutical review.
              </p>
              <p>
                Our staff includes trained pharmacists who verify every dosage instruction on doctor’s slips, checking for cross-interaction or allergies before dispensing. At our pharmacy, your well-being always takes precedence.
              </p>
            </div>

            {/* Core Mission & Vision Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              <div className="bg-emerald-50/40 dark:bg-emerald-950/20 p-5 rounded-2xl border border-emerald-100/30 dark:border-emerald-900/30">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-extrabold text-sm mb-2.5">
                  <Target className="w-4.5 h-4.5" /> Our Mission
                </div>
                <p className="text-xs text-gray-550 dark:text-gray-350 leading-relaxed">
                  To supply 100% genuine, certified medicines and health accessories directly to the residents of Tekari, Gaya at maximum affordability, while maintaining the highest pharmacy safety standards.
                </p>
              </div>

              <div className="bg-sky-50/40 dark:bg-sky-950/20 p-5 rounded-2xl border border-sky-100/30 dark:border-sky-900/30">
                <div className="flex items-center gap-2 text-sky-750 dark:text-sky-400 font-extrabold text-sm mb-2.5">
                  <Compass className="w-4.5 h-4.5" /> Our Vision
                </div>
                <p className="text-xs text-gray-550 dark:text-gray-350 leading-relaxed">
                  To grow as the absolute benchmark of community healthcare in Gaya district, integrating modern digital home delivery and cold storage logistics to make life-saving drugs available instantly.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm bg-white dark:bg-gray-900 rounded-3xl p-5 shadow-xl border border-gray-150 dark:border-gray-800">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
                alt="Inside New Awadh Medical Hall shelves"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute -bottom-5 -left-5 bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-4.5 rounded-2xl shadow-xl flex items-center gap-3 max-w-xs text-left">
                <Award className="w-10 h-10 text-emerald-100 shrink-0" />
                <div>
                  <span className="block font-black text-lg leading-tight">Licensed</span>
                  <span className="block text-[10px] text-emerald-150 uppercase tracking-widest font-bold">Bihar Drug Control</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Values section */}
      <section className="bg-gray-50 dark:bg-gray-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          <div className="text-center space-y-3 mb-12">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-black uppercase tracking-widest bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-full">
              Our Pillars
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
              Our Core Pharmacy Values
            </h2>
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto">
              Our day-to-day work is governed by rigid health safety protocols and ethical standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-150 dark:border-gray-800 shadow-sm"
              >
                <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-950 rounded-xl text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-gray-900 dark:text-white text-base mb-2">
                  {v.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Milestone Timeline */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="text-center space-y-3 mb-12">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-black uppercase tracking-widest bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-full">
            Our Journey
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
            Historical Milestones
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            A decade of evolution focused on patient welfare and state-of-the-art storage equipment.
          </p>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:w-0.5 before:bg-gray-200 dark:before:bg-gray-800">
          {timelineMilestones.map((milestone, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={milestone.year} className={`relative flex flex-col sm:flex-row items-start sm:items-center ${isEven ? "sm:flex-row-reverse" : ""}`}>
                {/* Dot */}
                <div className="absolute left-4 sm:left-1/2 w-4 h-4 rounded-full bg-emerald-600 border-4 border-white dark:border-gray-900 -translate-x-1.5 sm:-translate-x-2 z-10"></div>
                
                {/* Card Container */}
                <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                  <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-sm hover:shadow-md transition">
                    <span className="inline-block px-2.5 py-1 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-400 text-xs font-black rounded-lg mb-2">
                      {milestone.year}
                    </span>
                    <h3 className="font-extrabold text-gray-900 dark:text-white text-sm">
                      {milestone.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1.5 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Owner Message: Quote-style card */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-600/10 to-teal-600/5 border border-emerald-500/15 rounded-3xl p-8 relative overflow-hidden">
          <Quote className="absolute right-6 top-6 w-24 h-24 text-emerald-600/5 dark:text-emerald-400/5 rotate-180" />
          
          <div className="space-y-5 text-center md:text-left">
            <h3 className="text-lg font-bold text-gray-950 dark:text-white uppercase tracking-wider flex items-center justify-center md:justify-start gap-1.5 text-emerald-700 dark:text-emerald-400">
              <CalendarDays className="w-5 h-5 text-emerald-600" /> A Message from the Owner
            </h3>
            
            <p className="text-xs md:text-sm text-gray-655 dark:text-gray-300 italic leading-relaxed">
              "We established New Awadh Medical Hall with one fundamental belief: no patient in Tekari or Gaya should have to skip a vital treatment dose because of unavailability or honest price restrictions. Healthcare is sacred. That is why we double check every batch, monitor refrigeration 24/7, and offer patient education at the checkout counter. Thank you for placing your trust in us for all your household medical needs."
            </p>

            <div className="pt-3.5 border-t border-gray-200/50 dark:border-gray-850 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <span className="block font-black text-gray-900 dark:text-white text-sm">Mr. Awadh Kishore Prasad</span>
                <span className="block text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Chief Pharmacist & Founder, New Awadh Medical Hall</span>
              </div>
              <a
                href={`tel:${BUSINESS_DETAILS.phone}`}
                className="px-4.5 py-2 bg-emerald-650 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition flex items-center gap-1.5"
              >
                <PhoneCall className="w-3.5 h-3.5" /> Call: {BUSINESS_DETAILS.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

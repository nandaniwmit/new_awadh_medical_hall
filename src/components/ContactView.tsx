import React, { useState } from "react";
import { BUSINESS_DETAILS } from "../types";
import { MapPin, Phone, MessageSquare, Clock, Mail, CheckCircle2, Send, AlertTriangle } from "lucide-react";

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setFormData({ name: "", phone: "", email: "", message: "" });
      }, 4000);
    }
  };

  return (
    <div className="space-y-16 py-12 text-left">
      
      {/* Contact Banner */}
      <section className="relative bg-gradient-to-br from-emerald-500/10 via-blue-500/5 to-transparent dark:from-gray-900 dark:to-gray-950 border-b border-gray-150 dark:border-gray-800 py-16 text-center rounded-3xl mx-4 sm:mx-6 lg:mx-8">
        <div className="relative z-10 space-y-3">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-black uppercase tracking-widest bg-white dark:bg-gray-850 px-3 py-1 rounded-full shadow-sm">
            Get In Touch
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
            Contact Our Pharmacy
          </h1>
          <p className="text-gray-500 dark:text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed px-4">
            We are situated in Tekari, Gaya. Reach out directly for medicine stock availability, prescription checks, or health advice.
          </p>
        </div>
      </section>

      {/* Main Grid: Info Cards, Hours, and Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Cards & Hours (Left Column) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Directory */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-150 dark:border-gray-800 p-6 space-y-5 shadow-sm">
              <h3 className="font-extrabold text-gray-900 dark:text-white text-base">
                Business Coordinates
              </h3>

              <div className="space-y-4">
                {/* Location Card */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 rounded-xl shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-black text-gray-400 uppercase tracking-widest">Store Address</span>
                    <span className="block text-xs font-bold text-gray-900 dark:text-white mt-0.5 leading-normal">
                      New Awadh Medical Hall, Tekari Gaya Tekari, Gaya, Bihar 823001
                    </span>
                    <a
                      href="https://maps.google.com/?q=Tekari+Gaya+Bihar+823001"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-emerald-600 dark:text-emerald-400 font-extrabold mt-1 inline-block hover:underline"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 rounded-xl shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-black text-gray-400 uppercase tracking-widest">Phone Hotline</span>
                    <a
                      href={`tel:${BUSINESS_DETAILS.phone}`}
                      className="block text-sm font-bold text-gray-900 dark:text-white mt-0.5 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
                    >
                      {BUSINESS_DETAILS.phoneDisplay}
                    </a>
                    <span className="text-[10px] text-gray-400 block leading-tight mt-0.5">
                      Call for direct stock inquiries and delivery tracking.
                    </span>
                  </div>
                </div>

                {/* WhatsApp Order Card */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-xl shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-black text-gray-400 uppercase tracking-widest">WhatsApp Support</span>
                    <a
                      href={`https://wa.me/91${BUSINESS_DETAILS.phone}?text=Hello%20New%20Awadh%20Medical%20Hall`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-0.5 hover:underline"
                    >
                      +91 {BUSINESS_DETAILS.phone}
                    </a>
                    <span className="text-[10px] text-gray-400 block leading-tight mt-0.5">
                      Send prescription images directly. Fast verification response.
                    </span>
                  </div>
                </div>

                {/* Email Card */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 rounded-xl shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-black text-gray-400 uppercase tracking-widest">Corporate Email</span>
                    <a
                      href="mailto:info@newawadhmedical.com"
                      className="block text-sm font-bold text-gray-900 dark:text-white mt-0.5 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
                    >
                      info@newawadhmedical.com
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Operating Hours Table */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-150 dark:border-gray-800 p-6 space-y-4 shadow-sm">
              <h3 className="font-extrabold text-gray-900 dark:text-white text-base flex items-center gap-1.5">
                <Clock className="w-5 h-5 text-emerald-600" /> Operational Hours
              </h3>
              
              <div className="space-y-2 text-xs">
                {BUSINESS_DETAILS.detailedHours.map((h) => (
                  <div key={h.day} className="flex justify-between items-center py-1.5 border-b border-gray-100 dark:border-gray-800 last:border-0 text-gray-600 dark:text-gray-300">
                    <span className="font-bold">{h.day}</span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-0.5 rounded-lg border border-emerald-100/30 dark:border-emerald-900/30">
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Contact Form (Right Column) */}
          <div className="lg:col-span-7 bg-white dark:bg-gray-900 rounded-3xl border border-gray-150 dark:border-gray-800 p-6 md:p-8 shadow-md">
            
            <div className="space-y-1 mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Send Us an Online Inquiry
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Have general feedback, regulatory queries, or corporate partnership ideas? Fill in the details below. Our support executive will reach out to you.
              </p>
            </div>

            {success ? (
              <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 p-8 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mx-auto" />
                <h4 className="font-extrabold text-gray-900 dark:text-white text-lg">Inquiry Submitted Successfully</h4>
                <p className="text-xs text-gray-550 dark:text-gray-400 max-w-sm mx-auto">
                  Thank you, **{formData.name}**! Your message has been sent to the desk of New Awadh Medical Hall. We will get back to you inside 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter name"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-250 dark:border-gray-700 bg-gray-55 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-emerald-500 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter 10-digit number"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-255 dark:border-gray-700 bg-gray-55 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-emerald-500 text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                    Email Address <span className="text-gray-400 text-[10px]">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-250 dark:border-gray-700 bg-gray-55 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-emerald-500 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                    Your Message / Requirement Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Type details about medicine requirements, medical setups, or other queries..."
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-250 dark:border-gray-700 bg-gray-55 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-emerald-500 text-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-emerald-600/10"
                >
                  <Send className="w-3.5 h-3.5" /> Submit Message Inquiry
                </button>
              </form>
            )}

            <div className="mt-6 p-4.5 bg-yellow-500/10 rounded-2xl border border-yellow-500/20 text-xs text-yellow-800 dark:text-yellow-200 flex gap-2.5">
              <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5 text-yellow-600" />
              <p className="leading-relaxed">
                <strong>Attention:</strong> For urgent medicine supply inquiries or immediate deliveries, we strongly advise using our **WhatsApp Order Form** or calling our direct desk instead of sending email messages. Email forms are only monitored during daily administrative reviews.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Embedded Map Section (Full Width) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-150 dark:border-gray-800 p-5 shadow-sm">
          <div className="w-full h-96 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800">
            <iframe
              title="Full Width Google Map of Tekari Region"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14434.904257125301!2d84.8248386!3d24.9391851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398cd24d4fb47bfd%3A0x6b8ef9ea2fe9d569!2sTekari%2C%20Bihar%20823001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
}

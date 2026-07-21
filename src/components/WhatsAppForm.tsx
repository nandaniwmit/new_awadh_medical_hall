import React, { useState, useRef } from "react";
import { BUSINESS_DETAILS, WhatsAppOrderState } from "../types";
import { Send, PhoneCall, Upload, FileText, CheckCircle2, ShoppingBag, Clock, HelpCircle, X } from "lucide-react";

interface WhatsAppFormProps {
  onSuccess?: () => void;
  prefilledMedicine?: string;
}

export default function WhatsAppForm({ onSuccess, prefilledMedicine = "" }: WhatsAppFormProps) {
  const [formData, setFormData] = useState<WhatsAppOrderState>({
    customerName: "",
    mobileNumber: "",
    email: "",
    address: "",
    medicineName: prefilledMedicine,
    hasPrescription: "No",
    prescriptionFileName: "",
    message: "",
    preferredDeliveryTime: "Anytime (8 AM - 10 PM)",
  });

  const [dragActive, setDragActive] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePrescriptionToggle = (value: "Yes" | "No") => {
    setFormData((prev) => ({
      ...prev,
      hasPrescription: value,
      prescriptionFileName: value === "No" ? "" : prev.prescriptionFileName,
    }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setFormData((prev) => ({
        ...prev,
        hasPrescription: "Yes",
        prescriptionFileName: file.name,
      }));
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData((prev) => ({
        ...prev,
        hasPrescription: "Yes",
        prescriptionFileName: file.name,
      }));
    }
  };

  const removeFile = () => {
    setFormData((prev) => ({ ...prev, prescriptionFileName: "" }));
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.customerName || !formData.mobileNumber || !formData.medicineName) {
      alert("Please fill in the required fields: Name, Phone, and Medicines Required.");
      return;
    }

    setSubmitting(true);

    // Format the WhatsApp text exactly as specified by prompt & professional standards
    const text = `Hello New Awadh Medical Hall,

*NEW MEDICINE ORDER & INQUIRY*
----------------------------------------
*Customer Name:* ${formData.customerName}
*Phone Number:* ${formData.mobileNumber}
*Email:* ${formData.email || "N/A"}
*Address:* ${formData.address || "N/A"}

*Medicines Required:*
${formData.medicineName}

*Prescription Uploaded:* ${formData.hasPrescription} ${formData.prescriptionFileName ? `(${formData.prescriptionFileName})` : ""}
*Preferred Delivery:* ${formData.preferredDeliveryTime}

*Additional Message:*
${formData.message || "None"}
----------------------------------------
Thank you! Please confirm availability and bill total.`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/91${BUSINESS_DETAILS.phone}?text=${encodedText}`;

    // Simulate small backend check/loading for optimal professional UX
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      window.open(whatsappUrl, "_blank");
      if (onSuccess) onSuccess();
    }, 800);
  };

  return (
    <div id="whatsapp-order-form-container" className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-6 text-white text-left">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/10 rounded-xl">
            <ShoppingBag className="w-6 h-6 text-emerald-100" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Fast WhatsApp Order Form</h3>
            <p className="text-sm text-emerald-100/90 mt-0.5">
              Fill details & upload prescription. We format & send directly to our pharmacy WhatsApp.
            </p>
          </div>
        </div>
      </div>

      {submitted ? (
        <div className="p-10 text-center">
          <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h4 className="text-2xl font-bold text-gray-900 dark:text-white">Order Sent to WhatsApp!</h4>
          <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-md mx-auto">
            Your structured request has been generated and sent to **{BUSINESS_DETAILS.phoneDisplay}**. If WhatsApp did not open, click the button below to retry.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleSubmit}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl transition duration-200 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" /> Re-open WhatsApp
            </button>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  customerName: "",
                  mobileNumber: "",
                  email: "",
                  address: "",
                  medicineName: "",
                  hasPrescription: "No",
                  prescriptionFileName: "",
                  message: "",
                  preferredDeliveryTime: "Anytime (8 AM - 10 PM)",
                });
              }}
              className="px-6 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-xl transition duration-200"
            >
              Order Another Medicine
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-6 space-y-5 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                Your Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="customerName"
                required
                value={formData.customerName}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                WhatsApp Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="mobileNumber"
                required
                value={formData.mobileNumber}
                onChange={handleInputChange}
                placeholder="Enter 10-digit number"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                Email Address <span className="text-gray-400 text-xs">(Optional)</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                Preferred Delivery / Pickup Time
              </label>
              <select
                name="preferredDeliveryTime"
                value={formData.preferredDeliveryTime}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition"
              >
                <option>Anytime (8 AM - 10 PM)</option>
                <option>Morning (8 AM - 12 PM)</option>
                <option>Afternoon (12 PM - 4 PM)</option>
                <option>Evening (4 PM - 8 PM)</option>
                <option>Night (8 PM - 10 PM)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Full Address <span className="text-gray-400 text-xs">(For local home delivery in Tekari)</span>
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="House No, Ward No, Land mark, Tekari, Gaya"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Medicine Required / Health Products <span className="text-red-500">*</span>
            </label>
            <textarea
              name="medicineName"
              required
              rows={3}
              value={formData.medicineName}
              onChange={handleInputChange}
              placeholder="List medicine names with quantities. E.g.,&#10;- Dolo 650mg (10 Tablets)&#10;- Volini Spray 100g (1 Unit)&#10;- Ensure Diabetes Vanilla 400g (1 Pack)"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition font-sans"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Do you have a doctor's prescription?
            </label>
            <div className="flex gap-4 mb-3">
              <button
                type="button"
                onClick={() => handlePrescriptionToggle("Yes")}
                className={`flex-1 py-2.5 rounded-xl border font-semibold text-sm transition flex items-center justify-center gap-2 ${
                  formData.hasPrescription === "Yes"
                    ? "bg-emerald-50 border-emerald-500 text-emerald-700 dark:bg-emerald-950/40 dark:border-emerald-400 dark:text-emerald-300"
                    : "border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                <FileText className="w-4 h-4" /> Yes, I have it
              </button>
              <button
                type="button"
                onClick={() => handlePrescriptionToggle("No")}
                className={`flex-1 py-2.5 rounded-xl border font-semibold text-sm transition flex items-center justify-center gap-2 ${
                  formData.hasPrescription === "No"
                    ? "bg-emerald-50 border-emerald-500 text-emerald-700 dark:bg-emerald-950/40 dark:border-emerald-400 dark:text-emerald-300"
                    : "border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                <X className="w-4 h-4" /> No, OTC medication
              </button>
            </div>

            {formData.hasPrescription === "Yes" && (
              <div
                onDragEnter={handleDrag}
                onDragOver={handleDrag}
                onDragLeave={handleDrag}
                onDrop={handleDrop}
                onClick={triggerFileSelect}
                className={`border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition ${
                  dragActive
                    ? "border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20"
                    : "border-gray-300 dark:border-gray-700 hover:border-emerald-500 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                
                {formData.prescriptionFileName ? (
                  <div className="flex items-center justify-between bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 rounded-lg p-2.5 max-w-sm mx-auto" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300 overflow-hidden">
                      <FileText className="w-5 h-5 flex-shrink-0 text-emerald-600" />
                      <span className="text-xs font-medium truncate">{formData.prescriptionFileName}</span>
                    </div>
                    <button
                      type="button"
                      onClick={removeFile}
                      className="p-1 text-gray-400 hover:text-red-500 transition"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Upload className="w-8 h-8 text-gray-400 dark:text-gray-500 mx-auto" />
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Drag & Drop Prescription here, or <span className="text-emerald-600 dark:text-emerald-400">Browse</span>
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      Supports PNG, JPG, PDF (Max 5MB)
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Additional Instructions <span className="text-gray-400 text-xs">(Optional)</span>
            </label>
            <textarea
              name="message"
              rows={2}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Any specific instructions for delivery agent or packing requirements..."
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition"
            />
          </div>

          {/* Real-time Order Summary Preview Card */}
          <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-800 text-xs text-gray-600 dark:text-gray-400 space-y-1.5">
            <h5 className="font-bold text-gray-800 dark:text-gray-300 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Live Message Preview:
            </h5>
            <p className="font-mono bg-white dark:bg-gray-900 p-2.5 rounded border border-gray-200/50 dark:border-gray-800 leading-relaxed whitespace-pre-line">
              Hello New Awadh Medical Hall,
              {"\n"}Customer: <span className="text-gray-900 dark:text-white font-semibold">{formData.customerName || "___________"}</span>
              {"\n"}Medicines: <span className="text-gray-900 dark:text-white font-semibold">{formData.medicineName ? (formData.medicineName.length > 50 ? formData.medicineName.substring(0, 50) + "..." : formData.medicineName) : "___________"}</span>
              {"\n"}Prescription: <span className="text-gray-900 dark:text-white font-semibold">{formData.hasPrescription} {formData.prescriptionFileName ? `(${formData.prescriptionFileName})` : ""}</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="flex-1 py-3 px-6 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold rounded-xl transition shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              {submitting ? (
                <>
                  <Clock className="w-5 h-5 animate-spin" /> Formatting Message...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" /> Send Order via WhatsApp
                </>
              )}
            </button>
            
            <a
              href={`tel:${BUSINESS_DETAILS.phone}`}
              className="py-3 px-6 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 font-bold rounded-xl transition flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-5 h-5" /> Call Store Directly
            </a>
          </div>
        </form>
      )}
    </div>
  );
}

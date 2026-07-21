export interface BusinessInfo {
  name: string;
  category: string;
  location: string;
  fullAddress: string;
  phone: string;
  phoneDisplay: string;
  tagline: string;
  hours: string;
  detailedHours: { day: string; time: string }[];
  accentColor: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
}

export interface CategoryItem {
  id: string;
  name: string;
  icon: string;
  description: string;
  popularItems: string[];
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  description: string;
  usage: string;
  form: 'Tablet' | 'Capsule' | 'Syrup' | 'Injection' | 'Equipment' | 'Supplement' | 'Cream' | 'Baby Care' | 'Device';
  priceDisplay?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  role: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Store Front' | 'Medicine Shelves' | 'Products' | 'Medical Equipment' | 'Customers';
  imageUrl: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
}

export interface WhatsAppOrderState {
  customerName: string;
  mobileNumber: string;
  email: string;
  address: string;
  medicineName: string;
  hasPrescription: 'Yes' | 'No';
  prescriptionFileName?: string;
  message: string;
  preferredDeliveryTime: string;
}

// Business Data
export const BUSINESS_DETAILS: BusinessInfo = {
  name: "New Awadh Medical Hall",
  category: "Pharmacy | Medical Store",
  location: "Tekari, Gaya, Bihar 823001",
  fullAddress: "Tekari Gaya Tekari, Gaya, Bihar 823001",
  phone: "07979969269",
  phoneDisplay: "+91 79799 69269",
  tagline: "Your Trusted Medical Store for Genuine Medicines & Healthcare Needs",
  hours: "Open Daily: 8:00 AM - 10:00 PM",
  detailedHours: [
    { day: "Monday", time: "8:00 AM - 10:00 PM" },
    { day: "Tuesday", time: "8:00 AM - 10:00 PM" },
    { day: "Wednesday", time: "8:00 AM - 10:00 PM" },
    { day: "Thursday", time: "8:00 AM - 10:00 PM" },
    { day: "Friday", time: "8:00 AM - 10:00 PM" },
    { day: "Saturday", time: "8:00 AM - 10:00 PM" },
    { day: "Sunday", time: "8:00 AM - 10:00 PM" },
  ],
  accentColor: "#0A8F6A",
};

// 10 Services
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "prescription-medicines",
    title: "Prescription Medicines",
    description: "Dispensing genuine prescription drugs with pharmacist verification. Double-checked for accurate dosage and expiry dates.",
    category: "Core Services",
    icon: "FileText",
  },
  {
    id: "general-medicines",
    title: "OTC & General Medicines",
    description: "Wide selection of Over-The-Counter medicines for common ailments like fever, pain relief, cough, cold, and allergies.",
    category: "Core Services",
    icon: "Pill",
  },
  {
    id: "health-supplements",
    title: "Health & Vitamin Supplements",
    description: "Premium multivitamins, protein powders, minerals, and immunity boosters from leading national and international brands.",
    category: "Wellness",
    icon: "Sparkles",
  },
  {
    id: "baby-care",
    title: "Baby Care Products",
    description: "Hypoallergenic baby foods, diapers, wipes, baby lotions, shampoos, and feeding essentials from reliable brands.",
    category: "Wellness",
    icon: "Baby",
  },
  {
    id: "personal-care",
    title: "Personal Care & Hygiene",
    description: "Daily skin care, hair care, oral care, soaps, handwashes, and general personal hygiene essentials for your family.",
    category: "Wellness",
    icon: "Smile",
  },
  {
    id: "medical-equipment",
    title: "Medical Equipment & Devices",
    description: "Nebulizers, digital thermometers, oxygen concentrators, heating pads, and other critical home care medical devices.",
    category: "Healthcare Gear",
    icon: "Activity",
  },
  {
    id: "surgical-supplies",
    title: "Surgical Supplies",
    description: "Bandages, surgical tape, syringes, gloves, IV sets, dressing materials, and specialized surgical equipment.",
    category: "Healthcare Gear",
    icon: "Scissors",
  },
  {
    id: "first-aid-products",
    title: "First Aid Supplies",
    description: "Ready-made first aid kits, antiseptics (Dettol, Savlon), ointments, cotton rolls, and emergency injury treatment items.",
    category: "Core Services",
    icon: "Heart",
  },
  {
    id: "diabetic-care",
    title: "Diabetic Care Section",
    description: "Blood glucose monitoring devices (glucometers), testing strips, lancets, diabetic sugar-free health drinks, and insulin syringes.",
    category: "Specialized",
    icon: "Droplet",
  },
  {
    id: "healthcare-essentials",
    title: "Daily Healthcare Essentials",
    description: "Adult diapers, orthopedic support (knee caps, back belts, cervical collars), and general wellness accessories.",
    category: "Specialized",
    icon: "ShieldAlert",
  },
];

// Why Choose Us cards
export const CHOOSE_US_DATA = [
  {
    title: "100% Genuine Medicines",
    description: "We source directly from licensed pharmaceutical distributors. Zero compromise on quality, authenticity, and expiry protocols.",
    icon: "ShieldCheck",
  },
  {
    title: "Experienced & Helpful Staff",
    description: "Our knowledgeable retail executives help clarify prescriptions, guide medicine usage, and answer healthcare questions.",
    icon: "UserCheck",
  },
  {
    title: "Affordable & Honest Prices",
    description: "Get maximum discounts and genuine retail pricing on all standard medications, surgical supplies, and health foods.",
    icon: "Tag",
  },
  {
    title: "Fast & Attentive Service",
    description: "Minimize wait times with our fast service model, fully categorized storage system, and organized checkout counters.",
    icon: "Clock",
  },
  {
    title: "Prescription Care",
    description: "Accurate dispensing of chronic disease therapies with clear usage reminders and custom calendar labels.",
    icon: "FileHeart",
  },
  {
    title: "Complete Healthcare Products",
    description: "From diagnostics to daily personal hygiene, find all major healthcare categories under a single spacious roof.",
    icon: "Layers",
  },
  {
    title: "Trusted Local Pharmacy",
    description: "Serving the Tekari, Gaya community with pride. Your neighbor, your healthcare ally, always here for you.",
    icon: "Home",
  },
  {
    title: "Easy WhatsApp Support",
    description: "Order prescription medicines or check stock availability by sending a snap of your prescription directly via WhatsApp.",
    icon: "MessageSquareText",
  },
];

// Why Customers Trust Us Metrics
export const TRUST_METRICS = [
  { label: "Years of Trust", value: "10+" },
  { label: "Genuine Medicines", value: "100%" },
  { label: "Happy Customers", value: "15,000+" },
  { label: "Available Brands", value: "250+" },
];

// Working Process (4 Steps)
export const WORKING_PROCESS_DATA = [
  {
    step: "01",
    title: "Visit Store / Order Online",
    description: "Walk into our well-ventilated Tekari pharmacy or use our online WhatsApp order form to initiate your healthcare request.",
    icon: "MapPin",
  },
  {
    step: "02",
    title: "Share Prescription",
    description: "Hand over your medical prescription to our executive or upload a clear photo of it in our digital chat system.",
    icon: "ClipboardCheck",
  },
  {
    step: "03",
    title: "Get / Verify Medicines",
    description: "Our qualified pharmacist picks your medicines, checks expiry dates, and reviews precise instructions with you.",
    icon: "PackageCheck",
  },
  {
    step: "04",
    title: "Easy Payment & Delivery",
    description: "Pay securely via cash, UPI, cards, or QR code. Take your package home or receive rapid local home delivery.",
    icon: "CreditCard",
  },
];

// 12 Featured Categories
export const CATEGORIES_DATA: CategoryItem[] = [
  {
    id: "tablets",
    name: "Tablets",
    icon: "Grid",
    description: "Prescription and OTC tablets for daily health, heart, fever, diabetes, and gastrointestinal care.",
    popularItems: ["Paracetamol 650mg", "Pantocid 40", "Metformin 500mg"],
  },
  {
    id: "capsules",
    name: "Capsules",
    icon: "Pill",
    description: "High-grade encapsulated pharmaceuticals including vitamins, probiotics, antibiotics, and supplements.",
    popularItems: ["Amoxycillin Capsules", "Multivitamin Capsules", "Omega-3 Softgels"],
  },
  {
    id: "syrups",
    name: "Syrups",
    icon: "GlassWater",
    description: "Liquid cough medicines, pediatric syrups, health tonics, digestive enzymes, and antacids.",
    popularItems: ["Grilinctus Syrup", "Gelusil Antacid Liquid", "Aptivate Syrup"],
  },
  {
    id: "injection",
    name: "Injections",
    icon: "Syringe",
    description: "Sterile injectables, vaccines, insulin vials, and clinical critical care fluid ampoules.",
    popularItems: ["Lantus Insulin Cartridge", "Monocef 1g", "Neurobion Forte Injection"],
  },
  {
    id: "medical-equipment",
    name: "Medical Equipment",
    icon: "Activity",
    description: "Premium diagnostic gear such as BP monitors, Nebulizers, Pulse Oximeters, and Glucometers.",
    popularItems: ["Omron Blood Pressure Monitor", "Dr Trust Nebulizer", "Pulse Oximeter"],
  },
  {
    id: "protein-supplements",
    name: "Protein Supplements",
    icon: "CupSoda",
    description: "Whey proteins, organic meal replacements, diabetic-friendly powders, and recovery nutritional drinks.",
    popularItems: ["Ensure Diabetes Care", "Protinex Original", "Grip Nutritional Powder"],
  },
  {
    id: "vitamins",
    name: "Vitamins & Minerals",
    icon: "Sparkles",
    description: "Daily health formulations including Calcium, Vitamin D3, Vitamin C, Zinc, and B-Complex capsules.",
    popularItems: ["Zincovit", "Limcee 500mg", "Shelcal 500"],
  },
  {
    id: "skin-care",
    name: "Skin Care",
    icon: "Sparkle",
    description: "Dermatologist-recommended creams, moisturizers, acne solutions, sunscreens, and anti-fungal powders.",
    popularItems: ["Candid Dusting Powder", "Cetaphil Moisturizing Lotion", "Betnovate-N"],
  },
  {
    id: "baby-products",
    name: "Baby Products",
    icon: "Baby",
    description: "Safest baby care essentials like formulas, baby oil, powder, wipes, and sensitive soaps.",
    popularItems: ["Lactogen 1/2/3", "Himalaya Baby Wipes", "Johnson's Baby Bath"],
  },
  {
    id: "personal-hygiene",
    name: "Personal Hygiene",
    icon: "Shield",
    description: "Sanitizers, antiseptic liquids, antibacterial body soaps, intimate care products, and adult diapers.",
    popularItems: ["Dettol Liquid 500ml", "Friends Adult Diapers", "Lifebuoy Handwash"],
  },
  {
    id: "orthopedic-support",
    name: "Orthopedic Support",
    icon: "Accessibility",
    description: "Joint pain solutions like knee support, ankle binders, lumbar belts, and hot water bags.",
    popularItems: ["Tynor Knee Cap", "Lumbo Sacral Belt", "Orthopedic Heat Pad"],
  },
  {
    id: "diabetic-care",
    name: "Diabetic Care",
    icon: "Droplets",
    description: "Sugar alternatives, testing strips, diabetic socks, and nutritional formulations.",
    popularItems: ["Accu-Chek Active Strips", "Sugar Free Gold", "Diabetic Foot Cream"],
  },
];

// Rich Product Catalog for Search (40+ standard Indian pharmacy items)
export const PRODUCT_CATALOG: ProductItem[] = [
  { id: "p1", name: "Paracetamol 650mg (Dolo)", category: "Tablets", description: "Effective antipyretic and analgesic for fever and pain relief.", usage: "1 tablet up to 3 times a day or as directed.", form: "Tablet", priceDisplay: "₹30 per strip" },
  { id: "p2", name: "Pantocid 40mg (Pantoprazole)", category: "Tablets", description: "Reduces stomach acid, treats acidity, heartburn, and GERD.", usage: "Take 1 tablet daily on an empty stomach in the morning.", form: "Tablet", priceDisplay: "₹120 per strip" },
  { id: "p3", name: "Metformin 500mg (Glycomet)", category: "Tablets", description: "Oral anti-diabetic medicine that helps control blood sugar levels.", usage: "Take with meals as prescribed by physician.", form: "Tablet", priceDisplay: "₹25 per strip" },
  { id: "p4", name: "Limcee 500mg (Vitamin C Chewable)", category: "Vitamins", description: "Boosts immune system, promotes skin health and antioxidant defenses.", usage: "Chew 1 tablet daily after meals.", form: "Tablet", priceDisplay: "₹45 per strip" },
  { id: "p5", name: "Zincovit Multi-vitamin", category: "Vitamins", description: "Balanced multivitamin and mineral supplement for overall vitality.", usage: "1 tablet daily or as directed by a doctor.", form: "Tablet", priceDisplay: "₹110 per strip" },
  { id: "p6", name: "Shelcal 500 (Calcium + Vitamin D3)", category: "Vitamins", description: "Improves bone density, joint flexibility, and muscle strength.", usage: "1 tablet daily after dinner.", form: "Tablet", priceDisplay: "₹130 per strip" },
  { id: "p7", name: "Amoxycillin 500mg (Amoxil)", category: "Capsules", description: "Broad-spectrum penicillin antibiotic to treat various bacterial infections.", usage: "Take exactly as directed by your physician.", form: "Capsule", priceDisplay: "₹105 per strip" },
  { id: "p8", name: "Omega-3 Fish Oil 1000mg", category: "Vitamins", description: "Supports cardiovascular health, brain function, and joint mobility.", usage: "1 softgel capsule daily with water.", form: "Capsule", priceDisplay: "₹450 per bottle" },
  { id: "p9", name: "Becosules Forte", category: "Vitamins", description: "B-Complex with Vitamin C capsules for mouth ulcers, fatigue, and hair.", usage: "1 capsule daily or as directed.", form: "Capsule", priceDisplay: "₹50 per strip" },
  { id: "p10", name: "Grilinctus BM Cough Syrup", category: "Syrups", description: "Provides relief from wet cough, broncho-spasms, and chest congestion.", usage: "5-10ml twice daily or as advised.", form: "Syrup", priceDisplay: "₹115 per bottle" },
  { id: "p11", name: "Benadryl DR Cough Syrup", category: "Syrups", description: "Effective soothing syrup for dry cough, throat tickle, and itching.", usage: "10ml three times a day for adults.", form: "Syrup", priceDisplay: "₹140 per bottle" },
  { id: "p12", name: "Gelusil Antacid Liquid (Mint)", category: "Syrups", description: "Instant relief from hyper-acidity, gas, bloating, and stomach burn.", usage: "2 teaspoons after meals.", form: "Syrup", priceDisplay: "₹120 per bottle" },
  { id: "p13", name: "Monocef 1g Injection", category: "Injections", description: "Intravenous antibiotic used to clear severe respiratory, urinary or blood infections.", usage: "Must be administered by a certified doctor/nurse.", form: "Injection", priceDisplay: "₹65 per vial" },
  { id: "p14", name: "Lantus Insulin Solostar Pen", category: "Injections", description: "Long-acting human insulin analogue for 24-hour basal diabetes control.", usage: "Subcutaneous injection as directed by endocrinologist.", form: "Injection", priceDisplay: "₹1,250 per pen" },
  { id: "p15", name: "Omron HEM-7120 BP Monitor", category: "Medical Equipment", description: "Fully automatic digital blood pressure monitor with Intellisense technology.", usage: "Wrap cuff around upper arm, press start for instant readings.", form: "Equipment", priceDisplay: "₹2,100" },
  { id: "p16", name: "Accu-Chek Active Glucometer", category: "Medical Equipment", description: "Easy-to-use blood glucose monitoring system with visual warnings.", usage: "Apply small blood drop to test strip inserted in meter.", form: "Equipment", priceDisplay: "₹1,150" },
  { id: "p17", name: "Accu-Chek Active Strips (50s)", category: "Diabetic Care", description: "Pack of 50 sterile glucose testing strips for Accu-Chek Active.", usage: "Insert strip in meter, apply blood sample. Single use.", form: "Equipment", priceDisplay: "₹975" },
  { id: "p18", name: "Ensure Diabetes Care (Vanilla, 400g)", category: "Protein Supplements", description: "Scientifically formulated diabetes-specific nutrition with high fiber.", usage: "Mix 6 scoops in water/milk daily as meal supplement.", form: "Supplement", priceDisplay: "₹760" },
  { id: "p19", name: "Protinex Original (250g)", category: "Protein Supplements", description: "Fortified high-protein nutritional drink mix for strength and energy.", usage: "Mix 2-3 tablespoons in warm milk daily.", form: "Supplement", priceDisplay: "₹420" },
  { id: "p20", name: "Candid Dusting Powder (Clotrimazole)", category: "Skin Care", description: "Broad-spectrum antifungal powder for sweat rash, ringworm, and irritation.", usage: "Apply to clean, dry affected areas twice daily.", form: "Cream", priceDisplay: "₹145" },
  { id: "p21", name: "Cetaphil Moisturizing Cream", category: "Skin Care", description: "Intense moisture therapist for dry, sensitive skin with almond oil.", usage: "Apply liberally to face and body as needed.", form: "Cream", priceDisplay: "₹480" },
  { id: "p22", name: "Himalaya Baby Lotion (200ml)", category: "Baby Products", description: "Gentle lotion with olive oil and country mallow to keep baby skin soft.", usage: "Apply all over baby's body after bathing.", form: "Baby Care", priceDisplay: "₹185" },
  { id: "p23", name: "Lactogen Stage 1 Powder (400g)", category: "Baby Products", description: "Spray dried infant formula nutrient-engineered for infants from birth up to 6 months.", usage: "Prepare sterile scoops with warm water as per guide table.", form: "Baby Care", priceDisplay: "₹440" },
  { id: "p24", name: "Dettol Antiseptic Liquid (500ml)", category: "Personal Hygiene", description: "Trusted antiseptic liquid protects against infection from cuts, scratches, bites.", usage: "Dilute in bathwater, or apply on wounds with cotton.", form: "Device", priceDisplay: "₹215" },
  { id: "p25", name: "Tynor Knee Cap (Pair)", category: "Orthopedic Support", description: "Provides mild compression, warmth and support to unstable or painful knee joints.", usage: "Pull onto the knee snuggly with seamless edge upward.", form: "Device", priceDisplay: "₹380" },
  { id: "p26", name: "Lumbo Sacral Belt (Tynor)", category: "Orthopedic Support", description: "Anatomical design back belt to immobilize lumbosacral region and correct posture.", usage: "Wrap around waist tightly with Velcro fasteners in front.", form: "Device", priceDisplay: "₹820" },
  { id: "p27", name: "Volini Pain Relief Spray (100g)", category: "Personal Care", description: "Quick pain relief spray for muscle spasm, back pain, joint pain, and sprains.", usage: "Spray on painful area from 5cm distance, 3-4 times daily.", form: "Cream", priceDisplay: "₹240" },
  { id: "p28", name: "Econorm Sachet (Saccharomyces boulardii)", category: "Tablets", description: "Probiotic supplement for gut health, restoring gut flora during diarrhea.", usage: "Dissolve sachet in water or juice and consume immediately.", form: "Tablet", priceDisplay: "₹55 per sachet" },
  { id: "p29", name: "Volini Joint Pain Gel", category: "Skin Care", description: "Diclofenac gel for localized relief from inflammation, arthritis and sprains.", usage: "Massage gently on the affected area till absorbed.", form: "Cream", priceDisplay: "₹120" },
  { id: "p30", name: "Revital H Capsules", category: "Vitamins", description: "Daily health supplement with Ginseng, 10 Vitamins and 9 Minerals.", usage: "1 capsule daily with a glass of water.", form: "Capsule", priceDisplay: "₹310 per bottle" },
  { id: "p31", name: "Omez 20mg (Omeprazole)", category: "Capsules", description: "Acidity relief capsules targeting acid reflux and gastric ulcers.", usage: "Take 1 capsule on empty stomach before breakfast.", form: "Capsule", priceDisplay: "₹58 per strip" },
  { id: "p32", name: "Liv 52 DS Tablets", category: "Tablets", description: "Ayurvedic liver protection formula promoting detoxification and appetite.", usage: "1-2 tablets twice daily before meals.", form: "Tablet", priceDisplay: "₹170 per bottle" },
  { id: "p33", name: "Ascoril LS Syrup", category: "Syrups", description: "Mucolytic, bronchodilator cough formula for productive, chesty cough.", usage: "5ml three times a day or as prescribed.", form: "Syrup", priceDisplay: "₹125 per bottle" },
  { id: "p34", name: "Cremaffin Liquid", category: "Syrups", description: "Gentle laxative syrup with milk of magnesia and liquid paraffin.", usage: "10-15ml at bedtime with warm water.", form: "Syrup", priceDisplay: "₹210 per bottle" },
  { id: "p35", name: "Thermometer (Dr. Morepen Digital)", category: "Medical Equipment", description: "Safe, rapid digital clinical thermometer for oral, underarm or rectal reading.", usage: "Place sensor tip, wait for the beep, read dual scale digits.", form: "Equipment", priceDisplay: "₹190" },
  { id: "p36", name: "Sebamed Baby Wash Extra Soft", category: "Baby Products", description: "Formulated at pH 5.5 to support baby skin's natural acidic protective barrier.", usage: "Lather small amount in palms, wash baby gently, rinse off.", form: "Baby Care", priceDisplay: "₹560" },
  { id: "p37", name: "Sensodyne Fresh Mint Toothpaste", category: "Personal Care", description: "Clinically proven desensitizing formulation for sensitive teeth.", usage: "Brush twice daily with a soft toothbrush.", form: "Cream", priceDisplay: "₹160" },
  { id: "p38", name: "Spirulina 500mg Capsules", category: "Vitamins", description: "Nutrient-dense superfood blue-green algae providing plant-based vitamins.", usage: "1 capsule twice daily with meals.", form: "Capsule", priceDisplay: "₹320 per bottle" },
  { id: "p39", name: "Vicks VapoRub 50g", category: "Personal Care", description: "Menthol-camphor rub for soothing relief from cold congestion and headaches.", usage: "Rub onto throat, chest, and back. Or use for steam inhalation.", form: "Cream", priceDisplay: "₹145" },
  { id: "p40", name: "Koflet Cough Lozenges (Himalaya)", category: "Personal Care", description: "Ayurvedic lozenges with honey and ginger to relieve sore throat and tickly cough.", usage: "Dissolve 1 lozenge slowly in the mouth, 3-4 times a day.", form: "Tablet", priceDisplay: "₹40 per strip" }
];

// Animated reviews
export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "t1",
    name: "Rajesh Kumar Yadav",
    role: "Local Business Owner, Tekari",
    rating: 5,
    text: "New Awadh Medical Hall has been our family's trusted pharmacy for years. They always have 100% genuine medicines and their staff explains the dosage instructions very clearly. Excellent and honest service in Tekari!",
    date: "June 14, 2026",
  },
  {
    id: "t2",
    name: "Priyanka Singh",
    role: "School Teacher, Gaya",
    rating: 5,
    text: "Highly recommended! I needed a specific pediatric multivitamin and baby care formula that was out of stock everywhere. New Awadh Medical Hall arranged it for me within a single day. Their easy WhatsApp order system is extremely helpful.",
    date: "July 02, 2026",
  },
  {
    id: "t3",
    name: "Dr. Alok Verma",
    role: "Consultant Physician, Gaya",
    rating: 5,
    text: "I trust New Awadh Medical Hall for my patients because of their strict storage standards. Proper refrigeration of insulin and vaccines is critical, and they maintain international storage standards. True professionals.",
    date: "May 22, 2026",
  },
  {
    id: "t4",
    name: "Manoj Prasad",
    role: "Retired Railway Officer, Tekari",
    rating: 5,
    text: "They offer reasonable pricing with genuine retail discounts. Since I require daily blood pressure and diabetes tablets, buying here saves me a significant amount every month. Plus, they offer fast service with zero hassle.",
    date: "June 29, 2026",
  },
  {
    id: "t5",
    name: "Suman Kumari",
    role: "Homemaker, Tekari",
    rating: 5,
    text: "Friendly staff who behave very politely. They even helped me install the Omron BP monitor and demonstrated how to use it at home. Their customer care goes above and beyond a regular medical store.",
    date: "July 08, 2026",
  },
  {
    id: "t6",
    name: "Amit Sen",
    role: "Software Engineer, Gaya",
    rating: 5,
    text: "Awesome experience ordering via WhatsApp for my parents living in Tekari. I just messaged them the prescription, they checked availability, and delivered it directly to their doorstep with a secure digital payment link. Extremely modern and convenient!",
    date: "July 10, 2026",
  },
];

// 10 Pharmacy FAQs
export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    category: "Ordering & Supply",
    question: "Do you supply 100% genuine medicines at New Awadh Medical Hall?",
    answer: "Absolutely. Every single product and medicine in our inventory is sourced directly from licensed, certified pharmaceutical distributors. We strictly monitor batch numbers and maintain high pharmaceutical standards to ensure safety."
  },
  {
    id: "faq-2",
    category: "Ordering & Supply",
    question: "How can I order medicines using WhatsApp?",
    answer: "It is extremely simple! Click on our floating WhatsApp icon or visit the Order Form page. Fill in your name, address, medicines required, and upload a clear photo of your doctor's prescription. We will verify and process your order immediately."
  },
  {
    id: "faq-3",
    category: "Prescription",
    question: "Is a prescription mandatory for all medicines?",
    answer: "For Schedule H and other critical prescription drugs (like antibiotics, psychiatric, and cardiac care medications), a valid doctor's prescription is legally mandatory. General Over-The-Counter (OTC) medicines, baby items, and skin creams can be purchased directly without a prescription."
  },
  {
    id: "faq-4",
    category: "Home Delivery",
    question: "Do you offer home delivery in Tekari and surrounding regions?",
    answer: "Yes! We offer rapid nearby delivery for residents in Tekari and neighboring Gaya locations. Standard delivery times range from 1 to 4 hours depending on the distance and order value. Get in touch via WhatsApp to verify your location."
  },
  {
    id: "faq-5",
    category: "Payment Methods",
    question: "What payment methods do you accept at the store?",
    answer: "We accept all modern payment options: UPI (Google Pay, PhonePe, Paytm, BHIM), all major Credit & Debit cards, cash, and secure online payment links for home-delivered orders."
  },
  {
    id: "faq-6",
    category: "Specialized Storage",
    question: "How do you ensure proper storage and effectiveness of sensitive drugs like insulin?",
    answer: "We are equipped with professional deep refrigerators backed by round-the-clock power backup. This ensures that biological products, insulins, vaccines, and injections are constantly stored within their required 2°C to 8°C temperature range."
  },
  {
    id: "faq-7",
    category: "Discounts & Offers",
    question: "Do you offer discounts on monthly chronic care medications?",
    answer: "Yes, we offer special concessions and competitive retail discounts for regular customers, especially on lifelong chronic therapies like diabetes, hypertension, and cardiac health medicines. Walk in or WhatsApp us for customized package pricing."
  },
  {
    id: "faq-8",
    category: "Stock Availability",
    question: "What if a medicine in my prescription is currently unavailable?",
    answer: "While we maintain a comprehensive stock of over 250 brands, if a specific medicine is unavailable, our qualified pharmacist can source it for you through our direct distributor network within 24 hours."
  },
  {
    id: "faq-9",
    category: "Return Policy",
    question: "Can I return or exchange purchased medicines?",
    answer: "Medicines can be returned or exchanged within 7 days of purchase, provided they are in their original sealed packaging, with intact batch numbers, and are accompanied by the original purchase invoice. In accordance with safety rules, cold-chain items (such as insulin or vaccines) are strictly non-returnable."
  },
  {
    id: "faq-10",
    category: "Store Timings",
    question: "What are your operational timings and emergency helpline availability?",
    answer: "Our physical store in Tekari, Gaya is open daily from 8:00 AM to 10:00 PM (Monday to Sunday). For emergency medicine requirements outside these hours, you can call us directly on 07979969269."
  },
];

// Gallery images (12 high-quality matching pharmacy/medical stock image prompts)
// Note: As per our design strategy, we'll use realistic, beautiful Unsplash URLs for pharmacy/medical hall
export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "g1",
    title: "Store Front & Signage",
    category: "Store Front",
    imageUrl: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=800",
    description: "Welcome to New Awadh Medical Hall, situated in Tekari, Gaya, offering comfortable air-conditioned interiors."
  },
  {
    id: "g2",
    title: "Fully Stocked Medicine Shelves",
    category: "Medicine Shelves",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    description: "Meticulously organized medical stacks grouped alphabetically for rapid retrieval and precise service."
  },
  {
    id: "g3",
    title: "Vitamins and Wellness Corner",
    category: "Products",
    imageUrl: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&q=80&w=800",
    description: "Vitamins, immunity pills, mineral supplements, and health beverages to optimize your physical vitality."
  },
  {
    id: "g4",
    title: "Modern Diagnostics & Glucometers",
    category: "Medical Equipment",
    imageUrl: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=800",
    description: "Digital BP monitors, sugar testing devices, and modern home pulse oximeters from certified medical brands."
  },
  {
    id: "g5",
    title: "Dedicated Baby Care Aisle",
    category: "Products",
    imageUrl: "https://images.unsplash.com/photo-1515488042361-404e9250afef?auto=format&fit=crop&q=80&w=800",
    description: "A wide array of gentle formulas, wipes, baby wash, and premium skin ointments from Himalaya, Nestlé, and Johnson's."
  },
  {
    id: "g6",
    title: "Professional Cold Storage Fridge",
    category: "Medical Equipment",
    imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&q=80&w=800",
    description: "State-of-the-art biological refrigerators with continuous monitoring for critical insulin and live vaccines."
  },
  {
    id: "g7",
    title: "Experienced Pharmacists at Service",
    category: "Customers",
    imageUrl: "https://images.unsplash.com/photo-1626307418242-7c6226c33db0?auto=format&fit=crop&q=80&w=800",
    description: "Our dedicated professionals verifying prescriptions and sharing dosage instructions with customers."
  },
  {
    id: "g8",
    title: "First Aid & Surgical Supply Stacks",
    category: "Products",
    imageUrl: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=800",
    description: "Sterilized medical rolls, cotton, wraps, surgical tapes, and customizable first aid kits."
  },
];

// Health Awareness Tips
export const HEALTH_TIPS: BlogPost[] = [
  {
    id: "b1",
    title: "5 Crucial Guidelines for Storing Insulins Safely at Home",
    excerpt: "Insulin requires strict temperature care to preserve its efficacy. Learn the proper way to store it without compromising on health.",
    category: "Diabetes Management",
    date: "July 05, 2026",
    readTime: "4 min read",
    content: "Storing insulin correctly is absolutely vital. Always store unopened vials and pens in a refrigerator between 2°C to 8°C. Once in use, a vial can be kept at room temperature (below 25°C) for up to 28 days. Never freeze insulin, and keep it away from direct sunlight."
  },
  {
    id: "b2",
    title: "Understanding High Blood Pressure: Regular Monitoring Tips",
    excerpt: "High blood pressure is often a silent condition. Discover how simple, systematic digital monitoring at home can save lives.",
    category: "Hypertension",
    date: "June 28, 2026",
    readTime: "3 min read",
    content: "Check your BP at the same time each day (morning and evening). Sit quietly for 5 minutes beforehand with back supported and feet flat on the floor. Avoid caffeine, exercise, or smoking 30 minutes before testing. Keep a log to share with your cardiologist."
  },
  {
    id: "b3",
    title: "Boost Your Family's Immunity in the Monsoon Season",
    excerpt: "With the monsoons come waterborne and seasonal challenges. Here is a guide to natural and supplement-based defense systems.",
    category: "Monsoon Health",
    date: "June 18, 2026",
    readTime: "5 min read",
    content: "Monsoons increase dampness and pathogen spread. Prioritize fresh, fully-cooked meals, filter your drinking water, and incorporate Vitamin C, Zinc, and herbal extracts like Giloy or Tulsi into your diet to safeguard your respiratory and digestive immunity."
  },
];

// Exclusive Discount Offers
export const PROMO_OFFERS = [
  {
    title: "Regular Chronic Care discount",
    discount: "Up to 15% OFF",
    description: "Get stable discount rates on monthly diabetes, heart, and kidney medications. Walk in with prescriptions to register.",
    code: "MONTHLY15",
  },
  {
    title: "First-Time WhatsApp Order Offer",
    discount: "Extra 10% OFF",
    description: "Upload your prescription via our online order form and get a special promotional coupon code on delivery.",
    code: "AWADHNEW",
  },
  {
    title: "Health Diagnostic Kits",
    discount: "Flat 12% OFF",
    description: "Equip your home with digital BP monitors, glucose tracking machines, and vaporizers at best-in-market rates.",
    code: "HEALTHYHOME",
  },
];

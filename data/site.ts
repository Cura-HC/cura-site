import { Article, Service, TeamMember } from "@/lib/types";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  // { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
];

export const featuredReasons = [
  {
    title: "Personalized care planning",
    description:
      "Every plan is built around your goals, biomarkers, lifestyle, and the pace that feels sustainable.",
  },
  {
    title: "Concierge access",
    description:
      "A smaller patient panel means responsive communication, more touchpoints, and better continuity.",
  },
  {
    title: "Performance and prevention",
    description:
      "We blend day-to-day wellness support with long-range strategies for vitality, resilience, and longevity.",
  },
  {
    title: "A warm modern setting",
    description:
      "Cura is designed to feel calm, elevated, and deeply human from the first interaction onward.",
  },
];

export const founderRatesEndDate = "October 31";

export const services: Service[] = [
  {
    slug: "glp-1-medical-weight-loss",
    name: "GLP-1 Medical Weight Loss",
    categories: ["Medical"],
    icon: "/images/service-icons/glp-1-medical-weight-loss.png",
    image: "/images/services/glp-1-medical-weight-loss.jpg",
    imageAlt: "A glass of water on a white table in bright sunlight",
    description:
      "Clinically supervised weight loss using GLP-1 therapy, paired with metabolic support and ongoing follow-up. Telemedicine visits available.",
  },
  {
    slug: "peptides",
    name: "Peptide Therapy",
    categories: ["Medical", "Pain Management & Recovery"],
    icon: "/images/service-icons/peptides.png",
    image: "/images/services/peptides.jpg",
    imageAlt: "A glass dropper releasing serum into an amber bottle",
    description:
      "Clinically guided peptide protocols designed to support recovery, optimize performance, and enhance cellular health. Selected based on your goals and physiology.",
  },
  {
    slug: "concierge-primary-care",
    name: "Direct Primary Care Membership",
    categories: ["Medical"],
    icon: "/images/service-icons/concierge-primary-care.png",
    image: "/images/services/concierge-primary-care.jpg",
    imageAlt: "A stethoscope on a pale blue background",
    description:
      "A membership-based relationship with your provider built on extended visits, direct access, and proactive management of your long-term health.",
  },
  {
    slug: "longevity-preventative-medicine",
    name: "Longevity & Performance Medicine",
    categories: ["Medical"],
    description:
      "Advanced diagnostics and personalized protocols focused on energy, recovery, prevention, and long-term health.",
  },
  {
    slug: "hormone-replacement-therapy",
    name: "Hormone Replacement Therapy",
    categories: ["Medical"],
    description:
      "Lab-guided hormone optimization for men and women, with individualized dosing and ongoing monitoring to support energy, mood, and long-term health.",
  },
  {
    slug: "iv-vitamin-therapy",
    name: "IV & Vitamin Therapy",
    categories: ["Medical"],
    description:
      "Nutrient and hydration infusions selected to support energy, recovery, and hydration, reviewed for appropriateness before every treatment.",
  },
  {
    slug: "neurotoxin-injections",
    name: "Neurotoxin Injections",
    categories: ["Aesthetics"],
    icon: "/images/service-icons/neurotoxin-injections.png",
    image: "/images/services/neurotoxin-injections.jpg",
    imageAlt: "A smiling woman with natural, freckled skin resting her chin on her arms",
    description:
      "Precision neurotoxin treatments that soften dynamic lines while keeping natural movement and expression intact.",
    founderRate: { price: "$10", unit: "per unit" },
  },
  {
    slug: "dermal-fillers",
    name: "Dermal Fillers",
    categories: ["Aesthetics"],
    icon: "/images/service-icons/dermal-fillers.png",
    image: "/images/services/dermal-fillers.jpg",
    imageAlt: "Two drops of clear gel overlapping on a soft peach background",
    description:
      "Filler placed to restore volume and balance facial proportions, with conservative dosing and a plan built around your anatomy.",
    founderRate: { price: "$399", unit: "per syringe" },
  },
  {
    slug: "rf-microneedling",
    name: "RF Microneedling",
    categories: ["Aesthetics"],
    icon: "/images/service-icons/rf-microneedling.png",
    image: "/images/services/rf-microneedling.jpg",
    imageAlt: "Close-up of rose-pink bubbles suspended in clear liquid",
    description:
      "Radiofrequency microneedling to improve skin texture, tone, and firmness by stimulating your skin's own collagen response.",
    founderRate: { price: "$899", unit: "for 3 sessions" },
  },
  {
    slug: "laser-hair-removal",
    name: "Laser Hair Removal",
    categories: ["Aesthetics"],
    icon: "/images/service-icons/laser-hair-removal.png",
    image: "/images/services/laser-hair-removal.jpg",
    imageAlt: "Smooth bare legs in dappled sunlight beneath a white eyelet skirt",
    description:
      "Laser treatment that reduces unwanted hair over a series of sessions, with settings tailored to your skin and hair type.",
    founderRate: { price: "From $250", unit: "for 6 sessions · small areas" },
  },
  {
    slug: "trigger-point-injections",
    name: "Trigger Point Injections",
    categories: ["Pain Management & Recovery"],
    description:
      "Targeted injections into tight muscle bands to relieve localized pain and restore range of motion.",
  },
];

export const testimonials = [
  {
    quote:
      "Cura feels like the first place where my care was both medically grounded and genuinely personalized. I never feel rushed.",
    name: "A. Morgan",
    role: "Concierge Primary Care Member",
  },
  {
    quote:
      "The environment is calm, elevated, and thoughtful, but what stood out most was the follow-up. I felt supported between visits, not just during them.",
    name: "J. Ellis",
    role: "Medical Wellness Patient",
  },
  {
    quote:
      "I came in for weight loss support and stayed for the quality of care. The plan felt realistic, detailed, and built around my life.",
    name: "R. Bennett",
    role: "GLP-1 Program Patient",
  },
];

export const faqs = [
  {
    question:
      "What makes concierge care different from a traditional medical visit?",
    answer:
      "Cura is built around a smaller patient panel, more time per visit, and better continuity. That structure supports proactive follow-up, more direct communication, and care plans that feel tailored rather than rushed.",
  },
  {
    question: "Do I need to know exactly which service I want before booking?",
    answer:
      "No. Many patients begin with a consultation so goals, symptoms, and priorities can be reviewed before selecting the right treatment path.",
  },
  {
    question: "Is Cura focused more on wellness or primary care?",
    answer:
      "Both. Cura blends concierge medicine, preventative care, metabolic health, and selected aesthetic and wellness services in one cohesive model.",
  },
  {
    question: "How are recommendations determined?",
    answer:
      "Final recommendations depend on your goals, health history, clinical needs, and the care plan discussed with your provider.",
  },
];

export const methodSteps = [
  {
    title: "Discover",
    summary:
      "We begin with a thoughtful conversation about your goals, symptoms, concerns, and day-to-day lifestyle.",
    detail:
      "The first visit is designed to build context. We want to understand how you feel now, where you want to go, and what has or has not worked before.",
  },
  {
    title: "Assess",
    summary:
      "We review health history, relevant diagnostics, lab context, and the patterns shaping your current baseline.",
    detail:
      "This step helps separate noise from signal so the plan reflects the factors that matter most for your health, recovery, and performance.",
  },
  {
    title: "Personalize",
    summary:
      "Your treatment strategy is tailored to your priorities, physiology, and the level of support you want.",
    detail:
      "Rather than forcing you into a preset protocol, Cura builds a plan that fits your life, schedule, and goals with appropriate medical oversight.",
  },
  {
    title: "Treat",
    summary:
      "We implement care through evidence-informed therapies, wellness protocols, and practical guidance.",
    detail:
      "Treatment may include medical weight loss, concierge primary care, hormone support, peptides, aesthetics, IV therapy, or targeted wellness interventions.",
  },
  {
    title: "Optimize",
    summary:
      "We follow through with monitoring, education, refinements, and proactive next steps over time.",
    detail:
      "Optimization is where Cura becomes a real partnership. Follow-up is not an afterthought. It is how better outcomes are sustained.",
  },
];

export const articles: Article[] = [
  {
    slug: "glp-1-medications-what-patients-should-know",
    title: "GLP-1 Medications: What Patients Should Know Before Starting",
    category: "Weight Loss",
    excerpt:
      "A balanced look at how GLP-1 programs fit into a broader care plan, from appetite support to sustainable lifestyle change.",
    date: "April 3, 2026",
    readTime: "5 min read",
    body: [
      "GLP-1 medications can be an effective tool for selected patients, but the medication itself is only one part of the conversation. Appetite patterns, nutrition quality, muscle preservation, and the pace of change all matter.",
      "At Cura, these programs are discussed in the context of long-term health rather than quick wins. We focus on whether the medication is appropriate, how it fits your goals, and what support structure improves your chances of success.",
      "Patients often benefit most when treatment is paired with realistic planning, regular follow-up, and an environment where questions are welcomed early.",
    ],
  },
  {
    slug: "vitamin-d-deficiency-new-screening-considerations",
    title:
      "Vitamin D Deficiency: New Screening Considerations for Modern Lifestyles",
    category: "Preventative Care",
    excerpt:
      "Indoor schedules, stress load, and inconsistent routines can quietly shape nutrient status and recovery capacity.",
    date: "March 26, 2026",
    readTime: "4 min read",
    body: [
      "Vitamin D remains a frequent conversation in preventative care, especially for patients balancing busy workdays, limited outdoor time, and changing exercise patterns.",
      "Screening should be thoughtful rather than automatic. The right next step depends on symptoms, history, and the rest of the clinical picture.",
      "Used well, this kind of review becomes part of a larger strategy for energy, resilience, and long-term wellness.",
    ],
  },
  {
    slug: "concierge-care-for-busy-professionals",
    title: "Why Concierge Care Resonates With Busy Professionals",
    category: "Concierge Medicine",
    excerpt:
      "For many high-performing adults, better care starts with better access, more context, and enough time to actually think.",
    date: "March 18, 2026",
    readTime: "3 min read",
    body: [
      "Traditional care models can leave little room for nuance. For patients with layered goals, recurring symptoms, or demanding schedules, the experience often feels fragmented.",
      "Concierge medicine creates a different rhythm. Longer visits, more responsive communication, and a smaller patient panel support continuity and trust.",
      "That difference is especially meaningful when patients want prevention, performance, and primary care to work together rather than in separate silos.",
    ],
  },
  {
    slug: "hormone-optimization-common-questions",
    title: "Hormone Optimization: Common Questions We Hear in Consultation",
    category: "Hormone Health",
    excerpt:
      "Symptoms rarely exist in isolation. A careful hormone conversation looks at sleep, stress, recovery, labs, and goals together.",
    date: "March 9, 2026",
    readTime: "6 min read",
    body: [
      "Hormone concerns are often tied to energy, mood, strength, recovery, and overall quality of life. The right approach begins with assessment, not assumption.",
      "A thoughtful plan considers whether symptoms align with lab findings, what other factors may be contributing, and what follow-up will be needed over time.",
      "Education is central here. Patients deserve a clear explanation of what is known, what is uncertain, and how decisions will be monitored.",
    ],
  },
  {
    slug: "peptides-longevity-and-clinical-context",
    title: "Peptides, Longevity, and the Importance of Clinical Context",
    category: "Wellness",
    excerpt:
      "Interest in peptide therapies is growing, but good care depends on context, candidacy, and realistic expectations.",
    date: "February 28, 2026",
    readTime: "4 min read",
    body: [
      "Peptides are often discussed online with far more confidence than clarity. In practice, the conversation should center on whether a given therapy is suitable for you and how it fits your broader health plan.",
      "Used selectively, peptides may complement a personalized wellness strategy. Used casually, they can add noise without addressing the underlying issue.",
      "The goal is not to chase trends. It is to make better decisions with the right level of medical oversight.",
    ],
  },
  {
    slug: "cura-faqs-about-modern-wellness-care",
    title: "FAQs About Modern Wellness Care at Cura",
    category: "FAQs",
    excerpt:
      "A practical guide to how consultations, memberships, and personalized treatment planning work.",
    date: "February 20, 2026",
    readTime: "5 min read",
    body: [
      "Patients often ask whether they need a membership to begin, how communication works, and how services are selected. The short answer is that care begins with conversation and clarity.",
      "Cura is designed to meet patients where they are. Some want a focused aesthetic visit. Others want a long-term relationship for primary care, prevention, and wellness optimization.",
      "The best first step is usually a consultation that creates enough context to make an informed recommendation.",
    ],
  },
];

const street = "56 Newark Street #2";
const cityStateZip = "Hoboken, NJ 07030";

export const team: TeamMember[] = [
  {
    slug: "jorge-cruz",
    name: "Jorge Cruz",
    title: "Co-Founder & Nurse Practitioner",
    headshot: "/images/jorge.jpeg",
    headshotAlt: "Jorge Cruz, Co-Founder & Nurse Practitioner",
    credentials: [
      "MSN, APRN, ACNPC-AG, A-GNP-C",
      "Trained at Georgetown University",
      "Experience in adult primary and criitcal care, medical weight management, and preventive longevity medicine",
    ],
    bio: [
      "Jorge is a double board-certified Nurse Practitioner with experience spanning adult primary care, critical care, and weight management. He trained at Georgetown University, where he developed a strong foundation in evidence-based, whole-person care.",
      "After years caring for critically ill and older adults, Jorge recognized how many chronic conditions develop gradually. His approach emphasizes prevention, education, and personalized care before problems become crises.",
      "That philosophy became Cura Health Collective—a practice built around longer visits, direct communication, and individualized care plans that help patients build lasting health.",
      "A Jersey City local, Jorge enjoys traveling, exploring local restaurants, and staying curious. That same curiosity shapes how he gets to know patients beyond their charts and partners with them to create meaningful, lasting change."
    ],
  },
  {
    slug: "sofia-benavides",
    name: "Sofia Benavides",
    title: "Aesthetic Nurse Practitioner",
    headshot: "/images/sofia.jpeg",
    headshotAlt: "Sofia Benavides, Aesthetic Nurse Practitioner",
    headshotPosition: "left center",
    credentials: [
      "FNP-BC",
      "Board-certified Family Nurse Practitioner",
      "Aesthetic Nurse Practitioner",
    ],
    bio: [
      "Sofia Benavides is dedicated to helping you look and feel your best through personalized, evidence-based care. With a passion for aesthetics, wellness, and patient-centered medicine, Sofia’s goal is to create natural, confident results while making every patient feel heard, cared for, and empowered.",
    ],
  },
  {
    slug: "gianna-bove",
    name: "Gianna Bove",
    title: "Aesthetic RN Injector",
    headshot: "/images/gianna.jpeg",
    headshotAlt: "Gianna Bove, Aesthetic RN Injector",
    credentials: [
      "MSN, RN",
      "Aesthetic Registered Nurse and Injector",
      "10 years of nursing experience in cardiac and intensive care",
    ],
    bio: [
      "Gianna brings 10 years of nursing experience to aesthetics, including four years in cardiac nursing followed by several years in intensive care. Her clinical background has shaped a thoughtful, detail-oriented approach to patient care, with a strong emphasis on safety, education, and making patients feel comfortable and informed throughout their treatment.",
      "Gianna’s approach to aesthetics is centered on enhancing rather than changing. She believes the best results should feel refined, balanced, and natural, helping patients look refreshed while still looking like themselves.",
      "At Cura, Gianna is passionate about creating individualized treatment plans based on each patient’s features, concerns, and goals. She values taking the time to listen, educate, and develop a plan that never feels one-size-fits-all.",
      "Outside of clinical practice, Gianna enjoys traveling, cooking, spending time with her family, and all things beauty, fashion, and wellness.",
    ],
  },
  {
    slug: "therese-cruz",
    name: "Therese Cruz",
    title: "Aesthetic RN Injector",
    headshot: "/images/therese.jpeg",
    headshotAlt: "Therese Cruz, Aesthetic RN Injector",
    credentials: [
      "BSN, RN",
      "Aesthetic Registered Nurse and Injector",
      "Experience in emergency and post-anesthesia care nursing",
    ],
    bio: [
      "Therese is a registered nurse with experience in emergency room nursing and post-anesthesia care. She brings a strong clinical foundation and a passion for aesthetics to her practice, with an emphasis on safety, patient education, and individualized care.",
      "She views skin health as the foundation of aesthetic care, believing that healthy, well-cared-for skin allows aesthetic treatments to complement rather than change a person’s natural features. Her approach focuses on refined, balanced results that help each patient feel confident while remaining authentically themselves.",
      "Outside of clinical practice, Therese enjoys spending time with her dog, Ralphie, as well as fine dining, comedy, beauty, and wellness.",
    ],
  },
];

export const contactDetails = {
  street,
  cityStateZip,
  location: `${street}, ${cityStateZip}`,
  phone: "551-310-4708",
  phoneHref: "+15513104708",
  email: "health@cura-hc.com",
  hoursNotes: ["By appointment only.", "Virtual visits available."],
  instagram: "@curahealthcollective",
  instagramHref: "https://www.instagram.com/curahealthcollective/",
};

export const socialLinks = [
  {
    label: "Instagram: @curahealthcollective",
    href: "https://www.instagram.com/curahealthcollective/",
  },
];

export const aboutStory = [
  {
    id: "collective",
    title: "The Collective",
    image: "/images/cura-details.jpeg",
    imageAlt: "A Cura Health Collective business card on a wooden shelf beside dried pampas grass",
    imagePosition: "50% 72%",
    body: [
      "We created CURA as a modern collective where medicine, aesthetics, wellness, and longevity come together under one roof. Rather than separating health from confidence or prevention from beauty, we recognize that they are all connected. When you feel healthy, you live differently. When you feel confident, you show up differently. Our mission is to support both.",
      "Our team combines evidence-based medicine with advanced aesthetic treatments and personalized wellness strategies to create care that is proactive, individualized, and designed around your goals. Whether you’re managing your health, optimizing performance, restoring confidence, or investing in longevity, every recommendation is tailored specifically to you.",
    ],
  },
  {
    id: "care",
    title: "Thoughtful Care",
    plate: {
      kicker: "From our provider",
      display:
        "Health isn’t built during a single appointment—it’s built through a trusted partnership over time.",
      caption: "Jorge Cruz, NP",
    },
    body: [
      "At CURA, you’ll find services that span direct primary care, medical weight management, hormone optimization, peptide therapy, IV therapy, longevity medicine, and aesthetic treatments including neurotoxins, dermal fillers, RF microneedling, and laser hair removal. While our services are diverse, our philosophy remains the same: thoughtful care that addresses the whole person.",
    ],
  },
];

export const homeStory = [
  {
    id: "the-collective",
    eyebrow: "The Collective",
    title: "A different kind of practice",
    plate: {
      kicker: "Under one roof",
      display: "Medicine, aesthetics, wellness, and longevity",
      caption: "Hoboken, NJ",
    },
    body: [
      "We created Cura as a modern collective where medicine, aesthetics, wellness, and longevity come together rather than sitting in separate silos.",
      "When you feel healthy, you live differently. When you feel confident, you show up differently. Our practice is built to support both at once.",
    ],
  },
  {
    id: "the-method",
    eyebrow: "Our approach",
    title: "The Cura Method",
    plate: {
      kicker: "How care unfolds",
      display: "Discover. Assess. Personalize. Treat. Optimize.",
      caption: "Five steps, one continuous relationship",
    },
    body: [
      "We begin with a thoughtful conversation about your goals, symptoms, and day-to-day life, then review the history, diagnostics, and patterns shaping your baseline.",
      "From there your plan is built around your priorities and physiology rather than a preset protocol, and refined over time through monitoring, education, and proactive next steps.",
    ],
  },
  {
    id: "longevity",
    eyebrow: "Prevention & longevity",
    title: "Care that looks ahead",
    plate: {
      kicker: "cu·ra — Latin",
      display: "care for the whole person",
      caption: "The origin of our name",
    },
    body: [
      "Many chronic conditions develop quietly, years before they are diagnosed. We look for those patterns early and address them while change is still simple.",
      "Medicine, aesthetics, wellness, and longevity sit under one roof at Cura, because how you feel and how you show up are part of the same picture.",
    ],
  },
];

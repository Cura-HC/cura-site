import { Article, Service } from "@/lib/types";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  // { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
];

export const heroStats = [
  {
    value: "Deep-Dive Consultations",
    label:
      "Comprehensive evaluations focused on root causes, not just symptoms.",
  },
  {
    value: "Direct Provider Access",
    label:
      "Ongoing guidance, proactive follow-up, and real-time support when you need it.",
  },
  {
    value: "Data-Driven Care",
    label:
      "Advanced labs, metabolic insights, and personalized protocols designed for long-term results.",
  },
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

export const services: Service[] = [
  {
    slug: "concierge-primary-care",
    name: "Direct Primary Care Membership",
    category: "Primary Care & Wellness",
    description:
      "A membership-based relationship with your provider built on extended visits, direct access, and proactive management of your long-term health.",
  },
  {
    slug: "glp-1-medical-weight-loss",
    name: "GLP-1 Medical Weight Loss",
    category: "Primary Care & Wellness",
    description:
      "Clinically supervised weight loss using GLP-1 therapy, paired with metabolic support and ongoing follow-up. Telemedicine visits available.",
  },
  {
    slug: "longevity-preventative-medicine",
    name: "Longevity & Performance Medicine",
    category: "Primary Care & Wellness",
    description:
      "Advanced diagnostics and personalized protocols focused on energy, recovery, prevention, and long-term health.",
  },
  {
    slug: "peptides",
    name: "Peptide Therapy",
    category: "Primary Care & Wellness",
    description:
      "Clinically guided peptide protocols designed to support recovery, optimize performance, and enhance cellular health. Selected based on your goals and physiology.",
  },
  {
    slug: "iv-vitamin-therapy",
    name: "IV & Vitamin Therapy",
    category: "Primary Care & Wellness",
    description:
      "Nutrient and hydration infusions selected to support energy, recovery, and hydration, reviewed for appropriateness before every treatment.",
  },
  {
    slug: "neurotoxin-injections",
    name: "Neurotoxin Injections",
    category: "Aesthetics",
    description:
      "Precision neurotoxin treatments that soften dynamic lines while keeping natural movement and expression intact.",
  },
  {
    slug: "dermal-fillers",
    name: "Dermal Fillers",
    category: "Aesthetics",
    description:
      "Filler placed to restore volume and balance facial proportions, with conservative dosing and a plan built around your anatomy.",
  },
  {
    slug: "rf-microneedling",
    name: "RF Microneedling",
    category: "Aesthetics",
    description:
      "Radiofrequency microneedling to improve skin texture, tone, and firmness by stimulating your skin's own collagen response.",
  },
  {
    slug: "laser-hair-removal",
    name: "Laser Hair Removal",
    category: "Aesthetics",
    description:
      "Laser treatment that reduces unwanted hair over a series of sessions, with settings tailored to your skin and hair type.",
  },
  {
    slug: "trigger-point-injections",
    name: "Trigger Point Injections",
    category: "Pain Management",
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

export const provider = {
  name: "Jorge Cruz",
  credentials: "",
  blurb:
    "Double board-certified Nurse Practitioner specializing in primary care, weight management, and preventive medicine.",
  headshot: "/images/jorge-cruz-headshot.jpeg",
  headshotAlt: "Jorge Cruz, Nurse Practitioner",
  quote:
    "Health isn't built during a single appointment—it's built through a trusted partnership over time.",
  bio: [
    {
      heading: "Background",
      body: "Jorge is a double board-certified Nurse Practitioner with experience spanning adult primary care, critical care, and weight management. He trained at Georgetown University, where he developed a strong foundation in evidence-based, whole-person care.",
    },
    {
      heading: "Philosophy",
      body: "After years caring for critically ill and older adults, Jorge recognized how many chronic conditions develop gradually. His approach emphasizes prevention, education, and personalized care before problems become crises.",
    },
    {
      heading: "Why Cura",
      body: "That philosophy became Cura Health Collective—a practice built around longer visits, direct communication, and individualized care plans that help patients build lasting health.",
    },
    {
      heading: "Beyond the Clinic",
      body: "Born and raised in Jersey City, Jorge enjoys traveling, exploring local restaurants, and staying curious. That same curiosity shapes how he gets to know patients beyond their charts and partners with them to create meaningful, lasting change.",
    },
  ],
};

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

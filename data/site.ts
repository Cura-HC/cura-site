import { Article, Service } from "@/lib/types";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/meet-the-provider", label: "Meet the Provider" },
  { href: "/what-we-offer", label: "What We Offer" },
  { href: "/cura-method", label: "The Cura Method" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" }
];

export const heroStats = [
  { value: "Deep-Dive Consultations", label: "Comprehensive evaluations focused on root causes, not just symptoms." },
  { value: "Direct Provider Access", label: "Ongoing guidance, proactive follow-up, and real-time support when you need it." },
  { value: "Data-Driven Care", label: "Advanced labs, metabolic insights, and personalized protocols designed for long-term results." }
];

export const featuredReasons = [
  {
    title: "Personalized care planning",
    description: "Every plan is built around your goals, biomarkers, lifestyle, and the pace that feels sustainable."
  },
  {
    title: "Concierge access",
    description: "A smaller patient panel means responsive communication, more touchpoints, and better continuity."
  },
  {
    title: "Performance and prevention",
    description: "We blend day-to-day wellness support with long-range strategies for vitality, resilience, and longevity."
  },
  {
    title: "A warm modern setting",
    description: "Cura is designed to feel calm, elevated, and deeply human from the first interaction onward."
  }
];

export const services: Service[] = [
  {
    slug: "glp-1-medical-weight-loss",
    name: "GLP-1 / Medical Weight Loss",
    category: "Weight Loss",
    summary: "Precision-guided weight loss using GLP-1 therapy, metabolic optimization, and ongoing clinical support. Built for sustainable results, not short-term fixes.",
    description:
      "GLP-1 guided programs tailored for sustainable, clinically supervised weight loss.",
    cta: "Book Consultation",
    details: [
      "Telemedicine Available",
      "Metabolic optimization and ongoing clinical support.",
      "Built for sustainable results, not short-term fixes."
    ]
  },
  {
    slug: "peptides",
    name: "Peptide Therapy",
    category: "Wellness",
    summary: "Clinically guided peptide protocols designed to support recovery, metabolism, performance, and overall health, selected based on your physiology, not trends.",
    description:
      "Targeted therapies to support recovery, optimize performance, and enhance cellular health.",
    cta: "Request More Information",
    details: [
      "Selected based on goals, physiology, and clinical context.",
      "Designed to support recovery, metabolism, performance, and overall health.",
      "Clinically guided rather than trend-driven."
    ]
  },
  {
    slug: "longevity-preventative-medicine",
    name: "Longevity / Performance Medicine",
    category: "Wellness",
    summary: "Optimize energy, recovery, and long-term health through advanced diagnostics and personalized protocols designed for both longevity and peak performance.",
    description:
      "Data-driven, proactive care focused on prevention, lifestyle optimization, and long-term health outcomes.",
    cta: "Learn More",
    details: [
      "Advanced diagnostics and personalized protocols.",
      "Focused on energy, recovery, prevention, and long-term health.",
      "Designed for both longevity and peak performance."
    ]
  },
  {
    slug: "concierge-primary-care",
    name: "Direct Primary Care",
    category: "Primary Care",
    summary: "A direct relationship with your provider, focused on accessibility, continuity, and proactive management of your health, without the limitations of traditional care.",
    description:
      "Personalized care with extended visits, proactive management, and direct-access membership for continuity and convenience.",
    cta: "Book Now",
    details: [
      "Extended visits and proactive management.",
      "A direct-access membership model for continuity and convenience.",
      "Focused on accessibility, prevention, and the full picture of your health."
    ]
  },
  {
    slug: "wellness",
    name: "Wellness",
    category: "Wellness",
    summary: "Supportive wellness services designed to enhance energy, recovery, hydration, and overall vitality.",
    description:
      "Supportive wellness services designed to enhance energy, recovery, hydration, and overall vitality.",
    cta: "Learn More",
    details: [
      "Designed to enhance energy, recovery, hydration, and vitality.",
      "Reviewed for appropriateness and aligned with broader health goals.",
      "Delivered within a calm, clinically guided care experience."
    ]
  }
];

export const testimonials = [
  {
    quote:
      "Cura feels like the first place where my care was both medically grounded and genuinely personalized. I never feel rushed.",
    name: "A. Morgan",
    role: "Concierge Primary Care Member"
  },
  {
    quote:
      "The environment is calm, elevated, and thoughtful, but what stood out most was the follow-up. I felt supported between visits, not just during them.",
    name: "J. Ellis",
    role: "Medical Wellness Patient"
  },
  {
    quote:
      "I came in for weight loss support and stayed for the quality of care. The plan felt realistic, detailed, and built around my life.",
    name: "R. Bennett",
    role: "GLP-1 Program Patient"
  }
];

export const faqs = [
  {
    question: "What makes concierge care different from a traditional medical visit?",
    answer:
      "Cura is built around a smaller patient panel, more time per visit, and better continuity. That structure supports proactive follow-up, more direct communication, and care plans that feel tailored rather than rushed."
  },
  {
    question: "Do I need to know exactly which service I want before booking?",
    answer:
      "No. Many patients begin with a consultation so goals, symptoms, and priorities can be reviewed before selecting the right treatment path."
  },
  {
    question: "Is Cura focused more on wellness or primary care?",
    answer:
      "Both. Cura blends concierge medicine, preventative care, metabolic health, and selected aesthetic and wellness services in one cohesive model."
  },
  {
    question: "How are recommendations determined?",
    answer:
      "Final recommendations depend on your goals, health history, clinical needs, and the care plan discussed with your provider."
  }
];

export const methodSteps = [
  {
    title: "Discover",
    summary: "We begin with a thoughtful conversation about your goals, symptoms, concerns, and day-to-day lifestyle.",
    detail:
      "The first visit is designed to build context. We want to understand how you feel now, where you want to go, and what has or has not worked before."
  },
  {
    title: "Assess",
    summary: "We review health history, relevant diagnostics, lab context, and the patterns shaping your current baseline.",
    detail:
      "This step helps separate noise from signal so the plan reflects the factors that matter most for your health, recovery, and performance."
  },
  {
    title: "Personalize",
    summary: "Your treatment strategy is tailored to your priorities, physiology, and the level of support you want.",
    detail:
      "Rather than forcing you into a preset protocol, Cura builds a plan that fits your life, schedule, and goals with appropriate medical oversight."
  },
  {
    title: "Treat",
    summary: "We implement care through evidence-informed therapies, wellness protocols, and practical guidance.",
    detail:
      "Treatment may include medical weight loss, concierge primary care, hormone support, peptides, aesthetics, IV therapy, or targeted wellness interventions."
  },
  {
    title: "Optimize",
    summary: "We follow through with monitoring, education, refinements, and proactive next steps over time.",
    detail:
      "Optimization is where Cura becomes a real partnership. Follow-up is not an afterthought. It is how better outcomes are sustained."
  }
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
      "Patients often benefit most when treatment is paired with realistic planning, regular follow-up, and an environment where questions are welcomed early."
    ]
  },
  {
    slug: "vitamin-d-deficiency-new-screening-considerations",
    title: "Vitamin D Deficiency: New Screening Considerations for Modern Lifestyles",
    category: "Preventative Care",
    excerpt:
      "Indoor schedules, stress load, and inconsistent routines can quietly shape nutrient status and recovery capacity.",
    date: "March 26, 2026",
    readTime: "4 min read",
    body: [
      "Vitamin D remains a frequent conversation in preventative care, especially for patients balancing busy workdays, limited outdoor time, and changing exercise patterns.",
      "Screening should be thoughtful rather than automatic. The right next step depends on symptoms, history, and the rest of the clinical picture.",
      "Used well, this kind of review becomes part of a larger strategy for energy, resilience, and long-term wellness."
    ]
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
      "That difference is especially meaningful when patients want prevention, performance, and primary care to work together rather than in separate silos."
    ]
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
      "Education is central here. Patients deserve a clear explanation of what is known, what is uncertain, and how decisions will be monitored."
    ]
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
      "The goal is not to chase trends. It is to make better decisions with the right level of medical oversight."
    ]
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
      "The best first step is usually a consultation that creates enough context to make an informed recommendation."
    ]
  }
];

export const contactDetails = {
  phone: "551-310-4708",
  email: "health@cura-hc.com",
  location: "Jersey City, NJ",
  instagram: "@curahealthcollective",
  instagramHref: "https://www.instagram.com/curahealthcollective/"
};

export const socialLinks = [
  { label: "Instagram: @curahealthcollective", href: "https://www.instagram.com/curahealthcollective/" }
];

import { Article, Service } from "@/lib/types";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/what-we-offer", label: "What We Offer" },
  { href: "/cura-method", label: "The Cura Method" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" }
];

export const heroStats = [
  { value: "Longer visits", label: "Space to understand your goals, history, and routine" },
  { value: "Direct access", label: "Concierge-style communication and proactive follow-up" },
  { value: "Evidence-informed", label: "Modern wellness and preventative care with medical oversight" }
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
    summary: "Structured physician-guided weight loss with ongoing monitoring and behavior support.",
    description:
      "A medically supervised program for sustainable weight reduction, body composition improvement, and metabolic support.",
    startingAt: "$150/month",
    cta: "Book Consultation",
    details: [
      "Comprehensive intake focused on goals, appetite patterns, lifestyle, and metabolic history.",
      "Individualized medication and habit support with thoughtful check-ins and plan adjustments.",
      "Designed for patients who want a medically credible, high-touch approach to long-term results."
    ]
  },
  {
    slug: "peptides",
    name: "Peptides",
    category: "Wellness",
    summary: "Targeted peptide protocols selected through clinical context, not trend chasing.",
    description:
      "A personalized approach to peptide therapies with attention to appropriateness, education, and safe use.",
    startingAt: "$220/month",
    cta: "Request More Information",
    details: [
      "Used selectively based on symptoms, goals, and a broader wellness strategy.",
      "Includes counseling around expected outcomes, monitoring, and when a peptide may not be the right fit.",
      "Positioned as part of an evidence-aware care plan rather than a one-size-fits-all shortcut."
    ]
  },
  {
    slug: "longevity-preventative-medicine",
    name: "Longevity / Preventative Medicine",
    category: "Wellness",
    summary: "Forward-looking care built around early insight, prevention, and long-term vitality.",
    description:
      "Proactive health planning that prioritizes prevention, lifestyle refinement, and strategic follow-up over reactive care.",
    startingAt: "$295/visit",
    cta: "Learn More",
    details: [
      "Risk review, health optimization planning, and lab-informed lifestyle recommendations.",
      "Focused on sleep, recovery, nutrition, stress load, and day-to-day decisions that shape long-term health.",
      "A strong fit for patients who want a trusted medical partner for aging well."
    ]
  },
  {
    slug: "concierge-primary-care",
    name: "Concierge Primary Care",
    category: "Primary Care",
    summary: "A more direct relationship with your provider and a calmer, more attentive care experience.",
    description:
      "Primary care with longer visits, proactive guidance, and a membership structure designed around access and continuity.",
    startingAt: "$325/month",
    cta: "Book Now",
    details: [
      "Same-day or next-day communication when clinically appropriate.",
      "Care that accounts for the full picture instead of rushing through one isolated concern.",
      "Ideal for busy professionals and families who value responsiveness, prevention, and consistency."
    ]
  },
  {
    slug: "trigger-point-injections",
    name: "Trigger Point Injections",
    category: "Wellness",
    summary: "Targeted relief to support mobility, recovery, and comfort.",
    description:
      "Focused treatment for muscle tension and pain patterns with a careful, clinically grounded approach.",
    startingAt: "$180/visit",
    cta: "Book Consultation",
    details: [
      "Useful for selected patients dealing with muscular pain, tension, or overuse patterns.",
      "Integrated with a broader plan that may include recovery, movement, and lifestyle support.",
      "Clear guidance on candidacy, expected response, and next steps."
    ]
  },
  {
    slug: "botox-filler",
    name: "Botox / Filler",
    category: "Aesthetics",
    summary: "Refined aesthetic treatments that prioritize balance, natural results, and clinical judgment.",
    description:
      "Aesthetic care designed to complement your features with subtlety, precision, and a polished medical setting.",
    startingAt: "$14/unit",
    cta: "Book Consultation",
    details: [
      "Personalized consultation focused on your goals, anatomy, and natural expression.",
      "Approach centers on refreshed, understated results rather than trend-driven overcorrection.",
      "Treatment plans can be paired with broader wellness and skin-support strategies."
    ]
  },
  {
    slug: "iv-therapy",
    name: "IV Therapy",
    category: "Wellness",
    summary: "Convenient supportive hydration and nutrient infusions tailored to your visit goals.",
    description:
      "An elevated IV experience for select wellness goals with thoughtful screening and medical oversight.",
    startingAt: "$165/session",
    cta: "Learn More",
    details: [
      "Popular for hydration, recovery, travel reset, and selected wellness support contexts.",
      "Each infusion is reviewed for appropriateness and aligned with your broader care plan.",
      "Delivered in a calm environment that feels restorative, not rushed."
    ]
  },
  {
    slug: "hormone-therapy",
    name: "Hormone Therapy",
    category: "Wellness",
    summary: "A nuanced, data-informed approach to energy, recovery, and hormone balance.",
    description:
      "Hormone optimization care with careful assessment, lab review, symptom tracking, and ongoing adjustments.",
    startingAt: "$250/month",
    cta: "Request More Information",
    details: [
      "Built around symptom patterns, lab context, and long-term monitoring.",
      "Supports patients navigating fatigue, mood changes, recovery concerns, or performance plateaus.",
      "Conversations are educational, individualized, and grounded in thoughtful follow-up."
    ]
  },
  {
    slug: "wellness-consultations",
    name: "Wellness Consultations",
    category: "Wellness",
    summary: "Strategic visits for patients seeking clarity, guidance, and a personalized health roadmap.",
    description:
      "A focused consultation to review symptoms, goals, current routines, and possible next steps across wellness concerns.",
    startingAt: "$195/visit",
    cta: "Book Consultation",
    details: [
      "A strong starting point if you are unsure which service path fits your needs.",
      "Designed to turn broad health goals into practical, medically informed next steps.",
      "Often used to build a phased plan around weight, recovery, stress, hormones, or prevention."
    ]
  },
  {
    slug: "concierge-medicine-membership",
    name: "Concierge Medicine Membership",
    category: "Membership",
    summary: "A premium monthly care relationship designed for access, continuity, and proactive support.",
    description:
      "Monthly membership for patients who want direct provider access, tailored care plans, and a higher standard of follow-through.",
    startingAt: "$325/month",
    cta: "Book Now",
    details: [
      "Smaller patient panel with an emphasis on accessibility and continuity.",
      "Longer visits, proactive follow-up, and more room for meaningful education.",
      "Ideal for patients who want medical guidance woven into their everyday health decisions."
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
    question: "Are the prices listed online the full cost?",
    answer:
      "The site shows starting-at pricing for planning purposes. Final recommendations and costs depend on your care plan, visit type, and clinical needs."
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
  phone: "(555) 248-2872",
  email: "hello@curawellness.com",
  address: "1280 Oak & Stone Blvd, Suite 210, Your City, ST 00000"
};

export const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "LinkedIn", href: "#" }
];

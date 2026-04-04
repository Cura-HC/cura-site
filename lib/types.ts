export type ServiceCategory =
  | "Weight Loss"
  | "Wellness"
  | "Aesthetics"
  | "Primary Care"
  | "Membership";

export type Service = {
  slug: string;
  name: string;
  category: ServiceCategory;
  description: string;
  summary: string;
  startingAt: string;
  details: string[];
  cta: string;
};

export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  body: string[];
};

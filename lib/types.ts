export type ServiceCategory =
  | "Primary Care & Wellness"
  | "Aesthetics"
  | "Pain Management";

export type Service = {
  slug: string;
  name: string;
  category: ServiceCategory;
  description: string;
  details?: string[]; // consider: average time, price
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

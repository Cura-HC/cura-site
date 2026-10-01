export type ServiceCategory =
  | "Medical"
  | "Aesthetics"
  | "Pain Management & Recovery";

export type Service = {
  slug: string;
  name: string;
  categories: ServiceCategory[];
  description: string;
  icon?: string;
  image?: string;
  imageAlt?: string;
  details?: string[]; // consider: average time, price
  founderRate?: {
    price: string;
    unit: string;
  };
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

export type TeamMember = {
  slug: string;
  name: string;
  title: string;
  headshot?: string;
  headshotAlt?: string;
  headshotPosition?: string;
  credentials: string[];
  bio: string[];
  philosophy?: string;
};

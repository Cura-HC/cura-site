import type { MetadataRoute } from "next";
import { articles, navLinks } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cura-hc.com";
  const generatedOn = new Date("2026-04-04");

  const staticRoutes = navLinks.map((link) => ({
    url: `${baseUrl}${link.href}`,
    lastModified: generatedOn
  }));

  const legalRoutes = [
    "/privacy-policy",
    "/terms-and-conditions",
    "/medical-disclaimer",
    "/hipaa-contact-notice",
    "/education-disclaimer"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: generatedOn
  }));

  const articleRoutes = articles.map((article) => ({
    url: `${baseUrl}/education/${article.slug}`,
    lastModified: new Date(article.date)
  }));

  return [...staticRoutes, ...legalRoutes, ...articleRoutes];
}

import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://roxtechsolutions.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"], // API endpoints par crawling block rahegi
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
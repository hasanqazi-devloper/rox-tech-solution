import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop Electronics & Accessories | ROX Tech Solutions Cashel",
  description:
    "Browse our complete catalog of smartphones, laptops, gaming gear, smartwatches, and chargers. Direct WhatsApp inquiry for best local prices.",
  openGraph: {
    title: "Shop Electronics & Accessories | ROX Tech Solutions",
    description:
      "Explore high-quality smartphones, audio gear, laptops, and everyday tech accessories in Cashel.",
    url: "https://roxtechsolutions.ie/shop",
    siteName: "ROX Tech Solutions",
    images: [{ url: "/feature-img.png", width: 1200, height: 630 }],
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop Electronics & Accessories | ROX Tech Solutions",
    description: "Explore tech accessories, audio gear, and laptops in Cashel.",
    images: ["/feature-img.png"],
  },
};

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
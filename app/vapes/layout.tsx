import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Vapes & E-Liquids | ROX Tech Solutions Cashel",
  description:
    "Explore our collection of top-tier vape kits, disposable vapes, and premium e-liquids at ROX Tech Solutions in Cashel, Ireland.",
  openGraph: {
    title: "Premium Vapes & E-Liquids | ROX Tech Solutions",
    description:
      "Top-tier vape kits, disposable vapes, and e-liquids available locally in Cashel.",
    url: "https://roxtechsolutions.ie/vape",
    siteName: "ROX Tech Solutions",
    images: [{ url: "/feature-img.png", width: 1200, height: 630 }],
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Vapes & E-Liquids | ROX Tech Solutions",
    description: "Top-tier vape kits and e-liquids in Cashel, Ireland.",
    images: ["/feature-img.png"],
  },
};

export default function VapeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
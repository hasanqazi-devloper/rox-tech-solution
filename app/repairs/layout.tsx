import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expert Device Repairs | Smartphone & Laptop Repair in Cashel",
  description:
    "Fast, professional, and reliable repair services for smartphones, tablets, and laptops at ROX Tech Solutions in Cashel, Ireland. Get a quick quote via WhatsApp!",
  openGraph: {
    title: "Expert Device Repairs | ROX Tech Solutions Cashel",
    description:
      "Fast and reliable repair assistance for smartphones, tablets, and laptops in Cashel. Visit our store or reach out on WhatsApp.",
    url: "https://roxtechsolutions.ie/repair",
    siteName: "ROX Tech Solutions",
    images: [{ url: "/feature-img.png", width: 1200, height: 630 }],
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Device Repairs | ROX Tech Solutions Cashel",
    description: "Professional smartphone, tablet, and laptop repairs in Cashel, Ireland.",
    images: ["/feature-img.png"],
  },
};

export default function RepairLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
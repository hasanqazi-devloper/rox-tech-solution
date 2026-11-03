import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Device Repairs & Contact Us | ROX Tech Solutions Cashel",
  description:
    "Fast and reliable repair assistance for smartphones, tablets, and laptops. Visit our store in Cashel or send us a WhatsApp message today.",
  openGraph: {
    title: "Device Repairs & Contact Us | ROX Tech Solutions",
    description:
      "Get expert repair guidance and instant support in Cashel. Visit us or reach out on WhatsApp.",
    url: "https://roxtechsolutions.ie/contact",
    siteName: "ROX Tech Solutions",
    images: [{ url: "/feature-img.png", width: 1200, height: 630 }],
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Device Repairs & Contact Us | ROX Tech Solutions",
    description: "Get expert repair guidance and instant support in Cashel.",
    images: ["/feature-img.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
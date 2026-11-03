import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | ROX Tech Solutions - Your Local Tech Hub in Cashel",
  description:
    "Learn more about ROX Tech Solutions. We provide genuine electronics, quality accessories, vape products, and friendly customer support in Cashel.",
  openGraph: {
    title: "About Us | ROX Tech Solutions Cashel",
    description:
      "Your trusted local store for tech, accessories, and device repairs in Cashel, County Tipperary.",
    url: "https://roxtechsolutions.ie/about",
    siteName: "ROX Tech Solutions",
    images: [{ url: "/feature-img.png", width: 1200, height: 630 }],
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | ROX Tech Solutions Cashel",
    description: "Your trusted local store for tech and repairs in Cashel.",
    images: ["/feature-img.png"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
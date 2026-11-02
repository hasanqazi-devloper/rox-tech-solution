import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Tumhare header component ka path
import Footer from "@/components/Footer";

// 🏙️ Pure Unified Geometric Premium Font Engine
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat"
});

export const metadata: Metadata = {
  title: "ROX Tech Solutions | Premier Tech, Vape & Repair Hub in Cashel, Ireland",
  description:
    "Your go-to local destination for electronics, everyday accessories, vape products and professional device repair assistance in Cashel, County Tipperary, Ireland.",

  // 👑 Site Icons Configuration Engine
  icons: {
    icon: "/fav.png",
    shortcut: "/fav.png",
    apple: "/fav.png",
  },

  // 🖼️ Open Graph (WhatsApp, Facebook, LinkedIn Link Previews)
  openGraph: {
    title: "ROX Tech Solutions | Premier Tech, Vape & Repair Hub in Cashel",
    description:
      "Your go-to local destination for electronics, everyday accessories, vape products and professional device repair assistance in Cashel.",
    url: "https://roxtechsolutions.com", // Apni actual domain yahan likhein
    siteName: "ROX Tech Solutions",
    images: [
      {
        url: "/feature.jpg", // public folder mein rakhi hui image ka path
        width: 1200,
        height: 630,
        alt: "ROX Tech Solutions Cashel Storefront Banner",
      },
    ],
    locale: "en_IE",
    type: "website",
  },

  // 🐦 Twitter Card Metadata
  twitter: {
    card: "summary_large_image",
    title: "ROX Tech Solutions | Cashel, Ireland",
    description:
      "Premier tech accessories, vape products, and expert device repairs in Cashel.",
    images: ["/feature.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} scroll-smooth`}
      style={{ scrollBehavior: 'smooth' }}
    >
      <body className="bg-[#C0C0C0] text-[#0F172A] antialiased font-sans min-h-screen flex flex-col justify-between overflow-x-hidden selection:bg-[#F97316] selection:text-white" suppressHydrationWarning={true}>
        <Navbar />
        <main className="flex-grow w-full relative z-10 flex flex-col items-center justify-start">
          <div className="w-full max-w-[2600px] mx-auto flex flex-col items-stretch justify-start">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
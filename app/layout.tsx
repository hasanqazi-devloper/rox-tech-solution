import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://roxtechsolutions.ie"),
  title: "ROX Tech Solutions | #1 Tech, Vape & Repair Hub in Cashel, Ireland",
  description:
    "Looking for the latest tech, mobile accessories, vapes, or expert device repairs in Cashel? Visit ROX Tech Solutions or order via WhatsApp today!",
  verification: {
    google: "vOzP0wZkT5zoXwO8OhXFeb6YNqHaFybY0ns1nTFB5Iw",
  },
  icons: {
    icon: "/fav.png",
    shortcut: "/fav.png",
    apple: "/fav.png",
  },
  openGraph: {
    title: "ROX Tech Solutions | Premier Tech, Vape & Repair Hub in Cashel",
    description:
      "Your go-to local destination for electronics, everyday accessories, vape products and professional device repair assistance in Cashel.",
    url: "https://roxtechsolutions.ie",
    siteName: "ROX Tech Solutions",
    images: [
      {
        url: "/feature.jpg",
        width: 1200,
        height: 630,
        alt: "ROX Tech Solutions Cashel Storefront Banner",
      },
    ],
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ROX Tech Solutions | Cashel, Ireland",
    description:
      "Premier tech accessories, vape products, and expert device repairs in Cashel.",
    images: ["/feature.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} scroll-smooth`}
    >
      <body
        className={`${plusJakarta.className} bg-[#C0C0C0] text-[#0F172A] antialiased min-h-screen flex flex-col justify-between overflow-x-hidden selection:bg-[#F97316] selection:text-white`}
        suppressHydrationWarning={true}
      >
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
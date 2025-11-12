import type { Metadata } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Tapti Food & Spices | The Taste of Purity | 100% Adulteration-Free Products",
  description: "Experience 'The Taste of Purity' with Tapti Food & Spices. 100% adulteration-free products sourced directly from our farms and trusted farmers. Shop authentic Indian spices, organic oils, pure desi ghee, premium teas, natural sweeteners, and traditional masalas. Available on Amazon, Flipkart, and Meesho. FSSAI Licensed: 21423150001550",
  keywords: ["tapti food and spices", "taptifs", "spices", "food", "seasonings", "organic spices", "desi ghee", "cooking oil", "masala", "haldi", "mirchi", "chai", "jaggery", "saffron", "pure products", "adulteration-free", "farm-sourced", "Multai", "Betul", "Bhopal", "Madhya Pradesh"],
  icons: {
    icon: "/images/logo.jpg",
    shortcut: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
  openGraph: {
    title: "Tapti Food & Spices | The Taste of Purity",
    description: "100% adulteration-free food products - authentic Indian spices, organic oils, pure ghee, premium teas, and natural sweeteners sourced directly from farms",
    images: ["/images/logo.jpg"],
    siteName: "Tapti Food & Spices (TAPTIFS)",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

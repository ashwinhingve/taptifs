import type { Metadata } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "TAPTIFS - Tapti Food & Spices | Premium Quality Spices",
  description: "Discover premium quality food and spices at TAPTIFS. Shop authentic spices, blends, and seasonings for your culinary adventures.",
  keywords: ["spices", "food", "seasonings", "herbs", "organic spices", "spice blends"],
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

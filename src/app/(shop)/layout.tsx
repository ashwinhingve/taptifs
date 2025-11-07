import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop - TAPTIFS | Premium Spices & Food Products",
  description: "Browse our wide selection of premium quality spices, blends, and food products.",
};

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

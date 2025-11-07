import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wholesale - TAPTIFS",
  description: "Bulk ordering and wholesale solutions for businesses.",
};

export default function WholesaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

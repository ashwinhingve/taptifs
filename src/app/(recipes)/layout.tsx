import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recipes & Blog - TAPTIFS",
  description: "Explore delicious recipes and cooking tips using our premium spices.",
};

export default function RecipesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

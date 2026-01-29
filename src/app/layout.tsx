import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { ClientBody } from "./ClientBody";
import { Analytics } from "@/components/Analytics";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Knapp Real Estate Group | Land Development & Investment",
  description:
    "Knapp Real Estate Group specializes in acquiring raw land, subdividing it into profitable lots, and selling to investors and developers. Seller-financing available with low down payments.",
  keywords:
    "real estate, land development, subdivision, investment, Texas, lots for sale, seller financing",
  openGraph: {
    title: "Knapp Real Estate Group | Land Development & Investment",
    description:
      "Become a land owner today with seller-financing, low down payments, and affordable monthly payments.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <ClientBody>{children}</ClientBody>
      <Analytics />
    </html>
  );
}

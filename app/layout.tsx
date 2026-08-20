import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Majestic City Colombo | Shopping, Dining & Entertainment",
  description:
    "Discover Majestic City Colombo, an iconic destination for shopping, dining, entertainment and experiences in the heart of Colombo.",
  openGraph: {
    title: "Majestic City Colombo",
    description: "Shop. Dine. Discover.",
    type: "website",
    locale: "en_LK",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

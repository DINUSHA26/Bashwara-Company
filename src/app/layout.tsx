import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bashwara.com'),
  title: {
    default: "Bashwara & Company (Pvt) Ltd",
    template: "%s | Bashwara & Company"
  },
  description: "Enterprise Corporate Portal for Bashwara & Company (Pvt) Ltd",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Bashwara & Company",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased font-sans bg-surface-white text-brand-navy`}>
        {children}
      </body>
    </html>
  );
}

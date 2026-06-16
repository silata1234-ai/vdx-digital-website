import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vdxdigital.com"),
  title: "VDX Digital | Websites, Automation & AI Solutions",
  description:
    "Premium websites, automation systems and AI assistants that help businesses save time, reduce workload and grow faster.",
  openGraph: {
    title: "VDX Digital | Websites, Automation & AI Solutions",
    description:
      "Premium websites, automation systems and AI assistants that help businesses save time, reduce workload and grow faster.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VDX Digital | Websites, Automation & AI Solutions",
    description:
      "Premium websites, automation systems and AI assistants that help businesses save time, reduce workload and grow faster.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${cormorant.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

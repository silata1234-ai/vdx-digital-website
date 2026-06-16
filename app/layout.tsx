import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { AssistantWidget } from "@/components/assistant-widget";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vdxdigital.com"),
  title: "VDX Digital | Уебсайтове, автоматизации и AI решения",
  description:
    "VDX Digital помага на български бизнеси със сайтове, автоматизации и AI решения, които спестяват време и пазят клиентските запитвания.",
  openGraph: {
    title: "VDX Digital | Уебсайтове, автоматизации и AI решения",
    description:
      "VDX Digital помага на български бизнеси със сайтове, автоматизации и AI решения, които спестяват време и пазят клиентските запитвания.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VDX Digital | Уебсайтове, автоматизации и AI решения",
    description:
      "VDX Digital помага на български бизнеси със сайтове, автоматизации и AI решения, които спестяват време и пазят клиентските запитвания.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bg"
      className={`${manrope.variable} ${cormorant.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
        <AssistantWidget />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { PhoneInquiryProvider } from "@/components/phone-inquiry";

export const metadata: Metadata = {
  title: "VDX Digital | Уебсайтове, автоматизации и AI решения",
  description: "Сайтове, бизнес автоматизации, AI асистенти и системи за запитвания за български бизнеси.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg">
      <body className="antialiased"><PhoneInquiryProvider>{children}</PhoneInquiryProvider></body>
    </html>
  );
}

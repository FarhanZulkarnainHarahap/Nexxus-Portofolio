import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header-section/header";
import FooterSection from "@/components/footer-components/footer-section";

export const metadata: Metadata = {
  title: "Personal Website Farhan",
  description: "Feel Free To Invite Me To Ur Company",
};
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen ">
        <Header />
        {children}
        <FooterSection />

        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        />
        {children}
      </body>
    </html>
  );
}

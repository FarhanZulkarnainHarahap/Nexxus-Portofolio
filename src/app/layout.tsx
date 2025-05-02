import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header-section/header";
import FooterSection from "@/components/footer-components/footer-section";

export const metadata: Metadata = {
  title: "Personal Website Farhan",
  description: "Feel Free To Invite Me To Ur Company",
};

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
      </body>
    </html>
  );
}

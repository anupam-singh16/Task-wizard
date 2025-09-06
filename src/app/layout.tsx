import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wizard mover",
  description: "A wizard mover game where you move a wizard with clicking.",
  icons: {
    icon: "/favicon.ico",
    apple: ".favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-YJSDH37W95" />
      <body>{children}</body>
    </html>
  );
}

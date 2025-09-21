import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Salvador's portolio",
  description: "TODO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.className} antialiased`}>
      <body className="max-w-2xl m-auto">
        <main className="p-6 pt-3 md:pt-6 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}

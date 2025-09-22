import type { Metadata } from "next";
import { Geist } from "next/font/google";

import { i18n, type Locale } from "@/helpers/localization";

import "../../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Salvador's portfolio",
  description: "TODO",
};

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }));
} 

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;

  const { children } = props;

  return (
    <html lang={params.lang} className={`${geistSans.className} antialiased`}>
      <body className="max-w-2xl m-auto">
        <main className="p-6 pt-3 md:pt-6 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}

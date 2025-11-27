import "./globals.css";
import { ubuntu } from "@/lib/fonts";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Year Month Picker",
  description:
    "React component for selecting year and month with smooth animations and customizable UI.",
  keywords: [
    "react date picker",
    "year month picker",
    "react component library",
    "date UI component",
    "month selector",
    "year selector",
    "typescript date picker",
  ],

  metadataBase: new URL("https://year-month-picker.vercel.app"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Year Month Picker — React Date Component",
    description:
      "A customizable Year/Month Picker for React. Fast, accessible, theme-friendly, and built with TypeScript.",
    url: "/",
    siteName: "Year Month Picker",
    images: [
      {
        url: "/og-image.png", // 없으면 추가하면 됨
        width: 1200,
        height: 630,
        alt: "Year Month Picker Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Year Month Picker",
    description:
      "A Date Picker library focusing on Year and Month selection with custom UI and smooth UX.",
    images: ["/og-image.png"],
  },
};

interface Props {
  children: React.ReactNode;
}

function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} antialiased`}>
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}

export default RootLayout;

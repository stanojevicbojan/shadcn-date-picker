import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

const myFont = localFont({
  src: "./public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://www.kodawarians.com/resources/shadcn-date-picker"
  ),
  title: "ShadcnDatePicker | Kodawarians",
  description: "A shadcn date picker component for your shadcn ui app",
  openGraph: {
    title: "ShadcnDatePicker | Kodawarians",
    description: "A shadcn date picker component for your shadcn ui app",
    images: "/og-image.png",
  },
  twitter: {
    title: "ShadcnDatePicker | Kodawarians",
    description: "A shadcn date picker component for your shadcn ui app",
    card: "summary_large_image",
    images: "/og-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${myFont.variable}`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

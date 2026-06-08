import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Felipe Augusto | Front-End Developer",
  description:
    "Portfólio de Felipe Augusto especializado em React, Next.js e TypeScript.",

  keywords: [
    "React",
    "Next.js",
    "TypeScript",
    "Front-End",
    "Developer",
    "Portugal",
  ],

  openGraph: {
    title: "Felipe Augusto | Front-End Developer",
    description:
      "Portfólio de Felipe Augusto especializado em React, Next.js e TypeScript.",
    type: "website",
    locale: "pt_PT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={geist.className}>
        {children}
      </body>
    </html>
  );
}
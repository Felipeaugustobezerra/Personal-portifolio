import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";
import { CursorGlow } from '@/components/ui/cursor-glow';
import Script from "next/script";
import { BackToTop } from "@/components/ui/back-to-top";
import { PersonSchema } from '@/components/seo/person-schema';

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {

  metadataBase: new URL("https://felipeaugusto.pt"),

  title: {

    default: "Felipe Augusto | Front-End Developer",

    template: "%s | Felipe Augusto",

  },

  description:

    "Portfólio de Felipe Augusto, desenvolvedor Front-End especializado em React, Next.js e TypeScript.",

  keywords: [

    "React",

    "Next.js",

    "TypeScript",

    "Front-End",

    "Developer",

    "Portugal",

    "JavaScript",

    "SEO",

  ],

  authors: [

    {

      name: "Felipe Augusto",

    },

  ],

  creator: "Felipe Augusto",

  openGraph: {

    title: "Felipe Augusto | Front-End Developer",

    description:

      "Portfólio profissional com projetos em React, Next.js e TypeScript.",

    url: "https://felipeaugusto.pt",

    siteName: "Felipe Augusto",

    locale: "pt_PT",

    type: "website",

    images: [

      {

        url: "/og-image.png",

        width: 1200,

        height: 630,

        alt: "Felipe Augusto Portfolio",

      },

    ],

  },

  twitter: {

    card: "summary_large_image",

    title: "Felipe Augusto",

    description:

      "Front-End Developer especializado em React e Next.js.",

    images: ["/og-image.png"],

  },

  robots: {

    index: true,

    follow: true,

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
        <Script id="gtm-script">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-P845J9B8');`}</Script>
  <div
    className="
      fixed
      inset-0
      pointer-events-none
      -z-10
    "
  >
    <div
      className="
        absolute
        top-0
        right-0

        h-[600px]
        w-[600px]

        rounded-full

        bg-red-500/10

        blur-[200px]
      "
    />

    <div
      className="
        absolute
        bottom-0
        left-0

        h-125
        w-125

        rounded-full

        bg-red-500/5

        blur-[180px]
      "
    />
  </div>
    <CursorGlow />
    <PersonSchema />
  {children}
  <BackToTop />

  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T2DXNKR3" height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
  
</body>
    </html>
  );
}
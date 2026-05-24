import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Godfrey Okoye University Fees Portal | Check 2026/2027 Tuition Fees Online",

  description:
    "Check official Godfrey Okoye University tuition fees for the 2026/2027 academic session. Search fees instantly by faculty, programme, and level on the GOUNI Fees Portal.",

  keywords: [
    "Godfrey Okoye University fees",
    "GOUNI school fees",
    "GOUNI tuition checker",
    "GOUNI fee portal",
    "Godfrey Okoye University tuition",
    "GOUNI 2026 fees",
    "GOUNI payment portal",
    "check GOUNI fees online",
    "university fees Nigeria",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://fees.gouni.edu.ng/",
  },

  openGraph: {
    title: "Godfrey Okoye University Fees Portal | 2026/2027 Tuition Checker",

    description:
      "Find your exact tuition fees instantly by faculty, programme, and level for the 2026/2027 academic session at Godfrey Okoye University.",

    url: "https://fees.gouni.edu.ng/",
    type: "website",
    siteName: "Godfrey Okoye University",
  },

  twitter: {
    card: "summary_large_image",
    title: "Godfrey Okoye University Fees Portal",
    description:
      "Check official GOUNI tuition fees for the 2026/2027 academic session instantly online.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Godfrey Okoye University Fees Portal",
    url: "https://fees.gouni.edu.ng/",
    description:
      "Official fee checker for Godfrey Okoye University students to search tuition fees by faculty, programme, and level.",
    publisher: {
      "@type": "CollegeOrUniversity",
      name: "Godfrey Okoye University",
      url: "https://gouni.edu.ng/",
    },
  };
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0S87FVZDYS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0S87FVZDYS');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <Navbar />
        {children}
        <footer className="text-center   border-t text-sm  border-slate-100 shadow-sm text-white p-3 bg-blue-600 font-bold">
          © {new Date().getFullYear()} All Right Reserved Powered By GOUNI ICT
          SERVICES
        </footer>
      </body>
    </html>
  );
}

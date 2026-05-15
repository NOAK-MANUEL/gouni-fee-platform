import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gouni Fees Portal",
  description: "Check all Gouni Fees ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        <Navbar />
        {children}
        <footer className="text-center   border-t text-sm  border-slate-100 shadow-sm text-white p-3 bg-blue-600 font-bold">
          © {new Date().getFullYear()}All Right Reserved Powered By GOUNI ICT
          SERVICES
        </footer>
      </body>
    </html>
  );
}

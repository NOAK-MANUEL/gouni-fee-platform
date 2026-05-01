import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Inter } from "next/font/google";

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
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <footer className="text-center   border-t text-sm  border-slate-100 shadow-sm text-white p-3 bg-blue-600 font-bold">
          Powered By GOUNI ICT Service
        </footer>
      </body>
    </html>
  );
}

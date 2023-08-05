import NextTopLoader from "nextjs-toploader";
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DIAGON: Play Games & Shop with your Points on the Go!",
  description: "Play Games & Shop with your Points on the Go!",
  icons: {
    icon: "/diagon-icon.jpg",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NextTopLoader color="#2A7671" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

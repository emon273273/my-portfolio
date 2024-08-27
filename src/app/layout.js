"use client";
import { Heebo } from "next/font/google";
import "./globals.css";
import Header from "@/components/homepage/Header";
import Navbar from "@/components/homepage/Navbar";
import Footer from "@/components/homepage/Footer";

const heebo = Heebo({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={heebo.className}>
      <body>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}

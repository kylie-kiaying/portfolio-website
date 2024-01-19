import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/Main/StarBackground";
import NavBar from "@/components/NavBar/Navbar";
import Hero from "@/components/Hero/Hero";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Website",
  description: "My Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scrol overflow-x-hidden`}>
        <NavBar />
        <Hero />
        <StarsCanvas />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Experiences from "@/components/Experiences/Experiences";
import SkillsSection from "@/components/Skills/SkillsSection";
import Socials from "@/components/Socials/Socials";
import StarsCanvas from "@/components/Main/StarBackground";
import CursorLightEffect from "@/components/Main/CursorLightEffect";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kylie Chua",
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
        <Navbar />
        <Hero />
        <Experiences />
        <SkillsSection />
        <Socials />
        <StarsCanvas />
        <CursorLightEffect />
        {children}
      </body>
    </html>
  );
}

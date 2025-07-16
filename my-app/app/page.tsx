// app/page.tsx

import { AboutSection } from "../components/sections/AboutSection";
import { Footer } from "../components/sections/FooterSection";
import { HeroSection } from "../components/sections/HeroSection";
import { ContactSection } from "../components/sections/ContactSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { Package } from "lucide-react";
import { PackagesSection } from "@/components/sections/PackageSection";


export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PackagesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
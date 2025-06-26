// app/page.tsx

import { AboutSection } from "../components/sections/AboutSection";
import { Footer } from "../components/sections/FooterSection";
import { HeroSection } from "../components/sections/HeroSection";
import { ContactSection } from "../components/sections/ContactSection";
import { SupportSection } from "@/components/sections/SupportSection";
import { ServicesSection } from "@/components/sections/ServicesSection";


export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SupportSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
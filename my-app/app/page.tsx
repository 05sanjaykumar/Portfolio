// app/page.tsx

import { AboutSection } from "../components/sections/AboutSection";
import { Footer } from "../components/sections/FooterSection";
import { HeroSection } from "../components/sections/HeroSection";
import { ContactSection } from "../components/sections/ContactSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PackagesSection } from "@/components/sections/PackageSection";
import { ClientsSection } from "@/components/sections/ClientsSection";


export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ClientsSection />
      <PackagesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

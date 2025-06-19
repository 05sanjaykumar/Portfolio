// app/page.tsx

import { AboutSection } from "../components/sections/AboutSection";
import { Footer } from "../components/sections/FooterSection";
import { HeroSection } from "../components/sections/HeroSection";
import { ContactSection } from "../components/sections/ContactSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
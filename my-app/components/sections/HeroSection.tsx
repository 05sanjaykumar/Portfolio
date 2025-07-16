// app/components/sections/HereSection.tsx
"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const tagline =
  "Hi, I'm Sanjay — your solo full-stack product engineer & AI consultant.";

declare global {
  interface Window {
    VANTA: any;
  }
}

export function HeroSection() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.VANTA && !vantaEffect.current) {
      vantaEffect.current = window.VANTA.NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x3d8ff,
        backgroundColor: 0x0,
        points: 5.0,
        maxDistance: 21.0,
        spacing: 20.0,
      });
    }

    return () => {
      if (vantaEffect.current?.destroy) vantaEffect.current.destroy();
    };
  }, []);

  return (
    <section
      ref={vantaRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center px-4"
    >
      <div className="relative z-10 w-full max-w-screen-md mx-auto p-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="mb-4"
        >
          <h1 className="text-3xl md:text-6xl font-light text-neutral-300 break-words text-balance leading-tight">
            Build & Launch Your SaaS MVP — Fast.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <TextGenerateEffect
            words={tagline}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white break-words text-balance"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
            ease: "easeInOut",
          }}
        >
          <p className="max-w-2xl mx-auto text-lg text-neutral-300 mt-4 break-words">
            I help indie hackers & startup founders turn messy ideas into launch-ready products — with AI, clean UI, solid backend, and production-ready deploys.
          </p>
          <div className="flex flex-wrap gap-4 mt-8 justify-center">
            <Link href="#services">
              <Button size="lg">View My Offers</Button>
            </Link>
            <Link href="#projects">
              <Button size="lg" variant="secondary">
                See Past Builds
              </Button>
            </Link>
            <Link href="#contact">
              <Button size="lg" variant="secondary">
                Let's Talk
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

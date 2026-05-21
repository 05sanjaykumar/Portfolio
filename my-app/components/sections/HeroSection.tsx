// app/components/sections/HeroSection.tsx
"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const tagline =
  "Hi, I'm Sanjay — Voice AI & AI Agent Engineer for startups.";

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

        {/* Social proof badges */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-2 justify-center mb-6"
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-orange-500/20 border border-orange-400/50 text-orange-300">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            YC S25 — Freya Voice
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/50 text-blue-300">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            YC S23 — VectorShift
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/50 text-emerald-300">
            🇺🇸 US — Gensail
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/50 text-purple-300">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            Entrepreneurs First — Shortlisted
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/10 border border-white/25 text-white/80">
            🇬🇧 UK Fintech — Pebble
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="mb-4"
        >
          <h1 className="text-3xl md:text-6xl font-light text-white break-words text-balance leading-tight">
            Voice AI Engineer & AI Agent Builder.
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <TextGenerateEffect
            words={tagline}
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white break-words text-balance"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeInOut" }}
        >
          {/* Description */}
          <p className="max-w-2xl mx-auto text-base text-neutral-200 mt-4 break-words leading-relaxed">
            I build real-time voice AI pipelines (STT → LLM → TTS) and AI agents at production quality —{" "}
            <span className="text-white font-semibold">133ms latency</span>, shipped in days. Trusted by{" "}
            <span className="text-white font-semibold">YC-backed startups</span> (US & UK) and shortlisted for{" "}
            <span className="text-white font-semibold">Entrepreneurs First Bangalore Fall 2026</span>.
          </p>

          {/* Stack badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="flex flex-wrap gap-2 mt-6 justify-center"
          >
            {["LiveKit", "Pipecat", "LangChain", "Groq", "Cartesia", "Next.js", "FastAPI", "Docker"].map((tech) => (
              <span
                key={tech}
                className="text-sm font-medium px-3 py-1 rounded-full border border-white/30 text-white bg-white/10 backdrop-blur-sm hover:border-white/60 hover:bg-white/20 transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mt-8 justify-center">
            <Link href="#clients">
              <Button size="lg">See Client Work</Button>
            </Link>
            <Link href="#services">
              <Button size="lg" variant="secondary">
                What I Build
              </Button>
            </Link>
            <Link href="#contact">
              <Button size="lg" variant="secondary">
                Let’s Talk
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

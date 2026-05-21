// app/components/sections/HereSection.tsx
"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const tagline =
  "Hi, I'm Sanjay — I build Voice AI agents & AI-powered products for startups.";

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
            Voice AI Engineer & AI Agent Builder.
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
            I design and ship real-time voice AI pipelines (STT → LLM → TTS), AI agents, and full-stack AI products — using LiveKit, Pipecat, LangChain, Groq, Cartesia, Next.js, FastAPI, and Docker. Built for YC-backed startups and early-stage founders.
          </p>

          {/* Stack badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="flex flex-wrap gap-2 mt-6 justify-center"
          >
            {["LiveKit", "Pipecat", "LangChain", "Groq", "Cartesia", "Next.js", "FastAPI", "Node JS", "Docker"].map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 rounded-full border border-neutral-700 text-gray-400 bg-neutral-900/60"
              >
                {tech}
              </span>
            ))}
          </motion.div>

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

"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const tagline = "I build AI-powered tools, dev utilities, and indie products that run fast and offline";

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
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x3d8ff,
        backgroundColor: 0x0,
        points: 5.00,
        maxDistance: 21.00,
        spacing: 20.00
      });
    }

    return () => {
      if (vantaEffect.current?.destroy) vantaEffect.current.destroy();
    };
  }, []);

  return (
    <section
      id="home"
      ref={vantaRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      <div className="relative z-10 max-w-4xl mx-auto p-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="mb-4"
        >
          <h1 className="text-3xl md:text-6xl font-light text-neutral-300">
            Hi, I'm{" "}
            <span className="font-bold bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
              Sanjay Kumar
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <TextGenerateEffect
            words={tagline}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-white"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5 + tagline.length * 0.02,
            ease: "easeInOut",
          }}
        >
          <p className="max-w-2xl mx-auto text-lg text-neutral-300 mt-4">
            GitSlice, Product-Summariser, Tom-Com, and more → see my projects
          </p>
          <div className="flex gap-4 mt-8 justify-center">
            <Link href="#about">
              <Button size="lg">See Projects</Button>
            </Link>
            <Link href="#services">
              <Button size="lg" variant="secondary">
                My Services
              </Button>
            </Link>
            <Link href="#support">
              <Button size="lg" variant="secondary">
                Support Me
              </Button>
            </Link>
            <Link href="#contact">
              <Button size="lg" variant="secondary">
                Contact Me
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

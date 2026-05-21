// app/components/sections/AboutSection.tsx
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { featuredProjects } from "@/lib/data";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">About Me</h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.8 }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          <div className="md:col-span-2 space-y-4 text-muted-foreground">
            <p>
              I’m Sanjay — a Voice AI Engineer and AI Agent builder who designs and ships real-time conversational AI systems for startups and founders.
            </p>
            <p>
              I specialise in end-to-end voice AI pipelines: STT → LLM → TTS — using LiveKit and Pipecat for real-time streaming, Groq for ultra-fast inference, Cartesia and Kokoro for natural TTS, and Whisper / NVIDIA Nemotron for speech recognition. I’ve built production voice agents for YC-backed companies like Freya (YC S25) and Gensail.
            </p>
            <p>
              Beyond voice, I build full-stack AI products with Next.js, FastAPI, LangChain, Docker, and Supabase — from backend pipelines to polished frontends, deployed and production-ready.
            </p>
          </div>
          <div id="projects" className="bg-muted p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">What I Do Best</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">✓ Real-time Voice AI Pipelines</li>
              <li className="flex items-center gap-2">✓ AI Agents & LLM Integration</li>
              <li className="flex items-center gap-2">✓ LiveKit · Pipecat · LangChain</li>
              <li className="flex items-center gap-2">✓ Groq · Cartesia · Whisper</li>
              <li className="flex items-center gap-2">✓ Next.js · FastAPI · Docker</li>
            </ul>
          </div>
        </motion.div>

        <h3 className="text-2xl font-bold text-center mb-8">Featured Projects</h3>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.8 }}
            >
              <Card className="h-full flex flex-col hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex items-end">
                  <Link
                    href={project.repoLink || project.liveLink || "#"}
                    target="_blank"
                    className="w-full"
                  >
                    <Button variant="secondary" className="w-full">
                      {project.badge} <ArrowUpRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

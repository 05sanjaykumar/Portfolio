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

const highlights = [
  {
    stat: "133ms",
    label: "Voice pipeline latency",
    sub: "Production quality",
  },
  {
    stat: "YC S25",
    label: "Trusted by Freya Voice",
    sub: "& VectorShift YC S23",
  },
  {
    stat: "EF",
    label: "Shortlisted",
    sub: "Entrepreneurs First Bangalore Fall 2026",
  },
  {
    stat: "4+",
    label: "Production AI systems",
    sub: "US, UK & India startups",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">About Me</h2>

        {/* Bio + What I Do Best */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          className="grid md:grid-cols-3 gap-8 mb-10"
        >
          <div className="md:col-span-2 space-y-4 text-muted-foreground">
            <p>
              I’m Sanjay — a Voice AI Engineer and AI Agent builder specialising in real-time conversational AI systems. Shortlisted for <span className="text-white font-medium">Entrepreneurs First Bangalore Fall 2026</span> (~1–3% acceptance rate).
            </p>
            <p>
              I’ve built production-grade voice AI pipelines at <span className="text-white font-medium">133ms latency</span> for <span className="text-white font-medium">Freya Voice (YC S25)</span> and delivered AI systems for UK fintech startup Pebble and VectorShift (YC S23) — full-stack, Dockerized, and shipped in days, not months.
            </p>
            <p>
              Stack: LiveKit, Pipecat, LangChain, Groq, Cartesia, Whisper, NVIDIA Nemotron, Next.js, FastAPI, Docker, Supabase.
            </p>
          </div>
          <div id="projects" className="bg-muted p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">What I Do Best</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">✓ Real-time Voice AI Pipelines</li>
              <li className="flex items-center gap-2">✓ AI Agents & LLM Integration</li>
              <li className="flex items-center gap-2">✓ LiveKit · Pipecat · LangChain</li>
              <li className="flex items-center gap-2">✓ Groq · Cartesia · Whisper</li>
              <li className="flex items-center gap-2">✓ Next.js · FastAPI · Docker</li>
            </ul>
          </div>
        </motion.div>

        {/* Recognition highlights strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
        >
          {highlights.map((h) => (
            <div
              key={h.stat}
              className="p-4 rounded-lg border border-neutral-800 bg-neutral-900 text-center"
            >
              <div className="text-2xl font-bold text-white mb-1">{h.stat}</div>
              <div className="text-xs font-medium text-neutral-300">{h.label}</div>
              <div className="text-xs text-neutral-500 mt-0.5">{h.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* Featured Projects */}
        <h3 className="text-2xl font-bold text-center mb-8">Featured Projects</h3>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
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

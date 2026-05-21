// app/components/sections/ClientsSection.tsx
"use client";

import { ExternalLink } from "lucide-react";

const projects = [
  {
    client: "Freya · YC S25",
    title: "Freya Voice AI Agent Console",
    description:
      "Production-grade voice AI agent console with real-time bidirectional audio streaming. Built STT → LLM → TTS pipeline using Groq Whisper, Llama 3.1, and Cartesia TTS over LiveKit. Includes prompt management with versioning, session analytics, and Dockerized deployment.",
    tags: ["Next.js 15", "Python", "LiveKit", "Groq", "Cartesia", "Docker"],
    link: "https://github.com/05sanjaykumar/Freya-Voice-YC25",
    timeframe: "3 days",
  },
  {
    client: "VectorShift · YC S23",
    title: "OAuth Integration Platform",
    description:
      "Built OAuth 2.0 integrations for HubSpot, Airtable, and Notion with a FastAPI backend and React frontend. Implemented token exchange, Redis-backed session storage, and a data loader to fetch CRM contacts and companies post-auth.",
    tags: ["React", "FastAPI", "Redis", "HubSpot OAuth", "Python"],
    link: "https://github.com/05sanjaykumar/Vectorshift-YC-S23",
    timeframe: "Assessment",
  },
  {
    client: "Pebble",
    title: "Pebble Voice AI Assistant",
    description:
      "End-to-end voice AI assistant for collecting business funding information through natural conversation. Full pipeline: mic input → Whisper STT → Groq LLM → Cartesia TTS, with structured data extraction, dynamic document checklist generation, and session memory.",
    tags: ["Next.js", "FastAPI", "Whisper", "Groq", "Cartesia", "Tailwind"],
    link: "https://github.com/05sanjaykumar/Pebble-Test",
    timeframe: "Trial Project",
  },
  {
    client: "Gensail",
    title: "Gensail Real-Time Voice AI",
    description:
      "Low-latency real-time voice assistant built with Pipecat over WebSocket. Full pipeline orchestration: NVIDIA Nemotron STT → Groq Llama 3.1 LLM → Kokoro TTS (local). Features Silero VAD for turn-taking, interruption support, and Protobuf-framed audio streaming.",
    tags: ["Next.js", "Pipecat", "FastAPI", "NVIDIA STT", "Groq", "Kokoro TTS"],
    link: "https://github.com/05sanjaykumar/Gensail-Trail-Project",
    timeframe: "Trail Project",
  },
];

export function ClientsSection() {
  return (
    <section id="clients" className="py-24 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
          Client Work
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
          Real projects built for real companies — from YC-backed startups to early-stage founders. Each one shipped fast and production-ready.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 text-left">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-6 rounded-lg border shadow-sm bg-neutral-900 hover:shadow-md transition hover:border-white flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {project.client}
                  </span>
                  <span className="text-xs text-gray-500">{project.timeframe}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full border border-neutral-700 text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline mt-2"
              >
                View on GitHub <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

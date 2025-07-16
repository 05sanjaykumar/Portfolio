// app/components/sections/ServicesSection.tsx
"use client";

import { Code2, Cloud, WandSparkles, Users, PanelTop, ServerCog } from "lucide-react";

const services = [
  {
    icon: <PanelTop className="w-6 h-6 text-primary" />,
    title: "AI-Powered MVPs",
    description: "I build and ship full-stack AI SaaS tools — fast, functional, and tailored for early traction.",
  },
  {
    icon: <WandSparkles className="w-6 h-6 text-primary" />,
    title: "Custom AI Integrations",
    description: "LangChain, OpenAI, Ollama, RAG, vector DBs — I can embed intelligence into your product stack.",
  },
  {
    icon: <Code2 className="w-6 h-6 text-primary" />,
    title: "Full-Stack Engineering",
    description: "Frontend, backend, APIs, DBs — I work across the stack with Next.js, Supabase, Prisma & more.",
  },
  {
    icon: <Cloud className="w-6 h-6 text-primary" />,
    title: "Docker & DevOps",
    description: "From Dockerization to CI/CD & deploys — I can set up clean infra that scales and survives production.",
  },
  {
    icon: <ServerCog className="w-6 h-6 text-primary" />,
    title: "SaaS Features Setup",
    description: "Stripe billing, auth, roles, dashboards, emails — I wire it all up so you can go to market faster.",
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Tech Consulting & OSS Collabs",
    description: "Need help architecting a system or want to jam on OSS? I’m happy to brainstorm or build together.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
          What I Can Help With
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
          Whether you're launching a product or hacking together a prototype, I can help turn your idea into something real and reliable.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 text-left">
          {services.map((service) => (
            <div key={service.title} className="p-6 rounded-lg border shadow-sm bg-neutral-900 hover:shadow-md transition hover:border-white">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-400 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

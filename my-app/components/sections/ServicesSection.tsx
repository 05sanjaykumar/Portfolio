// app/components/sections/ServicesSection.tsx
"use client";

import { Code2, Cloud, WandSparkles, Users, PanelTop, GitBranchPlus } from "lucide-react";

const services = [
  {
    icon: <Code2 className="w-6 h-6 text-primary" />,
    title: "Full-Stack Development",
    description: "From frontend to backend to DevOps – I build complete, scalable, and fast web applications.",
  },
  {
    icon: <Cloud className="w-6 h-6 text-primary" />,
    title: "Cloud & Deployment",
    description: "Deploying on Vercel, Netlify, Render or other Cloud Platforms – I make sure your app runs reliably in production.",
  },
  {
    icon: <WandSparkles className="w-6 h-6 text-primary" />,
    title: "AI Integrations",
    description: "Need GPT-powered features? I can integrate AI into your product using OpenAI, LangChain, or custom tooling.",
  },
  {
    icon: <PanelTop className="w-6 h-6 text-primary" />,
    title: "Custom SaaS Products",
    description: "I help companies build full SaaS applications — with subscriptions, billing, and admin tools.",
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Consulting & Tech Guidance",
    description: "Need help with system design, tech stack decisions, or performance improvements? Let's talk.",
  },
  {
    icon: <GitBranchPlus className="w-6 h-6 text-primary" />,
    title: "Open Source Collaboration",
    description: "I actively contribute to and collaborate on open source. Happy to team up on cool ideas.",
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
            Whether you're building a product, need technical advice, or want to collaborate — here’s what I can offer.
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

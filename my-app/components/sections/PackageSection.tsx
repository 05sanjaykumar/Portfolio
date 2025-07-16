"use client";

import { Server, WandSparkles, Rocket, Globe, Cog, Terminal } from "lucide-react";

const packages = [
  {
    icon: <Rocket className="w-6 h-6 text-primary" />,
    title: "Portfolio & Personal Site",
    price: "$500 – $2,000+",
    features: ["Responsive site", "SEO + Analytics", "Basic design; +Three.js optional", "Privacy + TOS pages", "Deploy to Vercel/Netlify"],
  },
  {
    icon: <WandSparkles className="w-6 h-6 text-primary" />,
    title: "AI-Powered Tool",
    price: "$1,500 – $5,000+",
    features: ["OpenAI/Ollama/Gemini API", "Chatbot, summarizer, or RAG", "Backend (Node/Flask/Golang)", "Docker + Deploy"],
  },
  {
    icon: <Globe className="w-6 h-6 text-primary" />,
    title: "Full-Stack SaaS App",
    price: "$3,000 – $10,000+",
    features: ["Next.js or MERN", "Auth, DBs, dashboards", "Stripe billing", "CI/CD + DevOps"],
  },
  {
    icon: <Cog className="w-6 h-6 text-primary" />,
    title: "MVP / Micro-SaaS",
    price: "$2,000 – $6,000+",
    features: ["Idea to deployed MVP", "Auth, pricing, frontend, backend", "Minimal UI + optional CLI/API", "Custom AI integrations (LangChain, groq, Gemini)"],
  },
  {
    icon: <Terminal className="w-6 h-6 text-primary" />,
    title: "Automation/Scraping/CLI",
    price: "$500 – $3,000+",
    features: ["Web scrapers (Puppeteer)", "Automation scripts", "Custom CLI tools in Go/Python"],
  },
  {
  icon: <Server className="w-6 h-6 text-primary" />,
  title: "DevOps & Infra Setup",
  price: "$600 – $2,500+",
  features: [
    "Docker & Docker Compose",
    "Nginx / Reverse Proxy",
    "CI/CD on Vercel / Render",
    "Basic monitoring & logs",
  ],
},


];

export function PackagesSection() {
  return (
    <section id="packages" className="py-24 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
          Packages & What I Can Build
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
          Based on your needs, here's a breakdown of what I can offer and estimated pricing. Each project is customizable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {packages.map((pkg) => (
            <div key={pkg.title} className="p-6 rounded-lg border shadow-sm bg-neutral-900 hover:shadow-md transition hover:border-white">
              <div className="mb-4">{pkg.icon}</div>
              <h3 className="text-xl font-semibold">{pkg.title}</h3>
              <ul className="list-disc list-inside mt-4 text-sm text-muted-foreground space-y-1">
                {pkg.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm font-medium text-white">
                <span className="text-primary">{pkg.price}</span>
              </p>
              <p className="text-muted-foreground text-sm mt-6">
  *Prices vary by complexity. Add-ons like dashboards, CMS, or analytics available on request.
</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

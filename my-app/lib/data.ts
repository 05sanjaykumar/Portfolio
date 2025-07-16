// lib/data.ts

export const featuredProjects = [
  {
    title:"Product Summariser AI",
    description: "AI-powered product tracker that uses Bing Search to find, summarize using groq API and custom made template with Langchain to suggest the best deals and stores in mongoDB.",
    repoLink: "https://github.com/05sanjaykumar/Advance-Product-Summariser-AI",
    badge: "Star on GitHub",
    badgeType: "github" as const,
  },
  {
    title: "Product Summariser Offline",
    description: "A web app that tracks product prices from bing and summarises using Ollama and suggests you the best deals.",
    repoLink: "https://github.com/05sanjaykumar/Local-Product-Summariser-Ollama",
    badge: "Star on Github",
    badgeType: "github" as const,
  },
  {
    title: "GitSlice CLI(15+ Stars)",
    description: "A blazing-fast CLI tool to extract specific files or folders from any GitHub repo using sparse-checkout. Built with Go.",
    repoLink: "https://github.com/05sanjaykumar/gitslice",
    badge: "Star on GitHub",
    badgeType: "github" as const,
  },
  {
    title: "PeerDrop",
    description: "A P2P file sharing app that allows you to share files directly between devices without a server.",
    repoLink: "https://github.com/05sanjaykumar/Peer-Drop",
    badge: "Star on GitHub",
    badgeType: "github" as const,
  },
  {
    title: "URL Shortener",
    description: "A scalable, Dockerized URL Shortener built with Node.js and Redis",
    liveLink: "https://url-shortern-9qxj.onrender.com/",
    badge: "Live Demo",
    badgeType: "live" as const,
  },
  {
    title:"Solar System",
    description: "A 3D interactive solar system model built with Three.js and React.",
    liveLink: "https://05sanjaykumar.github.io/Solar-System-3-js/",
    badge: "Live Demo",
    badgeType: "live" as const,
  },
];

export const otherProjects = [
    { title: "PeerDrop", description: "P2P file sharing app." },
    { title: "MediaPlayer", description: "Customizable web video player." },
    // Add more here
];
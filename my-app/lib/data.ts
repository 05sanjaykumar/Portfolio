// lib/data.ts

export const featuredProjects = [
  {
    title: "URL Shortener",
    description: "A scalable, Dockerized URL Shortener built with Node.js and Redis",
    liveLink: "https://url-shortern-9qxj.onrender.com/",
    badge: "Live Demo",
    badgeType: "live" as const,
  },
  {
    title: "Product Summariser Offline",
    description: "A web app that tracks product prices from bing and summarises using Ollama and suggests you the best deals.",
    repoLink: "https://github.com/05sanjaykumar/Local-Product-Summariser-Ollama",
    badge: "Star on Github",
    badgeType: "github" as const,
  },
  {
    title: "GitSlice CLI",
    description: "A blazing-fast CLI tool to extract specific files or folders from any GitHub repo using sparse-checkout. Built with Go.",
    repoLink: "https://github.com/05sanjaykumar/gitslice",
    badge: "Star on GitHub",
    badgeType: "github" as const,
  }
,
];

export const otherProjects = [
    { title: "PeerDrop", description: "P2P file sharing app." },
    { title: "MediaPlayer", description: "Customizable web video player." },
    // Add more here
];
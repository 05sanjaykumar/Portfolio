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
    title: "Tom-Com (WIP)",
    description: "A next-gen communication platform. Currently in private beta. Join the waitlist for early access.",
    waitlistLink: "https://github.com/05sanjaykumar/Tom-Com", // Link to your waitlist form/page
    badge: "Check it Out",
    badgeType: "waitlist" as const,
  },
];

export const otherProjects = [
    { title: "PeerDrop", description: "P2P file sharing app." },
    { title: "MediaPlayer", description: "Customizable web video player." },
    // Add more here
];
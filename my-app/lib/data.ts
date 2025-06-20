// lib/data.ts

export const featuredProjects = [
  {
    title: "GitSlice CLI",
    description: "A command-line tool to export a subset of a Git repository with its history. Perfect for monorepos and code sharing.",
    repoLink: "https://github.com/your-username/gitslice",
    badge: "Star on GitHub",
    badgeType: "github" as const,
  },
  {
    title: "Product Summariser Offline",
    description: "A web app that tracks product prices from bing and summarises using Ollama and suggests you the best deals.",
    liveLink: "https://pricetracker.example.com",
    badge: "Live Demo",
    badgeType: "live" as const,
  },
  {
    title: "Tom-Com (Stealth)",
    description: "A next-gen communication platform. Currently in private beta. Join the waitlist for early access.",
    waitlistLink: "#", // Link to your waitlist form/page
    badge: "Join Waitlist",
    badgeType: "waitlist" as const,
  },
];

export const otherProjects = [
    { title: "PeerDrop", description: "P2P file sharing app." },
    { title: "MediaPlayer", description: "Customizable web video player." },
    // Add more here
];
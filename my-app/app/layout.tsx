// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from '@vercel/analytics/next';
import Script from "next/script";



const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

// app/layout.tsx

export const metadata: Metadata = {
  title: "Sanjay — Voice AI Engineer & AI Agent Builder",
  description: "I build real-time Voice AI pipelines and AI agents for startups — STT → LLM → TTS using LiveKit, Pipecat, Groq, and Cartesia. Full-stack, production-ready, shipped fast.",
  keywords: [
    "Sanjay Kumar",
    "Voice AI Engineer",
    "AI Agent Builder",
    "Voice AI Pipeline",
    "Real-time Voice AI",
    "LiveKit",
    "Pipecat",
    "LangChain",
    "Groq",
    "Cartesia TTS",
    "Whisper STT",
    "STT LLM TTS Pipeline",
    "AI Agent Development",
    "LLM Integration",
    "FastAPI",
    "Next.js",
    "Docker",
    "Full Stack AI Developer",
    "AI Product Engineer",
    "YC Startup Engineer",
    "Voice Bot Developer",
    "Conversational AI",
    "AI for Startups",
    "Sanjay Builds",
    "For Hire",
    "Freelance AI Engineer",
    "Personal Portfolio",
    "AI Systems",
    "Python AI Backend",
    "WebSocket Voice Streaming",
  ],
  openGraph: {
    title: "Sanjay — Voice AI Engineer & AI Agent Builder",
    description: "I build real-time Voice AI pipelines and AI agents for startups — using LiveKit, Pipecat, Groq, Cartesia, Next.js, FastAPI, and Docker.",
    url: "https://www.sanjaybuilds.com",
    images: [
      {
        url: "https://www.sanjaybuilds.com/favicon_io/android-chrome-512x512.png",
        alt: "Sanjay Builds",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Sanjay — Voice AI Engineer & AI Agent Builder",
    description: "Real-time voice AI pipelines, AI agents, and full-stack AI products for startups. LiveKit · Pipecat · Groq · Cartesia · Next.js · FastAPI.",
    images: ["https://www.sanjaybuilds.com/favicon_io/android-chrome-512x512.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
        <link rel="icon" href="/favicon_io/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js" strategy="beforeInteractive" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Analytics />
          </ThemeProvider>
      </body>
    </html>
  );
}

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
  title: "Sanjay — MVP Builder & AI Product Engineer",
  description: "I help founders launch AI-powered SaaS MVPs — fast, clean, and fully production-ready. From backend to AI integration, I build it all.",
  keywords: [
    "Sanjay Kumar",
    "MVP Builder",
    "Fractional CTO",
    "SaaS Developer",
    "AI Product Engineer",
    "LangChain",
    "Next.js",
    "Node.js",
    "Dev ops",
    "Docker-compose",
    "Stripe Integration",
    "Supabase",
    "Full Stack Developer",
    "AI Systems",
    "GPT Integration",
    "SaaS MVP",
    "Indie Hacker",
    "Startup Founder",
    "Product Engineer",
    "Technical Co-Founder",
    "AI SaaS",
    "AI MVP",
    "Full Stack",
    "AI Tools",
    "Build SaaS Fast",
    "Sanjay Builds",
    "For Hire",
    "B2B SaaS",
    "Personal Portfolio",
    "Web Development",
    "B2B Services",
    "B2B SaaS Development",
  ],
  openGraph: {
    title: "Sanjay — MVP Builder & AI Product Engineer",
    description: "I build and ship AI-first SaaS MVPs for early-stage founders. Clean architecture, full-stack, and deploy-ready.",
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
    title: "Sanjay — Full-Stack AI MVP Builder",
    description: "From idea to live SaaS in 3 weeks. I build full-stack, AI-integrated MVPs for founders and indie startups.",
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


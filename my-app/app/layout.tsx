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

export const metadata: Metadata = {
  title: "Sanjay Builds | AI Engineer & Product Consultant",
  description: "AI engineer & product consultant. I build scalable SaaS apps, custom AI tools, and full-stack platforms with privacy-first design and clean architecture.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="description" content="AI engineer & product consultant. I build scalable SaaS apps, custom AI tools, and full-stack platforms with privacy-first design and clean architecture." />
        <meta property="og:title" content="Sanjay Builds" />
        <meta property="og:description" content="Check out my latest projects and experiments." />
        <meta property="og:url" content="https://www.sanjaybuilds.com" />
        <meta property="og:image" content="https://www.sanjaybuilds.com/favicon_io/android-chrome-512x512.png" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Sanjay Builds" />
        <meta name="twitter:description" content="I build AI-powered dev tools & privacy-first apps." />
        <meta name="twitter:image" content="https://www.sanjaybuilds.com/favicon_io/android-chrome-512x512.png" />

        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
        <link rel="icon" href="/favicon_io/favicon.ico" />

        <link rel="canonical" href="https://www.sanjaybuilds.com/" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Sanjay Kumar, AI Engineer, Product Consultant, SaaS Builder, Full Stack Developer, Next.js, MERN, AI Tools, OpenAI Developer, Custom Automation, Sanjay Builds" />


        <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js" strategy="beforeInteractive" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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


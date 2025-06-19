// app/components/sections/ContactSection.tsx
"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, NotebookText, Twitter } from "lucide-react";
import Link from "next/link";

// Array to hold your social media links for easy mapping
const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/your-username", // <-- Change to your actual GitHub URL
    icon: <Github className="h-6 w-6" />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/your-username", // <-- Change to your actual Twitter URL
    icon: <Twitter className="h-6 w-6" />,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/your-username", // <-- Change to your actual LinkedIn URL
    icon: <Linkedin className="h-6 w-6" />,
  },
  {
    name: "Dev.to",
    url: "https://dev.to/your-username", // <-- Change to your actual Dev.to URL
    icon: <NotebookText className="h-6 w-6" />,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Let's Build Together
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Need a custom AI tool or a specialized dev utility? Or just want to connect?
          <br />
          Feel free to reach out. I'm always open to new ideas and collaborations.
        </p>

        {/* Email Call-to-Action */}
        <div className="mt-8">
          <Link href="mailto:sanjay.builds@gmail.com">
            <Button size="lg">
              <Mail className="mr-2 h-5 w-5" /> sanjay.builds@gmail.com
            </Button>
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 flex justify-center gap-4">
          {socialLinks.map((social) => (
            <Link key={social.name} href={social.url} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" aria-label={social.name}>
                {social.icon}
              </Button>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
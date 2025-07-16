// app/components/sections/ContactSection.tsx
"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, Unlink2, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/05sanjaykumar",
    icon: <Image src="/github.svg" alt="GitHub" width={24} height={24} className="bg-white rounded-2xl" />,
  },
  {
    name: "X",
    url: "https://x.com/sanjaykuma49595",
    icon: <Image src="/x.svg" alt="X" width={24} height={24} className="bg-white" />,
  },
  {
    name: "Other Links",
    url: "https://tinyurl.com/5adeawbe",
    icon: <Unlink2 className="h-6 w-6" />,
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

        {/* Email */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <Link href="mailto:contact@sanjaybuilds.com">
            <Button size="lg">
              <Mail className="mr-2 h-5 w-5" /> contact@sanjaybuilds.com
            </Button>
          </Link>

          {/* Calendly Button */}
          <Link href="https://calendly.com/0508sanjaykumar/30min" target="_blank">
            <Button variant="secondary" size="lg">
              <Calendar className="mr-2 h-5 w-5" /> Book a 30-min Call
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
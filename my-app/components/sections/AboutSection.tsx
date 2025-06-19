// app/components/sections/AboutSection.tsx
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { featuredProjects } from "@/lib/data";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">About Me</h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.8 }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          <div className="md:col-span-2 space-y-4 text-muted-foreground">
            <p>
              I'm a 20-year-old solo builder and developer, driven by a lifelong curiosity for technology that started when I was 8. I'm self-taught, with a passion for creating tools that solve real-world problems.
            </p>
            <p>
              My expertise lies in building Open-Source dev tools, integrating AI into practical applications, and developing full-stack, privacy-first products from scratch.
            </p>
          </div>
          <div className="bg-muted p-6 rounded-lg">
             <h3 className="font-semibold text-lg mb-2">What I Do Best</h3>
             <ul className="space-y-2">
                <li className="flex items-center gap-2">✓ OSS Dev Tools</li>
                <li className="flex items-center gap-2">✓ AI Integrations</li>
                <li className="flex items-center gap-2">✓ Full-Stack Apps</li>
             </ul>
          </div>
        </motion.div>

        <h3 className="text-2xl font-bold text-center mb-8">Featured Projects</h3>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.8 }}
            >
              <Card className="h-full flex flex-col hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex items-end">
                   <Link href={project.repoLink || project.liveLink || project.waitlistLink || '#'} target="_blank" className="w-full">
                     <Button variant="secondary" className="w-full">
                       {project.badge} <ArrowUpRight className="h-4 w-4 ml-2"/>
                     </Button>
                   </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
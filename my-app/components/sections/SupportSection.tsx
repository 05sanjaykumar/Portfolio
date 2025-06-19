// app/components/sections/SupportSection.tsx
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { Coffee, Heart, Wrench } from "lucide-react";
import Link from "next/link";

export function SupportSection() {
  return (

    <section id="support" className="py-24 px-4 bg-muted rounded-2xl">
      <div className="max-w-4xl mx-auto text-center p-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Support & Collaboration
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            If my work has helped you, consider supporting me.
            <br />
            I'm also available for freelance projects.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* --- Support Card --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Card className="h-full text-left">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Heart className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Support My Work</CardTitle>
                </div>
                <CardDescription>
                  Your support allows me to dedicate more time to creating and
                  maintaining open-source software for everyone.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <Link
                  href="https://github.com/sponsors/your-username" // <-- CHANGE THIS
                  target="_blank"
                >
                  <Button className="w-full">
                    <Heart className="mr-2 h-4 w-4" /> GitHub Sponsors
                  </Button>
                </Link>
                <Link
                  href="https://www.buymeacoffee.com/your-username" // <-- CHANGE THIS
                  target="_blank"
                >
                  <Button variant="secondary" className="w-full">
                    <Coffee className="mr-2 h-4 w-4" /> Buy Me a Coffee
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          {/* --- Hire Me Card --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Card className="h-full text-left">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Wrench className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Need a Custom Tool?</CardTitle>
                </div>
                <CardDescription>
                  "Need a custom AI tool or dev utility? Let's talk."
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-end h-full pb-6">
                <Link href="#contact" className="w-full">
                  <Button variant="outline" className="w-full">
                    Get in Touch
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
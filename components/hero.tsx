"use client"

import { Button } from "./ui/button"
import { motion } from "framer-motion"
import { Github, Linkedin, MessageSquare } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      <div className="container px-4 flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm Denys Dinkevych
            <br />
            <span className="text-primary">Talent Sourcing Enthusiast</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Seasoned Talent Sourcing professional with a robust background in the tech industry, 
            focusing on harnessing data-driven approaches to excel in sourcing exceptional talent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" href="#contact">
              Get in touch <MessageSquare className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" href="#about">
              Learn more
            </Button>
          </div>
          <div className="flex gap-6 justify-center">
            <Button size="icon" variant="ghost" href="https://www.linkedin.com/in/sourcingdenis/">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" href="https://sourcingdenis.medium.com/">
              <Github className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" href="https://sourcingdenis.t.me/">
              <MessageSquare className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
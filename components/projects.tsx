"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "./ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online shopping platform with cart and payment integration",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    category: "Full Stack",
    tags: ["Next.js", "TypeScript", "Stripe"]
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    category: "Web App",
    tags: ["React", "Node.js", "Socket.io"]
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio website with dark mode and animations",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80",
    category: "Frontend",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"]
  }
]

const categories = ["All", "Full Stack", "Frontend", "Web App"]

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects = projects.filter(project => 
    selectedCategory === "All" || project.category === selectedCategory
  )

  return (
    <section id="projects" className="py-20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
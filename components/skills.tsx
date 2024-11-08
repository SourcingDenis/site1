"use client"

import { motion } from "framer-motion"
import { Card } from "./ui/card"
import { Badge } from "./ui/badge"

const skills = {
  "Frontend": [
    "React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"
  ],
  "Backend": [
    "Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "REST APIs"
  ],
  "Tools": [
    "Git", "Docker", "AWS", "Vercel", "VS Code", "Figma"
  ],
  "Soft Skills": [
    "Problem Solving", "Team Leadership", "Communication", "Agile", "Mentoring"
  ]
}

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
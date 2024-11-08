"use client"

import { motion } from "framer-motion"
import { Card } from "./ui/card"

const timeline = [
  {
    year: "2023",
    title: "Senior Talent Sourcer",
    company: "Playson",
    description: "Leading ATS migration, creating comprehensive wiki spaces, and delivering interactive workshops for the Talent Acquisition team."
  },
  {
    year: "2021",
    title: "Global Talent Sourcer",
    company: "Spendesk",
    description: "Contributed to pipeline development for PDE roles, led job description revamp, and created recruitment analytics dashboards."
  },
  {
    year: "2018",
    title: "Talent Sourcing Lead",
    company: "iDeals",
    description: "Pioneered in-house sourcing function, developed competency models, and led high-performing sourcing teams."
  }
]

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-lg text-muted-foreground text-center">
              With extensive experience in talent sourcing, I specialize in building and optimizing 
              recruitment processes, implementing data-driven strategies, and fostering innovation 
              in talent acquisition. My expertise spans across engineering, product, creative, and 
              marketing disciplines.
            </p>
          </div>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <span className="text-primary font-bold text-lg">{item.year}</span>
                    <div>
                      <h3 className="font-bold text-xl">{item.title}</h3>
                      <p className="text-muted-foreground">{item.company}</p>
                      <p className="mt-2">{item.description}</p>
                    </div>
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
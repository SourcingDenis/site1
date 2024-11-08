"use client"

import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <span className="text-xl font-bold">JD</span>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6">
            <Button variant="ghost" href="#about">About</Button>
            <Button variant="ghost" href="#projects">Projects</Button>
            <Button variant="ghost" href="#skills">Skills</Button>
            <Button variant="ghost" href="#contact">Contact</Button>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
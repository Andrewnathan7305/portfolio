"use client"

import { ScrollLink } from "./scroll-link"
import { Github, Mail } from "lucide-react"

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/50">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="#home" className="font-semibold tracking-wide text-white">
          Andrew Nathan A
        </a>

        <div className="hidden gap-6 md:flex">
          <ScrollLink href="#home">Home</ScrollLink>
          <ScrollLink href="#about">About</ScrollLink>
          <ScrollLink href="#skills">Skills</ScrollLink>
          <ScrollLink href="#projects">Projects</ScrollLink>
          <ScrollLink href="#contact">Contact</ScrollLink>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="mailto:andrewnathan0704@gmail.com"
            aria-label="Email Andrew"
            className="rounded-md p-2 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://github.com/Andrewnathan7305"
            target="_blank"
            rel="noreferrer"
            aria-label="Andrew on GitHub"
            className="rounded-md p-2 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <Github size={20} />
          </a>
        </div>
      </nav>
    </header>
  )
}

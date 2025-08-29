"use client"

import Image from "next/image"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ExternalLink } from "lucide-react"
import { FadeIn } from "./fade-in"

type Project = {
  id: string
  title: string
  image: string
  description: string
  tech: string[]
  link?: string
}

const projects: Project[] = [
  {
    id: "blog-app",
    title: "Blog App",
    image: "/blog-app-preview.png",
    description:
      "Starter blog application from my learning journey. Includes a Next.js + Tailwind UI with an Express backend.",
    tech: ["Next.js", "Tailwind CSS", "Express"],
    link: "https://github.com/Andrewnathan7305/blog-app",
  },
  {
    id: "tag",
    title: "Tag — Bike Pooling Taxi App",
    image: "/bike-pooling-taxi-app-preview.png",
    description: "Bike pooling/taxi app prototype using Firebase and Google Maps APIs with React Native for mobile.",
    tech: ["Firebase", "React Native", "Google Maps API"],
    link: "https://github.com/Andrewnathan7305/tag",
  },
]

export function Projects() {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <div>
      <FadeIn>
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-pretty text-2xl font-semibold md:text-3xl">Projects</h2>
          <a
            href="https://github.com/Andrewnathan7305"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gray-300 hover:text-white underline-offset-4 hover:underline"
          >
            See all on GitHub
          </a>
        </div>
      </FadeIn>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p, idx) => (
          <FadeIn key={p.id} delay={100 * (idx + 1)}>
            <Card className="overflow-hidden border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
              <CardHeader className="p-0">
                <button
                  onClick={() => setActive(p)}
                  className="group relative block text-left"
                  aria-label={`Open details for ${p.title}`}
                >
                  <Image
                    src={p.image || "/placeholder.svg?height=340&width=640&query=project preview image"}
                    alt={`${p.title} preview`}
                    width={1024}
                    height={640}
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </button>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="flex items-center justify-between text-lg">
                  {p.title}
                  {p.link ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-400 hover:text-cyan-300"
                      aria-label={`Open ${p.title} externally`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  ) : null}
                </CardTitle>
                <p className="mt-2 text-sm text-gray-300">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-black/60 px-2 py-1 text-xs text-gray-300 ring-1 ring-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <Button
                    onClick={() => setActive(p)}
                    className="bg-amber-400 text-black hover:bg-amber-300"
                    aria-label={`Open details for ${p.title}`}
                  >
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogTrigger asChild>
          <span className="sr-only">Open project dialog</span>
        </DialogTrigger>
        <DialogContent className="bg-black text-white border-white/10">
          <DialogHeader>
            <DialogTitle className="text-xl">{active?.title}</DialogTitle>
            <DialogDescription className="text-gray-300">Tech: {active?.tech.join(", ")}</DialogDescription>
          </DialogHeader>
          <p className="leading-relaxed text-gray-300">{active?.description}</p>
          {active?.link ? (
            <a
              href={active.link}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
            >
              Visit project <ExternalLink size={16} />
            </a>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  )
}

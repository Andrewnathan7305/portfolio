import { FadeIn } from "./fade-in"
import { Button } from "@/components/ui/button"
import { ScrollLink } from "./scroll-link"

export function Hero() {
  return (
    <div className="relative">
      <FadeIn>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
          <span className="h-2 w-2 rounded-full bg-cyan-400" />
          Available for freelance & full-time roles
        </div>
      </FadeIn>

      <FadeIn delay={150}>
        <h1 className="mt-6 text-pretty text-3xl font-semibold leading-tight md:text-5xl">Andrew Nathan A</h1>
      </FadeIn>

      <FadeIn delay={300}>
        <p className="mt-2 text-cyan-400 text-lg md:text-xl">Frontend Developer — Next.js, React.js, Tailwind CSS</p>
      </FadeIn>

      <FadeIn delay={450}>
        <p className="mt-6 max-w-2xl text-gray-300 leading-relaxed">
          Building interactive and responsive web experiences. I craft modern, performant interfaces with a focus on
          clean architecture, accessibility, and delightful interactions.
        </p>
      </FadeIn>

      <FadeIn delay={600}>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <ScrollLink href="#projects">
            <Button className="bg-cyan-400 text-black hover:bg-cyan-300">View Projects</Button>
          </ScrollLink>
          <ScrollLink href="#contact">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
              Contact Me
            </Button>
          </ScrollLink>
        </div>
      </FadeIn>
    </div>
  )
}

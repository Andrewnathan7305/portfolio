import Image from "next/image"
import { FadeIn } from "./fade-in"

export function About() {
  return (
    <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[180px_1fr]">
      <FadeIn>
        <div className="relative h-40 w-40 overflow-hidden rounded-xl border border-white/10 bg-white/5 md:h-44 md:w-44">
          <Image
            src={"/placeholder.svg?height=256&width=256&query=profile portrait"}
            alt="Portrait of Andrew Nathan A"
            fill
            sizes="176px"
            className="object-cover"
            priority
          />
        </div>
      </FadeIn>

      <div>
        <FadeIn>
          <h2 className="text-pretty text-2xl font-semibold md:text-3xl">About</h2>
        </FadeIn>

        <FadeIn delay={150}>
          <p className="mt-3 max-w-2xl text-gray-300 leading-relaxed">
            I’m Andrew, a Frontend Developer focused on building interactive, accessible, and performant web experiences
            with Next.js, React, and Tailwind CSS. I care about design systems, clean architecture, and delightful
            micro-interactions that elevate usability.
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <ul className="mt-5 grid grid-cols-1 gap-3 text-sm text-gray-300 md:grid-cols-2">
            <li className="rounded-lg border border-white/10 bg-white/5 p-3">• Based in: Remote / Chennai, IN</li>
            <li className="rounded-lg border border-white/10 bg-white/5 p-3">• Focus: Next.js, React, Tailwind CSS</li>
            <li className="rounded-lg border border-white/10 bg-white/5 p-3">• Interests: a11y, DX, performance</li>
            <li className="rounded-lg border border-white/10 bg-white/5 p-3">
              • Experience: Modern SPAs & design systems
            </li>
          </ul>
        </FadeIn>
      </div>
    </div>
  )
}

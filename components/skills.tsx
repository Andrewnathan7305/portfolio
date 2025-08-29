import { Badge } from "@/components/ui/badge"
import { FadeIn } from "./fade-in"

const skills = [
  { name: "Next.js", color: "bg-white/10 text-white hover:bg-white/15" },
  { name: "React.js", color: "bg-white/10 text-white hover:bg-white/15" },
  { name: "Tailwind CSS", color: "bg-white/10 text-white hover:bg-white/15" },
  { name: "TypeScript", color: "bg-white/10 text-white hover:bg-white/15" },
  { name: "Accessibility (a11y)", color: "bg-white/10 text-white hover:bg-white/15" },
  { name: "Performance", color: "bg-white/10 text-white hover:bg-white/15" },
]

export function Skills() {
  return (
    <div>
      <FadeIn>
        <h2 className="text-pretty text-2xl font-semibold md:text-3xl">Skills</h2>
      </FadeIn>
      <FadeIn delay={150}>
        <p className="mt-3 max-w-2xl text-gray-300 leading-relaxed">
          I specialize in building fast, scalable, and accessible interfaces with modern tooling.
        </p>
      </FadeIn>

      <FadeIn delay={300}>
        <div className="mt-6 flex flex-wrap gap-3">
          {skills.map((s) => (
            <Badge
              key={s.name}
              className={`shadow-[0_2px_10px_rgba(0,0,0,0.3)] transition-transform hover:-translate-y-0.5 ${s.color}`}
            >
              {s.name}
            </Badge>
          ))}
        </div>
      </FadeIn>
    </div>
  )
}

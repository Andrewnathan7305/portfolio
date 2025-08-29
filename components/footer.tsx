import { Button } from "@/components/ui/button"
import { Github, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h2 className="text-pretty text-2xl font-semibold md:text-3xl">Let’s work together</h2>
      <p className="mt-3 max-w-2xl text-gray-300 leading-relaxed">
        Have a role or project in mind? I’m open to opportunities and collaborations.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a href="mailto:andrewnathan0704@gmail.com">
          <Button className="bg-cyan-400 text-black hover:bg-cyan-300">
            <Mail className="mr-2 h-4 w-4" />
            andrewnathan0704@gmail.com
          </Button>
        </a>
        <a
          href="https://github.com/Andrewnathan7305"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-gray-300 hover:bg-white/10"
        >
          <Github size={18} /> GitHub
        </a>
      </div>

      <div className="mt-8 border-t border-white/10 pt-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Andrew Nathan A. All rights reserved.
      </div>
    </footer>
  )
}

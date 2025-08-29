import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Footer } from "@/components/footer"
import { ParallaxBg } from "@/components/parallax-bg"
import { About } from "@/components/about"

export default function Page() {
  return (
    <main className="relative bg-black text-white">
      {/* Decorative background */}
      <ParallaxBg />
      {/* Navigation */}
      <Navbar />
      {/* Content */}
      <div className="relative z-10">
        <section id="home" className="container mx-auto px-4 py-16 md:py-24">
          <Hero />
        </section>

        {/* About section */}
        <section id="about" className="container mx-auto px-4 py-16 md:py-20">
          <About />
        </section>

        {/* Skills section */}
        <section id="skills" className="container mx-auto px-4 py-16 md:py-20">
          <Skills />
        </section>
        {/* Projects section */}
        <section id="projects" className="container mx-auto px-4 py-16 md:py-20">
          <Projects />
        </section>
        {/* Contact section */}
        <section id="contact" className="container mx-auto px-4 py-16 md:py-20">
          <Footer />
        </section>
      </div>
    </main>
  )
}

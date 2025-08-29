"use client"

import { useEffect } from "react"

export default function AnimateOnScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false

    // IntersectionObserver for reveals
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.dataset.visible = "true"
            observer.unobserve(el)
          }
        }
      },
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.2 },
    )

    // Auto-opt-in common sections and items
    const candidates = document.querySelectorAll<HTMLElement>(
      [
        "section[id], section", // sections
        "header",
        "footer",
        "[data-animate]", // manual opt-in
        // common portfolio items
        "#projects a",
        "#projects article",
        "#projects .card",
        "#skills li",
        "#skills .badge",
        "#skills .chip",
      ].join(","),
    )

    let i = 0
    candidates.forEach((el) => {
      if (!el.dataset.animate) el.dataset.animate = "up"
      const delay = Math.min(i * 40, 360)
      el.style.setProperty("--reveal-delay", `${delay}ms`)
      i++
      if (!reduceMotion) observer.observe(el)
      else el.dataset.visible = "true"
    })

    // Desktop-only 3D hover tilt
    const finePointer = window.matchMedia?.("(pointer: fine)")?.matches
    const tiltTargets = document.querySelectorAll<HTMLElement>(
      ["#projects a", "#projects article", "#projects .card", "#skills li", "#skills .badge"].join(","),
    )

    const cleanups: Array<() => void> = []
    if (!reduceMotion && finePointer) {
      tiltTargets.forEach((el) => {
        const onMove = (e: PointerEvent) => {
          const r = el.getBoundingClientRect()
          const px = (e.clientX - r.left) / r.width
          const py = (e.clientY - r.top) / r.height
          const rx = (py - 0.5) * -6
          const ry = (px - 0.5) * 6
          el.style.setProperty("--rx", `${rx}deg`)
          el.style.setProperty("--ry", `${ry}deg`)
          el.style.setProperty("--tx", `${(px - 0.5) * 4}px`)
          el.style.setProperty("--ty", `${(py - 0.5) * 4}px`)
          el.dataset.hover = "true"
        }
        const onLeave = () => {
          el.style.setProperty("--rx", "0deg")
          el.style.setProperty("--ry", "0deg")
          el.style.setProperty("--tx", "0px")
          el.style.setProperty("--ty", "0px")
          el.dataset.hover = "false"
        }
        el.addEventListener("pointermove", onMove)
        el.addEventListener("pointerleave", onLeave)
        cleanups.push(() => {
          el.removeEventListener("pointermove", onMove)
          el.removeEventListener("pointerleave", onLeave)
        })
      })
    }

    return () => {
      observer.disconnect()
      cleanups.forEach((fn) => fn())
    }
  }, [])

  return null
}

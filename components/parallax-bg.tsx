"use client"

import { useEffect, useState } from "react"

export function ParallaxBg() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.1)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div aria-hidden="true">
      {/* Subtle background gradients using allowed palette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),transparent_50%),radial-gradient(ellipse_at_bottom,_rgba(251,191,36,0.08),transparent_40%)]" />
      {/* Decorative SVG shape */}
      <svg
        className="pointer-events-none absolute -top-24 left-1/2 h-[520px] -translate-x-1/2 opacity-40"
        style={{ transform: `translate(-50%, ${-offset}px)` }}
        viewBox="0 0 600 600"
        fill="none"
      >
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgb(34 211 238)" /> {/* cyan-400 */}
            <stop offset="100%" stopColor="rgb(251 191 36)" /> {/* amber-400 */}
          </linearGradient>
        </defs>
        <path
          d="M300 80c80 0 160 60 180 130s-20 160-120 210-220 20-270-60 0-180 60-230 70-50 150-50Z"
          fill="url(#g1)"
          opacity="0.15"
        />
      </svg>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black to-transparent"
        style={{ opacity: 0.7 }}
      />
    </div>
  )
}

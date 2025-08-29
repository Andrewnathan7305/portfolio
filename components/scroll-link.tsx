"use client"

import type React from "react"

export function ScrollLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      onClick={(e) => {
        const targetId = href.startsWith("#") ? href.slice(1) : href
        const el = document.getElementById(targetId)
        if (el) {
          e.preventDefault()
          el.scrollIntoView({ behavior: "smooth", block: "start" })
          history.replaceState(null, "", href)
        }
      }}
      className="text-gray-300 hover:text-white transition-colors"
    >
      {children}
    </a>
  )
}

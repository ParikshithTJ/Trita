import * as React from "react"

type CardProps = {
  className?: string
  children: React.ReactNode
}

export default function Card({ className, children }: CardProps) {
  return (
    <div
      className={
        "rounded-3xl border border-ink-950/[0.08] bg-white p-6 shadow-soft transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:border-ink-950/[0.12] hover:shadow-lift " +
        (className ?? "")
      }
    >
      {children}
    </div>
  )
}
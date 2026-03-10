import * as React from "react"

const items = [
  {
    number: `01`,
    title: `Traditional Games Revival`,
    points: [`Documentation`, `Design refinements`, `Facilitated play`],
  },
  {
    number: `02`,
    title: `Cultural Learning Programs`,
    points: [`School workshops`, `Family programs`, `Community events`],
  },
  {
    number: `03`,
    title: `Digital Platforms`,
    points: [`Board games`, `Interactive learning`, `Companion experiences`],
  },
  {
    number: `04`,
    title: `Research & Innovation`,
    points: [`Knowledge systems`, `Digital preservation`, `Experimental concepts`],
  },
]

export default function WhatWeDoSection() {
  return (
    <section className="mt-14">
      <h2 className="font-heading text-3xl font-bold text-ink-950">What We Do</h2>
      <p className="mt-3 max-w-2xl font-body text-base leading-relaxed text-ink-950/70">
        Our work sits at the intersection of heritage, learning science, and modern design.
      </p>

      <div className="mt-8 grid gap-0 overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft sm:grid-cols-2">
        {items.map((item, i) => (
          <div
            key={item.title}
            className={`group flex flex-col gap-4 p-6 transition hover:bg-sand-50 sm:p-8
              ${i % 2 === 0 ? "sm:border-r" : ""} border-ink-950/[0.08]
              ${i < 2 ? "border-b" : ""} border-ink-950/[0.08]`}
          >

            <div className="space-y-1">
              <span className="font-ui text-xs font-medium tracking-widest text-ink-950/25">
                {item.number}
              </span>
              <div className="font-heading text-lg font-bold text-ink-950">{item.title}</div>
            </div>

            <ul className="flex flex-col gap-2">
              {item.points.map(p => (
                <li key={p} className="flex items-center gap-2.5 font-caption text-sm text-ink-950/65">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-marigold-500" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
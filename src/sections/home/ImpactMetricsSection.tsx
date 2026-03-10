import * as React from "react"

const metrics = [
  { label: `Families engaged`, value: `2,500+` },
  { label: `Schools partnered`, value: `30+` },
  { label: `Workshops conducted`, value: `120+` },
  { label: `Games revived`, value: `25+` },
]

export default function ImpactMetricsSection() {
  return (
    <section className="mt-14">
      <h2 className="font-heading text-3xl font-bold text-ink-950">Impact Metrics</h2>
      <p className="mt-3 max-w-2xl font-body text-base leading-relaxed text-ink-950/70">
        Placeholder metrics for now—swap with real numbers as you gather more data.
      </p>

      <div className="mt-8 grid grid-cols-2 overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft lg:grid-cols-4">
        {metrics.map((m, i) => (
          <div
            key={m.label}
            className={`group flex flex-col justify-between gap-3 p-6 transition hover:bg-sand-50 sm:p-8
              ${i < metrics.length - 1 ? "border-r border-ink-950/[0.08]" : ""}
              ${i < 2 ? "border-b border-ink-950/[0.08] lg:border-b-0" : ""}`}
          >
            <div className="font-display text-4xl font-bold text-ink-950 sm:text-5xl">{m.value}</div>
            <div className="font-caption text-xs font-semibold uppercase tracking-wider text-ink-950/50">
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
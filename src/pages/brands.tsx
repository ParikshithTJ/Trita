import * as React from "react"

import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"
import Button from "../components/ui/Button"

const brands = [
  {
    title: `Roll the Dice`,
    to: `/brands/roll-the-dice`,
    desc: `Game collections, workshops, corporate programs.`,
    image: `/Roll the Dice Logo (1200 x 628 px).png`,
    tag: `Traditional Indian Board Games`,
    number: `01`,
  },
  {
    title: `TolluGatti`,
    to: `/brands/tollugatti`,
    desc: `Digital board games, mindful play, community events.`,
    image: `/tollugatti-inverse.png`,
    tag: `Digital`,
    number: `02`,
  },
  {
    title: `UnCamp`,
    to: `/brands/uncamp`,
    desc: `Thematic camps and family learning programs.`,
    image: `/Uncamp Logo.png`,
    tag: `Play & Learn`,
    number: `03`,
  },
  {
    title: `Dahi Handi`,
    to: `/brands/dahi-handi`,
    desc: `Cultural festivals, youth engagement, heritage celebrations.`,
    image: `/dahi-handi-logo.png`,
    tag: `Play`,
    number: `04`,
  },
]

export default function BrandsPage() {
  return (
    <SiteLayout>
      {/* Hero — identical style to your other pages */}
      <header className="space-y-4 text-center">
        <h1 className="font-display text-5xl font-bold tracking-tight text-ink-950">Our Brands</h1>
        <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-ink-950/70">
          Explore Trita's ecosystem of brands, each with a unique focus on culture, play, and learning.
        </p>
      </header>

      <div className="mt-16 grid gap-6 sm:grid-cols-2">
        {brands.map((b) => (
          <a
            key={b.to}
            href={b.to}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft transition-shadow duration-300 hover:shadow-md no-underline"
          >
            <div className="flex items-center justify-between px-6 pt-5">
              <span className="font-ui text-xs font-medium tracking-widest text-ink-950/30">
                {b.number}
              </span>
              <span className="rounded-full border border-ink-950/[0.15] px-3 py-0.5 font-ui text-xs tracking-wide text-ink-950/50">
                {b.tag}
              </span>
            </div>

            <div className="mx-6 mt-4 flex items-center justify-center rounded-2xl bg-sand-50 px-8 py-8">
              <img
                src={b.image}
                alt={`${b.title} logo`}
                className="h-32 w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between gap-3 p-6">
              <div className="space-y-1.5">
                <h2 className="font-ui text-2xl font-extrabold tracking-tight text-ink-950">
                  {b.title}
                </h2>
                <p className="font-body text-sm leading-relaxed text-ink-950/65">{b.desc}</p>
              </div>
              <Button to={b.to} variant="secondary" className="w-fit px-6 py-2.5 text-sm">
                Learn more
              </Button>
            </div>
          </a>
        ))}
      </div>
    </SiteLayout>
  )
}

export const Head = () => <Seo title="Brands" pathname="/brands" />
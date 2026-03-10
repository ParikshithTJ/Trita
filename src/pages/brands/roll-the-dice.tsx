import * as React from "react"

import BrandPageLayout from "../../layouts/BrandPageLayout"
import Card from "../../components/ui/Card"

export default function RollTheDicePage() {
  return (
    <BrandPageLayout
      title="Roll the Dice"
      subtitle="Brand / Roll the Dice"
      logo="/Roll the Dice Logo (1200 x 628 px).png"
      website="https://rollthedice.in"
      description={
        <p>
          Roll the Dice is Trita’s flagship brand dedicated to researching, reviving, and reimagining traditional
          Indian board games for modern audiences. Through carefully crafted game collections, workshops, and
          experiential programs, Roll the Dice brings timeless strategy games back into homes, schools, and
          communities.
        </p>
      }
    >
      <Card className="transition hover:shadow-lift">
        <div className="font-heading text-lg font-bold text-ink-950">Game Collections</div>
        <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">
          Curated sets of traditional and contemporary Indian games.
        </p>
      </Card>
      <Card className="transition hover:shadow-lift">
        <div className="font-heading text-lg font-bold text-ink-950">Experiential Game Sets</div>
        <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">
          Large-format play for installations and festivals.
        </p>
      </Card>
      <Card className="transition hover:shadow-lift">
        <div className="font-heading text-lg font-bold text-ink-950">Workshops</div>
        <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">
          Facilitated learning and play sessions.
        </p>
      </Card>
      <Card className="transition hover:shadow-lift">
        <div className="font-heading text-lg font-bold text-ink-950">Corporate Programs</div>
        <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">
          Team building through strategy and culture.
        </p>
      </Card>
      <Card className="transition hover:shadow-lift">
        <div className="font-heading text-lg font-bold text-ink-950">Experience Centre</div>
        <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">
          Visit and play (placeholder details).
        </p>
      </Card>
    </BrandPageLayout>
  )
}


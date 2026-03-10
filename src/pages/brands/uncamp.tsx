import * as React from "react"

import BrandPageLayout from "../../layouts/BrandPageLayout"
import Card from "../../components/ui/Card"

export default function UnCampPage() {
  return (
    <BrandPageLayout
      title="UnCamp"
      subtitle="Brand / UnCamp"
      logo="/Uncamp Logo.png"
      website="https://uncamp.tollugatti.com/"
      description={
        <p>
          UnCamp is Trita’s challenge-based learning initiative designed to spark curiosity, creativity, and
          independent thinking in children and families. Built around the idea of exploration through activity, UnCamp
          offers structured programs where participants engage in daily challenges, hands-on tasks, and reflective
          exercises.
        </p>
      }
    >
      <Card className="transition hover:shadow-lift">
        <div className="font-heading text-lg font-bold text-ink-950">Thematic Camps</div>
        <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">
          Immersive learning experiences for children and adults.
        </p>
      </Card>
      <Card className="transition hover:shadow-lift">
        <div className="font-heading text-lg font-bold text-ink-950">Curiosity Challenges</div>
        <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Self-paced discovery quests.</p>
      </Card>
      <Card className="transition hover:shadow-lift">
        <div className="font-heading text-lg font-bold text-ink-950">Creative Workshops</div>
        <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">
          Hands-on building and culture exploration.
        </p>
      </Card>
      <Card className="transition hover:shadow-lift">
        <div className="font-heading text-lg font-bold text-ink-950">Community Challenges</div>
        <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">
          Collaborative problem-solving through play.
        </p>
      </Card>
    </BrandPageLayout>
  )
}


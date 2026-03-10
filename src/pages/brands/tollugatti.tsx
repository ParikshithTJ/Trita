import * as React from "react"

import BrandPageLayout from "../../layouts/BrandPageLayout"
import Card from "../../components/ui/Card"

export default function TolluGattiPage() {
  return (
    <BrandPageLayout
      title="TolluGatti"
      subtitle="Brand / TolluGatti"
      logo="/tollugatti-inverse.png"
      website="https://tollugatti.com"
      description={
        <p>
          TolluGatti is Trita’s digital platform that brings traditional games and cultural learning into interactive
          online experiences. The platform features digital board games, mindful play activities, and challenge-based
          programs designed to encourage strategic thinking, creativity, and cultural awareness.
        </p>
      }
    >
      <Card className="transition hover:shadow-lift">
        <div className="font-heading text-lg font-bold text-ink-950">Digital Board Games</div>
        <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">
          Mobile/web-first board game experiences.
        </p>
      </Card>
      <Card className="transition hover:shadow-lift">
        <div className="font-heading text-lg font-bold text-ink-950">UnCamp Challenges</div>
        <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">
          Challenge-based learning journeys.
        </p>
      </Card>
      <Card className="transition hover:shadow-lift">
        <div className="font-heading text-lg font-bold text-ink-950">Mindful Games</div>
        <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Slow play, reflection, and creativity.</p>
      </Card>
      <Card className="transition hover:shadow-lift">
        <div className="font-heading text-lg font-bold text-ink-950">Companion App</div>
        <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">
          Play support and content (placeholder).
        </p>
      </Card>
      <Card className="transition hover:shadow-lift">
        <div className="font-heading text-lg font-bold text-ink-950">Community Events</div>
        <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Meetups and play circles.</p>
      </Card>
    </BrandPageLayout>
  )
}


import * as React from "react"

import BrandPageLayout from "../../layouts/BrandPageLayout"
import Card from "../../components/ui/Card"

export default function DahiHandiPage() {
  return (
    <BrandPageLayout
      title="Dahi Handi"
      subtitle="Brand / Dahi Handi"
      logo="/dahi-handi-logo.png"
      website="https://play.google.com/store/apps/details?id=com.tollugatti.dahihandi&hl=en_IN"
      description={
        <p>
          Dahi Handi is Trita’s initiative to celebrate traditional Indian festivals through participatory,
          community-centered experiences. Inspired by the spirit of teamwork, celebration, and cultural storytelling
          associated with the festival, the program creates opportunities for people to engage with traditions in
          meaningful and joyful ways.
        </p>
      }
    >
      <Card className="transition hover:shadow-lift">
        <div className="font-heading text-lg font-bold text-ink-950">Cultural festivals</div>
        <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">
          Festival activations and play-led cultural programming.
        </p>
      </Card>
      <Card className="transition hover:shadow-lift">
        <div className="font-heading text-lg font-bold text-ink-950">Community play</div>
        <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">
          Neighborhood events that bring people together.
        </p>
      </Card>
      <Card className="transition hover:shadow-lift">
        <div className="font-heading text-lg font-bold text-ink-950">Youth engagement</div>
        <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">
          Leadership, teamwork, and cultural participation.
        </p>
      </Card>
      <Card className="transition hover:shadow-lift">
        <div className="font-heading text-lg font-bold text-ink-950">Competitions</div>
        <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">
          Playful challenges and festival competitions.
        </p>
      </Card>
      <Card className="transition hover:shadow-lift">
        <div className="font-heading text-lg font-bold text-ink-950">Heritage celebrations</div>
        <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">
          Document and showcase local traditions.
        </p>
      </Card>
    </BrandPageLayout>
  )
}


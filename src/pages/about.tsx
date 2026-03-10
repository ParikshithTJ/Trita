import * as React from "react"

import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"

const approachItems = [
  {
    number: `01`,
    title: `Research`,
    desc: `Our work begins with exploring traditional games, cultural practices, and knowledge systems. Through field visits, conversations with practitioners, artisans, and community elders, we document gameplay methods, regional variations, materials, and the stories associated with these traditions.`,
  },
  {
    number: `02`,
    title: `Design`,
    desc: `We follow a human-centered approach, carefully observing how individuals and families interact with games, activities, and learning environments. Through continuous prototyping, testing, and iteration, we transform cultural knowledge into interactive formats that are intuitive, enjoyable, and easy to participate in.`,
  },
  {
    number: `03`,
    title: `Technology`,
    desc: `We build digital platforms and tools that document traditional games, support interactive learning, and enable people to explore traditions beyond physical spaces — making cultural knowledge accessible to wider audiences in ways that are collaborative and relevant to contemporary life.`,
  },
]

const founders = [
  {
    name: `Tanushri SN`,
    role: `Founder & CEO`,
    bio: `Tanushri SN is the Founder and CEO of Trita Infotainment LLP and the creative force behind many of its cultural initiatives. She is passionate about researching, designing, and reviving traditional Indian games and cultural experiences for modern audiences. With a Master's degree in Computer Software Engineering from BITS Pilani and a Bachelor's in Electronics and Communication Engineering from UBDT Davanagere, Tanushri began her career in technology before turning her focus toward cultural entrepreneurship.`,
  },
  {
    name: `Shashishekhar S`,
    role: `Co-Founder & COO`,
    bio: `Shashishekhar S is the Co-Founder and COO of Trita Infotainment LLP, leading technology strategy, product architecture, and operational development. An engineer by training with a Bachelor's in Electrical Engineering from the University of Mysore, he began his journey as an entrepreneur in the early 2000s. He later worked with Cisco, leading engineering teams focused on innovation and next-generation internet security solutions.`,
  },
]

export default function AboutPage() {
  return (
    <SiteLayout>
      {/* Hero header — matches all other pages */}
      <header className="space-y-4 text-center">
        <h1 className="font-display text-5xl font-bold tracking-tight text-ink-950">About Trita</h1>
        <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-ink-950/70">
          Trita brings together cultural research, thoughtful design, and technology to create playful
          learning experiences rooted in Indian heritage.
        </p>
      </header>

      <div className="mt-16 space-y-16">

        {/* ── Our Story + Vision/Mission ── */}
        <section className="grid items-start gap-8 md:grid-cols-[3fr_2fr]">
          {/* Story */}
          <div className="space-y-5">
            <h2 className="font-heading text-4xl font-bold text-ink-950">Our Story</h2>
            <div className="space-y-4 font-body text-base leading-relaxed text-ink-950/75">
              <p>
                Trita Infotainment LLP was founded with a simple yet powerful idea —
                that <b>culture can be experienced, not just remembered.</b> India has always
                had a rich tradition of learning through play. Board games, puzzles, storytelling,
                festivals, and community activities were once natural parts of everyday life —
                teaching strategy, patience, collaboration, resilience, and creativity long before
                these became formal subjects in classrooms.
              </p>
              <p>Over time, many of these traditions quietly faded from daily life.</p>
              <p>
                Trita was created to{" "}
                <b>rediscover, revive, and reimagine these cultural experiences for modern audiences.</b>{" "}
                Through <b>Roll the Dice</b>, we bring back traditional board games. Through <b>TolluGatti</b>,
                we extend these experiences into digital formats. Through <b>UnCamp</b>, we design
                challenge-based learning programs. And through <b>Dahi Handi</b>, we celebrate
                community traditions that bring people together.
              </p>
              <p>
                At the heart of Trita is a belief that{" "}
                <b>play is one of the most powerful ways humans learn, connect, and grow.</b>
              </p>
            </div>
          </div>

          {/* Vision + Mission */}
          <div className="flex flex-col gap-0 overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft">
            <div className="flex flex-col gap-3 p-7 border-b border-ink-950/[0.08]">
              <span className="font-ui text-xs font-medium tracking-widest text-ink-950/25">Vision</span>
              <h3 className="font-heading text-xl font-bold text-ink-950">A future where culture is lived through play.</h3>
              <p className="font-body text-sm leading-relaxed text-ink-950/65">
                We imagine a world where cultural knowledge is experienced actively rather than passively —
                traditions becoming living experiences that inspire curiosity, connection, and learning across generations.
              </p>
            </div>
            <div className="flex flex-col gap-3 p-7">
              <span className="font-ui text-xs font-medium tracking-widest text-ink-950/25">Mission</span>
              <h3 className="font-heading text-xl font-bold text-ink-950">Making cultural learning accessible and joyful.</h3>
              <p className="font-body text-sm leading-relaxed text-ink-950/65">
                We build products, experiences, and digital platforms that transform cultural knowledge
                into engaging activities — enabling children, families, schools, and communities to
                learn through play, curiosity, and participation.
              </p>
            </div>
          </div>
        </section>

        {/* ── Our Approach ── */}
        <section>
          <div className="space-y-2">
            <h2 className="font-heading text-4xl font-bold text-ink-950">Our Approach</h2>
            <p className="max-w-2xl font-body text-base leading-relaxed text-ink-950/70">
              Research forms the foundation of everything we create — from traditional knowledge
              systems to the platforms that carry them forward.
            </p>
          </div>

          <div className="mt-8 grid gap-0 overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft md:grid-cols-3">
            {approachItems.map((item, i) => (
              <div
                key={item.title}
                className={`group flex flex-col gap-3 p-7 transition hover:bg-sand-50
                  ${i < approachItems.length - 1 ? "border-b border-ink-950/[0.08] md:border-b-0 md:border-r" : ""}`}
              >
                <span className="font-ui text-xs font-medium tracking-widest text-ink-950/25">{item.number}</span>
                <h4 className="font-heading text-xl font-bold text-ink-950">{item.title}</h4>
                <p className="font-caption text-sm leading-relaxed text-ink-950/65">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Meet the Founders ── */}
        <section>
          <div className="space-y-2 text-center">
            <h2 className="font-heading text-4xl font-bold text-ink-950">Meet the Founders</h2>
            <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-ink-950/70">
              Trita was founded by a team passionate about culture, technology, and the power of play.
            </p>
          </div>

          <div className="mt-10 grid gap-0 overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft md:grid-cols-2">
            {founders.map((f, i) => (
              <div
                key={f.name}
                className={`flex flex-col gap-3 p-8
                  ${i < founders.length - 1 ? "border-b border-ink-950/[0.08] md:border-b-0 md:border-r" : ""}`}
              >
                <div>
                  <div className="font-ui text-2xl font-bold text-ink-950">{f.name}</div>
                  <div className="mt-1 font-caption text-xs font-semibold uppercase tracking-widest text-ink-950/40">
                    {f.role}
                  </div>
                </div>
                <p className="font-body text-sm leading-relaxed text-ink-950/70">{f.bio}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </SiteLayout>
  )
}

export const Head = () => <Seo title="About" pathname="/about" />
import { Section, SectionHeading } from './primitives'

const audiences = [
  'Restaurants & Cafes',
  'Clinics & Medical Centers',
  'Shops & Retail',
  'Service Companies',
  'Factories',
  'Startups',
]

export function Audience() {
  return (
    <Section id="about">
      <SectionHeading title="Built for businesses like yours" />
      <ul className="mt-10 flex flex-wrap gap-3">
        {audiences.map((a) => (
          <li
            key={a}
            className="flex items-center gap-2.5 rounded-full border border-[#e5e7eb] bg-white px-5 py-3 text-sm font-medium text-charcoal"
          >
            <span className="size-2 rounded-full bg-orange" aria-hidden="true" />
            {a}
          </li>
        ))}
      </ul>
    </Section>
  )
}

const steps = [
  {
    title: 'Discover',
    description: 'We listen, understand your business, and define exactly what needs to be built.',
  },
  {
    title: 'Design',
    description: 'We design the experience and screens so you can see the product before we build it.',
  },
  {
    title: 'Build',
    description: 'We develop in clear stages and share progress with you at every step.',
  },
  {
    title: 'Launch & Support',
    description: 'We deploy, train you and your team, and stay with you after launch.',
  },
]

export function Process() {
  return (
    <Section tone="gray">
      <SectionHeading title="From idea to launch" />
      <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {steps.map((s, i) => (
          <li key={s.title} className="border-t-2 border-charcoal/15 pt-6">
            <span className="font-heading text-6xl font-extrabold text-charcoal/10" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-4 text-xl font-bold text-charcoal">{s.title}</h3>
            <p className="mt-3 leading-relaxed text-slate-text">{s.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}

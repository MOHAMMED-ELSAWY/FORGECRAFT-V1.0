import { ButtonLink, Section, SectionHeading } from './primitives'

const values = [
  { title: 'Solution-Oriented', description: 'We focus on the problem first and build only what moves your business forward.' },
  { title: 'Trustworthy', description: 'Clear scope, honest timelines, and no surprises in cost or delivery.' },
  { title: 'Innovative', description: 'Modern tools and smart automation, applied where they actually make sense.' },
  { title: 'Partner-Focused', description: 'We stay involved after launch and grow the product with you.' },
]

export function Values() {
  return (
    <Section tone="gray">
      <SectionHeading title="Why work with us" />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v) => (
          <article key={v.title} className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5">
            <div className="h-1 w-10 rounded-full bg-orange" aria-hidden="true" />
            <h3 className="mt-6 text-lg font-bold text-charcoal">{v.title}</h3>
            <p className="mt-3 leading-relaxed text-slate-text">{v.description}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}

const packages = [
  { title: 'Starter Website', description: 'A clean, fast website to present your business and get customers to contact you.' },
  { title: 'Business Website', description: 'A multi-page site with content management, forms, and integrations you need.' },
  { title: 'Custom Software', description: 'Web or mobile apps and business systems built around your exact workflow.' },
  { title: 'Maintenance & Support', description: 'Hosting, updates, backups, and improvements on a simple monthly plan.' },
]

export function Pricing() {
  return (
    <Section>
      <SectionHeading title="Start small or go custom" />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {packages.map((p) => (
          <article key={p.title} className="flex flex-col rounded-2xl border border-[#e5e7eb] bg-white p-8">
            <h3 className="text-lg font-bold text-charcoal">{p.title}</h3>
            <p className="mt-3 flex-1 leading-relaxed text-slate-text">{p.description}</p>
            <ButtonLink href="#contact" variant="outline" className="mt-8 w-full">
              Request a quote
            </ButtonLink>
          </article>
        ))}
      </div>
      <p className="mt-10 text-sm text-slate-text">
        Every quote clearly states scope, deliverables, timeline, and cost — before any work begins.
      </p>
    </Section>
  )
}

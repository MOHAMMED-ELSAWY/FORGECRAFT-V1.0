import { ArrowRight } from 'lucide-react'
import { Section, SectionHeading } from './primitives'

function RestaurantMockup() {
  return (
    <div className="flex h-full gap-4" aria-hidden="true">
      <div className="flex-1 overflow-hidden rounded-xl bg-white p-4 shadow-sm">
        <div className="h-2.5 w-24 rounded-full bg-charcoal/80" />
        <div className="mt-4 grid grid-cols-3 gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="space-y-1.5">
              <div className={i === 1 ? 'h-14 rounded-lg bg-orange/80' : 'h-14 rounded-lg bg-light'} />
              <div className="h-1.5 w-3/4 rounded-full bg-charcoal/15" />
            </div>
          ))}
        </div>
      </div>
      <div className="hidden w-28 flex-col rounded-[18px] border-4 border-charcoal bg-white p-2 sm:flex">
        <div className="h-14 rounded-md bg-light" />
        <div className="mt-2 h-1.5 w-3/4 rounded-full bg-charcoal/70" />
        <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-charcoal/15" />
        <div className="mt-auto h-6 rounded-md bg-orange" />
      </div>
    </div>
  )
}

function SystemMockup() {
  return (
    <div className="flex h-full overflow-hidden rounded-xl bg-white shadow-sm" aria-hidden="true">
      <div className="w-16 space-y-3 bg-charcoal p-3 sm:w-20">
        <div className="size-5 rounded bg-orange" />
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-1.5 rounded-full bg-white/25" />
        ))}
      </div>
      <div className="flex-1 p-4">
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-lg bg-light p-2">
              <div className="h-1.5 w-8 rounded-full bg-charcoal/20" />
              <div className={i === 0 ? 'mt-2 h-2.5 w-10 rounded-full bg-orange' : 'mt-2 h-2.5 w-10 rounded-full bg-charcoal/70'} />
            </div>
          ))}
        </div>
        <div className="mt-3 space-y-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-1.5 flex-1 rounded-full bg-charcoal/15" />
              <div className="h-1.5 w-8 rounded-full bg-charcoal/30" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const projects = [
  {
    title: 'Restaurant Digital Platform',
    description: 'Online menu, ordering, and a customer app connected to a kitchen dashboard for live order tracking.',
    tags: ['Web', 'Mobile', 'Dashboard'],
    Mockup: RestaurantMockup,
  },
  {
    title: 'Business Management System',
    description: 'One place to manage customers, orders, inventory, and reports — with clear roles for every team.',
    tags: ['Web', 'Dashboard'],
    Mockup: SystemMockup,
  },
]

export function Portfolio() {
  return (
    <Section id="work">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading title="Our work" subtitle="Demo projects built by ForgeCraft to show what we can do." />
        <a
          href="#work"
          className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal transition-colors hover:text-orange"
        >
          See all projects
          <ArrowRight className="size-4" aria-hidden="true" />
        </a>
      </div>
      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {projects.map(({ title, description, tags, Mockup }) => (
          <article key={title} className="overflow-hidden rounded-2xl bg-light">
            <div className="h-64 p-6 sm:h-72 sm:p-8">
              <Mockup />
            </div>
            <div className="p-6 pt-2 sm:p-8 sm:pt-2">
              <span className="inline-block rounded-md bg-charcoal px-2.5 py-1 text-[10px] font-bold tracking-widest text-white">
                DEMO PROJECT
              </span>
              <h3 className="mt-4 text-2xl font-bold text-charcoal">{title}</h3>
              <p className="mt-3 leading-relaxed text-slate-text">{description}</p>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                {tags.map((t) => (
                  <li key={t} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-charcoal">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

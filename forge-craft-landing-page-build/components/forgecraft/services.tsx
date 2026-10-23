import { ArrowRight, Bot, Cloud, Globe, LayoutDashboard, Smartphone } from 'lucide-react'
import { ButtonLink, Section, SectionHeading } from './primitives'

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Company websites, landing pages, and web platforms that are fast, clear, and easy to manage.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Android and iOS apps that give your customers a simple way to order, book, and stay connected.',
  },
  {
    icon: LayoutDashboard,
    title: 'Business Systems',
    description: 'Orders, customers, inventory, and reports — organized in one system built around how you work.',
  },
  {
    icon: Bot,
    title: 'AI & Automation',
    description: 'Automate repeated work, connect your tools, and use AI where it saves real time and money.',
  },
  {
    icon: Cloud,
    title: 'Cloud & Support',
    description: 'Hosting, deployment, backups, and ongoing support so your software keeps running smoothly.',
  },
]

export function Services() {
  return (
    <Section id="services" tone="gray">
      <SectionHeading title="What we build" subtitle="Practical software for real business problems." />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, description }) => (
          <article
            key={title}
            className="group flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md"
          >
            <div className="flex size-12 items-center justify-center rounded-xl bg-orange/10 text-orange">
              <Icon className="size-6" aria-hidden="true" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-charcoal">{title}</h3>
            <p className="mt-3 flex-1 leading-relaxed text-slate-text">{description}</p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-charcoal transition-colors hover:text-orange"
            >
              Learn more
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              <span className="sr-only">about {title}</span>
            </a>
          </article>
        ))}
        <article className="flex flex-col rounded-2xl bg-charcoal p-8 text-white">
          <h3 className="text-xl font-bold">Not sure what you need?</h3>
          <p className="mt-3 flex-1 leading-relaxed text-white/70">
            Tell us the problem. We&apos;ll suggest the simplest solution that works.
          </p>
          <ButtonLink href="#contact" className="mt-8 self-start">
            Start a Project
          </ButtonLink>
        </article>
      </div>
    </Section>
  )
}

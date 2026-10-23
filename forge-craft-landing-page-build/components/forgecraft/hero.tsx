import { ButtonLink, Container } from './primitives'

function DashboardCard() {
  const bars = [40, 65, 50, 80, 60, 92, 74]
  const rows = [
    { name: 'Order #1042', status: 'Paid', amount: '$320' },
    { name: 'Order #1041', status: 'Pending', amount: '$180' },
    { name: 'Order #1040', status: 'Paid', amount: '$560' },
  ]
  return (
    <div className="w-full rounded-2xl border border-border bg-white p-5 shadow-[0_20px_50px_-12px_rgba(17,24,39,0.25)]">
      <div className="flex items-center justify-between">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-[#e5e7eb]" />
          <span className="size-2.5 rounded-full bg-[#e5e7eb]" />
          <span className="size-2.5 rounded-full bg-[#e5e7eb]" />
        </div>
        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-text">Dashboard</span>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        {[
          { label: 'Revenue', value: '$24.8k' },
          { label: 'Orders', value: '1,284' },
          { label: 'Growth', value: '+18%' },
        ].map((s) => (
          <div key={s.label} className="rounded-lg bg-light p-3">
            <p className="text-[10px] font-medium text-slate-text">{s.label}</p>
            <p className="mt-1 font-heading text-sm font-bold text-charcoal">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex h-24 items-end gap-2 rounded-lg bg-light p-3" aria-hidden="true">
        {bars.map((h, i) => (
          <div
            key={i}
            className={i === 5 ? 'flex-1 rounded-sm bg-orange' : 'flex-1 rounded-sm bg-charcoal/80'}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>

      <div className="mt-4 divide-y divide-border text-[11px]">
        {rows.map((r) => (
          <div key={r.name} className="flex items-center justify-between py-2">
            <span className="font-medium text-charcoal">{r.name}</span>
            <span
              className={
                r.status === 'Paid'
                  ? 'rounded-full bg-orange/10 px-2 py-0.5 font-semibold text-orange'
                  : 'rounded-full bg-light px-2 py-0.5 font-semibold text-slate-text'
              }
            >
              {r.status}
            </span>
            <span className="font-semibold text-charcoal">{r.amount}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function PhoneMockup() {
  return (
    <div className="w-[150px] rounded-[28px] border-[6px] border-charcoal bg-white p-3 shadow-[0_24px_50px_-10px_rgba(17,24,39,0.4)] sm:w-[170px]">
      <div className="mx-auto h-1.5 w-12 rounded-full bg-charcoal/15" aria-hidden="true" />
      <div className="mt-4 h-20 rounded-xl bg-light" aria-hidden="true" />
      <div className="mt-3 space-y-2" aria-hidden="true">
        <div className="h-2 w-4/5 rounded-full bg-charcoal/80" />
        <div className="h-2 w-3/5 rounded-full bg-charcoal/15" />
        <div className="h-2 w-2/3 rounded-full bg-charcoal/15" />
      </div>
      <div className="mt-5 flex h-9 items-center justify-center rounded-lg bg-orange text-[11px] font-bold text-charcoal">
        Order now
      </div>
    </div>
  )
}

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[5/4] w-full max-w-[560px]" aria-hidden="true">
      <div
        className="absolute inset-y-[6%] right-0 left-[12%] rounded-3xl bg-charcoal"
        style={{ clipPath: 'polygon(18% 0, 100% 0, 100% 100%, 0 100%)' }}
      />
      <div className="absolute top-[10%] right-[8%] size-16 rounded-2xl bg-orange/90" />
      <div className="absolute bottom-[14%] left-[4%] h-3 w-24 rounded-full bg-orange" />
      <div className="absolute top-[16%] left-0 w-[78%]">
        <DashboardCard />
      </div>
      <div className="absolute right-[2%] bottom-0">
        <PhoneMockup />
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section id="home" className="scroll-mt-20 bg-white py-16 md:py-24">
      <Container className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <div>
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal">
            <span className="h-0.5 w-8 bg-orange" aria-hidden="true" />
            Software Studio
          </p>
          <h1 className="mt-6 text-balance text-5xl leading-[1.05] font-extrabold tracking-tight text-charcoal md:text-6xl">
            We Forge Ideas Into Reality.
          </h1>
          <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-slate-text">
            Custom websites, applications, and business systems designed to help your business work smarter.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="#contact">Start a Project</ButtonLink>
            <ButtonLink href="#services" variant="outline">
              Explore Our Services
            </ButtonLink>
          </div>
          <p className="mt-10 text-sm text-slate-text">
            Websites · Mobile apps · Business systems · AI &amp; automation
          </p>
        </div>
        <HeroVisual />
      </Container>
    </section>
  )
}

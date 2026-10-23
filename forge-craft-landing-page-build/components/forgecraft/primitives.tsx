import { cn } from '@/lib/utils'

type Variant = 'primary' | 'outline' | 'outline-light'

const variants: Record<Variant, string> = {
  primary: 'bg-orange text-charcoal hover:bg-[#ea6a0c]',
  outline: 'bg-white text-charcoal border-2 border-charcoal hover:bg-light',
  'outline-light': 'bg-transparent text-white border-2 border-white hover:bg-white/10',
}

export function ButtonLink({
  href,
  variant = 'primary',
  className,
  children,
}: {
  href: string
  variant?: Variant
  className?: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      className={cn(
        'inline-flex h-[52px] items-center justify-center gap-2 rounded-[12px] px-6 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange',
        variants[variant],
        className,
      )}
    >
      {children}
    </a>
  )
}

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('mx-auto w-full max-w-[1200px] px-5 md:px-8', className)}>{children}</div>
}

export function Section({
  id,
  tone = 'white',
  className,
  children,
}: {
  id?: string
  tone?: 'white' | 'gray'
  className?: string
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      className={cn('scroll-mt-20 py-24', tone === 'gray' ? 'bg-light' : 'bg-white', className)}
    >
      <Container>{children}</Container>
    </section>
  )
}

export function SectionHeading({
  title,
  subtitle,
  className,
}: {
  title: string
  subtitle?: string
  className?: string
}) {
  return (
    <div className={cn('max-w-2xl', className)}>
      <h2 className="text-balance text-3xl font-extrabold tracking-tight text-charcoal md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-pretty text-lg leading-relaxed text-slate-text">{subtitle}</p>}
    </div>
  )
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#home" className="flex items-center gap-2.5" aria-label="ForgeCraft home">
      <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="7" fill={light ? '#ffffff' : '#111827'} />
        <path d="M9 7h15l-3 5H14v3h7l-3 5h-4v5H9z" fill="#F97316" />
      </svg>
      <span
        className={cn(
          'font-heading text-lg font-extrabold tracking-wide',
          light ? 'text-white' : 'text-charcoal',
        )}
      >
        FORGECRAFT
      </span>
    </a>
  )
}

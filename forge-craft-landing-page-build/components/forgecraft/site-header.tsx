'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ButtonLink, Container, Logo } from './primitives'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function LanguageToggle() {
  const [lang, setLang] = useState<'en' | 'ar'>('en')
  return (
    <div className="flex items-center gap-1.5 text-sm font-medium" role="group" aria-label="Language">
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={cn('transition-colors', lang === 'en' ? 'text-charcoal' : 'text-slate-text hover:text-charcoal')}
      >
        EN
      </button>
      <span className="text-slate-text/50" aria-hidden="true">
        |
      </span>
      <button
        type="button"
        onClick={() => setLang('ar')}
        aria-pressed={lang === 'ar'}
        lang="ar"
        className={cn('font-[family-name:var(--font-arabic)] transition-colors', lang === 'ar' ? 'text-charcoal' : 'text-slate-text hover:text-charcoal')}
      >
        عربي
      </button>
    </div>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-charcoal transition-colors hover:text-orange"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <LanguageToggle />
          <ButtonLink href="#contact">Start a Project</ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-[12px] text-charcoal hover:bg-light lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      {open && (
        <div id="mobile-nav" className="border-t border-border bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base font-medium text-charcoal hover:text-orange"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex items-center justify-between gap-4 border-t border-border pt-4">
              <LanguageToggle />
              <ButtonLink href="#contact">Start a Project</ButtonLink>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}

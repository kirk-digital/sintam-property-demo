import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type PageHeroProps = {
  backgroundImageUrl: string
  eyebrow?: string
  title?: string
  subtitle?: string
  leftContent?: ReactNode
  rightContent?: ReactNode
  children?: ReactNode
  primaryCtaLabel?: string
  primaryCtaHref?: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
}

export function PageHero({
  backgroundImageUrl,
  eyebrow,
  title,
  subtitle,
  leftContent,
  rightContent,
  children,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
}: PageHeroProps) {
  const renderCtas = () => {
    if (!primaryCtaLabel || !primaryCtaHref) return null
    return (
      <div className="flex flex-wrap gap-3">
        <Link to={primaryCtaHref} className="btn btn-primary">
          {primaryCtaLabel}
        </Link>
        {secondaryCtaLabel && secondaryCtaHref && (
          <Link to={secondaryCtaHref} className="btn btn-outline">
            {secondaryCtaLabel}
          </Link>
        )}
      </div>
    )
  }

  return (
    <section className="relative isolate overflow-hidden flex items-center" style={{ minHeight: 'calc(100svh - var(--nav-height))' }}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${backgroundImageUrl})` }}
      />
      <div className="container-padded relative w-full py-24 md:py-32 lg:py-40">
        {children ? (
          children
        ) : leftContent || rightContent ? (
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {leftContent && (
              <div className="space-y-6">
                {leftContent}
                {renderCtas()}
              </div>
            )}
            {rightContent && <div>{rightContent}</div>}
          </div>
        ) : (
          <div className="max-w-3xl space-y-6 text-center md:text-left">
            {eyebrow && <p className="eyebrow text-white/80">{eyebrow}</p>}
            {title && <h1 className="text-white">{title}</h1>}
            {subtitle && <p className="text-lg text-white/90 max-w-2xl">{subtitle}</p>}
            {renderCtas()}
          </div>
        )}
      </div>
    </section>
  )
}
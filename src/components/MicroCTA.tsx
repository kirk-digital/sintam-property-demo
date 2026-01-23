import { useTranslation } from '../i18n/LanguageProvider'

interface MicroCTAProps {
  primaryLabel: string
  primaryHref: string
  secondaryHref?: string
}

export default function MicroCTA({ 
  primaryLabel, 
  primaryHref, 
  secondaryHref = "https://wa.me/351XXXXXXXXX"
}: MicroCTAProps) {
  const { t } = useTranslation()
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        element.scrollIntoView({ 
          behavior: prefersReducedMotion ? 'auto' : 'smooth', 
          block: 'start' 
        })
      }
    }
  }

  return (
    <div className="mt-6 pt-6 border-t border-gray-200">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-3">
        <a
          href={primaryHref}
          onClick={(e) => handleClick(e, primaryHref)}
          className="btn btn-primary text-sm px-4 py-2"
        >
          {primaryLabel}
        </a>
        {secondaryHref && (
          <a
            href={secondaryHref}
            target={secondaryHref.startsWith('http') ? '_blank' : undefined}
            rel={secondaryHref.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="text-sm text-purple-600 hover:text-purple-700 hover:underline transition-colors"
          >
            {t('common.whatsapp')}
          </a>
        )}
      </div>
    </div>
  )
}

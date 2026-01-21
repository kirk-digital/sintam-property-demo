import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { X } from 'lucide-react'

export function CookieNotice() {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="container-padded py-4 md:py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-[var(--color-muted)] leading-relaxed">
              {t('cookie.message')}{' '}
              <Link to="/privacy" className="text-[var(--color-accent)] hover:underline font-semibold">
                {t('cookie.learnMore')}
              </Link>
              .
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleAccept}
              className="btn btn-primary text-xs whitespace-nowrap"
              aria-label={t('cookie.accept')}
            >
              {t('buttons.accept')}
            </button>
            <button
              onClick={handleAccept}
              className="p-2 text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
              aria-label={t('cookie.close')}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

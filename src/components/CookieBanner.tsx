import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from '../i18n/LanguageProvider'

const STORAGE_KEY = 'cookies_accepted'

export default function CookieBanner() {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem(STORAGE_KEY)
    if (!accepted) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, 'true')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-gray-600 flex-1">
            {t('cookieBanner.message')}{' '}
            <Link
              to="/cookies"
              className="text-purple-600 hover:text-purple-700 underline font-medium"
            >
              {t('cookieBanner.learnMore')}
            </Link>
            .
          </p>
          <button
            onClick={handleAccept}
            className="btn btn-primary text-sm px-4 py-2 whitespace-nowrap"
            aria-label={t('cookieBanner.accept')}
          >
            {t('cookieBanner.accept')}
          </button>
        </div>
      </div>
    </div>
  )
}

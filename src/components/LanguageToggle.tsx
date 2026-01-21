import { useTranslation } from 'react-i18next'

export function LanguageToggle() {
  const { i18n, t } = useTranslation()

  const currentLang = i18n.language

  const handleLanguageChange = (lang: 'en' | 'pt-PT') => {
    i18n.changeLanguage(lang)
  }

  return (
    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide">
      <button
        onClick={() => handleLanguageChange('en')}
        className={`px-2 py-1 rounded-[4px] transition-colors ${
          currentLang === 'en'
            ? 'bg-[var(--color-accent)] text-white'
            : 'text-gray-700 hover:text-[var(--color-accent)]'
        }`}
        aria-label={t('language.switchToEnglish')}
        aria-pressed={currentLang === 'en'}
      >
        🇬🇧 EN
      </button>
      <span className="text-gray-300">|</span>
      <button
        onClick={() => handleLanguageChange('pt-PT')}
        className={`px-2 py-1 rounded-[4px] transition-colors ${
          currentLang === 'pt-PT'
            ? 'bg-[var(--color-accent)] text-white'
            : 'text-gray-700 hover:text-[var(--color-accent)]'
        }`}
        aria-label={t('language.switchToPortuguese')}
        aria-pressed={currentLang === 'pt-PT'}
      >
        🇵🇹 PT
      </button>
    </div>
  )
}

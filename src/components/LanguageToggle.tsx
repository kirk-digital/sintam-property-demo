import { useTranslation } from '../i18n/LanguageProvider'

export default function LanguageToggle() {
  const { lang, setLang } = useTranslation()

  return (
    <div className="flex items-center gap-1" role="tablist" aria-label="Language selector">
      <button
        onClick={() => setLang('pt-PT')}
        className={`px-2 py-1.5 md:px-3 text-xs font-medium rounded-md transition-all min-h-[40px] ${
          lang === 'pt-PT'
            ? 'text-brand-primary font-semibold'
            : 'text-gray-700 hover:text-brand-primary hover:shadow-sm'
        }`}
        role="tab"
        aria-selected={lang === 'pt-PT'}
        aria-label="Switch to Portuguese"
      >
        🇵🇹 PT
      </button>
      <button
        onClick={() => setLang('en-GB')}
        className={`px-2 py-1.5 md:px-3 text-xs font-medium rounded-md transition-all min-h-[40px] ${
          lang === 'en-GB'
            ? 'text-brand-primary font-semibold'
            : 'text-gray-700 hover:text-brand-primary hover:shadow-sm'
        }`}
        role="tab"
        aria-selected={lang === 'en-GB'}
        aria-label="Switch to English"
      >
        🇬🇧 EN
      </button>
    </div>
  )
}

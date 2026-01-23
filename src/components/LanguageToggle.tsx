import { useTranslation } from '../i18n/LanguageProvider'

export default function LanguageToggle() {
  const { lang, setLang } = useTranslation()

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLang('pt-PT')}
        className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
          lang === 'pt-PT'
            ? 'text-purple-600 font-semibold'
            : 'text-gray-700 hover:text-purple-600 hover:shadow-sm'
        }`}
        aria-pressed={lang === 'pt-PT'}
        aria-label="Switch to Portuguese"
      >
        🇵🇹 PT
      </button>
      <button
        onClick={() => setLang('en-GB')}
        className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
          lang === 'en-GB'
            ? 'text-purple-600 font-semibold'
            : 'text-gray-700 hover:text-purple-600 hover:shadow-sm'
        }`}
        aria-pressed={lang === 'en-GB'}
        aria-label="Switch to English"
      >
        🇬🇧 EN
      </button>
    </div>
  )
}

import { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { translations } from './translations'
import type { Language } from './translations'

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const STORAGE_KEY = 'site_lang'
const ALLOWED_LANGUAGES: Language[] = ['pt-PT', 'en-GB']

function getInitialLanguage(): Language {
  // Always default to Portuguese
  let lang: Language = 'pt-PT'
  
  // Check localStorage first (only in browser)
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored && ALLOWED_LANGUAGES.includes(stored as Language)) {
        lang = stored as Language
      }
    } catch (e) {
      // localStorage might not be available, ignore
    }
  }
  
  // If no stored preference, try browser language detection
  if (lang === 'pt-PT' && typeof navigator !== 'undefined' && navigator.language) {
    const browserLang = navigator.language.toLowerCase()
    if (browserLang.startsWith('pt')) {
      lang = 'pt-PT'
    } else {
      lang = 'en-GB'
    }
  }
  
  return lang
}

function getNestedValue(obj: any, path: string): string | undefined {
  try {
    const keys = path.split('.')
    let value = obj
    for (const key of keys) {
      if (value === null || value === undefined) {
        return undefined
      }
      value = value[key]
    }
    return typeof value === 'string' ? value : undefined
  } catch (e) {
    return undefined
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      return getInitialLanguage()
    } catch (e) {
      console.error('Error getting initial language:', e)
      return 'pt-PT' // Always fallback to Portuguese
    }
  })

  useEffect(() => {
    // Update HTML lang attribute (only in browser)
    if (typeof document !== 'undefined') {
      try {
        document.documentElement.lang = lang
      } catch (e) {
        // Ignore errors
      }
    }
    
    // Persist to localStorage (only in browser)
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY, lang)
      } catch (e) {
        // localStorage might not be available, ignore
      }
    }
  }, [lang])

  const setLang = (newLang: Language) => {
    // Validate language before setting
    if (ALLOWED_LANGUAGES.includes(newLang)) {
      setLangState(newLang)
    } else {
      console.warn(`Invalid language "${newLang}", falling back to pt-PT`)
      setLangState('pt-PT')
    }
  }

  const t = (key: string): string => {
    // Always return a string, never undefined
    if (!key || typeof key !== 'string') {
      return key || ''
    }

    try {
      // Try current language first
      const currentLangTranslations = translations[lang]
      if (currentLangTranslations) {
        const value = getNestedValue(currentLangTranslations, key)
        if (value !== undefined) {
          return value
        }
      }

      // Fallback to English
      const enTranslations = translations['en-GB']
      if (enTranslations) {
        const value = getNestedValue(enTranslations, key)
        if (value !== undefined) {
          return value
        }
      }

      // Final fallback: return the key itself
      console.warn(`Translation key not found: "${key}"`)
      return key
    } catch (e) {
      console.error(`Error translating key "${key}":`, e)
      return key
    }
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    // This should never happen if LanguageProvider wraps the app correctly
    console.error('useTranslation must be used within a LanguageProvider')
    // Return a safe fallback instead of throwing
    return {
      lang: 'pt-PT' as Language,
      setLang: () => {},
      t: (key: string) => key
    }
  }
  return context
}

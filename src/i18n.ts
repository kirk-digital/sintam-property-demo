import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en/common.json';
import ptTranslations from './locales/pt-PT/common.json';

const getInitialLanguage = () => {
  const savedLang = localStorage.getItem('lang');
  if (savedLang === 'en' || savedLang === 'pt-PT') {
    return savedLang;
  }
  return 'en';
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      'pt-PT': {
        translation: ptTranslations,
      },
    },
    lng: getInitialLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('lang', lng);
});

export default i18n;
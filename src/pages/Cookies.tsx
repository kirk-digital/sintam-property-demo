import { useTranslation } from '../i18n/LanguageProvider'

export default function Cookies() {
  const { t } = useTranslation()

  return (
    <div className="min-h-[60vh] py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          {t('cookies.title')}
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {t('cookies.whatAreCookies.title')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('cookies.whatAreCookies.content')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {t('cookies.whatWeUse.title')}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('cookies.whatWeUse.content')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>{t('cookies.whatWeUse.essential.language')}</li>
              <li>{t('cookies.whatWeUse.essential.consent')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {t('cookies.noTracking.title')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('cookies.noTracking.content')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {t('cookies.manageCookies.title')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('cookies.manageCookies.content')}
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

import { useTranslation } from 'react-i18next'

export default function Privacy() {
  const { t } = useTranslation()

  return (
    <div className="space-y-12">
      <section className="bg-black/60 border-b border-white/10">
        <div className="container-padded py-14 space-y-3">
          <p className="eyebrow">{t('nav.privacy')}</p>
          <h1 className="text-4xl font-semibold text-white">{t('privacy.title')}</h1>
          <p className="text-[var(--color-muted)]">{t('privacy.lastUpdated')}</p>
        </div>
      </section>

      <section className="container-padded space-y-6 max-w-4xl bg-white py-16">
        <p className="text-[var(--color-muted)]">
          {t('privacy.intro')}
        </p>
        <div className="space-y-4">
          <div>
            <h2 className="text-xl text-[var(--color-text)] font-semibold">{t('privacy.dataUse.title')}</h2>
            <p className="text-[var(--color-muted)]">
              {t('privacy.dataUse.text')}
            </p>
          </div>
          <div>
            <h2 className="text-xl text-[var(--color-text)] font-semibold">{t('privacy.dataProtection.title')}</h2>
            <p className="text-[var(--color-muted)]">
              {t('privacy.dataProtection.text')}
            </p>
          </div>
          <div>
            <h2 className="text-xl text-[var(--color-text)] font-semibold">{t('privacy.yourRights.title')}</h2>
            <p className="text-[var(--color-muted)]">
              {t('privacy.yourRights.text')}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const HERO_BG_URL = 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1920&q=80'

const valuesKeys = ['transparency', 'reliability', 'expertise', 'clientFocus']

export default function About() {
  const { t } = useTranslation()

  return (
    <div className="space-y-0">
      {/* Hero - Letterbox */}
      <section className="relative isolate overflow-hidden flex items-center h-[280px] md:h-[380px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.62), rgba(0,0,0,0.78)), url(${HERO_BG_URL})` }}
        />
        <div className="container-padded relative w-full py-12 md:py-16">
          <div className="max-w-3xl space-y-4 text-center md:text-left">
            <p className="eyebrow text-white/80">{t('about.hero.eyebrow')}</p>
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl">{t('about.hero.title')}</h1>
            <p className="text-lg text-white/90 max-w-2xl">
              {t('about.hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="btn btn-primary">
                {t('buttons.talkToUs')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="container-padded bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto space-y-20">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-left">{t('sections.whoWeAre')}</h2>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              {t('about.whoWeAre.text')}
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-left">{t('sections.whatWeDo')}</h2>
            <div className="space-y-5 text-[var(--color-text-secondary)] leading-relaxed">
              <p className="text-lg">
                <strong className="text-[var(--color-text)] font-semibold">{t('about.whatWeDo.propertyManagement')}</strong>{' '}
                {t('about.whatWeDo.propertyManagementText')}
              </p>
              <p className="text-lg">
                <strong className="text-[var(--color-text)] font-semibold">{t('about.whatWeDo.investmentConsulting')}</strong>{' '}
                {t('about.whatWeDo.investmentConsultingText')}
              </p>
              <p className="text-lg">
                <strong className="text-[var(--color-text)] font-semibold">{t('about.whatWeDo.vehicleServices')}</strong>{' '}
                {t('about.whatWeDo.vehicleServicesText')}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-left">{t('sections.ourApproach')}</h2>
            <div className="space-y-5 text-lg text-[var(--color-text-secondary)] leading-relaxed">
              <p>{t('about.ourApproach.paragraph1')}</p>
              <p>{t('about.ourApproach.paragraph2')}</p>
            </div>
            <div className="pt-4">
              <Link to="/contact" className="btn btn-primary">
                {t('buttons.getInTouch')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-padded bg-gradient-to-b from-[#fafafa] to-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto space-y-16">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">{t('sections.ourValues')}</h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {valuesKeys.map((key) => (
                <div key={key} className="card">
                  <h3 className="text-xl text-[var(--color-text)] font-semibold mb-3">{t(`about.values.${key}.title`)}</h3>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{t(`about.values.${key}.text`)}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <Link to="/contact" className="btn btn-primary">
              {t('buttons.startWorkingWithUs')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

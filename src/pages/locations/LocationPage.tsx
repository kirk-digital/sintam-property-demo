import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ContactForm } from '../../components/ContactForm'
import { LOCATIONS } from './locationsData'

const servicesKeys = ['propertyManagement', 'investmentConsulting', 'tenantRelations', 'complianceOversight']

export default function LocationPage() {
  const { t } = useTranslation()
  const { slug } = useParams<{ slug: string }>()
  const location = LOCATIONS.find((loc) => loc.slug === slug)

  if (!location) {
    return (
      <div className="container-padded py-20 text-center">
        <h1 className="text-3xl font-semibold text-[var(--color-text)] mb-4">{t('locations.notFound.title')}</h1>
        <Link to="/locations" className="btn btn-primary">
          {t('buttons.viewAllLocations')}
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-20">
      {/* Hero - Letterbox */}
      <section className="relative isolate overflow-hidden flex items-center h-[280px] md:h-[380px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.62), rgba(0,0,0,0.78)), url(${location.heroImageUrl})` }}
        />
        <div className="container-padded relative w-full py-12 md:py-16">
          <div className="max-w-3xl space-y-4 text-center md:text-left">
            <p className="eyebrow text-white/80">{t('locations.hero.eyebrow')}</p>
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl">{location.name}</h1>
          </div>
        </div>
      </section>

      {/* Split section: Content left, Content right */}
      <section className="container-padded grid lg:grid-cols-2 gap-12 items-center bg-white py-16 md:py-20">
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="eyebrow">{t('locations.locationPage.eyebrow')}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)]">
              {t('locations.locationPage.title', { location: location.name })}
            </h2>
          </div>
        </div>
        <div className="space-y-6">
          <p className="text-[var(--color-muted)] leading-relaxed text-lg">
            {t(`locations.locationPage.descriptions.${location.slug}`)}
          </p>
          <ul className="space-y-3">
            {servicesKeys.map((key) => (
              <li key={key} className="flex items-start gap-3">
                <span className="text-[var(--color-accent)] mt-1">•</span>
                <span className="text-[var(--color-muted)] leading-relaxed">{t(`locations.locationPage.services.${key}`)}</span>
              </li>
            ))}
          </ul>
          <div className="pt-4">
            <Link to={`/contact?location=${location.slug}`} className="btn btn-primary">
              {t('buttons.talkToUs')}
            </Link>
          </div>
        </div>
      </section>

      {/* Contact + map */}
      <section className="container-padded grid lg:grid-cols-2 gap-16 items-stretch bg-white py-20">
        <div className="space-y-6 text-center lg:text-left">
          <p className="eyebrow">{t('sections.contact')}</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text)]">{t('sections.startTheConversation')}</h2>
          <p className="text-[var(--color-muted)]">{t('sections.weRespondWithinOneBusinessDay')}</p>
          <ContactForm compact defaultMessage={t('locations.locationPage.defaultMessage', { location: location.name })} />
        </div>
        <div className="surface p-2">
          <iframe
            title={t('map.title')}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49784.51194696301!2d-9.169089925103863!3d38.722252438209355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19347621fd3fd1%3A0x400ebbde49036d0!2sLisbon%2C%20Portugal!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            className="min-h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  )
}

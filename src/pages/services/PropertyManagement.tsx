import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ContactForm } from '../../components/ContactForm'

const HERO_BG_URL = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80'

const maintenanceKeys = ['routineMaintenance', 'plannedPreventative', 'emergencyRepairs']

export default function PropertyManagement() {
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
            <p className="eyebrow text-white/80">{t('services.propertyManagement.hero.eyebrow')}</p>
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl">{t('services.propertyManagement.hero.title')}</h1>
            <p className="text-lg text-white/90 max-w-2xl">
              {t('services.propertyManagement.hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact?service=property-management" className="btn btn-primary">
                {t('buttons.requestQuote')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Split section: Image left, Content right */}
      <section className="container-padded grid lg:grid-cols-2 gap-12 md:gap-16 items-center bg-white py-20 md:py-28">
        <div className="surface overflow-hidden aspect-[4/3] group">
          <img
            src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80"
            alt={t('services.propertyManagement.section.title')}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="eyebrow">{t('services.propertyManagement.section.eyebrow')}</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text)]">{t('services.propertyManagement.section.title')}</h2>
          </div>
          <div className="space-y-6">
            {maintenanceKeys.map((key) => (
              <div key={key} className="space-y-3 pb-6 border-b border-[var(--color-border-light)] last:border-0">
                <h4 className="text-xl font-semibold text-[var(--color-text)]">{t(`services.propertyManagement.section.${key}.title`)}</h4>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">{t(`services.propertyManagement.section.${key}.text`)}</p>
              </div>
            ))}
          </div>
          <div className="pt-4">
            <Link to="/contact?service=property-management" className="btn btn-primary">
              {t('buttons.contactUs')}
            </Link>
          </div>
        </div>
      </section>

      {/* Contact + map */}
      <section className="container-padded grid lg:grid-cols-2 gap-12 md:gap-16 items-stretch bg-gradient-to-b from-white to-[#fafafa] py-20 md:py-28">
        <div className="space-y-6 text-center lg:text-left">
          <p className="eyebrow">{t('sections.contact')}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text)]">{t('sections.startTheConversation')}</h2>
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">{t('sections.weRespondWithinOneBusinessDay')}</p>
          <ContactForm compact />
        </div>
        <div className="surface overflow-hidden p-0">
          <iframe
            title={t('map.title')}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49784.51194696301!2d-9.169089925103863!3d38.722252438209355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19347621fd3fd1%3A0x400ebbde49036d0!2sLisbon%2C%20Portugal!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            className="min-h-[500px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  )
}

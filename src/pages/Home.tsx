import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ShieldCheck, Landmark, FileCheck2, Handshake } from 'lucide-react'
import { ContactForm } from '../components/ContactForm'
import { TestimonialsCarousel } from '../components/TestimonialsCarousel'
import { PageHero } from '../components/PageHero'

const HERO_BG_URL = 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1920&q=80'

const trustItems = [
  { key: 'peaceOfMind', icon: ShieldCheck },
  { key: 'financialSecurity', icon: Landmark },
  { key: 'complianceSorted', icon: FileCheck2 },
  { key: 'trustedPartner', icon: Handshake },
]
const reasonsKeys = ['operationalClarity', 'financialDiscipline', 'lisbonExpertise', 'endToEndCoverage', 'responsiveTeam', 'riskManagement']
const statsKeys = ['responseTime', 'clientRequestsHandled', 'lisbonNetwork', 'reportingUpdates']
const testimonialsKeys = ['testimonial1', 'testimonial2', 'testimonial3', 'testimonial4', 'testimonial5']

export default function Home() {
  const { t } = useTranslation()

  return (
    <div className="space-y-0">
      {/* Hero */}
      <PageHero
        backgroundImageUrl={HERO_BG_URL}
        eyebrow={t('home.hero.eyebrow')}
        title={t('home.hero.title')}
        subtitle={t('home.hero.subtitle')}
      >
        <div className="max-w-3xl space-y-6 text-center md:text-left">
          <p className="eyebrow text-white/80">{t('home.hero.eyebrow')}</p>
          <h1 className="text-white">{t('home.hero.title')}</h1>
          <p className="text-lg text-white/90 max-w-2xl">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="btn btn-primary">
              {t('buttons.talkToUs')}
            </Link>
          </div>
        </div>
      </PageHero>

      {/* Sub-hero */}
      <section className="container-padded grid lg:grid-cols-2 gap-16 items-start bg-white py-24 md:py-32">
        <div className="space-y-6 text-center lg:text-left">
          <p className="eyebrow">{t('home.subHero.eyebrow')}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text)]">{t('home.subHero.title')}</h2>
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
            {t('home.subHero.description')}
          </p>
          <Link to="/contact" className="btn btn-primary">
            {t('buttons.talkToUs')}
          </Link>
        </div>

        <div className="space-y-5">
          <div className="card">
            <h3 className="text-xl font-semibold text-[var(--color-text)] mb-2">{t('home.portal.title')}</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mb-4 leading-relaxed">{t('home.portal.description')}</p>
            <a href="https://portal.example.com" className="btn btn-outline w-full justify-center" target="_blank" rel="noreferrer">
              {t('common.login')}
            </a>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold text-[var(--color-text)] mb-2">{t('home.bookService.title')}</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mb-4 leading-relaxed">{t('home.bookService.description')}</p>
            <Link to="/contact?service=booking" className="btn btn-primary w-full justify-center">
              {t('buttons.bookNow')}
            </Link>
          </div>
        </div>
      </section>

      {/* Trust banner */}
      <section className="bg-gradient-to-b from-white to-[#f8f9fa] border-y border-[var(--color-border-light)]">
        <div className="container-padded py-20 md:py-28 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 text-center">
          {trustItems.map((item) => {
            const IconComponent = item.icon
            return (
              <div key={item.key} className="flex flex-col items-center space-y-5 group">
                <div className="p-4 rounded-full bg-[var(--color-accent)]/5 group-hover:bg-[var(--color-accent)]/10 transition-colors">
                  <IconComponent 
                    className="w-7 h-7 md:w-9 md:h-9 text-[var(--color-accent)]" 
                    strokeWidth={2}
                  />
                </div>
                <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[var(--color-text)] leading-tight">
                  {t(`home.trust.${item.key}`)}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Why work with us */}
      <section className="container-padded bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4 text-center mb-16">
            <p className="eyebrow">{t('sections.expertise')}</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text)]">{t('sections.whyWorkWithUs')}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {reasonsKeys.map((key) => (
              <div key={key} className="card">
                <h3 className="text-xl text-[var(--color-text)] font-semibold text-center mb-3">{t(`home.reasons.${key}.title`)}</h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed text-center">{t(`home.reasons.${key}.text`)}</p>
              </div>
            ))}
          </div>
          <div className="text-center space-y-4">
            <p className="text-base text-[var(--color-text-secondary)]">{t('sections.wantToDiscuss')}</p>
            <Link to="/contact" className="btn btn-primary">
              {t('buttons.contactUs')}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="container-padded bg-gradient-to-b from-[#fafafa] to-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4 text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text)]">{t('sections.byTheNumbers')}</h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
              {t('sections.measurableResults')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
            {statsKeys.map((key, index) => {
              const icons = ['⚡', '✓', '📍', '📊']
              const values = ['24h', '100+', 'Local', 'Clear']
              return (
                <div key={key} className="card text-center relative overflow-hidden group">
                  <div className="absolute top-4 right-4 text-3xl opacity-5 group-hover:opacity-10 transition-opacity">{icons[index]}</div>
                  <div className="text-5xl md:text-6xl font-bold text-[var(--color-accent)] mb-4 leading-none">{values[index]}</div>
                  <div className="text-sm uppercase tracking-wider text-[var(--color-text-secondary)] font-semibold">{t(`home.stats.${key}`)}</div>
                </div>
              )
            })}
          </div>
          <div className="text-center space-y-4">
            <p className="text-base text-[var(--color-text-secondary)]">{t('sections.wantToDiscuss')}</p>
            <Link to="/contact" className="btn btn-primary">
              {t('buttons.contactUs')}
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-padded bg-white py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <p className="eyebrow">{t('sections.testimonials')}</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text)]">
              {t('sections.dontJustTakeOurWord')}
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)]">{t('sections.seeWhatClientsSay')}</p>
          </div>
          <TestimonialsCarousel items={testimonialsKeys.map(key => ({
            quote: t(`home.testimonials.${key}.quote`),
            name: t(`home.testimonials.${key}.name`),
            role: t(`home.testimonials.${key}.role`)
          }))} />
        </div>
      </section>

      {/* Contact + map */}
      <section className="container-padded grid lg:grid-cols-2 gap-12 md:gap-16 items-stretch bg-gradient-to-b from-white to-[#fafafa] py-24 md:py-32">
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
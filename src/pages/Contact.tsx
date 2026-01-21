import { useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ContactForm } from '../components/ContactForm'

export default function Contact() {
  const { t } = useTranslation()
  const [params] = useSearchParams()
  const defaultService = params.get('service') || ''
  const defaultMessage = params.get('message') ? decodeURIComponent(params.get('message') || '') : ''

  return (
    <div className="space-y-0">
      <section className="relative isolate overflow-hidden flex items-center h-[280px] md:h-[380px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1920&q=80')` }}
        />
        <div className="container-padded relative w-full py-12 md:py-16">
          <div className="max-w-3xl space-y-4 text-center md:text-left">
            <p className="eyebrow text-white/80">{t('contact.hero.eyebrow')}</p>
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">{t('contact.hero.title')}</h1>
            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">{t('contact.hero.subtitle')}</p>
          </div>
        </div>
      </section>

      <section className="container-padded grid lg:grid-cols-2 gap-12 md:gap-16 items-start bg-white py-20 md:py-28">
        <ContactForm defaultService={defaultService} defaultMessage={defaultMessage} />
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

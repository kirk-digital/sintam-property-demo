import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { CheckCircle2 } from 'lucide-react'
import { PageHero } from '../../components/PageHero'

const HERO_BG_URL = 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1920&q=80'

const includedKeys = ['shortLongTerm', 'insuranceCoordination', 'deliveryCollection', 'maintenanceIncluded', 'roadsideAssistance', 'transparentPricing']
const faqKeys = ['vehiclesAvailable', 'corporateRental', 'manageInsurance', 'deliveryIncluded']
const featuresKeys = ['freeCancellation', 'excessProtection', 'support24', 'fairFuelPolicy']
const vehicleTypes = ['any', 'economy', 'compact', 'suv', 'luxury', 'van']

function RentalForm() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    pickupLocation: 'Lisbon',
    pickupDate: '',
    dropoffDate: '',
    vehicleType: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    const message = encodeURIComponent(
      `${t('vehicleRental.carHireEnquiry')}\n${t('services.vehicleRental.rentalForm.pickupLocation')}: ${formData.pickupLocation}\n${t('services.vehicleRental.rentalForm.pickupDate')}: ${formData.pickupDate}\n${t('services.vehicleRental.rentalForm.dropoffDate')}: ${formData.dropoffDate}\n${t('services.vehicleRental.rentalForm.vehicleType')}: ${formData.vehicleType || t('services.vehicleRental.rentalForm.any')}`
    )
    setTimeout(() => {
      navigate(`/contact?service=vehicle-rental&message=${message}`)
    }, 1500)
  }

  if (submitted) {
    return (
      <div className="surface p-6 space-y-4 bg-white/95 rounded-[4px]">
        <p className="text-[var(--color-text)] font-semibold">{t('services.vehicleRental.rentalForm.submitting')}</p>
        <p className="text-sm text-[var(--color-muted)]">{t('services.vehicleRental.rentalForm.redirecting')}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="surface p-6 space-y-4 bg-white/95">
      <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">{t('services.vehicleRental.rentalForm.title')}</h3>
      <div className="space-y-3">
        <div>
          <label className="block text-xs uppercase tracking-wide text-[var(--color-muted)] mb-1">{t('services.vehicleRental.rentalForm.pickupLocation')}</label>
          <input
            type="text"
            value={formData.pickupLocation}
            onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
            className="w-full px-3 py-2 border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] text-sm text-[var(--color-text)] rounded-[4px]"
            required
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wide text-[var(--color-muted)] mb-1">{t('services.vehicleRental.rentalForm.pickupDate')}</label>
          <input
            type="date"
            value={formData.pickupDate}
            onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
            className="w-full px-3 py-2 border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] text-sm text-[var(--color-text)] rounded-[4px]"
            required
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wide text-[var(--color-muted)] mb-1">{t('services.vehicleRental.rentalForm.dropoffDate')}</label>
          <input
            type="date"
            value={formData.dropoffDate}
            onChange={(e) => setFormData({ ...formData, dropoffDate: e.target.value })}
            className="w-full px-3 py-2 border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] text-sm text-[var(--color-text)] rounded-[4px]"
            required
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wide text-[var(--color-muted)] mb-1">{t('services.vehicleRental.rentalForm.vehicleType')}</label>
          <select
            value={formData.vehicleType}
            onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
            className="w-full px-3 py-2 border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] text-sm text-[var(--color-text)] bg-white rounded-none"
          >
            <option value="">{t('services.vehicleRental.rentalForm.any')}</option>
            {vehicleTypes.slice(1).map((type) => (
              <option key={type} value={type}>{t(`services.vehicleRental.rentalForm.${type}`)}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary w-full justify-center mt-4">
          {t('buttons.search')}
        </button>
      </div>
    </form>
  )
}

export default function VehicleRental() {
  const { t } = useTranslation()

  return (
    <div className="space-y-20">
      {/* Hero */}
      <PageHero
        backgroundImageUrl={HERO_BG_URL}
        title=""
        leftContent={
          <>
            <div>
              <h1 className="text-white mb-4">{t('services.vehicleRental.hero.title')}</h1>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{t('services.vehicleRental.hero.subtitle')}</h2>
            </div>
            <ul className="space-y-3">
              {featuresKeys.map((key) => (
                <li key={key} className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" strokeWidth={2} />
                  <span>{t(`services.vehicleRental.hero.features.${key}`)}</span>
                </li>
              ))}
            </ul>
          </>
        }
        primaryCtaLabel={t('buttons.contactUs')}
        primaryCtaHref="/contact?service=vehicle-rental"
        rightContent={<RentalForm />}
      />

      {/* Overview + what's included */}
      <section className="container-padded grid lg:grid-cols-3 gap-12 items-start bg-white py-16">
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-3 text-center lg:text-left">
            <h2>{t('services.vehicleRental.overview.title')}</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              {t('services.vehicleRental.overview.description')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {includedKeys.map((key) => (
              <div key={key} className="surface p-4 text-sm text-[var(--color-muted)]">
                {t(`services.vehicleRental.overview.included.${key}`)}
              </div>
            ))}
          </div>
        </div>
        <div className="surface p-6 space-y-4 rounded-[4px]">
          <h3 className="text-xl text-[var(--color-text)] font-semibold">{t('services.vehicleRental.overview.cta.title')}</h3>
          <p className="text-[var(--color-muted)] text-sm">
            {t('services.vehicleRental.overview.cta.description')}
          </p>
          <Link to="/contact?service=vehicle-rental" className="btn btn-primary w-full justify-center">
            {t('buttons.requestQuote')}
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-padded space-y-6 bg-[#f7f6f3] py-16">
        <h2 className="text-center">{t('services.vehicleRental.faq.title')}</h2>
        <div className="space-y-3">
          {faqKeys.map((key) => (
            <details key={key} className="surface p-4 rounded-[4px]">
              <summary className="text-[var(--color-text)] font-semibold cursor-pointer">{t(`services.vehicleRental.faq.${key}.q`)}</summary>
              <p className="text-[var(--color-muted)] mt-2 text-sm leading-relaxed">{t(`services.vehicleRental.faq.${key}.a`)}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  )
}

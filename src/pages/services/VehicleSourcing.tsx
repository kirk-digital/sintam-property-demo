import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { PageHero } from '../../components/PageHero'

const HERO_BG_URL = 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1920&q=80'

const mockVehicles = [
  { id: '1', make: 'BMW', model: '320d', year: 2020, mileage: '45,000 km', price: '€28,500', location: 'Brussels, Belgium', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80' },
  { id: '2', make: 'Mercedes-Benz', model: 'C220d', year: 2019, mileage: '52,000 km', price: '€26,900', location: 'Antwerp, Belgium', image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=800&q=80' },
  { id: '3', make: 'Audi', model: 'A4', year: 2021, mileage: '38,000 km', price: '€32,000', location: 'Ghent, Belgium', image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0ad6?auto=format&fit=crop&w=800&q=80' },
  { id: '4', make: 'Volkswagen', model: 'Golf', year: 2020, mileage: '41,000 km', price: '€22,500', location: 'Brussels, Belgium', image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=800&q=80' },
  { id: '5', make: 'Toyota', model: 'Corolla', year: 2021, mileage: '35,000 km', price: '€24,800', location: 'Leuven, Belgium', image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800&q=80' },
  { id: '6', make: 'Ford', model: 'Focus', year: 2019, mileage: '48,000 km', price: '€19,900', location: 'Brussels, Belgium', image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0ad6?auto=format&fit=crop&w=800&q=80' },
]

const howItWorksKeys = ['defineRequirements', 'marketScan', 'inspectionValidation', 'importExport', 'delivery']

export default function VehicleSourcing() {
  const { t } = useTranslation()
  const [searchQuery, setSearchQuery] = useState('')
  const [destination, setDestination] = useState('')
  const [budgetRange, setBudgetRange] = useState('')
  const [fuelType, setFuelType] = useState('')
  const navigate = useNavigate()

  const handleEnquire = (vehicleId: string, make: string, model: string) => {
    const message = encodeURIComponent(
      t('services.vehicleSourcing.marketplace.details.enquiryMessage', { make, model, id: vehicleId })
    )
    navigate(`/contact?service=vehicle-sourcing&vehicle=${vehicleId}&message=${message}`)
  }

  const filteredVehicles = mockVehicles.filter((vehicle) => {
    const matchesSearch = searchQuery === '' || 
      `${vehicle.make} ${vehicle.model}`.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesDestination = destination === '' || true
    const matchesBudget = budgetRange === '' || true
    const matchesFuel = fuelType === '' || true
    return matchesSearch && matchesDestination && matchesBudget && matchesFuel
  })

  return (
    <div className="space-y-20">
      {/* Hero */}
      <PageHero
        backgroundImageUrl={HERO_BG_URL}
        eyebrow={t('services.vehicleSourcing.hero.eyebrow')}
        title={t('services.vehicleSourcing.hero.title')}
        subtitle={t('services.vehicleSourcing.hero.subtitle')}
        primaryCtaLabel={t('buttons.enquire')}
        primaryCtaHref="/contact?service=vehicle-sourcing"
      />

      {/* Intro section */}
      <section className="container-padded bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <h2 className="text-center">{t('services.vehicleSourcing.intro.title')}</h2>
          <p className="text-lg leading-relaxed text-[var(--color-muted)] max-w-3xl mx-auto">
            {t('services.vehicleSourcing.intro.description')}
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="container-padded bg-[#f7f6f3] py-16 md:py-20">
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-center">{t('services.vehicleSourcing.howItWorks.title')}</h2>
          <div className="grid md:grid-cols-5 gap-8">
            {howItWorksKeys.map((key) => (
              <div key={key} className="space-y-4 text-center">
                <div className="w-12 h-12 mx-auto bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {t(`services.vehicleSourcing.howItWorks.${key}.step`)}
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-text)]">{t(`services.vehicleSourcing.howItWorks.${key}.title`)}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{t(`services.vehicleSourcing.howItWorks.${key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace */}
      <section className="container-padded bg-white py-16 md:py-20">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2>{t('services.vehicleSourcing.marketplace.title')}</h2>
            <p className="text-[var(--color-muted)] max-w-2xl mx-auto">
              {t('services.vehicleSourcing.marketplace.description')}
            </p>
          </div>

          {/* Filter bar */}
          <div className="surface p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder={t('services.vehicleSourcing.marketplace.filters.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] text-sm"
            />
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="px-4 py-2 border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] text-sm bg-white"
            >
              <option value="">{t('services.vehicleSourcing.marketplace.filters.destination')}</option>
              <option value="lisbon">{t('services.vehicleSourcing.marketplace.filters.lisbonImport')}</option>
              <option value="angola">{t('services.vehicleSourcing.marketplace.filters.angolaExport')}</option>
            </select>
            <select
              value={budgetRange}
              onChange={(e) => setBudgetRange(e.target.value)}
              className="px-4 py-2 border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] text-sm bg-white"
            >
              <option value="">{t('services.vehicleSourcing.marketplace.filters.budgetRange')}</option>
              <option value="under-20k">{t('services.vehicleSourcing.marketplace.filters.under20k')}</option>
              <option value="20-30k">{t('services.vehicleSourcing.marketplace.filters.20to30k')}</option>
              <option value="30-40k">{t('services.vehicleSourcing.marketplace.filters.30to40k')}</option>
              <option value="over-40k">{t('services.vehicleSourcing.marketplace.filters.over40k')}</option>
            </select>
            <select
              value={fuelType}
              onChange={(e) => setFuelType(e.target.value)}
              className="px-4 py-2 border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] text-sm bg-white"
            >
              <option value="">{t('services.vehicleSourcing.marketplace.filters.fuelType')}</option>
              <option value="diesel">{t('services.vehicleSourcing.marketplace.filters.diesel')}</option>
              <option value="petrol">{t('services.vehicleSourcing.marketplace.filters.petrol')}</option>
              <option value="hybrid">{t('services.vehicleSourcing.marketplace.filters.hybrid')}</option>
              <option value="electric">{t('services.vehicleSourcing.marketplace.filters.electric')}</option>
            </select>
          </div>

          {/* Vehicle grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVehicles.map((vehicle) => (
              <div key={vehicle.id} className="surface overflow-hidden">
                <div className="aspect-video bg-gray-200 relative">
                  <img
                    src={vehicle.image}
                    alt={`${vehicle.make} ${vehicle.model}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--color-text)]">
                      {vehicle.make} {vehicle.model}
                    </h3>
                    <p className="text-sm text-[var(--color-muted)]">{vehicle.year}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-[var(--color-muted)]">{t('services.vehicleSourcing.marketplace.details.mileage')}</span>
                      <p className="font-medium text-[var(--color-text)]">{vehicle.mileage}</p>
                    </div>
                    <div>
                      <span className="text-[var(--color-muted)]">{t('services.vehicleSourcing.marketplace.details.location')}</span>
                      <p className="font-medium text-[var(--color-text)]">{vehicle.location}</p>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-[var(--color-border)]">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-[var(--color-accent)]">{vehicle.price}</span>
                    </div>
                    <button
                      onClick={() => handleEnquire(vehicle.id, vehicle.make, vehicle.model)}
                      className="btn btn-primary w-full justify-center text-sm"
                    >
                      {t('buttons.enquire')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-padded bg-[var(--color-accent)] text-white py-16 md:py-20 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-white">{t('services.vehicleSourcing.marketplace.cta.title')}</h2>
          <p className="text-lg text-white/90">
            {t('services.vehicleSourcing.marketplace.cta.description')}
          </p>
          <Link to="/contact?service=vehicle-sourcing" className="btn bg-white text-[var(--color-accent)] hover:bg-gray-100 inline-block">
            {t('buttons.requestCustomSourcing')}
          </Link>
        </div>
      </section>
    </div>
  )
}

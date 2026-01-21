import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { LOCATIONS } from './locations/locationsData'

const HERO_BG_URL = 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1920&q=80'

export default function Locations() {
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
            <p className="eyebrow text-white/80">{t('locations.hero.eyebrow')}</p>
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl">{t('locations.hero.title')}</h1>
            <p className="text-lg text-white/90 max-w-2xl">
              {t('locations.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Areas section */}
      <section className="container-padded bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text)] text-center mb-16">{t('sections.areasWeCover')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {LOCATIONS.map((area) => (
              <Link key={area.slug} to={`/locations/${area.slug}`} className="space-y-5 group">
                <div className="surface overflow-hidden aspect-square relative transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg">
                  <img
                    src={area.heroImageUrl}
                    alt={area.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-center justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{area.name}</h3>
                  </div>
                </div>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{area.description.split('.')[0]}.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

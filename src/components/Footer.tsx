import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const servicesConfig = [
  { key: 'propertyManagement', path: '/services/property-management' },
  { key: 'investmentConsulting', path: '/services/investment-consulting' },
  { key: 'vehicleRental', path: '/services/vehicle-rental' },
  { key: 'vehicleSourcing', path: '/services/vehicle-sourcing' },
]

const locations = ['Lisbon', 'Cascais', 'Sintra', 'Oeiras', 'Almada']

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-[#0a0f1a] text-gray-400 border-t border-white/5 mt-20">
      <div className="container-padded py-16 md:py-20 grid md:grid-cols-4 gap-12 md:gap-16">
        <div className="space-y-5">
          <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-2">{t('footer.services')}</h3>
          <ul className="space-y-3 text-sm">
            {servicesConfig.map((item) => (
              <li key={item.path}>
                <Link className="hover:text-white transition-colors duration-200" to={item.path}>
                  {t(`nav.${item.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-5">
          <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-2">{t('footer.locations')}</h3>
          <ul className="space-y-3 text-sm">
            {locations.map((loc) => (
              <li key={loc} className="hover:text-white transition-colors duration-200">{loc}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-5">
          <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-2">{t('footer.company')}</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/about" className="hover:text-white transition-colors duration-200">
                {t('nav.about')}
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-white transition-colors duration-200">
                {t('nav.privacy')}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition-colors duration-200">
                {t('nav.contact')}
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-5">
          <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-2">{t('footer.contact')}</h3>
          <div className="text-sm space-y-3">
            <p className="hover:text-white transition-colors duration-200">+351 900 000 000</p>
            <p>
              <a href="mailto:info@sintam-se-abracados.pt" className="hover:text-white transition-colors duration-200">
                info@sintam-se-abracados.pt
              </a>
            </p>
            <p>Lisbon, Portugal</p>
          </div>
        </div>
      </div>

      <div className="container-padded py-8 border-t border-white/5">
        <div className="text-sm text-gray-500 space-y-3">
          <p className="text-gray-400 leading-relaxed">{t('footer.description')}</p>
          <p className="text-xs text-gray-500">
            {t('footer.copyright', { year: new Date().getFullYear() })}{' '}
            <a href="https://kirkdaledigital.co.uk/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200 underline underline-offset-2">
              {t('footer.designedBy')}
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}

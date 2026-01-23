import { Link } from 'react-router-dom'
import { useTranslation } from '../i18n/LanguageProvider'

export default function Footer() {
  const { t } = useTranslation()
  
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">{t('footer.contact')}</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Email: info@sintam-se-abracados.com</p>
              <p>WhatsApp: +351 XXX XXX XXX</p>
            </div>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">{t('footer.company')}</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Sintam-se Abraçados</p>
              <p>Property Management Services</p>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">{t('footer.legal')}</h3>
            <div className="space-y-2">
              <Link to="/privacy" className="block text-sm text-gray-600 hover:text-purple-600">
                {t('footer.privacyPolicy')}
              </Link>
              <Link to="/cookies" className="block text-sm text-gray-600 hover:text-purple-600">
                {t('footer.cookiePolicy')}
              </Link>
              <Link to="/terms" className="block text-sm text-gray-600 hover:text-purple-600">
                {t('footer.termsOfService')}
              </Link>
              <Link to="/livro-reclamacoes" className="block text-sm text-gray-600 hover:text-purple-600">
                {t('footer.complaintBook')}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600 mb-2">
            &copy; {new Date().getFullYear()} Sintam-se Abraçados. {t('footer.copyright')}
          </p>
          <p className="text-xs text-slate-500">
            Web Design by{' '}
            <a
              href="https://kirkdaledigital.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600 hover:underline transition-colors"
            >
              Kirkdale Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.svg';

export default function Navigation() {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pt-PT' : 'en';
    i18n.changeLanguage(newLang);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Sintam-se Abraçados" className="h-10 w-10" />
            <span className="text-xl font-bold text-gray-800">Sintam-se Abraçados</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/property-management"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/property-management') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {t('nav.propertyManagement')}
            </Link>
            <Link
              to="/investment-consulting"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/investment-consulting') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {t('nav.investmentConsulting')}
            </Link>
            <Link
              to="/vehicle-services"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/vehicle-services') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {t('nav.vehicleServices')}
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/about') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {t('nav.about')}
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/contact') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {t('nav.contact')}
            </Link>
            
            <button
              onClick={toggleLanguage}
              className="px-3 py-2 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              {i18n.language === 'en' ? 'PT' : 'EN'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useTranslation } from '../i18n/LanguageProvider'
import LanguageToggle from './LanguageToggle'

export default function Navbar() {
  const { t } = useTranslation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => {
    if (path === '/property-management') {
      return location.pathname === path || location.pathname === '/'
    }
    return location.pathname === path
  }

  // Scroll to top when navigating to home page
  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/property-management') {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      })
    }
  }, [location.pathname])

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If already on home page, prevent navigation and scroll to top immediately
    if (location.pathname === '/' || location.pathname === '/property-management') {
      e.preventDefault()
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      })
    }
    // If navigating from another page, useEffect will handle scrolling after navigation
  }

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center"
            onClick={handleLogoClick}
          >
            <img 
              src="/logo.svg" 
              alt="Sintam-se Abraçados" 
              className="h-14 md:h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-5">
            <Link
              to="/"
              className={`text-xs font-medium transition-colors ${
                isActive('/property-management')
                  ? 'text-purple-600'
                  : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              {t('nav.propertyManagement')}
            </Link>
            <Link
              to="/vehicle-rentals"
              className="text-xs font-medium text-gray-700 hover:text-purple-600 transition-colors"
            >
              {t('nav.vehicleRentals')}
            </Link>
            
            {/* Vehicle Sourcing Dropdown */}
            <div className="relative">
              <button
                className="text-xs font-medium text-gray-700 hover:text-purple-600 transition-colors flex items-center gap-1"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                {t('nav.vehicleSourcing')}
                <ChevronDown className="w-4 h-4" />
              </button>
              {servicesDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <Link
                    to="/vehicle-sourcing/import"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-purple-600"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    {t('nav.importToPortugal')}
                  </Link>
                  <Link
                    to="/vehicle-sourcing/export"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-purple-600"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    {t('nav.exportToAngola')}
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="text-xs font-medium text-gray-700 hover:text-purple-600 transition-colors"
            >
              {t('nav.contactUs')}
            </Link>
          </div>

          {/* Language Toggle + CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageToggle />
            <Link
              to="/contact"
              className="btn btn-primary text-sm px-4 py-2"
            >
              {t('nav.bookConsultation')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              to="/"
              className="block text-sm font-medium text-gray-700 hover:text-purple-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.propertyManagement')}
            </Link>
            <Link
              to="/vehicle-rentals"
              className="block text-sm font-medium text-gray-700 hover:text-purple-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.vehicleRentals')}
            </Link>
            <div className="space-y-2">
              <div className="text-sm font-medium text-gray-700">{t('nav.vehicleSourcing')}</div>
              <Link
                to="/vehicle-sourcing/import"
                className="block pl-4 text-sm text-gray-600 hover:text-purple-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.importToPortugal')}
              </Link>
              <Link
                to="/vehicle-sourcing/export"
                className="block pl-4 text-sm text-gray-600 hover:text-purple-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.exportToAngola')}
              </Link>
            </div>
            <Link
              to="/contact"
              className="block text-sm font-medium text-gray-700 hover:text-purple-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.contactUs')}
            </Link>
            <div className="pt-2 border-t border-gray-200">
              <LanguageToggle />
            </div>
            <Link
              to="/contact"
              className="btn btn-primary w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.bookConsultation')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

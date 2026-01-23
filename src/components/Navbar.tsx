import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useTranslation } from '../i18n/LanguageProvider'
import LanguageToggle from './LanguageToggle'

export default function Navbar() {
  const { t } = useTranslation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const location = useLocation()
  const dropdownRef = useRef<HTMLDivElement>(null)
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

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

  // Handle dropdown hover with delay
  const handleDropdownMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setServicesDropdownOpen(true)
  }

  const handleDropdownMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false)
    }, 200) // 200ms delay
  }

  // Handle keyboard accessibility
  const handleDropdownKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setServicesDropdownOpen(false)
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setServicesDropdownOpen(!servicesDropdownOpen)
    }
  }

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false)
      }
    }

    if (servicesDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [servicesDropdownOpen])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current)
      }
    }
  }, [])

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
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <button
                className="text-xs font-medium text-gray-700 hover:text-purple-600 transition-colors flex items-center gap-1"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onKeyDown={handleDropdownKeyDown}
                onFocus={() => setServicesDropdownOpen(true)}
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
                aria-controls="vehicle-sourcing-menu"
              >
                {t('nav.vehicleSourcing')}
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesDropdownOpen && (
                <div
                  id="vehicle-sourcing-menu"
                  className="absolute top-full left-0 pt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                  role="menu"
                >
                  <Link
                    to="/vehicle-sourcing/import"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-purple-600 focus:bg-gray-50 focus:text-purple-600 focus:outline-none"
                    onClick={() => setServicesDropdownOpen(false)}
                    role="menuitem"
                  >
                    {t('nav.importToPortugal')}
                  </Link>
                  <Link
                    to="/vehicle-sourcing/export"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-purple-600 focus:bg-gray-50 focus:text-purple-600 focus:outline-none"
                    onClick={() => setServicesDropdownOpen(false)}
                    role="menuitem"
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

          {/* Language Toggle + CTA Button + Mobile Menu Button */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Language Toggle - Always Visible */}
            <LanguageToggle />
            
            {/* CTA Button - Hidden on mobile, visible on desktop */}
            <Link
              to="/contact"
              className="hidden md:inline-flex btn btn-primary text-sm px-4 py-2"
            >
              {t('nav.bookConsultation')}
            </Link>

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
              <button
                className="w-full text-left text-sm font-medium text-gray-700 flex items-center justify-between"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                aria-expanded={mobileServicesOpen}
              >
                {t('nav.vehicleSourcing')}
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 space-y-2">
                  <Link
                    to="/vehicle-sourcing/import"
                    className="block text-sm text-gray-600 hover:text-purple-600"
                    onClick={() => {
                      setMobileServicesOpen(false)
                      setMobileMenuOpen(false)
                    }}
                  >
                    {t('nav.importToPortugal')}
                  </Link>
                  <Link
                    to="/vehicle-sourcing/export"
                    className="block text-sm text-gray-600 hover:text-purple-600"
                    onClick={() => {
                      setMobileServicesOpen(false)
                      setMobileMenuOpen(false)
                    }}
                  >
                    {t('nav.exportToAngola')}
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/contact"
              className="block text-sm font-medium text-gray-700 hover:text-purple-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.contactUs')}
            </Link>
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

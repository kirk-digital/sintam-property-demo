import { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.svg'
import { LOCATIONS } from '../pages/locations/locationsData'
import { LanguageToggle } from './LanguageToggle'

const UTILITY_BAR_HEIGHT = 32
const MAIN_NAV_HEIGHT = 112
const HEADER_HEIGHT = UTILITY_BAR_HEIGHT + MAIN_NAV_HEIGHT

const servicesConfig = [
  { key: 'propertyManagement', path: '/services/property-management' },
  { key: 'investmentConsulting', path: '/services/investment-consulting' },
  { key: 'vehicleRental', path: '/services/vehicle-rental' },
  { key: 'vehicleSourcing', path: '/services/vehicle-sourcing' },
]

export function Navbar() {
  const { t } = useTranslation()
  const [servicesOpen, setServicesOpen] = useState(false)
  const [locationsOpen, setLocationsOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const servicesDropdownRef = useRef<HTMLDivElement>(null)
  const locationsDropdownRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const servicesCloseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const locationsCloseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const services = servicesConfig.map((item) => ({
    label: t(`nav.${item.key}`),
    path: item.path,
  }))

  const locations = LOCATIONS.map((loc) => ({
    label: loc.name,
    path: `/locations/${loc.slug}`,
  }))

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    setIsDesktop(mediaQuery.matches)

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches)
      // Close mobile menu when switching to desktop
      if (e.matches) {
        setMobileMenuOpen(false)
      }
    }

    mediaQuery.addEventListener('change', handleMediaChange)
    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange)
      if (servicesCloseTimeoutRef.current) {
        clearTimeout(servicesCloseTimeoutRef.current)
      }
      if (locationsCloseTimeoutRef.current) {
        clearTimeout(locationsCloseTimeoutRef.current)
      }
    }
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false)
      }
      if (locationsDropdownRef.current && !locationsDropdownRef.current.contains(event.target as Node)) {
        setLocationsOpen(false)
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) && mobileMenuOpen) {
        // Don't close if clicking the hamburger button
        const target = event.target as HTMLElement
        if (!target.closest('[data-mobile-menu-toggle]')) {
          setMobileMenuOpen(false)
        }
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setServicesOpen(false)
        setLocationsOpen(false)
        setMobileMenuOpen(false)
      }
    }

    if (servicesOpen || locationsOpen || mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [servicesOpen, locationsOpen, mobileMenuOpen])

  const handleServicesMouseEnter = () => {
    if (isDesktop) {
      if (servicesCloseTimeoutRef.current) {
        clearTimeout(servicesCloseTimeoutRef.current)
        servicesCloseTimeoutRef.current = null
      }
      setServicesOpen(true)
    }
  }

  const handleServicesMouseLeave = () => {
    if (isDesktop) {
      servicesCloseTimeoutRef.current = setTimeout(() => {
        setServicesOpen(false)
      }, 150)
    }
  }

  const handleLocationsMouseEnter = () => {
    if (isDesktop) {
      if (locationsCloseTimeoutRef.current) {
        clearTimeout(locationsCloseTimeoutRef.current)
        locationsCloseTimeoutRef.current = null
      }
      setLocationsOpen(true)
    }
  }

  const handleLocationsMouseLeave = () => {
    if (isDesktop) {
      locationsCloseTimeoutRef.current = setTimeout(() => {
        setLocationsOpen(false)
      }, 150)
    }
  }

  const handleServicesClick = () => {
    if (!isDesktop) {
      setServicesOpen((v) => !v)
    }
  }

  const handleLocationsClick = () => {
    if (!isDesktop) {
      setLocationsOpen((v) => !v)
    }
  }

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen((v) => !v)
  }

  const handleMobileNavClick = () => {
    setMobileMenuOpen(false)
    setMobileServicesOpen(false)
    setMobileLocationsOpen(false)
  }

  return (
    <header
      className="w-full z-50 fixed top-0 left-0 right-0 bg-white shadow-sm border-b border-gray-200 transition-colors duration-300"
      style={{ height: `${HEADER_HEIGHT}px`, '--nav-height': `${HEADER_HEIGHT}px` } as React.CSSProperties}
    >
      {/* Row 1: Utility bar - 32px */}
      <div
        className="flex items-center justify-between text-white"
        style={{ height: `${UTILITY_BAR_HEIGHT}px`, backgroundColor: '#0C2C55' }}
      >
        <div className="container-padded w-full flex items-center justify-end flex-wrap gap-2 md:gap-4 text-xs md:text-sm tracking-wide">
          {/* Right: Contacts */}
          <div className="flex items-center gap-2 md:gap-4 lg:gap-6 flex-wrap">
            <div className="flex items-center gap-1.5">
              <span>🇵🇹 PT:</span>
              <span className="whitespace-nowrap">+351 000 000 000</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span>🇦🇴 AO:</span>
              <span className="whitespace-nowrap">+244 000 000 000</span>
            </div>
            <span className="hidden md:inline">info@sintam-se-abracados.pt</span>
          </div>
        </div>
      </div>

      {/* Row 2: Main nav - 112px */}
      <div
        className="flex items-center text-gray-700"
        style={{ height: `${MAIN_NAV_HEIGHT}px` }}
      >
        <div className="container-padded w-full flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Sintam-se Abraçados" className="h-12 md:h-[88px] w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-semibold uppercase tracking-wide transition-colors ${
                  isActive
                    ? 'text-[var(--color-accent)]'
                    : 'text-gray-700 hover:text-[var(--color-accent)]'
                }`
              }
            >
              {t('nav.home')}
            </NavLink>

            <div
              className="relative"
              ref={servicesDropdownRef}
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button
                className="text-sm font-semibold uppercase tracking-wide flex items-center gap-2 transition-colors text-gray-700 hover:text-[var(--color-accent)]"
                onClick={handleServicesClick}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                {t('nav.services')}
                <span className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`}>▾</span>
              </button>
              {servicesOpen && (
                <div className="absolute left-0 mt-3 w-64 bg-white text-gray-900 shadow-2xl border border-gray-200 p-4 space-y-2 rounded-[4px] z-50">
                  {services.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) =>
                        `block px-3 py-2 text-sm font-semibold tracking-wide rounded-[4px] ${
                          isActive ? 'text-[var(--color-accent)]' : 'hover:text-[var(--color-accent)]'
                        }`
                      }
                      onClick={() => setServicesOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <div
              className="relative"
              ref={locationsDropdownRef}
              onMouseEnter={handleLocationsMouseEnter}
              onMouseLeave={handleLocationsMouseLeave}
            >
              <button
                className="text-sm font-semibold uppercase tracking-wide flex items-center gap-2 transition-colors text-gray-700 hover:text-[var(--color-accent)]"
                onClick={handleLocationsClick}
                aria-expanded={locationsOpen}
                aria-haspopup="true"
              >
                {t('nav.locations')}
                <span className={`transition-transform ${locationsOpen ? 'rotate-180' : ''}`}>▾</span>
              </button>
              {locationsOpen && (
                <div className="absolute left-0 mt-3 w-64 bg-white text-gray-900 shadow-2xl border border-gray-200 p-4 space-y-2 rounded-[4px] z-50">
                  {locations.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) =>
                        `block px-3 py-2 text-sm font-semibold tracking-wide rounded-[4px] ${
                          isActive ? 'text-[var(--color-accent)]' : 'hover:text-[var(--color-accent)]'
                        }`
                      }
                      onClick={() => setLocationsOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm font-semibold uppercase tracking-wide transition-colors ${
                  isActive
                    ? 'text-[var(--color-accent)]'
                    : 'text-gray-700 hover:text-[var(--color-accent)]'
                }`
              }
            >
              {t('nav.about')}
            </NavLink>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <LanguageToggle />
            <a
              href="https://portal.example.com"
              className="btn btn-outline text-xs"
              target="_blank"
              rel="noreferrer"
            >
              {t('nav.customerPortal')}
            </a>
            <Link to="/contact" className="btn btn-primary text-xs">
              {t('nav.contactUs')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            data-mobile-menu-toggle
            onClick={handleMobileMenuToggle}
            className="lg:hidden p-2 text-gray-700 hover:text-[var(--color-accent)] transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" style={{ top: `${HEADER_HEIGHT}px` }} />
      )}

      {/* Mobile Menu Panel */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: `${HEADER_HEIGHT}px`, maxHeight: `calc(100vh - ${HEADER_HEIGHT}px)` }}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <span className="text-sm font-semibold uppercase tracking-wide text-gray-700">Menu</span>
            <button
              onClick={handleMobileMenuToggle}
              className="p-1 text-gray-700 hover:text-[var(--color-accent)] transition-colors"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <nav className="flex-1 p-4 space-y-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-4 py-3 text-sm font-semibold uppercase tracking-wide rounded-[4px] transition-colors ${
                  isActive
                    ? 'text-[var(--color-accent)] bg-gray-50'
                    : 'text-gray-700 hover:text-[var(--color-accent)] hover:bg-gray-50'
                }`
              }
              onClick={handleMobileNavClick}
            >
              {t('nav.home')}
            </NavLink>

            {/* Services Dropdown */}
            <div>
              <button
                onClick={() => setMobileServicesOpen((v) => !v)}
                className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold uppercase tracking-wide rounded-[4px] text-gray-700 hover:text-[var(--color-accent)] hover:bg-gray-50 transition-colors"
              >
                <span>{t('nav.services')}</span>
                <span className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}>▾</span>
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 mt-1 space-y-1">
                  {services.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm font-semibold tracking-wide rounded-[4px] transition-colors ${
                          isActive
                            ? 'text-[var(--color-accent)] bg-gray-50'
                            : 'text-gray-600 hover:text-[var(--color-accent)] hover:bg-gray-50'
                        }`
                      }
                      onClick={handleMobileNavClick}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div>
              <button
                onClick={() => setMobileLocationsOpen((v) => !v)}
                className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold uppercase tracking-wide rounded-[4px] text-gray-700 hover:text-[var(--color-accent)] hover:bg-gray-50 transition-colors"
              >
                <span>{t('nav.locations')}</span>
                <span className={`transition-transform ${mobileLocationsOpen ? 'rotate-180' : ''}`}>▾</span>
              </button>
              {mobileLocationsOpen && (
                <div className="pl-4 mt-1 space-y-1">
                  {locations.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm font-semibold tracking-wide rounded-[4px] transition-colors ${
                          isActive
                            ? 'text-[var(--color-accent)] bg-gray-50'
                            : 'text-gray-600 hover:text-[var(--color-accent)] hover:bg-gray-50'
                        }`
                      }
                      onClick={handleMobileNavClick}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block px-4 py-3 text-sm font-semibold uppercase tracking-wide rounded-[4px] transition-colors ${
                  isActive
                    ? 'text-[var(--color-accent)] bg-gray-50'
                    : 'text-gray-700 hover:text-[var(--color-accent)] hover:bg-gray-50'
                }`
              }
              onClick={handleMobileNavClick}
            >
              {t('nav.about')}
            </NavLink>

            <div className="pt-4 border-t border-gray-200 space-y-3">
              <div className="px-4">
                <LanguageToggle />
              </div>
              <a
                href="https://portal.example.com"
                className="block px-4 py-2 text-sm font-semibold text-center uppercase tracking-wide rounded-[4px] border border-gray-300 text-gray-700 hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors"
                target="_blank"
                rel="noreferrer"
                onClick={handleMobileNavClick}
              >
                {t('nav.customerPortal')}
              </a>
              <Link
                to="/contact"
                className="block px-4 py-2 text-sm font-semibold text-center uppercase tracking-wide rounded-[4px] bg-[var(--color-accent)] text-white hover:opacity-90 transition-opacity"
                onClick={handleMobileNavClick}
              >
                {t('nav.contactUs')}
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

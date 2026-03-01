import { useState } from 'react'
import { useTranslation } from '../i18n/LanguageProvider'
import {
  Shield,
  BarChart3,
  ClipboardList,
  CheckCircle2,
  Wrench,
} from 'lucide-react'
import Section from '../components/Section'

const WHATSAPP_URL = 'https://wa.me/351XXXXXXXXX'
const MOST_POPULAR_PACKAGE = 'comfort' as const

export default function PropertyManagement() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    location: '',
    propertyType: '',
    desiredPackage: '',
    serviceInterest: '',
  })
  const [quickQuote, setQuickQuote] = useState({ location: '', propertyType: '' })

  const scrollToContact = (e: React.MouseEvent, packageValue?: string, serviceValue?: string) => {
    e.preventDefault()
    if (packageValue) {
      setFormData((prev) => ({ ...prev, desiredPackage: packageValue }))
    }
    if (serviceValue) {
      setFormData((prev) => ({ ...prev, serviceInterest: serviceValue }))
    }
    const el = document.getElementById('contact')
    if (el) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' })
    }
  }

  const handleQuickQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormData((prev) => ({
      ...prev,
      location: quickQuote.location,
      propertyType: quickQuote.propertyType,
    }))
    const el = document.getElementById('contact')
    if (el) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div>
      {/* 1) HERO — full viewport */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-lisbon.webp"
            alt=""
            className="h-full w-full object-cover brightness-90 contrast-[1.08] saturate-[0.95]"
            onError={(e) => {
              const target = e.currentTarget
              if (!target.dataset.fallback) {
                target.dataset.fallback = '1'
                target.src = 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1920&q=80'
              }
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/80 via-brand-accent/55 to-brand-accent/30" />
        <div className="relative z-10 w-full container mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center justify-center text-center">
          <div className="max-w-2xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/80 p-8 md:p-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-accent mb-4 leading-tight">
              {t('propertyManagement.hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
              {t('propertyManagement.hero.subtitle')}
            </p>
            <form onSubmit={handleQuickQuoteSubmit} className="mb-6 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <div>
                  <label htmlFor="hero-location" className="sr-only">
                    {t('propertyManagement.hero.formLocation')}
                  </label>
                  <input
                    type="text"
                    id="hero-location"
                    className="input text-sm py-2"
                    placeholder={t('propertyManagement.hero.formLocation')}
                    value={quickQuote.location}
                    onChange={(e) => setQuickQuote((q) => ({ ...q, location: e.target.value }))}
                  />
                </div>
                <div>
                  <label htmlFor="hero-propertyType" className="sr-only">
                    {t('propertyManagement.hero.formPropertyType')}
                  </label>
                  <select
                    id="hero-propertyType"
                    className="select text-sm py-2"
                    value={quickQuote.propertyType}
                    onChange={(e) => setQuickQuote((q) => ({ ...q, propertyType: e.target.value }))}
                  >
                    <option value="">{t('propertyManagement.hero.formPropertyTypePlaceholder')}</option>
                    <option value="apartment">{t('propertyManagement.cta.form.apartment')}</option>
                    <option value="house">{t('propertyManagement.cta.form.house')}</option>
                    <option value="commercial">{t('propertyManagement.cta.form.commercial')}</option>
                    <option value="other">{t('propertyManagement.cta.form.other')}</option>
                  </select>
                </div>
              </div>
            </form>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-6">
              <a
                href="#contact"
                onClick={(e) => scrollToContact(e)}
                className="btn btn-primary text-base px-6 py-3"
              >
                {t('propertyManagement.hero.ctaPrimary')}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary text-base px-6 py-3"
              >
                {t('common.whatsapp')}
              </a>
            </div>
          </div>
        </div>
        <div className="wave-divider absolute bottom-0 left-0 right-0" />
      </section>

      {/* Why Work With Us — sub-hero */}
      <Section bg="white" borderTop>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80"
              alt={t('propertyManagement.whyWorkWithUs.imageAlt')}
              className="w-full aspect-[4/3] object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-accent mb-4 leading-tight">
              {t('propertyManagement.whyWorkWithUs.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
              {t('propertyManagement.whyWorkWithUs.intro')}
            </p>
            <ul className="space-y-3 mb-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <li key={i} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <span className="text-gray-700">{t(`propertyManagement.whyWorkWithUs.reason${i}`)}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row justify-center gap-3 text-center">
              <a
                href="#contact"
                onClick={(e) => scrollToContact(e)}
                className="btn btn-primary"
              >
                {t('propertyManagement.whyWorkWithUs.ctaPrimary')}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                {t('common.whatsapp')}
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* 2) OUR SERVICES — tall structured cards */}
      <Section bg="off">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-accent mb-8 md:mb-12">
          {t('propertyManagement.ourServices.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
          {(
            [
              'propertyManagement',
              'tenantPlacement',
              'complianceLegal',
              'cleaningPreparation',
            ] as const
          ).map((key) => (
            <div
              key={key}
              className="flex min-h-[440px] flex-col rounded-lg border border-brand-accent/10 bg-white p-6 md:p-8 shadow-sm"
            >
              <h3 className="text-xl md:text-2xl font-bold text-brand-accent mb-3">
                {t(`propertyManagement.ourServices.${key}.title`)}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-0">
                {t(`propertyManagement.ourServices.${key}.description`)}
              </p>
              <ul className="space-y-2 mt-11 mb-0">
                {[1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                    <span>{t(`propertyManagement.ourServices.${key}.bullet${i}`)}</span>
                  </li>
                ))}
              </ul>
              <div className="flex-1 min-h-6" aria-hidden="true" />
              <a
                href="#contact"
                onClick={(e) => scrollToContact(e, undefined, key)}
                className="btn btn-primary w-full md:w-auto text-center"
              >
                {t(`propertyManagement.ourServices.${key}.cta`)}
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* 3) HOW IT WORKS — 4-step process strip */}
      <Section bg="white">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-accent mb-8 md:mb-12">
          {t('propertyManagement.howItWorks.title')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 text-brand-primary font-bold flex items-center justify-center mx-auto mb-4 text-lg">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t('propertyManagement.howItWorks.step1Title')}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('propertyManagement.howItWorks.step1Desc')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 text-brand-primary font-bold flex items-center justify-center mx-auto mb-4 text-lg">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t('propertyManagement.howItWorks.step2Title')}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('propertyManagement.howItWorks.step2Desc')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 text-brand-primary font-bold flex items-center justify-center mx-auto mb-4 text-lg">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t('propertyManagement.howItWorks.step3Title')}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('propertyManagement.howItWorks.step3Desc')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 text-brand-primary font-bold flex items-center justify-center mx-auto mb-4 text-lg">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t('propertyManagement.howItWorks.step4Title')}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('propertyManagement.howItWorks.step4Desc')}
              </p>
            </div>
          </div>
          <div className="mt-10 pt-8 border-t border-slate-200/60 flex flex-col items-center md:items-end gap-3">
            <p className="text-sm text-gray-500">{t('propertyManagement.howItWorks.ctaLine')}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                onClick={(e) => scrollToContact(e)}
                className="btn btn-primary text-sm px-4 py-2"
              >
                {t('propertyManagement.howItWorks.ctaButton')}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-brand-primary hover:underline text-center md:text-right"
              >
                {t('common.whatsapp')}
              </a>
            </div>
          </div>
      </Section>

      {/* 4) BENEFITS — 6 tiles */}
      <Section bg="off">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-accent mb-8 md:mb-12">
          {t('propertyManagement.benefits.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="card">
                <CheckCircle2 className="w-6 h-6 text-brand-primary mb-3" />
                <p className="text-gray-700 font-medium leading-snug">
                  {t(`propertyManagement.benefits.tile${i}`)}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-8 border-t border-slate-200/60 flex flex-col items-center md:items-end gap-3">
            <p className="text-sm text-gray-500">{t('propertyManagement.benefits.ctaLine')}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                onClick={(e) => scrollToContact(e)}
                className="btn btn-primary text-sm px-4 py-2"
              >
                {t('propertyManagement.benefits.ctaButton')}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-brand-primary hover:underline text-center md:text-right"
              >
                {t('common.whatsapp')}
              </a>
            </div>
          </div>
      </Section>

      {/* 5) MANAGEMENT PACKAGES — 3 pricing cards */}
      <Section bg="white">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-accent mb-4">
          {t('propertyManagement.packages.title')}
        </h2>
        <p className="text-center text-gray-600 mb-2 text-sm">
          {t('propertyManagement.packages.noteVat')}
        </p>
        <p className="text-center text-gray-600 mb-8 md:mb-12 text-sm">
          {t('propertyManagement.packages.noteRooms')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Base */}
            <div className="card flex flex-col border-2 border-gray-200">
              <h3 className="text-xl font-bold text-brand-accent">{t('propertyManagement.packages.base')}</h3>
              <p className="text-2xl font-bold text-brand-primary mt-2">{t('propertyManagement.packages.basePct')}</p>
              <p className="text-sm text-gray-600 mt-1">{t('propertyManagement.packages.bestForBase')}</p>
              <ul className="mt-4 space-y-2 text-gray-700 flex-1">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span>{t('propertyManagement.packages.baseBullet1')}</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span>{t('propertyManagement.packages.baseBullet2')}</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span>{t('propertyManagement.packages.baseBullet3')}</span>
                </li>
              </ul>
              <button
                type="button"
                onClick={(e) => scrollToContact(e, 'base')}
                className="btn btn-primary w-full mt-6"
              >
                {t('propertyManagement.packages.cta')}
              </button>
            </div>
            {/* Comfort */}
            <div className="card flex flex-col border-2 border-brand-primary relative">
              {MOST_POPULAR_PACKAGE === 'comfort' && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-brand-primary text-white text-xs font-semibold rounded-full whitespace-nowrap">
                  {t('propertyManagement.packages.mostPopular')}
                </span>
              )}
              <h3 className="text-xl font-bold text-brand-accent">{t('propertyManagement.packages.comfort')}</h3>
              <p className="text-sm text-gray-600">{t('propertyManagement.packages.comfortSub')}</p>
              <p className="text-2xl font-bold text-brand-primary mt-1">{t('propertyManagement.packages.comfortPct')}</p>
              <p className="text-sm text-gray-600 mt-1">{t('propertyManagement.packages.bestForComfort')}</p>
              <ul className="mt-4 space-y-2 text-gray-700 flex-1">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span>{t('propertyManagement.packages.comfortBullet1')}</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span>{t('propertyManagement.packages.comfortBullet2')}</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span>{t('propertyManagement.packages.comfortBullet3')}</span>
                </li>
              </ul>
              <button
                type="button"
                onClick={(e) => scrollToContact(e, 'comfort')}
                className="btn btn-primary w-full mt-6"
              >
                {t('propertyManagement.packages.cta')}
              </button>
            </div>
            {/* Total Care */}
            <div className="card flex flex-col border-2 border-gray-200">
              <h3 className="text-xl font-bold text-brand-accent">{t('propertyManagement.packages.totalCare')}</h3>
              <p className="text-sm text-gray-600">{t('propertyManagement.packages.totalCareSub')}</p>
              <p className="text-2xl font-bold text-brand-primary mt-1">{t('propertyManagement.packages.totalCarePct')}</p>
              <p className="text-sm text-gray-600 mt-1">{t('propertyManagement.packages.bestForTotalCare')}</p>
              <ul className="mt-4 space-y-2 text-gray-700 flex-1">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span>{t('propertyManagement.packages.totalCareBullet1')}</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span>{t('propertyManagement.packages.totalCareBullet2')}</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span>{t('propertyManagement.packages.totalCareBullet3')}</span>
                </li>
              </ul>
              <button
                type="button"
                onClick={(e) => scrollToContact(e, 'totalCare')}
                className="btn btn-primary w-full mt-6"
              >
                {t('propertyManagement.packages.cta')}
              </button>
            </div>
          </div>
      </Section>

      {/* Trust / Stats strip */}
      <Section bg="white" borderTop>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <BarChart3 className="w-8 h-8 mx-auto mb-2 text-brand-primary" />
            <p className="text-sm font-medium text-gray-700">{t('propertyManagement.trustStats.stat1')}</p>
          </div>
          <div className="text-center">
            <ClipboardList className="w-8 h-8 mx-auto mb-2 text-brand-primary" />
            <p className="text-sm font-medium text-gray-700">{t('propertyManagement.trustStats.stat2')}</p>
          </div>
          <div className="text-center">
            <Wrench className="w-8 h-8 mx-auto mb-2 text-brand-primary" />
            <p className="text-sm font-medium text-gray-700">{t('propertyManagement.trustStats.stat3')}</p>
          </div>
          <div className="text-center">
            <Shield className="w-8 h-8 mx-auto mb-2 text-brand-primary" />
            <p className="text-sm font-medium text-gray-700">{t('propertyManagement.trustStats.stat4')}</p>
          </div>
        </div>
      </Section>

      {/* 7) TESTIMONIALS / GUARANTEES */}
      <Section bg="white" borderTop>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-accent mb-8 md:mb-12">
          {t('propertyManagement.testimonials.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="card">
              <BarChart3 className="w-8 h-8 text-brand-primary mb-4" />
              <p className="text-gray-700 leading-relaxed">{t('propertyManagement.testimonials.card1')}</p>
            </div>
            <div className="card">
              <Shield className="w-8 h-8 text-brand-primary mb-4" />
              <p className="text-gray-700 leading-relaxed">{t('propertyManagement.testimonials.card2')}</p>
            </div>
            <div className="card">
              <ClipboardList className="w-8 h-8 text-brand-primary mb-4" />
              <p className="text-gray-700 leading-relaxed">{t('propertyManagement.testimonials.card3')}</p>
            </div>
          </div>
      </Section>

      {/* 8) CONTACT */}
      <Section id="contact" bg="off" className="scroll-mt-24 py-20 md:py-28">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-accent text-center mb-8 md:mb-10">
          {t('propertyManagement.cta.title')}
        </h2>
        <div className="mx-auto max-w-2xl text-left mb-12 md:mb-14">
          <p className="text-base font-semibold text-gray-700 mb-4">
            {t('propertyManagement.cta.reassurance1')}
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            {t('propertyManagement.cta.reassurance2')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start max-w-6xl mx-auto">
          <div className="card">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                  {t('propertyManagement.cta.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  className="input text-sm py-2.5"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1.5">
                  {t('propertyManagement.cta.form.contact')}
                </label>
                <input
                  type="text"
                  id="contact"
                  className="input text-sm py-2.5"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1.5">
                  {t('propertyManagement.cta.form.location')}
                </label>
                <input
                  type="text"
                  id="location"
                  className="input text-sm py-2.5"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1.5">
                  {t('propertyManagement.cta.form.propertyType')}
                </label>
                <select
                  id="propertyType"
                  className="select text-sm py-2.5"
                  value={formData.propertyType}
                  onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                  required
                >
                  <option value="">{t('propertyManagement.cta.form.propertyTypePlaceholder')}</option>
                  <option value="apartment">{t('propertyManagement.cta.form.apartment')}</option>
                  <option value="house">{t('propertyManagement.cta.form.house')}</option>
                  <option value="commercial">{t('propertyManagement.cta.form.commercial')}</option>
                  <option value="other">{t('propertyManagement.cta.form.other')}</option>
                </select>
              </div>
              <div>
                <label htmlFor="desiredPackage" className="block text-sm font-medium text-gray-700 mb-1.5">
                  {t('propertyManagement.cta.form.desiredPackage')}
                </label>
                <select
                  id="desiredPackage"
                  className="select text-sm py-2.5"
                  value={formData.desiredPackage}
                  onChange={(e) => setFormData({ ...formData, desiredPackage: e.target.value })}
                >
                  <option value="">{t('propertyManagement.cta.form.packagePlaceholder')}</option>
                  <option value="base">{t('propertyManagement.packages.base')}</option>
                  <option value="comfort">{t('propertyManagement.packages.comfort')}</option>
                  <option value="totalCare">{t('propertyManagement.packages.totalCare')}</option>
                </select>
              </div>
              <div>
                <label htmlFor="serviceInterest" className="block text-sm font-medium text-gray-700 mb-1.5">
                  {t('propertyManagement.cta.form.serviceInterest')}
                </label>
                <select
                  id="serviceInterest"
                  className="select text-sm py-2.5"
                  value={formData.serviceInterest}
                  onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                >
                  <option value="">{t('propertyManagement.cta.form.servicePlaceholder')}</option>
                  <option value="propertyManagement">{t('propertyManagement.cta.form.serviceOptionPropertyManagement')}</option>
                  <option value="tenantPlacement">{t('propertyManagement.cta.form.serviceOptionTenantPlacement')}</option>
                  <option value="complianceLegal">{t('propertyManagement.cta.form.serviceOptionComplianceLegal')}</option>
                  <option value="cleaningPreparation">{t('propertyManagement.cta.form.serviceOptionCleaningPreparation')}</option>
                  <option value="general">{t('propertyManagement.cta.form.serviceOptionGeneral')}</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary w-full mt-2">
                {t('propertyManagement.cta.form.submit')}
              </button>
            </form>
          </div>

          <div className="rounded-2xl border border-brand-accent/10 overflow-hidden shadow-sm bg-[var(--color-bg-off)] p-4 md:p-5">
            <h3 className="text-sm font-semibold text-brand-accent mb-1">
              {t('propertyManagement.cta.form.mapHeading')}
            </h3>
            <p className="text-xs text-gray-600 mb-3">
              {t('propertyManagement.cta.form.mapSubtext')}
            </p>
            <div className="rounded-xl overflow-hidden bg-gray-100">
              <iframe
                title={t('propertyManagement.cta.form.mapTitle')}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49798.2473!2d-9.1393!3d38.7223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331a61e4f33b%3A0x400ebbde49036d0!2sLisbon%2C%20Portugal!5e0!3m2!1sen!2suk!4v1635789012345!5m2!1sen!2suk"
                className="w-full h-[280px] sm:h-[320px] md:h-[360px] border-0 block"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

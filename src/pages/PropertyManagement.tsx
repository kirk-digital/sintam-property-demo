import { useState } from 'react'
import MicroCTA from '../components/MicroCTA'
import { useTranslation } from '../i18n/LanguageProvider'

export default function PropertyManagement() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    location: '',
    propertyType: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log('Form submitted:', formData)
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t('propertyManagement.hero.title')}
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t('propertyManagement.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn btn-primary">
                  {t('propertyManagement.hero.ctaPrimary')}
                </a>
                <a
                  href="https://wa.me/351XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  {t('common.whatsapp')}
                </a>
              </div>
            </div>
            {/* Right: Image */}
            <div className="order-first lg:order-last">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80"
                alt="Modern residential building"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            {t('propertyManagement.whoThisIsFor.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center hover:bg-slate-50">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('propertyManagement.whoThisIsFor.overseasOwners.title')}</h3>
              <p className="text-gray-600">
                {t('propertyManagement.whoThisIsFor.overseasOwners.description')}
              </p>
            </div>
            <div className="card text-center hover:bg-slate-50">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('propertyManagement.whoThisIsFor.busyLandlords.title')}</h3>
              <p className="text-gray-600">
                {t('propertyManagement.whoThisIsFor.busyLandlords.description')}
              </p>
            </div>
            <div className="card text-center hover:bg-slate-50">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('propertyManagement.whoThisIsFor.propertyInvestors.title')}</h3>
              <p className="text-gray-600">
                {t('propertyManagement.whoThisIsFor.propertyInvestors.description')}
              </p>
            </div>
            <div className="card text-center hover:bg-slate-50">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('propertyManagement.whoThisIsFor.tiredOwners.title')}</h3>
              <p className="text-gray-600">
                {t('propertyManagement.whoThisIsFor.tiredOwners.description')}
              </p>
            </div>
          </div>
          <MicroCTA
            primaryLabel={t('propertyManagement.microCta.requestQuote')}
            primaryHref="#contact"
          />
        </div>
      </section>

      {/* What We Manage */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            {t('propertyManagement.whatWeManage.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card hover:bg-slate-50">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('propertyManagement.whatWeManage.tenantManagement.title')}</h3>
              <p className="text-gray-600">
                {t('propertyManagement.whatWeManage.tenantManagement.description')}
              </p>
            </div>
            <div className="card hover:bg-slate-50">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('propertyManagement.whatWeManage.cleaning.title')}</h3>
              <p className="text-gray-600">
                {t('propertyManagement.whatWeManage.cleaning.description')}
              </p>
            </div>
            <div className="card hover:bg-slate-50">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('propertyManagement.whatWeManage.maintenance.title')}</h3>
              <p className="text-gray-600">
                {t('propertyManagement.whatWeManage.maintenance.description')}
              </p>
            </div>
            <div className="card hover:bg-slate-50">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('propertyManagement.whatWeManage.financial.title')}</h3>
              <p className="text-gray-600">
                {t('propertyManagement.whatWeManage.financial.description')}
              </p>
            </div>
          </div>
          <MicroCTA
            primaryLabel={t('propertyManagement.microCta.requestQuote')}
            primaryHref="#contact"
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            {t('propertyManagement.howItWorks.title')}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-600 mb-4">1</div>
                <div className="h-1 w-16 bg-purple-200 mx-auto mb-6"></div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('propertyManagement.howItWorks.step1.title')}</h3>
                <p className="text-gray-600">
                  {t('propertyManagement.howItWorks.step1.description')}
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-600 mb-4">2</div>
                <div className="h-1 w-16 bg-purple-200 mx-auto mb-6"></div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('propertyManagement.howItWorks.step2.title')}</h3>
                <p className="text-gray-600">
                  {t('propertyManagement.howItWorks.step2.description')}
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-600 mb-4">3</div>
                <div className="h-1 w-16 bg-purple-200 mx-auto mb-6 hidden md:block"></div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('propertyManagement.howItWorks.step3.title')}</h3>
                <p className="text-gray-600">
                  {t('propertyManagement.howItWorks.step3.description')}
                </p>
              </div>
            </div>
          </div>
          <MicroCTA
            primaryLabel={t('propertyManagement.microCta.requestQuote')}
            primaryHref="#contact"
          />
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#E9D5FF' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            {t('propertyManagement.benefits.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card hover:bg-white/80">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('propertyManagement.benefits.administration.title')}</h3>
              <p className="text-gray-600">
                {t('propertyManagement.benefits.administration.description')}
              </p>
            </div>
            <div className="card hover:bg-white/80">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('propertyManagement.benefits.financial.title')}</h3>
              <p className="text-gray-600">
                {t('propertyManagement.benefits.financial.description')}
              </p>
            </div>
            <div className="card hover:bg-white/80">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('propertyManagement.benefits.legal.title')}</h3>
              <p className="text-gray-600">
                {t('propertyManagement.benefits.legal.description')}
              </p>
            </div>
          </div>
          <MicroCTA
            primaryLabel={t('propertyManagement.microCta.requestQuote')}
            primaryHref="#contact"
          />
        </div>
      </section>

      {/* Trust Statement */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              {t('propertyManagement.trustStatement')}
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Reassurance Copy */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                {t('propertyManagement.cta.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                {t('propertyManagement.cta.reassurance1')}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t('propertyManagement.cta.reassurance2')}
              </p>
            </div>

            {/* Right: Form */}
            <div className="card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('propertyManagement.cta.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('propertyManagement.cta.form.contact')}
                  </label>
                  <input
                    type="text"
                    id="contact"
                    className="input"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('propertyManagement.cta.form.location')}
                  </label>
                  <input
                    type="text"
                    id="location"
                    className="input"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('propertyManagement.cta.form.propertyType')}
                  </label>
                  <select
                    id="propertyType"
                    className="select"
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
                <button type="submit" className="btn btn-primary w-full">
                  {t('propertyManagement.cta.form.submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

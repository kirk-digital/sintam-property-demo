import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function PropertyManagement() {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">{t('services.propertyManagement.title')}</h1>
        <p className="text-lg text-gray-600 mb-12">{t('services.propertyManagement.intro')}</p>

        {/* What's Included */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">{t('services.propertyManagement.included.title')}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {['cleaning', 'rentCollection', 'maintenance', 'inspections', 'reporting', 'tenantRelations'].map((key) => (
              <div key={key} className="flex items-start space-x-3">
                <span className="text-blue-600 text-xl">✓</span>
                <p className="text-gray-700">{t(`services.propertyManagement.included.${key}`)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Packages */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">{t('services.propertyManagement.packages.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['starter', 'standard', 'premium'].map((pkg) => (
              <div key={pkg} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-colors">
                <h3 className="text-xl font-semibold mb-2">{t(`services.propertyManagement.packages.${pkg}.name`)}</h3>
                <p className="text-gray-600 mb-4">{t(`services.propertyManagement.packages.${pkg}.description`)}</p>
                <ul className="space-y-2 mb-6">
                  {(t(`services.propertyManagement.packages.${pkg}.features`, { returnObjects: true }) as string[]).map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-blue-600">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="block w-full bg-blue-600 text-white text-center px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  {t('services.requestQuote')}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">{t('services.propertyManagement.faq.title')}</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="bg-white border border-gray-200 rounded-lg">
                <button
                  onClick={() => setOpenFaq(openFaq === num ? null : num)}
                  className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold">{t(`services.propertyManagement.faq.q${num}.question`)}</span>
                  <span className="text-blue-600">{openFaq === num ? '−' : '+'}</span>
                </button>
                {openFaq === num && (
                  <div className="p-4 pt-0 text-gray-600">
                    {t(`services.propertyManagement.faq.q${num}.answer`)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to get started?</h2>
          <p className="text-gray-600 mb-6">Contact us today for a free consultation</p>
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Get in Touch
          </Link>
        </section>
      </div>
    </div>
  );
}
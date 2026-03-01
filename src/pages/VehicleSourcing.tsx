import { useTranslation } from '../i18n/LanguageProvider'

export default function VehicleSourcing() {
  const { t } = useTranslation()

  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {t('nav.vehicleSourcing')}
        </h1>
        <p className="text-lg text-gray-600">
          {t('common.comingSoon')}
        </p>
      </div>
    </div>
  )
}

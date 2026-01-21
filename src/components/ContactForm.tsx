import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

type Props = {
  defaultService?: string
  defaultMessage?: string
  compact?: boolean
}

const serviceOptionsKeys = [
  'propertyManagement',
  'investmentConsulting',
  'vehicleRental',
  'vehicleSourcing',
  'general',
]

export function ContactForm({ defaultService = '', defaultMessage = '', compact }: Props) {
  const { t } = useTranslation()
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<string[]>([])
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: defaultService,
    message: defaultMessage,
  })

  const validate = () => {
    const newErrors: string[] = []
    if (!form.name.trim()) newErrors.push(t('contact.form.nameRequired'))
    if (!form.email.trim() || !form.email.includes('@')) newErrors.push(t('contact.form.validEmailRequired'))
    if (!form.message.trim()) newErrors.push(t('contact.form.messageRequired'))
    setErrors(newErrors)
    return newErrors.length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
  }

  const mailtoLink = useMemo(() => {
    const serviceValue = form.service || t('common.general')
    const subject = encodeURIComponent(`${t('contact.success.enquiryPrefix')} ${serviceValue}`)
    const body = encodeURIComponent(
      `${t('contact.success.nameLabel')} ${form.name}\n${t('contact.success.emailLabel')} ${form.email}\n${t('contact.success.phoneLabel')} ${form.phone || t('contact.success.notProvided')}\n${t('contact.success.serviceLabel')} ${serviceValue}\n\n${t('contact.success.messageLabel')}:\n${form.message}`,
    )
    return `mailto:info@sintam-se-abracados.pt?subject=${subject}&body=${body}`
  }, [form, t])

  if (submitted) {
    return (
      <div className="surface p-6 md:p-8 space-y-5">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-[var(--color-text)]">{t('contact.success.title')}</h3>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            {t('contact.success.message')}
          </p>
        </div>
        <a href={mailtoLink} className="btn btn-outline w-full justify-center">
          {t('buttons.openMailClient')}
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="surface p-6 md:p-8 space-y-6">
      <div className="grid md:grid-cols-2 gap-5">
        <div className="space-y-2.5">
          <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-text-secondary)]">{t('contact.form.name')}</label>
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-white border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all"
            style={{ borderRadius: 'var(--radius-md)' }}
            required
          />
        </div>
        <div className="space-y-2.5">
          <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-text-secondary)]">{t('contact.form.email')}</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-white border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all"
            style={{ borderRadius: 'var(--radius-md)' }}
            required
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="space-y-2.5">
          <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-text-secondary)]">{t('contact.form.phone')}</label>
          <input
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full bg-white border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all"
            style={{ borderRadius: 'var(--radius-md)' }}
          />
        </div>
        <div className="space-y-2.5">
          <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-text-secondary)]">{t('contact.form.service')}</label>
          <select
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className="w-full bg-white border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all"
            style={{ borderRadius: 'var(--radius-md)' }}
          >
            <option className="bg-white text-[var(--color-text)]" value="">
              {t('contact.form.selectService')}
            </option>
            {serviceOptionsKeys.map((key) => {
              const displayValue = key === 'general' ? t('common.general') : t(`nav.${key}`)
              return (
                <option className="bg-white text-[var(--color-text)]" key={key} value={displayValue}>
                  {displayValue}
                </option>
              )
            })}
          </select>
        </div>
      </div>

      <div className="space-y-2.5">
        <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-text-secondary)]">{t('contact.form.message')}</label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={compact ? 4 : 6}
          className="w-full bg-white border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all resize-none"
          style={{ borderRadius: 'var(--radius-md)' }}
          required
        />
      </div>

      {errors.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 space-y-2">
          <ul className="text-sm text-red-700 space-y-1">
            {errors.map((err) => (
              <li key={err} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{err}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button type="submit" className="btn btn-primary w-full justify-center">
        {t('contact.form.sendMessage')}
      </button>

      <a href={mailtoLink} className="text-xs text-[var(--color-muted)] hover:text-[var(--color-accent)] underline transition-colors">
        {t('contact.form.mailtoFallback')}
      </a>
    </form>
  )
}

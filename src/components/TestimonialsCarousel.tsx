import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

type Testimonial = {
  quote: string
  name: string
  role: string
}

type Props = {
  items: Testimonial[]
}

export function TestimonialsCarousel({ items }: Props) {
  const { t } = useTranslation()
  const [index, setIndex] = useState(0)

  const safeItems = useMemo(() => items || [], [items])
  const total = safeItems.length

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % total)
    }, 6500)
    return () => clearInterval(id)
  }, [total])

  if (!total) return null

  const current = safeItems[index]

  return (
    <div className="relative overflow-hidden flex flex-col items-center">
      <div className="card max-w-[720px] w-full text-center">
        <div className="mb-6">
          <svg className="w-10 h-10 mx-auto text-[var(--color-accent)]/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
        </div>
        <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-8 font-medium">{current.quote}</p>
        <div className="space-y-1">
          <div className="text-sm uppercase tracking-wider text-[var(--color-text)] font-semibold">{current.name}</div>
          <div className="text-xs text-[var(--color-muted)]">{current.role}</div>
        </div>
      </div>

      {/* controls */}
      <div className="flex items-center justify-center mt-8">
        <div className="flex gap-2">
          {safeItems.map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => setIndex(dotIndex)}
              aria-label={`${t('sections.testimonials')} ${dotIndex + 1}`}
              className={`h-2 transition-all duration-300 rounded-full ${
                dotIndex === index 
                  ? 'w-8 bg-[var(--color-accent)]' 
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

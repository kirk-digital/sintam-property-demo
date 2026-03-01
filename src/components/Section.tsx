import type { ReactNode } from 'react'

type SectionBg = 'white' | 'off'

interface SectionProps {
  id?: string
  bg?: SectionBg
  borderTop?: boolean
  className?: string
  children: ReactNode
}

export default function Section({
  id,
  bg = 'white',
  borderTop = false,
  className = '',
  children,
}: SectionProps) {
  const isOff = bg === 'off'
  return (
    <section
      {...(id ? { id } : {})}
      className={[
        'w-full py-16 md:py-24',
        isOff ? '' : 'bg-white',
        borderTop ? 'border-t border-slate-200/60' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={isOff ? { backgroundColor: 'var(--color-bg-off)' } : undefined}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}

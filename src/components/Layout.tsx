import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { WhatsAppFloatingButton } from './WhatsAppFloatingButton'
import { CookieNotice } from './CookieNotice'

const UTILITY_BAR_HEIGHT = 32
const MAIN_NAV_HEIGHT = 112
const HEADER_HEIGHT = UTILITY_BAR_HEIGHT + MAIN_NAV_HEIGHT

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <Navbar />
      <main className="flex-1" style={{ paddingTop: `${HEADER_HEIGHT}px` }}>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
      <CookieNotice />
    </div>
  )
}
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Locations from './pages/Locations'
import LocationPage from './pages/locations/LocationPage'
import PropertyManagement from './pages/services/PropertyManagement'
import InvestmentConsulting from './pages/services/InvestmentConsulting'
import VehicleRental from './pages/services/VehicleRental'
import VehicleSourcing from './pages/services/VehicleSourcing'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services">
            <Route path="property-management" element={<PropertyManagement />} />
            <Route path="investment-consulting" element={<InvestmentConsulting />} />
            <Route path="vehicle-rental" element={<VehicleRental />} />
            <Route path="vehicle-sourcing" element={<VehicleSourcing />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="locations" element={<Locations />} />
          <Route path="locations/:slug" element={<LocationPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
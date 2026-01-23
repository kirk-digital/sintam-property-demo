import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import PropertyManagement from './pages/PropertyManagement'
import VehicleRentals from './pages/VehicleRentals'
import VehicleSourcingImport from './pages/VehicleSourcingImport'
import VehicleSourcingExport from './pages/VehicleSourcingExport'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Cookies from './pages/Cookies'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PropertyManagement />} />
          <Route path="property-management" element={<PropertyManagement />} />
          <Route path="vehicle-rentals" element={<VehicleRentals />} />
          <Route path="vehicle-sourcing/import" element={<VehicleSourcingImport />} />
          <Route path="vehicle-sourcing/export" element={<VehicleSourcingExport />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="cookies" element={<Cookies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

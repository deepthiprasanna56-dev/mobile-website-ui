import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'

import HomePage from './pages/HomePage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import ServicesPage from './pages/ServicesPage'
import ExperiencePage from './pages/ExperiencePage'
import FeaturesPage from './pages/FeaturesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import TestimonialsPage from './pages/TestimonialsPage'

// Automatically scroll to top when changing routes
function ScrollToTopOnNavigate() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState(null)

  const handleOpenBooking = (service = null) => {
    setSelectedService(service)
    setIsBookingModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white font-sans antialiased overflow-x-hidden">
      <ScrollToTopOnNavigate />

      {/* Sticky Header with Navigation Links */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      {/* Main Separate Page Routes */}
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} />} />
          <Route
            path="/service/:id"
            element={<ServiceDetailPage onOpenBooking={handleOpenBooking} />}
          />
          <Route
            path="/services"
            element={<ServicesPage onOpenBooking={handleOpenBooking} />}
          />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Interactive Booking Modal Drawer */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        selectedService={selectedService}
      />
    </div>
  )
}

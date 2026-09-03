import Hero from '../components/Hero'
import Skiper32 from '../components/Skiper32'
import Skiper76 from '../components/Skiper76'
import Features from '../components/Features'
import Services from '../components/Services'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import { useNavigate } from 'react-router-dom'

export default function HomePage({ onOpenBooking }) {
  const navigate = useNavigate()

  return (
    <div>
      <Hero
        onExploreServices={() => navigate('/services')}
        onOpenBooking={() => onOpenBooking()}
      />
      <Skiper32 />
      <Skiper76 />
      <Features />
      <Services onSelectServiceForBooking={(srv) => onOpenBooking(srv)} />
      <About />
      <Testimonials />
      <Contact />
    </div>
  )
}

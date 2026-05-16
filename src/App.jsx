import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import Services     from './components/Services'
import Process      from './components/Process'
import Portfolio    from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Pricing      from './components/Pricing'
import FAQ          from './components/FAQ'
import CTA          from './components/CTA'
import Footer       from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

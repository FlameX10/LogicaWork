import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import Services from './components/Services'
import CaseStudy from './components/CaseStudy'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="w-full overflow-x-hidden bg-black">
      <Navbar />
      <Hero />
      <SocialProof />
      <Services />
      <CaseStudy />
      
      {/* <Process /> */}
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

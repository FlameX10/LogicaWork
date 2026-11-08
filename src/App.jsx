import { Routes, Route } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Approach from './pages/Approach.jsx'
import CaseStudies from './pages/CaseStudies.jsx'
import CaseStudyDetail from './pages/CaseStudyDetail.jsx'
import Manifesto from './pages/Manifesto.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import { Privacy, Terms } from './pages/Legal.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="approach" element={<Approach />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="manifesto" element={<Manifesto />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </MotionConfig>
  )
}

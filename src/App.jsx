import './App.css'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import InvisibleLeakage from './components/InvisibleLeakage'
import DangerZone from './components/DangerZone'
import TooLate from './components/TooLate'
import CostOfInaction from './components/CostOfInaction'
import IndianMarketRisk from './components/IndianMarketRisk'
import WhyToolsFailed from './components/WhyToolsFailed'
import ControlDefinition from './components/ControlDefinition'
import AIControlLayer from './components/AIControlLayer'
import RevenueLeakageAudit from './components/RevenueLeakageAudit'
import AuditDeliverables from './components/AuditDeliverables'
import PathToScale from './components/PathToScale'
import WhoThisIsFor from './components/WhoThisIsFor'
import WhySayingYesIsSafe from './components/WhySayingYesIsSafe'
import CaseStudyPreview from './components/CaseStudyPreview'
import CaseStudyPage from './components/CaseStudyPage'
import Footer from './components/Footer'

function App() {
  const initialHash = window.location.hash || ''
  const [showCaseStudies, setShowCaseStudies] = useState(initialHash.startsWith('#case-studies'))
  const [activeCaseStudyId, setActiveCaseStudyId] = useState(() => {
    const match = initialHash.match(/^#case-studies\/(\d+)$/)
    return match ? Number(match[1]) : null
  })

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || ''
      const isCaseStudies = hash.startsWith('#case-studies')
      const match = hash.match(/^#case-studies\/(\d+)$/)

      setShowCaseStudies(isCaseStudies)
      setActiveCaseStudyId(match ? Number(match[1]) : null)

      if (isCaseStudies) {
        setTimeout(() => window.scrollTo(0, 0), 0)
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    
    // Also check on initial load
    handleHashChange()
    
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  if (showCaseStudies) {
    return (
      <div className="w-full overflow-x-hidden bg-[#0a0a0a]">
        <Navbar />
        <CaseStudyPage onBack={() => {
          window.location.hash = ''
          setShowCaseStudies(false)
        }} initialCaseStudyId={activeCaseStudyId} />
        <Footer />
      </div>
    )
  }

  return (
    <div className="w-full overflow-x-hidden bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <InvisibleLeakage />
      <DangerZone />
      <TooLate />
      <CostOfInaction />
      <IndianMarketRisk />
      <WhyToolsFailed />
      <ControlDefinition />
      <AIControlLayer />
      <RevenueLeakageAudit />
      <AuditDeliverables />
      <PathToScale />
      <WhoThisIsFor />
      <WhySayingYesIsSafe />
      <CaseStudyPreview onViewCaseStudies={(studyId) => {
        window.location.hash = studyId ? `case-studies/${studyId}` : 'case-studies'
      }} />
      <Footer />
    </div>
  )
}

export default App

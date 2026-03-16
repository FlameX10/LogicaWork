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
  const [showCaseStudies, setShowCaseStudies] = useState(window.location.hash === '#case-studies')

  useEffect(() => {
    const handleHashChange = () => {
      const isCaseStudies = window.location.hash === '#case-studies'
      setShowCaseStudies(isCaseStudies)
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
        }} />
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
      <CaseStudyPreview onViewCaseStudies={() => {
        window.location.hash = 'case-studies'
      }} />
      <Footer />
    </div>
  )
}

export default App

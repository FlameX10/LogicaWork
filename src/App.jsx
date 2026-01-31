import './App.css'
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
import Footer from './components/Footer'

function App() {
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
      <Footer />
    </div>
  )
}

export default App

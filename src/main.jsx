import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { CASE_STUDIES } from './data/caseStudies.js'

// Old single-page site used hash URLs like /#case-studies/3 — send them to the new pages.
const legacy = window.location.hash.match(/^#case-studies(?:\/(\d+))?$/)
if (legacy) {
  const s = legacy[1] && CASE_STUDIES.find((c) => c.id === Number(legacy[1]))
  window.history.replaceState(null, '', s ? `/case-studies/${s.slug}` : '/case-studies')
}

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Pages are prerendered to static HTML at build time; hydrate when markup is present.
if (root.hasChildNodes() && !legacy) hydrateRoot(root, app)
else createRoot(root).render(app)

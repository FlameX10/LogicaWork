/* eslint-disable react-refresh/only-export-components */
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App.jsx'
import { getMeta, headHtml, ROUTES } from './data/seo.js'

export { ROUTES }

export function render(url) {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
  return { html, head: headHtml(getMeta(url)) }
}

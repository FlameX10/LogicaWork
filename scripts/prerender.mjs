// Static prerender: writes a real HTML file (content + per-page <head>) for every route,
// then generates sitemap.xml. Runs after the client + SSR builds.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const SITE = 'https://logicawork.com'

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const { render, ROUTES } = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href)

const page = (url) => {
  const { html, head } = render(url)
  return template.replace('<!--head-->', head).replace('<!--app-->', html)
}

for (const url of ROUTES) {
  // Flat files (/services -> services.html): Netlify serves these at the clean URL with no trailing-slash redirect
  const file = url === '/' ? path.join(dist, 'index.html') : path.join(dist, `${url.slice(1)}.html`)
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, page(url))
  console.log('prerendered', url)
}
fs.writeFileSync(path.join(dist, '404.html'), page('/__not-found__'))
console.log('prerendered 404.html')

const today = new Date().toISOString().slice(0, 10)
const prio = (u) => (u === '/' ? '1.0' : u.startsWith('/case-studies/') ? '0.7' : ['/privacy', '/terms'].includes(u) ? '0.3' : '0.9')
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map(
  (u) => `  <url>
    <loc>${SITE}${u === '/' ? '/' : u}</loc>
    <lastmod>${today}</lastmod>
    <priority>${prio(u)}</priority>
  </url>`,
).join('\n')}
</urlset>
`
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap)
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
console.log(`sitemap.xml written (${ROUTES.length} urls)`)

import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Serves POST /api/contact during `npm run dev` / `npm run preview` using the same
// handler as the Netlify Function, with SMTP settings read from .env
function contactApi(env) {
  const middleware = async (req, res, next) => {
    if (!req.url?.startsWith('/api/contact')) return next()
    try {
      const { handleContact } = await import('./server/email/contact-handler.js')
      const chunks = []
      for await (const c of req) chunks.push(c)
      const body = Buffer.concat(chunks)
      const request = new Request(`http://${req.headers.host}${req.url}`, {
        method: req.method,
        headers: req.headers,
        body: ['GET', 'HEAD'].includes(req.method) ? undefined : body,
      })
      const response = await handleContact(request, env, { ip: req.socket.remoteAddress })
      res.statusCode = response.status
      response.headers.forEach((v, k) => res.setHeader(k, v))
      res.end(await response.text())
    } catch (err) {
      next(err)
    }
  }
  return {
    name: 'contact-api',
    // (block bodies: returning a function from these hooks would register it as a post-hook)
    configureServer(server) {
      server.middlewares.use(middleware)
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware)
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(), tailwindcss(), contactApi(env)],
  }
})

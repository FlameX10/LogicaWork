// Netlify Function: POST /api/contact → sends the lead email over SMTP.
// Configure SMTP_USER / SMTP_PASS (and optionally the others in .env.example) in
// Netlify → Site configuration → Environment variables.
import { handleContact } from '../../server/email/contact-handler.js'

export default async (request, context) => handleContact(request, process.env, { ip: context?.ip })

export const config = { path: '/api/contact' }

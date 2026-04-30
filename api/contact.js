import pg from 'pg'
import nodemailer from 'nodemailer'

const pool = new pg.Pool({ connectionString: process.env.POSTGRES_URL })

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { name, email, phone, business_type, challenge } = req.body

  if (!name || !email || !business_type) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    await pool.query(
      `INSERT INTO surfaced_contact_submissions (name, email, phone, business_type, challenge)
       VALUES ($1, $2, $3, $4, $5)`,
      [name, email, phone || null, business_type, challenge || null]
    )

    await transporter.sendMail({
      from: `Surfaced Digital <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New inquiry: ${name} (${business_type})`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || 'not provided'}`,
        `Business type: ${business_type}`,
        `Challenge: ${challenge || 'not provided'}`,
      ].join('\n'),
    })

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Error:', err)
    return res.status(500).json({ error: 'Failed to save submission' })
  }
}

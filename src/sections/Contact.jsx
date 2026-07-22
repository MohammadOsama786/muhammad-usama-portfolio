import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import { site } from '../data/site'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') || '').trim()
    const email = String(form.get('email') || '').trim()
    const subject = String(form.get('subject') || '').trim()
    const message = String(form.get('message') || '').trim()

    if (!name || !email || !subject || !message) {
      setStatus('Please complete all fields before sending.')
      return
    }

    const mailSubject = encodeURIComponent(`${subject} — Portfolio enquiry from ${name}`)
    const mailBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    setStatus('Opening your email application…')
    window.location.href = `mailto:${site.email}?subject=${mailSubject}&body=${mailBody}`
  }

  return (
    <section className="section contact" id="contact">
      <div className="contact__glow" aria-hidden="true" />
      <div className="container">
        <SectionTitle
          eyebrow="Contact"
          title="Let’s build something useful together."
          description="Share the role, project goal, current challenge and expected timeline. I’ll respond with clear next steps."
          align="center"
        />

        <div className="contact__layout">
          <div className="contact__info" data-reveal>
            <div className="contact__intro">
              <span className="availability-pill"><i className="availability-pill__dot" /> Available for suitable opportunities</span>
              <h3>Start a professional conversation</h3>
              <p>I’m open to Android roles, freelance development, agency collaboration and selected digital projects.</p>
            </div>

            <div className="contact-list">
              <a href={`mailto:${site.email}`}><span aria-hidden="true">@</span><div><small>Email</small><strong>{site.email}</strong></div></a>
              <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer"><span aria-hidden="true">◉</span><div><small>WhatsApp</small><strong>{site.phone}</strong></div></a>
              <a href={site.linkedin} target="_blank" rel="noreferrer"><span aria-hidden="true">in</span><div><small>LinkedIn</small><strong>Professional profile</strong></div></a>
              <a href={site.github} target="_blank" rel="noreferrer"><span aria-hidden="true">GH</span><div><small>GitHub</small><strong>Code and projects</strong></div></a>
            </div>
          </div>

          <form className="contact-form glass-card" onSubmit={handleSubmit} data-reveal noValidate>
            <div className="form-row">
              <label>
                <span>Your name</span>
                <input name="name" type="text" placeholder="Name or company" autoComplete="name" />
              </label>
              <label>
                <span>Email address</span>
                <input name="email" type="email" placeholder="name@company.com" autoComplete="email" />
              </label>
            </div>
            <label>
              <span>What would you like to discuss?</span>
              <select name="subject" defaultValue="">
                <option value="" disabled>Select a topic</option>
                <option>Android job opportunity</option>
                <option>Freelance Android project</option>
                <option>Agency collaboration</option>
                <option>WordPress or marketing support</option>
                <option>Other professional enquiry</option>
              </select>
            </label>
            <label>
              <span>Project or opportunity details</span>
              <textarea name="message" rows="6" placeholder="Tell me about the requirement, timeline and the result you need." />
            </label>
            <button className="button button--full" type="submit">Send enquiry <span aria-hidden="true">↗</span></button>
            {status && <p className="form-status" role="status">{status}</p>}
            <small className="form-note">This free version opens your email application. Replace the placeholder email in <code>src/data/site.js</code>.</small>
          </form>
        </div>
      </div>
    </section>
  )
}

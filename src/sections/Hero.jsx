import { useEffect, useState } from 'react'
import { site } from '../data/site'

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((index) => (index + 1) % site.roles.length)
    }, 2600)
    return () => window.clearInterval(interval)
  }, [])

  return (
    <section className="hero section" id="home" aria-labelledby="hero-title">
      <div className="hero__glow hero__glow--one" aria-hidden="true" />
      <div className="hero__glow hero__glow--two" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />

      <div className="container hero__layout">
        <div className="hero__content" data-reveal>
          <div className="availability-pill">
            <span className="availability-pill__dot" aria-hidden="true" />
            {site.availability}
          </div>

          <p className="hero__eyebrow">Hello, I’m</p>
          <h1 id="hero-title">Muhammad <span>Usama</span></h1>
          <div className="hero__role" aria-live="polite">
            <span>I’m a</span>
            <strong key={site.roles[roleIndex]}>{site.roles[roleIndex]}</strong>
          </div>
          <p className="hero__summary">{site.summary}</p>

          <div className="hero__actions">
            <a className="button" href="#projects">View selected work <span aria-hidden="true">↗</span></a>
            <a className="button button--secondary" href="/documents/Muhammad_Usama_CV.pdf" download>
              Download resume <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="hero__socials" aria-label="Professional profiles">
            <a href={site.linkedin} target="_blank" rel="noreferrer"><span>in</span> LinkedIn</a>
            <a href={site.github} target="_blank" rel="noreferrer"><span>GH</span> GitHub</a>
            <a href={`mailto:${site.email}`}><span>@</span> Email</a>
          </div>
        </div>

        <div className="hero__visual" data-reveal>
          <div className="portrait-card">
            <div className="portrait-card__ring" />
            <div className="portrait-card__image">
              <img src="/images/profile/muhammad-usama.jpg" alt="Muhammad Usama" />
            </div>
            <div className="portrait-card__badge portrait-card__badge--top">
              <span aria-hidden="true">◆</span>
              <div><small>Primary focus</small><strong>Android</strong></div>
            </div>
            <div className="portrait-card__badge portrait-card__badge--bottom">
              <span aria-hidden="true">✓</span>
              <div><small>Available for</small><strong>Remote work</strong></div>
            </div>
            <div className="portrait-card__code" aria-hidden="true">
              <span>fun</span> buildIdea() {'{'}
              <br />&nbsp;&nbsp;return <b>impact</b>
              <br />{'}'}
            </div>
          </div>
        </div>
      </div>

      <div className="container hero__stats" data-reveal>
        {site.stats.map((stat) => (
          <div className="hero-stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>

      <a className="hero__scroll" href="#about" aria-label="Scroll to about section">
        <span>Scroll</span><i aria-hidden="true" />
      </a>
    </section>
  )
}

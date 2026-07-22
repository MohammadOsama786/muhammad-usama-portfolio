import SectionTitle from '../components/SectionTitle'

const principles = [
  { number: '01', title: 'Useful before flashy', text: 'Every screen and feature should make the product easier to understand and use.' },
  { number: '02', title: 'Clean, maintainable code', text: 'Reusable components and structured state reduce future cost and confusion.' },
  { number: '03', title: 'Clear communication', text: 'Progress, risks and next steps should always be understandable to the team or client.' },
]

export default function About() {
  return (
    <section className="section section--soft" id="about">
      <div className="container">
        <SectionTitle
          eyebrow="About me"
          title="Engineering with clarity. Designing with purpose."
          description="I combine mobile development, interface thinking and business awareness to create digital experiences that feel polished and practical."
        />

        <div className="about__layout">
          <article className="about__story glass-card" data-reveal>
            <p className="lead">
              I’m Muhammad Usama, an Android developer focused on modern native applications using Kotlin, Jetpack Compose, Firebase and REST APIs.
            </p>
            <p>
              I enjoy turning complex requirements into clear user flows, solving technical issues and refining products through thoughtful UI, dependable state management and careful testing. My project background includes authentication, ordering, notifications, local progress, mobile games and enterprise integrations.
            </p>
            <p>
              Alongside Android development, I support WordPress websites, content, advertising and creative campaigns. This wider digital experience helps me understand both the technical and commercial side of a product.
            </p>
            <div className="about__facts">
              <div><small>Based in</small><strong>Pakistan</strong></div>
              <div><small>Work style</small><strong>Remote & collaborative</strong></div>
              <div><small>Current focus</small><strong>Android & Compose</strong></div>
              <div><small>Languages</small><strong>English & Urdu</strong></div>
            </div>
          </article>

          <div className="about__principles">
            {principles.map((principle) => (
              <article className="principle-card" key={principle.number} data-reveal>
                <span>{principle.number}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </div>
              </article>
            ))}
            <a className="about__cta glass-card" href="#contact" data-reveal>
              <div>
                <small>Have a role or project?</small>
                <strong>Let’s discuss how I can contribute.</strong>
              </div>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

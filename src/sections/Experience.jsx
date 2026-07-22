import SectionTitle from '../components/SectionTitle'
import { education, experience } from '../data/experience'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionTitle
          eyebrow="Experience & education"
          title="Hands-on learning through products, clients and technical challenges."
          description="The experience below is written around verified project work. Update the education placeholder before deploying your final website."
        />

        <div className="experience-layout">
          <div>
            <h3 className="subsection-heading">Experience</h3>
            <div className="timeline">
              {experience.map((item) => (
                <article className="timeline-item" key={`${item.role}-${item.company}`} data-reveal>
                  <div className="timeline-item__marker" aria-hidden="true" />
                  <div className="timeline-item__card glass-card">
                    <div className="timeline-item__top">
                      <div>
                        <h4>{item.role}</h4>
                        <p>{item.company}</p>
                      </div>
                      <div className="timeline-item__meta">
                        <span>{item.period}</span>
                        <span>{item.location}</span>
                      </div>
                    </div>
                    <p>{item.description}</p>
                    <ul>
                      {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div id="education">
            <h3 className="subsection-heading">Education</h3>
            <div className="education-stack">
              {education.map((item) => (
                <article className={`education-card glass-card ${item.placeholder ? 'education-card--placeholder' : ''}`} key={item.degree} data-reveal>
                  <div className="education-card__icon" aria-hidden="true">🎓</div>
                  <h4>{item.degree}</h4>
                  <p className="education-card__institute">{item.institute}</p>
                  <div className="education-card__meta"><span>{item.period}</span><span>{item.location}</span></div>
                  <p>{item.description}</p>
                </article>
              ))}

              <article className="learning-card" data-reveal>
                <span aria-hidden="true">∞</span>
                <div>
                  <small>Continuous learning</small>
                  <strong>Android architecture, accessibility, performance and product design.</strong>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className={`project-card glass-card ${project.featured ? 'project-card--featured' : ''}`} data-reveal>
      <div className="project-card__image-wrap">
        <img src={project.image} alt={`${project.title} project preview`} loading="lazy" />
        <span className="project-card__category">{project.category}</span>
        {project.privateProject && <span className="project-card__private">Private code</span>}
      </div>

      <div className="project-card__body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="chip-list project-card__tech">
          {project.technologies.map((technology) => (
            <span className="chip chip--small" key={technology}>{technology}</span>
          ))}
        </div>

        {expanded && (
          <div className="project-card__details" id={`project-details-${project.id}`}>
            <div>
              <strong>Challenge</strong>
              <p>{project.challenge}</p>
            </div>
            <div>
              <strong>Solution</strong>
              <p>{project.solution}</p>
            </div>
          </div>
        )}

        <div className="project-card__actions">
          <button
            className="text-button"
            type="button"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
            aria-controls={`project-details-${project.id}`}
          >
            {expanded ? 'Hide case study' : 'View case study'}
          </button>
          <div className="project-card__links">
            {project.links.demo && <a href={project.links.demo}>Demo</a>}
            {project.links.code && <a href={project.links.code} target="_blank" rel="noreferrer">Code</a>}
          </div>
        </div>
      </div>
    </article>
  )
}

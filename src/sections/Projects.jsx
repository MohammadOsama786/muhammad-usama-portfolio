import { useMemo, useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const filters = ['All', 'Android', 'Web & Marketing', 'Creative']

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const visibleProjects = useMemo(
    () => filter === 'All' ? projects : projects.filter((project) => project.category === filter),
    [filter],
  )

  return (
    <section className="section section--soft" id="projects">
      <div className="container">
        <div className="projects__head">
          <SectionTitle
            eyebrow="Selected work"
            title="Projects designed around real product needs."
            description="A mix of Android engineering, business systems and digital creative work. Replace demonstration links with your live GitHub, Play Store or case-study URLs."
          />
          <div className="filter-tabs" role="group" aria-label="Filter projects">
            {filters.map((item) => (
              <button
                type="button"
                key={item}
                className={filter === item ? 'is-active' : ''}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid" aria-live="polite">
          {visibleProjects.map((project) => <ProjectCard project={project} key={project.id} />)}
        </div>
      </div>
    </section>
  )
}

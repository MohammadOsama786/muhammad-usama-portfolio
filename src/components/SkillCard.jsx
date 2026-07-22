export default function SkillCard({ group }) {
  return (
    <article className="skill-card glass-card" data-reveal>
      <div className="skill-card__icon" aria-hidden="true">{group.icon}</div>
      <h3>{group.title}</h3>
      <p>{group.description}</p>
      <div className="chip-list" aria-label={`${group.title} skills`}>
        {group.skills.map((skill) => (
          <span className="chip" key={skill}>{skill}</span>
        ))}
      </div>
    </article>
  )
}

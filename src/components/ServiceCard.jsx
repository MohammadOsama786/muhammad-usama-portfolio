export default function ServiceCard({ service }) {
  return (
    <article className="service-card glass-card" data-reveal>
      <div className="service-card__icon" aria-hidden="true">{service.icon}</div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <ul>
        {service.deliverables.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <a className="text-link" href="#contact" aria-label={`Discuss ${service.title}`}>
        Discuss this service <span aria-hidden="true">↗</span>
      </a>
    </article>
  )
}

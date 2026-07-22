export default function SectionTitle({ eyebrow, title, description, align = 'left' }) {
  return (
    <header className={`section-title section-title--${align}`} data-reveal>
      {eyebrow && <p className="section-title__eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p className="section-title__description">{description}</p>}
    </header>
  )
}

import { site } from '../data/site'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <a className="brand footer__brand" href="#home">
            <span className="brand__mark">{site.shortName}</span>
            <span className="brand__text"><strong>Muhammad</strong><small>Usama</small></span>
          </a>
          <p>Building useful products with clear thinking, careful engineering and human-focused design.</p>
        </div>
        <div className="footer__links">
          <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={site.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={`mailto:${site.email}`}>Email</a>
          <a href="/documents/Muhammad_Usama_CV.pdf" download>Resume</a>
        </div>
      </div>
      <div className="container footer__bottom">
        <small>© {new Date().getFullYear()} Muhammad Usama. Built with React and deployed free.</small>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  )
}

import SectionTitle from '../components/SectionTitle'
import { certificates } from '../data/certificates'

export default function Certificates() {
  return (
    <section className="section" id="certificates">
      <div className="container">
        <SectionTitle
          eyebrow="Credentials"
          title="Verified learning and professional development."
          description="Add only certificates that can be verified and that support your target Android, web or marketing roles."
        />

        {certificates.length ? (
          <div className="certificates-grid">
            {certificates.map((certificate) => (
              <a className="certificate-card glass-card" key={certificate.title} href={certificate.url} target="_blank" rel="noreferrer" data-reveal>
                <img src={certificate.image} alt="" loading="lazy" />
                <div><h3>{certificate.title}</h3><p>{certificate.issuer}</p><span>{certificate.date}</span></div>
              </a>
            ))}
          </div>
        ) : (
          <div className="certificates-empty glass-card" data-reveal>
            <div className="certificates-empty__icon" aria-hidden="true">✦</div>
            <div>
              <h3>Certificate showcase is ready</h3>
              <p>Add your verified certificate images to <code>public/images/certificates</code>, then update <code>src/data/certificates.js</code>. This section will automatically turn into a responsive certificate gallery.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

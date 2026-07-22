import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'

export default function Services() {
  return (
    <section className="section section--soft" id="services">
      <div className="container">
        <SectionTitle
          eyebrow="Services"
          title="Practical support from product idea to polished delivery."
          description="Focused service areas for companies, agencies and founders. Scope, timing and deliverables are agreed before work begins."
          align="center"
        />
        <div className="services-grid">
          {services.map((service) => <ServiceCard service={service} key={service.title} />)}
        </div>
      </div>
    </section>
  )
}

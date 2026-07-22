import SectionTitle from '../components/SectionTitle'
import SkillCard from '../components/SkillCard'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionTitle
          eyebrow="Skills & toolkit"
          title="A focused technical core with wider digital capability."
          description="My strongest area is Android development, supported by API integration, design awareness and practical marketing experience."
          align="center"
        />
        <div className="skills-grid">
          {skillGroups.map((group) => <SkillCard group={group} key={group.title} />)}
        </div>
      </div>
    </section>
  )
}

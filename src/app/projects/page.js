import ProjectsSection from '@/components/Projects'
import ContactCTA from '@/components/ContactCTA'

export const metadata = {
  title: 'Projects | Master Sahil',
  description: 'A selection of my recent works and deployments.',
}

export default function Projects() {
  return (
    <>
        <ProjectsSection />
        <ContactCTA />
    </>
  )
}

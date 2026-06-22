import ContactCTA from '@/components/ContactCTA'
import Deliver from '@/components/Deliver'
import DigitalArsenal from '@/components/DigitalArsenal'
import EducationTimeline from '@/components/EducationTimeline'
import Hero from '@/components/Hero'
import SkillTree from '@/components/SkillTree'
import RecentProjects from '@/components/RecentProject'

export default function Home() {
  return (
    <>
        <Hero />
        <DigitalArsenal />
        <RecentProjects />
        <SkillTree />
        <Deliver />
        <EducationTimeline />
        <ContactCTA />
    </>
  )
}

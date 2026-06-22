import ContactComponent from '@/components/ContactComponent'
import ContactCTA from '@/components/ContactCTA'

export const metadata = {
  title: 'Contact | Master Sahil',
  description: 'Get in touch with me for your next project.',
}

export default function ContactPage() {
  return (
    <>
        <ContactComponent />
        <ContactCTA />
    </>
  )
}

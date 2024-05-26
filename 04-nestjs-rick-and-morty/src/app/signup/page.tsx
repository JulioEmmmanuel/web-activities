import { SignupForm } from '@/components/ui/molecules/SignupForm'
import { PageTemplate } from '@/components/ui/organisms/PageTemplate'

export default function Signup() {
  return (
    <PageTemplate
      titleLinks={['Personajes', 'Acerca de']}
      urlLinks={['/', '/about']}
    >
      <SignupForm />
    </PageTemplate>
  )
}

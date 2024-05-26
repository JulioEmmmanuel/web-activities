import { LoginForm } from '@/components/ui/molecules/LoginForm'
import { PageTemplate } from '@/components/ui/organisms/PageTemplate'

export default function Login() {
  return (
    <PageTemplate
      titleLinks={['Personajes', 'Acerca de']}
      urlLinks={['/', '/about']}
    >
      <LoginForm />
    </PageTemplate>
  )
}

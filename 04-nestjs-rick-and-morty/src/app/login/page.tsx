import { LoginForm } from '@/components/ui/molecules/LoginForm'
import { PageTemplate } from '@/components/ui/organisms/PageTemplate'
import { Suspense } from 'react'

export default function Login() {
  return (
    <PageTemplate
      titleLinks={['Personajes', 'Acerca de']}
      urlLinks={['/', '/about']}
    >
      <Suspense>
        <LoginForm />
      </Suspense>
    </PageTemplate>
  )
}

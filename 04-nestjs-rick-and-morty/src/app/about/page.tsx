import { auth } from '@/auth'
import { FormPage } from '@/components/ui/organisms/FormPage'
import { PageTemplate } from '@/components/ui/organisms/PageTemplate'

export default async function AboutPage() {
  const session = await auth()

  return (
    <PageTemplate
      titleLinks={
        session ? ['Personajes', 'Favoritos'] : ['Personajes', 'Iniciar sesión']
      }
      urlLinks={session ? ['/', '/favorites'] : ['/', '/login']}
    >
      <FormPage />
    </PageTemplate>
  )
}

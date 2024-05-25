import { FormPage } from '@/components/ui/organisms/FormPage'
import { PageTemplate } from '@/components/ui/organisms/PageTemplate'

export default async function AboutPage() {
  return (
    <PageTemplate
      titleLinks={['Todos los personajes', 'Favoritos']}
      urlLinks={['/', '/favorites']}
    >
      <FormPage />
    </PageTemplate>
  )
}

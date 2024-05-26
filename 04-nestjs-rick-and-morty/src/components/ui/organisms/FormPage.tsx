import { AboutForm } from '../molecules/AboutForm'

export function FormPage() {
  return (
    <div className='mt-20 text-center'>
      <h2 className='mt-5 text-2xl font-bold'>Rick y Morty NextJS</h2>
      <p className='mt-3'>Déjanos tus comentarios</p>
      <AboutForm />
    </div>
  )
}

'use client'

import { useFormState } from 'react-dom'
import { Button } from '../atoms/Button'
import { TextAreaBlock } from './TextAreaBlock'
import { TextInputLine } from './TextInputLine'
import sendComment from '@/actions/sendComment'
import { FormMessage } from '../atoms/FormMessage'

export function AboutForm() {
  const [formState, action] = useFormState(sendComment, {
    message: '',
    error: false,
  })

  return (
    <form
      action={action}
      name='comments'
      className='mx-auto my-5 flex w-fit flex-col items-baseline border border-gray-300 p-10 shadow-md *:mb-3'
    >
      <span className='my-5 w-full text-center text-xl font-bold'>
        Comentarios
      </span>

      <TextInputLine title='Nombre' name='name' placeholder='Nombre' />

      <TextInputLine title='Tema' name='topic' placeholder='Tema' />

      <TextAreaBlock
        title='Comentarios'
        name='comment'
        placeholder='Ingresa un comentario'
      />

      <Button text='Enviar' />

      <FormMessage error={formState.error} message={formState.message} />
    </form>
  )
}

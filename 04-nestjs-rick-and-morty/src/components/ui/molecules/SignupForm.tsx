'use client'

import { useFormState } from 'react-dom'
import { Button } from '../atoms/Button'
import { TextInputLine } from './TextInputLine'
import { FormMessage } from '../atoms/FormMessage'
import { PasswordInputLine } from './PasswordInputLine'
import Link from 'next/link'
import signUp from '@/actions/signup'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'

export function SignupForm() {
  const router = useRouter()

  const [formState, action] = useFormState(signUp, {
    message: '',
    error: false,
  })

  useEffect(() => {
    if (formState.message === 'OK') {
      Swal.fire({
        title: 'Éxito',
        icon: 'success',
        text: 'Has creado una cuenta con éxito, ahora puedes iniciar sesión',
      }).then((res) => {
        if (res.isConfirmed) {
          router.push('/')
        }
      })
    }
  })

  return (
    <form
      action={action}
      name='signup'
      className='mx-auto mt-20 flex w-fit flex-col items-baseline border border-gray-300 bg-white p-10 shadow-md *:mb-3'
    >
      <span className='my-5 w-full text-center text-xl font-bold'>
        Regístrate
      </span>

      <TextInputLine
        title='Nombre de usuario'
        name='username'
        placeholder='Nombre'
      />
      <PasswordInputLine
        title='Contraseña'
        name='password'
        placeholder='Contraseña'
      />

      <Button text='Regístrate' />

      <div className='w-full text-center'>
        <p className='mt-3 font-bold'>¿Ya tienes una cuenta?</p>
        <Link
          href='/login'
          className='mt-2 font-bold text-emerald-600 hover:text-emerald-800'
        >
          Iniciar sesión
        </Link>
      </div>

      <FormMessage error={formState.error} message={formState.message} />
    </form>
  )
}

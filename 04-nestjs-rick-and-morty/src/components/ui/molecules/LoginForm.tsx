'use client'

import { Button } from '../atoms/Button'
import { TextInputLine } from './TextInputLine'
import { PasswordInputLine } from './PasswordInputLine'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { FormMessage } from '../atoms/FormMessage'
import { useSearchParams } from 'next/navigation'

export function LoginForm() {
  const searchParams = useSearchParams()

  const [error, setError] = useState('')

  useEffect(() => {
    if (searchParams.get('error')) {
      setError('Credencales inválidas')
    }
  }, [searchParams])

  const login = async (formData: FormData) => {
    try {
      await signIn('credentials', {
        username: formData.get('username'),
        password: formData.get('password'),
        callbackUrl: '/characters',
      })
    } catch (error) {
      setError('Credenciales inválidas')
    }
  }

  return (
    <form
      action={login}
      name='login'
      className='mx-auto mt-20 flex w-fit flex-col items-baseline border border-gray-300 bg-white p-10 shadow-md *:mb-3'
    >
      <span className='my-5 w-full text-center text-xl font-bold'>
        Iniciar sesión
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

      <Button text='Iniciar sesión' />

      <div className='w-full text-center'>
        <p className='mt-3 font-bold'>¿No tienes una cuenta aún?</p>
        <Link
          href='/signup'
          className='mt-2 font-bold text-emerald-600 hover:text-emerald-800'
        >
          Regístrate
        </Link>
      </div>

      {error != '' && <FormMessage error={true} message={error} />}
    </form>
  )
}

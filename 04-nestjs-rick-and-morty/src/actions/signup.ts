'use server'

import { createUser, getUserByUsername } from '@/data/users'
import { FormState } from '@/types/FormState'
import { signupSchema } from '@/schemas/signupschema'

export default async function signUp(
  formState: FormState,
  formData: FormData,
) {

    const validatedFields = signupSchema.safeParse({
        username: formData.get('username'),
        password: formData.get('password')
    })

    if (!validatedFields.success) {
        return {
            message: validatedFields.error.errors[0].message,
            error: true,
        }
    } 

    const existingUser = await getUserByUsername(formData.get('username')!.toString())

    if(existingUser){
        return {
            message: 'Este nombre de usuario ya se encuentra registrado',
            error: true, 
        }
    }

    const username = formData.get('username')!.toString();
    const password = formData.get('password')!.toString()

    const res = await createUser({
        username,
        password
    })

    if(res?.username){
        return {
            message: 'OK',
            error: false, 
        }
    } else {
        return {
            message: 'Ocurrió un error al crear la cuenta',
            error: true, 
        }
    }

}

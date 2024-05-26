import { z } from "zod";

export const signupSchema = z.object({
    username: z
      .string({ required_error: 'El nombre es requerido' })
      .min(3, {
        message: 'El nombre es requerido',
      }),
    password: z
      .string({ required_error: 'El tema es requerido' })
      .min(8, {
        message: 'La contraseña debe contener al menos 8 caracteres',
      })
      .max(32, {
          message: 'La contraseña debe contener menos de 32 caracteres',
      })
})

export type SignupPayload = z.infer<typeof signupSchema>

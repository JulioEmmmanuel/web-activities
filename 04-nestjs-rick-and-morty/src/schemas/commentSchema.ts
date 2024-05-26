import { z } from "zod"

export const commentSchema = z.object({
    name: z
      .string({
        invalid_type_error: 'El nombre debe ser un string',
        required_error: 'El nombre es requerido',
      })
      .min(3, {
        message: 'El nombre debe contener al menos 3 caracteres',
      }),
    topic: z
      .string({
        invalid_type_error: 'El tema debe ser un string',
        required_error: 'El tema es requerido',
      })
      .min(3, {
        message: 'El tema debe contener al menos 3 caracteres',
      }),
    comment: z
      .string({
        invalid_type_error: 'El comentario debe ser un string',
      })
      .optional(),
  })
  
  export type CommentPayload = z.infer<typeof commentSchema>
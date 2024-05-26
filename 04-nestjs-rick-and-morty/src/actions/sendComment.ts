'use server'

import { commentSchema } from '@/schemas/commentSchema'
import { FormState } from '@/types/FormState'

export default async function sendComment(
  formState: FormState,
  formData: FormData,
) {
  const validatedFields = commentSchema.safeParse({
    name: formData.get('name'),
    topic: formData.get('topic'),
    comment: formData.get('comment'),
  })

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.errors[0].message,
      error: true,
    }
  } else {
    return {
      message: 'Se ha enviado el comentario',
      error: false,
    }
  }
}

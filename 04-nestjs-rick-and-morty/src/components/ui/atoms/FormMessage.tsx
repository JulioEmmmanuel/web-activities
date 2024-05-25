interface FormMessageProps {
  error: boolean
  message: string
}

export function FormMessage({ error, message }: FormMessageProps) {
  return (
    <span className={error ? 'text-red-500' : 'text-black'}>{message}</span>
  )
}

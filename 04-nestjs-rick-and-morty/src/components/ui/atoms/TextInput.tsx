interface TextInputProps {
  name: string
  placeholder: string
}

export function TextInput({ name, placeholder }: TextInputProps) {
  return (
    <input
      id={name}
      className='border border-gray-300 px-2'
      name={name}
      type='text'
      required
      placeholder={placeholder}
    />
  )
}

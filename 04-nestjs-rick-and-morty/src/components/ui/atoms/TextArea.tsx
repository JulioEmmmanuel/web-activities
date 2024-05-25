interface TextAreaProps {
  name: string
  placeholder: string
}

export function TextArea({ name, placeholder }: TextAreaProps) {
  return (
    <textarea
      className='w-full border border-gray-300 px-3 py-2'
      name={name}
      id={name}
      placeholder={placeholder}
    />
  )
}

import { PasswordInput } from "../atoms/PasswordInput"

interface PasswordInputLineProps {
  title: string
  name: string
  placeholder: string
}

export function PasswordInputLine({
  title,
  name,
  placeholder,
}: PasswordInputLineProps) {
  return (
    <div className='mt-3 flex w-full justify-between gap-x-5'>
      <label htmlFor={title}>{title}</label>
      <PasswordInput name={name} placeholder={placeholder} />
    </div>
  )
}

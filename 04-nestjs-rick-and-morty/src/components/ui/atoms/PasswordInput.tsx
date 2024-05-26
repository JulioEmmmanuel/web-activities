interface PasswordInputProps {
    name: string
    placeholder: string
  }
  
  export function PasswordInput({ name, placeholder }: PasswordInputProps) {
    return (
      <input
        id={name}
        className='border border-gray-300 px-2'
        name={name}
        type='password'
        required
        placeholder={placeholder}
      />
    )
  }
  
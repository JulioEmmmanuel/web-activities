import { PropsWithChildren } from 'react'

export function CharacterList({ children }: PropsWithChildren) {
  return (
    <div className='flex flex-wrap content-center items-center justify-around gap-x-5 gap-y-10 py-10'>
      {children}
    </div>
  )
}

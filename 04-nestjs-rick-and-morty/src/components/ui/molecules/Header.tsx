import Link from 'next/link'

interface HeaderProps {
  titles: string[]
  urls: string[]
}

export function Header({ titles, urls }: HeaderProps) {
  return (
    <header className='flex h-36 w-full items-center justify-end bg-teal-600'>
      {titles.map((title, index) => (
        <Link
          key={title}
          className='mr-16 font-bold text-white'
          href={urls[index]}
        >
          {title}
        </Link>
      ))}
    </header>
  )
}

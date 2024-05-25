interface CardTitleProps {
  title: string
}

export function CardTitle({ title }: CardTitleProps) {
  return <h3 className='text-lg font-bold hover:text-gray-300'>{title}</h3>
}

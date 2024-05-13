import { PropsWithChildren } from 'react'
import { Header } from '@/components/ui/molecules/Header'

interface PageTemplateProps {
    titleLink: string
    urlLink: string
}

export function PageTemplate({ 
    titleLink,
    urlLink,
    children 
}: PropsWithChildren<PageTemplateProps>) {
  return (
    <main className="my-0 min-h-screen w-full bg-white">
        <Header
            title={titleLink}
            url={urlLink}
        />
        {children}
    </main>
  )
}